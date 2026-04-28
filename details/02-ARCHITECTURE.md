# Udyara: System Architecture & Data Flow

## System Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│                    USER LAYER                                │
│          (React Web Interface - Chat UI)                    │
└────────────────────────────┬─────────────────────────────────┘
                             │
                    HTTP POST /ask
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│              BACKEND API LAYER (FastAPI)                    │
│                                                              │
│  ├─ CORS Middleware (enable frontend-backend communication) │
│  ├─ /health endpoint (server status check)                  │
│  └─ /ask endpoint (receives question, returns answer)      │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│              RAG PIPELINE LAYER                             │
│                                                              │
│  Step 1: RETRIEVAL                                          │
│  ├─ User question sent to Retriever                         │
│  ├─ Retriever converts question to semantic vector          │
│  │  (using Sentence-Transformers)                           │
│  └─ Query FAISS vector store for similar documents          │
│                                                              │
│  Step 2: CONTEXT AGGREGATION                               │
│  ├─ Retrieve top-K most similar policy chunks               │
│  └─ Combine them into context string                        │
│                                                              │
│  Step 3: LLM SYNTHESIS                                      │
│  ├─ Send context + question to Gemini API                   │
│  └─ Gemini generates answer based on context                │
│                                                              │
│  Step 4: SOURCE EXTRACTION                                  │
│  ├─ Extract metadata (source file, page number)             │
│  └─ Format sources for frontend display                     │
└────────────────────────────┬─────────────────────────────────┘
                             │
              Response (answer + sources)
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│              KNOWLEDGE BASE LAYER                           │
│                                                              │
│  DATA SOURCE: Government Policy PDFs                        │
│       │                                                      │
│       ▼                                                      │
│  PROCESSING: Text extraction & chunking                     │
│       │                                                      │
│       ▼                                                      │
│  EMBEDDING: Sentence-Transformers model                     │
│  (converts text chunks into 384-dimensional vectors)        │
│       │                                                      │
│       ▼                                                      │
│  STORAGE: FAISS Vector Database                             │
│  (vectorstore/index.faiss - persisted on disk)              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Detailed Data Flow

### Phase 1: Initialization (One-Time)

```
1. PDF INGESTION
   └─ raw PDFs (backend/app/data/) 
      └─ read + extract text content

2. TEXT CHUNKING
   └─ split documents into 512-character chunks with overlap
      └─ ensures context continuity

3. EMBEDDING GENERATION
   └─ each chunk → Sentence-Transformers model
      └─ produces 384-dimensional semantic vector

4. VECTOR STORAGE
   └─ all embeddings + metadata → FAISS index
      └─ persisted to disk (vectorstore/index.faiss)
```

### Phase 2: Query Processing (Per User Question)

```
USER ASKS: "Am I eligible for Stand-Up India as a woman founder?"

        │
        ▼
1. QUESTION EMBEDDING
   └─ FastAPI receives question
   └─ same Sentence-Transformers model converts question to vector
   └─ produces 384-dimensional semantic vector

        │
        ▼
2. SEMANTIC SIMILARITY SEARCH
   └─ FAISS performs fast similarity search
   └─ finds K-most similar chunks from knowledge base
   └─ ranked by cosine similarity score

        │
        ▼
3. CONTEXT RETRIEVAL
   └─ top-K chunks extracted from vector store
   └─ each chunk includes metadata (source file, page)

        │
        ▼
4. CONTEXT AGGREGATION
   └─ combine top chunks into single context string
   └─ format: "Policy Context:\n[chunk1]\n\n[chunk2]..."

        │
        ▼
5. LLM PROMPT CONSTRUCTION
   └─ system prompt: "You are Udyara, a policy intelligence agent..."
   └─ append policy context
   └─ append user question

        │
        ▼
6. API CALL TO GEMINI
   └─ send prompt to Gemini 2.5 Flash model
   └─ Gemini synthesizes answer using context
   └─ returns natural language response

        │
        ▼
7. RESPONSE FORMATTING
   └─ extract answer from Gemini response
   └─ deduplicate and format sources
   └─ return JSON: {answer, sources, status}

        │
        ▼
RESPONSE SENT TO FRONTEND
   └─ display answer in chat UI
   └─ show source links for verification
```

---

## Component Interaction

### Backend Components

**1. FastAPI Application (`app/main.py`)**
- HTTP server that handles frontend requests
- CORS middleware for cross-origin communication
- Endpoint `/ask` processes user questions
- Uses asyncio to run blocking RAG operations in thread pool

**2. Agent Logic (`app/agent.py`)**
- Core brain of the system
- Orchestrates RAG pipeline:
  1. Calls retriever to get relevant docs
  2. Formats context
  3. Calls Gemini API
  4. Extracts sources
