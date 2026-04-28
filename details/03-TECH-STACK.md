# Udyara: Technology Stack Breakdown

## High-Level Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React + Vite | User interface (chat UI) |
| **Backend API** | FastAPI + Uvicorn | REST API server |
| **NLP/Embeddings** | Sentence-Transformers | Convert text to semantic vectors |
| **Vector Database** | FAISS | Store and retrieve embeddings |
| **PDF Processing** | PyPDF | Extract text from PDFs |
| **LLM** | Gemini 2.5 API | Answer synthesis |
| **Framework** | LangChain | RAG pipeline orchestration |
| **Styling** | Tailwind CSS | Frontend styling |

---

## Backend Technologies

### 1. FastAPI (`requirements.txt: fastapi`)

**What it is:**
- Modern Python web framework
- Automatically generates API documentation
- Supports async/await for concurrent requests

**What it does in Udyara:**
- Serves REST API endpoints (`/health`, `/ask`)
- Handles incoming questions from React frontend
- Returns answers with sources
- CORS middleware enables frontend-backend communication

**Why FastAPI?**
- Fast performance (compared to Flask, Django)
- Built-in type validation
- Auto-documentation
- Perfect for lightweight APIs

```
Request flow:
Frontend → POST /ask (question) → FastAPI → Process → Return answer
```

---

### 2. Uvicorn (`requirements.txt: uvicorn`)

**What it is:**
- ASGI (Asynchronous Server Gateway Interface) server
- Runs the FastAPI application

**What it does in Udyara:**
- Listens on `http://localhost:8000`
- Handles incoming HTTP requests
- Manages connection lifecycle
- Enables asynchronous request handling

**Command:**
```bash
uvicorn app.main:app --reload
```

---

### 3. LangChain (`requirements.txt: langchain, langchain-community, langchain-text-splitters`)

**What it is:**
- Framework for building RAG and LLM applications
- Handles document loading, splitting, embedding, retrieval

**What it does in Udyara:**
- Document loading and chunking
- Vector store integration
- Prompt management
- Chain orchestration (though we use custom implementation mostly)

**Key components used:**
- Document loaders (for PDFs)
- Text splitters (for chunking)
- Vector stores (FAISS integration)

---

### 4. Sentence-Transformers (`requirements.txt: sentence-transformers`)

**What it is:**
- Pre-trained deep learning model
- Converts text into semantic vector embeddings

**What it does in Udyara:**
- Converts policy document chunks into 384-dimensional vectors
- Converts user questions into vectors
- Enables semantic similarity matching

**How it works:**
```
Text Input: "What is eligibility?"
     ↓
Sentence-Transformers Model
     ↓
Vector Output: [0.23, -0.41, 0.15, ..., 0.89]  (384 numbers)
```

**Why embeddings?**
- Captures semantic meaning, not just keywords
- Question "eligibility criteria" matches document "who is eligible?" 
- Enables fast similarity search

**Models used:**
- `all-MiniLM-L6-v2` or similar (common choice)
- Runs on CPU
- ~70MB size

---

### 5. FAISS (Facebook AI Similarity Search) (`requirements.txt: faiss-cpu`)

**What it is:**
- Vector database for efficient similarity search
- Developed by Meta/Facebook AI Research

**What it does in Udyara:**
- Stores all policy document embeddings (vectors)
- Performs fast similarity search on queries
- Persisted on disk as `vectorstore/index.faiss`

**How it works:**
```
Query Vector: [0.23, -0.41, 0.15, ..., 0.89]
     ↓
FAISS Index (contains 1000s of policy vectors)
     ↓
Fast Similarity Search (returns K-most similar)
     ↓
Top-K Results: [Chunk A, Chunk B, Chunk C, ...]
```

**Why FAISS?**
- **Speed**: Can search millions of vectors in milliseconds
- **Memory efficient**: Compressed representations
- **Local**: Runs on your machine (no external service)
- **No hallucination**: Only returns existing documents

**File Location:**
- `backend/app/vectorstore/index.faiss` - persisted index
- Rebuilt when new PDFs are ingested

---

### 6. PyPDF (`requirements.txt: pypdf`)

**What it is:**
- Python library for PDF processing
- Extracts text from PDF files

**What it does in Udyara:**
- Reads PDF files from `backend/app/data/` folder
- Extracts text content
- Preserves page numbers for source attribution

**Pipeline:**
```
PDF File
   ↓
PyPDF (text extraction)
   ↓
Raw Text + Page Numbers
   ↓
Chunking Process
```

---

### 7. Google Generative AI (`requirements.txt: google-generativeai, langchain-google-genai`)

**What it is:**
- Python SDK for Google's Gemini API
- Integrates with LangChain

**What it does in Udyara:**
- Sends policy context + question to Gemini 2.5 Flash model
- Generates natural language answers
- High-quality text synthesis

**Configuration:**
```
Model: gemini-2.5-flash
Purpose: Fast, cost-effective LLM for answer synthesis
Input: system prompt + policy context + question
Output: Natural language answer
```

**Why Gemini?**
- Fast (Flash model is optimized for speed)
- Cost-effective ($0.075 per 1M input tokens)
- Good quality for instruction-following tasks
- Supports system prompts for behavior control

