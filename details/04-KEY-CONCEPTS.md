# Udyara: Key Concepts Explained Simply

## 1. RAG (Retrieval-Augmented Generation)

### What is RAG?
RAG is a technique that combines **retrieval** (finding relevant information) with **generation** (creating answers).

### Traditional Approach (LLM-only)
```
User: "What's the maximum loan amount?"
     ↓
GPT Model (trained on general data)
     ↓
"The maximum loan is usually between $50,000 and $500,000"
     ↓
Problem: Model hallucinates; may be incorrect for Stand-Up India
```

### RAG Approach (Retrieval + Generation)
```
User: "What's the maximum loan amount?"
     ↓
RETRIEVAL: Search policy documents
     └─ Find sections mentioning loan amounts
     ↓
Retrieve: "Stand-Up India maximum loan: ₹25 lakhs per entrepreneur"
     ↓
GENERATION: Gemini synthesizes answer from retrieved text
     ↓
"Based on official policy, the maximum loan is ₹25 lakhs"
     ↓
Benefit: Answer is grounded in source documents; no hallucination
```

### Why RAG for Udyara?
- **Trustworthiness**: Answers tied to official policy documents
- **Accuracy**: No guessing or hallucination
- **Transparency**: Users can verify answers in sources
- **Cost-effective**: Don't need to fine-tune models

---

## 2. Semantic Search

### What is Semantic Search?
Understanding **meaning** vs. just matching **keywords**.

### Keyword Search (Traditional)
```
Document: "Women entrepreneurs are eligible for loans"
Query: "female business owners"

Result: NO MATCH (keywords don't match exactly)
```

### Semantic Search (What We Use)
```
Document: "Women entrepreneurs are eligible for loans"
Query: "female business owners"

Both express same meaning:
- "women" ≈ "female"
- "entrepreneurs" ≈ "business owners"

Result: MATCH! (meaning matches)
```

### How Semantic Search Works in Udyara

```
Step 1: Convert to vectors (embeddings)
        "Women entrepreneurs" → [0.23, -0.41, 0.15, ...]
        "Female business owners" → [0.25, -0.39, 0.18, ...]
        
        Vectors are similar! (close numbers)

Step 2: Calculate similarity
        Cosine Similarity = 0.98 (on scale 0-1)
        
        0.98 = very similar! (> 0.5 threshold = match)

Step 3: Return matched documents
        ✅ Match found!
```

### Why Semantic Search Matters
- Users ask questions in natural language
- Policy documents use formal language
- Semantic search bridges this gap
- Captures intent, not just keywords

---

## 3. Embeddings (Word/Text Vectors)

### What is an Embedding?
A **numerical representation** of text that captures meaning.

### Simple Analogy
```
Traditional approach (keywords):
"eligibility" = just a string of letters

Embedding approach:
"eligibility" = [0.23, -0.41, 0.15, 0.09, ..., 0.89]
                (384 numbers representing meaning)
```

### How Embeddings Work

```
Text: "Women entrepreneurs eligible for loans"

Sentence-Transformers Model
     ↓
[0.23, -0.41, 0.15, 0.09, ..., 0.89]  (384 dimensions)
     ↓
This vector captures:
- Topic: government schemes
- Category: women entrepreneurs
- Sentiment: positive (opportunity)
- Entities: loans, eligibility
```

### Why 384 Dimensions?
- Each dimension captures different semantic feature
- 384 dimensions = good balance of detail vs. efficiency
- Similar meanings = similar vectors (close numbers)
- Different meanings = different vectors (distant numbers)

### Visualizing Embeddings (Simplified)
```
If we could visualize as 2D (actually 384D):

          "eligibility"
               •
              /|\
             / | \
            /  |  \
    "criteria"•  |  •"conditions"
           /   |   \
          /    •    \
         /  "women   \
        /      "•entrepreneurs"
       /
"loan"•
```

All related words cluster together in embedding space!

---

## 4. Vector Database (FAISS)

### What is a Vector Database?
A database that stores and searches **vectors** (embeddings) efficiently.

### Traditional Database
```
Query: "SELECT * FROM policies WHERE keyword = 'eligibility'"

Fast if: exact keyword match
Slow if: need to find similar meaning across all records
```