- Contains system prompt that guides Gemini behavior

**3. Retriever (`app/rag/retriever.py`)**
- Loads pre-computed FAISS index
- Converts input question to embedding using Sentence-Transformers
- Performs similarity search on FAISS vector store
- Returns top-K relevant document chunks

**4. PDF Ingest (`app/rag/ingest.py`)**
- Processes PDF files from `app/data/` folder
- Chunks text into overlapping segments
- Generates embeddings for each chunk
- Builds and saves FAISS index to disk

**5. Configuration (`app/config.py`)**
- Stores API keys, model names, settings
- Centralizes constants (chunk size, top-K retrieval, etc.)

### Frontend Components

**1. Chat Interface (`src/pages/Agent.jsx`)**
- React component for chat UI
- Sends questions via `api.js` service
- Displays answers and sources

**2. API Service (`src/services/api.js`)**
- Calls `/ask` endpoint
- Handles requests/responses
- Error handling

---

## Key Design Decisions

### Why Chunking?
- PDFs are large; retrieving entire documents is slow and noisy
- Chunking splits content into semantically coherent pieces
- Enables precise matching of user questions to relevant sections

### Why FAISS?
- FAISS is a vector similarity search library
- Optimized for searching millions of embeddings efficiently
- Enables instant semantic search (vs. scanning all documents)
- Works locally; no external dependency

### Why Sentence-Transformers?
- Produces high-quality semantic embeddings
- Lightweight and runs on CPU
- Pre-trained on general English text
- 384-dimensional vectors capture semantic meaning

### Why Gemini API (not local LLM)?
- Quality of responses is critical for policy guidance
- Gemini 2.5 Flash is fast and cost-effective
- Keeps complexity low; no need to host large models
- Trade-off: requires API key and internet connection

### Why RAG (vs. Fine-tuning)?
- Fine-tuning requires labeled training data (expensive)
- RAG uses existing documents as knowledge source
- Responses are grounded in official policies (trustworthy)
- No hallucinations; answers only from retrieved context

---

## Information Flow Example

```
INPUT: "What documents do I need to apply for Stand-Up India?"

Step 1: Convert question to vector
        ↓
        [0.23, -0.41, 0.15, ..., 0.89]  (384 dimensions)

Step 2: FAISS finds similar vectors in index
        ↓
        - Chunk A (source: guidelines.pdf, page: 5): "Application requires..."
        - Chunk B (source: guidelines.pdf, page: 6): "Documents needed..."
        - Chunk C (source: guidelines.pdf, page: 7): "Process..."

Step 3: Create context from retrieved chunks
        ↓
        Policy Context:
        "Application requires:
        - Pan Card
        - Aadhar
        - Business plan
        - Bank statements..."

Step 4: Call Gemini with context + question
        ↓
        System: You are Udyara, a policy intelligence agent...
        Context: [above]
        Question: What documents do I need?

Step 5: Gemini generates answer
        ↓
        "Based on Stand-Up India guidelines, you'll need:
        1. PAN Card
        2. Aadhar Card
        3. Business Plan
        4. Bank Statements
        5. Proof of Gender (for women-founder verification)"

Step 6: Format response with sources
        ↓
        {
          "answer": "Based on Stand-Up India...",
          "sources": [
            {
              "title": "Stand-Up India Official Guidelines",
              "url": "https://www.standupmitra.in",
              "page": 6
            }
          ],
          "status": "success"
        }

OUTPUT: User sees answer + source link in chat UI
```

---

## Performance Characteristics

| Operation | Time | Notes |
|-----------|------|-------|
| Question Embedding | 50-100ms | Sentence-Transformers on CPU |
| FAISS Similarity Search | 10-50ms | Fast vector search |
| Gemini API Call | 1-3 seconds | Network + LLM processing |
| Total Query Time | **< 5 seconds** | End-to-end response time |

---

## Scalability Considerations

**Current:**
- Single PDF index (Stand-Up India)
- Fits in memory on standard laptop
- Handles 1000s of queries efficiently

**To Scale:**
- Multiple policy PDFs: Re-run ingest, combine indices
- Distributed FAISS: Use FAISS partitioning for massive indexes
- Caching: Cache frequent queries to reduce API calls
- Batch Processing: Process queries in batches for higher throughput

---

## Error Handling

1. **Empty Query**: FastAPI validates and rejects
2. **Retrieval Failure**: System returns "Not mentioned in policy"
3. **API Timeout**: Graceful error message to user
4. **Source Extraction Failure**: Sources still returned (may be incomplete)

---

## Next: Read `03-TECH-STACK.md` for detailed component explanations