---

### 8. Python-dotenv (`requirements.txt: python-dotenv`)

**What it is:**
- Loads environment variables from `.env` file
- Keeps sensitive keys out of source code

**What it does in Udyara:**
- Loads `GEMINI_API_KEY` from `.env`
- Enables secure configuration management

**.env file structure:**
```
GEMINI_API_KEY=your_actual_api_key_here
```

---

## Frontend Technologies

### 1. React (`frontend/package.json`)

**What it is:**
- JavaScript library for building user interfaces
- Component-based architecture

**What it does in Udyara:**
- Powers the chat interface (`src/pages/Agent.jsx`)
- Handles user input and display
- Manages UI state

---

### 2. Vite (`frontend/vite.config.js`)

**What it is:**
- Modern frontend build tool
- Fast development server and production build

**What it does in Udyara:**
- Runs dev server on `http://localhost:5173`
- Handles hot module reloading (live code updates)
- Bundles React code for production

---

### 3. Tailwind CSS (`frontend/tailwind.config.js`)

**What it is:**
- Utility-first CSS framework
- Builds designs without writing custom CSS

**What it does in Udyara:**
- Styles the UI components
- Responsive design for mobile/desktop

---

## Data Processing Pipeline

### Text Chunking Strategy

```
PDF Document (50 pages)
       ↓
Text Extraction (PyPDF)
       ↓
Text Splitting
   - Chunk Size: 512 characters
   - Overlap: 20% (ensures context continuity)
   - Example:
     Chunk 1: "...eligibility criteria for women founders..."
     Chunk 2: "...women founders must have...business plan..."
            (overlap ensures "women founders" appears in both)
       ↓
Embedding Generation
   - Each chunk → Sentence-Transformers
   - Produces 384-dimensional vector
       ↓
FAISS Index
   - Store all vectors + metadata (source, page)
   - Save to disk
```

### Why Chunking?
- **Problem**: Full document retrieval is inefficient
- **Solution**: Break into semantic units
- **Benefit**: Precise matching + fast retrieval

---

## Request/Response Data Flow

### Request Format (from Frontend)

```json
{
  "question": "What documents do I need?"
}
```

### Response Format (to Frontend)

```json
{
  "answer": "Based on Stand-Up India guidelines, you'll need: Pan Card, Aadhar...",
  "sources": [
    {
      "title": "Stand-Up India Official Guidelines",
      "url": "https://www.standupmitra.in",
      "page": 6
    }
  ],
  "status": "success"
}
```

---

## How Technologies Work Together

```
USER FLOW:

React Chat UI (Frontend)
     │
     ├─ User types question
     └─ POST to /ask endpoint

FastAPI Server (Backend)
     │
     ├─ Receives request
     ├─ Calls ask_agent() function

Sentence-Transformers
     │
     ├─ Converts question to vector
     └─ Example: [0.23, -0.41, 0.15, ...]

FAISS Vector Store
     │
     ├─ Searches for similar vectors
     ├─ Retrieves top-K chunks
     └─ Example: Returns 3 relevant policy sections

Context Building
     │
     └─ Combines retrieved chunks into context string

Gemini API
     │
     ├─ Receives: system prompt + context + question
     ├─ Generates: natural language answer
     └─ Returns: "Based on policy, you need..."

Response Formatting
     │
     └─ Extracts sources, deduplicates, formats JSON

Uvicorn/FastAPI
     │
     └─ Sends JSON response back to Frontend

React Chat UI
     │
     └─ Displays answer + sources to user
```

---

## Performance Optimization

| Component | Optimization |
|-----------|--------------|
| **Sentence-Transformers** | Pre-trained model (no training needed) |
| **FAISS** | Approximate nearest neighbor search (faster than exact) |
| **FastAPI** | Async/await for concurrent requests |
| **Gemini API** | Flash model (fast + cost-effective) |
| **Caching** | Could cache frequent queries (future improvement) |

---

## Dependencies Summary

```
requirements.txt:
├─ fastapi              # Web framework
├─ uvicorn              # ASGI server
├─ langchain            # RAG framework
├─ langchain-community  # LangChain integrations
├─ langchain-text-splitters  # Document chunking
├─ google-generativeai  # Gemini API SDK
├─ faiss-cpu            # Vector database
├─ pypdf                # PDF processing
├─ python-dotenv        # Environment variables
├─ langchain-google-genai  # LangChain + Gemini integration
└─ sentence-transformers   # Embeddings model
```

---

## Interview Tips

**Q: Why this specific tech stack?**
A: Sentence-Transformers for semantic embeddings (lightweight, pre-trained), FAISS for fast vector search (efficient, local), FastAPI for API (modern, fast), Gemini for quality answers (cost-effective, high quality).

**Q: How do you avoid hallucinations?**
A: RAG model—answers are grounded in retrieved documents. Gemini only synthesizes context, not generating new information.

**Q: What would you change?**
A: Add caching for frequent queries, implement multi-language support, add automated PDF ingestion for policy updates.

---

## Next: Read `04-KEY-CONCEPTS.md` for detailed concept explanations