### Vector Database (FAISS)
```
Query Vector: [0.23, -0.41, 0.15, ...]

FAISS: "Find all vectors similar to this"

Fast result: All semantically similar documents
```

### How FAISS Works (Simplified)

```
Storage (Indexing):
1000 policy chunks
     ↓
Convert each to vector (Sentence-Transformers)
     ↓
FAISS creates index (organizes vectors for fast search)
     ↓
index.faiss (persisted on disk)

Search (Querying):
User question: "What documents needed?"
     ↓
Convert to vector
     ↓
FAISS: "Find 3 most similar vectors"
     ↓
Fast search (< 50ms even with 1000s of vectors)
     ↓
Return top-K most similar chunks
```

### Why Not Just Store Text?
```
Challenge: "Am I eligible?" matches which documents?

Naive approach: Scan all 1000 chunks one by one = slow
Vector DB: FAISS indexes by similarity = instant

FAISS Performance:
- 1,000 chunks: 10-50ms search time
- 1,000,000 chunks: 100-500ms search time
(still acceptable; linear vs. exponential scaling)
```

---

## 5. Text Chunking

### Why Not Use Entire Documents?

```
Problem 1: Document Size
- Policy PDF = 50 pages
- Sending entire document to LLM = expensive
- Response time = slow

Problem 2: Irrelevance
- User asks: "What documents needed?"
- We retrieve: entire 50-page policy
- 90% is irrelevant; 10% answers question

Problem 3: Search Quality
- FAISS can't search by "meaning of page 1-50"
- Works better with semantic units (paragraphs, sentences)
```

### Solution: Chunking

```
PDF Document (50 pages)
     ↓
Split into chunks (512 characters each)
     ↓
Chunk 1: "Eligibility criteria: Must be woman founder..."
Chunk 2: "Documents required: Pan, Aadhar, business plan..."
Chunk 3: "Loan amount: Up to ₹25 lakhs per person..."
...
Chunk 97: "Application process..."

Now:
- Relevant retrieval: "Documents needed?" → retrieves Chunk 2
- Efficient: Only 512 chars sent to LLM (not 50 pages)
- Fast: Searching 100 chunks faster than 50 pages
```

### Chunking Strategy in Udyara

```
Chunk Size: 512 characters
Overlap: 20%

Example:
Chunk A: "...and women founders are eligible. Eligibility..."
Chunk B: "Eligibility requires business registration..."
         ^overlap starts here (context continuity)
         
Benefits:
- Chunk B doesn't lose context from Chunk A
- Boundaries between chunks don't break meaning
- Semantic continuity preserved
```

---

## 6. PDF Processing

### How PDFs Are Processed

```
Step 1: Load PDF
   └─ PyPDF reads PDF file
   └─ Extracts text + page numbers

Step 2: Preserve Metadata
   └─ Document source: "Stand-Up India Policy v2.0"
   └─ Page numbers: keep track for citations

Step 3: Text Extraction
   └─ Raw text from PDF
   └─ May have formatting issues (tables, headers, etc.)

Step 4: Chunking
   └─ Split text into 512-character chunks
   └─ Preserve page metadata for source attribution

Step 5: Embedding
   └─ Convert each chunk to vector

Step 6: Index Storage
   └─ Save all vectors + metadata to FAISS
   └─ Persisted as index.faiss

Stored Format:
Chunk 1 vector + metadata (source: page 5, doc: guidelines.pdf)
Chunk 2 vector + metadata (source: page 5, doc: guidelines.pdf)
...
```

### Why Preserve Metadata?
```
User gets answer: "Based on Stand-Up India..."
User wants to verify: "Where in document?"
System responds: "See page 5 of guidelines.pdf"
User can check source!
```

---

## 7. LLM (Large Language Model)

### What is an LLM?
A neural network trained on massive text data to generate human-like text.

### How LLMs Work (Simplified)

```
Input: "What documents are needed?"
     ↓
Process: Predict next token (word)
     ├─ "Based" (most likely next word)
     ├─ "on" (next predicted word)
     ├─ "Stand-Up" (continue predicting)
     └─ ...continue until end-of-response
     ↓
Output: "Based on Stand-Up India guidelines, you need..."
```

### Why Use Gemini in Udyara?

```
Alternatives considered:
1. Local LLM (Llama, Mistral)
   ✓ Privacy (offline)
   ✗ Slow (runs on CPU)
   ✗ Requires 8GB+ memory
   ✗ Lower quality

2. OpenAI GPT-4
   ✓ High quality
   ✗ Expensive ($0.03/token)
   ✗ Slow

3. Gemini 2.5 Flash (chosen)
   ✓ Fast (optimized for speed)
   ✓ Cost-effective ($0.075 per 1M tokens)
   ✓ Good quality for instruction-following
   ✓ Supports system prompts
```

### System Prompt (Instructions to LLM)

```
System Prompt in agent.py:
"You are Udyara, a policy intelligence agent...
Answer ONLY from provided context...
If not in policy, say 'Not mentioned'..."

This guides Gemini to:
- Stay in character
- Avoid hallucination
- Follow instructions
- Give structured responses
```

---

## 8. Eligibility Reasoning

### What We Mean by "Eligibility Reasoning"

```
Not just matching keywords, but understanding eligibility logic:

Policy states:
"Women-led startups with < 10% turnover from import/export
   OR less than 25% foreign investment are eligible"

User: "I'm 35% foreign-funded. Am I eligible?"

System needs to:
1. Extract eligibility criteria
2. Match user's profile against criteria
3. Reason: 35% > 25% threshold = NOT eligible
4. Explain why
```

### In Udyara

```
Current Implementation:
- Retrieve relevant policy sections about eligibility
- Let Gemini reason over retrieved context
- Gemini generates explanation

Future Enhancement:
- Parse eligibility criteria into rules
- Extract user profile from conversation
- Apply rules to determine eligibility
- Explain decision with logic
```

---

## 9. Source Attribution

### Why Sources Matter

```
Answer: "Maximum loan is ₹25 lakhs"

Without source:
- User: "How do you know?"
- System: "I'm an AI" → low trust

With source:
- User: "Where does it say this?"
- System: "Page 5 of Stand-Up India Official Guidelines"
- User can verify → high trust
```

### How We Track Sources

```
During PDF Processing:
Chunk: "Maximum loan is ₹25 lakhs per entrepreneur"
Metadata: {source: "guidelines.pdf", page: 5}

During Retrieval:
Retrieved chunk includes metadata

During Response:
Extract metadata from top-K chunks
Format as: {title, url, page}
Return to frontend

Frontend displays:
"See Stand-Up India Official Guidelines, Page 5"
```

---

## 10. The Complete Flow (Simple Version)

```
USER PERSPECTIVE:
┌─────────────────────────────┐
│  Chat with Udyara           │
│  Q: "What documents needed?"│
└──────────────┬──────────────┘
               │
               ▼
       ┌─────────────────┐
       │ Instant Answer  │
       │ + Source Links  │
       └─────────────────┘

SYSTEM PERSPECTIVE:
1. Question → Vector (Embeddings)
2. Vector → FAISS Search
3. Search → Similar Chunks Retrieved
4. Chunks → Context Built
5. Context + Question → Gemini API
6. Gemini → Natural Language Answer
7. Answer + Sources → Response Formatted
8. Response → Frontend Display
```

---

## Interview Talking Points

### "How does your system avoid hallucination?"
> "We use RAG. Instead of asking the LLM to answer from its training data, we retrieve the exact policy documents, send them as context, and ask Gemini to answer based only on that context. So even if Gemini's training data was wrong, it would give the right answer from our documents."

### "Why semantic search instead of keyword search?"
> "Because policy language is formal while users ask in casual language. Semantic search understands that 'female business owner' means the same as 'woman entrepreneur', so we catch relevant documents that keyword search would miss."

### "How do embeddings help?"
> "Embeddings convert text to vectors representing meaning. Similar meaning = similar vectors. FAISS uses these vectors to instantly find documents similar to a user's question, without scanning all documents."

### "Why FAISS specifically?"
> "FAISS is optimized for similarity search on vectors. It can find the 3 most relevant documents from thousands in milliseconds. Plus, it runs locally on our machines, so we don't depend on external services for core functionality."

---

## Next: Read `05-INTERVIEW-TALKING-POINTS.md` for Q&A prep
