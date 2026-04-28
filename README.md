# Udyara: Cultivating Women Led Enterprises 

### Trustworthy RAG-Based Policy Navigation System for Women-Led Startups

Udyara is a policy-aware intelligent system designed to help women entrepreneurs in India 
understand, verify, and navigate government startup incentives — starting with the 
**Stand-Up India Scheme**.

Built  to demonstrate:
- Retrieval-Augmented Generation (RAG)
- Trustworthy, source-backed responses
- Semantic search over policy documents
- Explainable decision support

---

## 🚩 Problem Statement

- Government startup policies are complex, fragmented, and difficult to interpret.
- Women entrepreneurs often miss out on benefits.
- This gap results in underutilization of public funds, delayed entrepreneurship,
and reduced participation of women in the startup ecosystem.

---

## 💡 Solution

Udyara acts as a **Policy Navigator System** that:
- Retrieves official policy documents
- Understands eligibility criteria
- Guides users through benefits & next steps
- Provides transparent, explainable responses

---

## 🧠 Core Features

- 📄 RAG-based policy understanding system
- 🔍 Eligibility reasoning
- 🧾 Source-backed answers (no hallucination)
- 🔐 Trust-first architecture

---

## 🏗 Architecture Overview

```
User Query
   ↓
Frontend (React / Next.js)
   ↓
FastAPI Backend
   ↓
RAG Pipeline
   ├── Policy PDFs
   ├── Sentence-Transformer Embeddings
   ├── FAISS Vector Store
   └── Gemini LLM (response synthesis)
```
- LLMs are used for interpretation and explanation, not decision-making
- The system focuses on retrieval and explanation, not autonomous decision-making or action execution.
## 🔀 Flow
```
PDF (policy)
   ↓
Local Embeddings (sentence-transformers)
   ↓
FAISS Vector Store (files on disk)
   ↓
Retriever
   ↓
Gemini LLM (answers)
```

---

## 🧪 Demo Use Cases

These queries demonstrate real-world policy discovery, eligibility validation,
and benefit awareness for first-time women founders.

- "Am I eligible for Stand-Up India as a woman founder?"
- "What documents are required?"
- "What loan benefits are provided?"
- "What are common rejection reasons?"

---


## 🚀 Tech Stack

| Layer        | Technology Used | Purpose |
|-------------|-----------------|---------|
| Frontend    | React           | User interaction (chat-based UI) |
| Backend     | FastAPI         | API handling & orchestration |
| AI Pipeline | LangChain       | RAG workflow management |
| Embeddings  | Sentence Transformers | Policy document vectorization |
| Vector DB   | FAISS           | Fast similarity search |
| LLM         | Gemini 2.5      | Answer synthesis & formatting |
| Data Source | Govt Policy PDFs | Trusted knowledge base |


---

## 📦 Project Structure

```
Udyara/
├── frontend/                 # React UI - Chat interface
│   ├── src/
│   │   ├── components/       # Navbar, Footer components
│   │   ├── pages/           # Home, Agent, About, Features pages
│   │   └── services/        # API calls to backend
│   └── package.json         # Frontend dependencies
│
├── backend/                  # FastAPI application
│   ├── app/
│   │   ├── agent.py         # Core agent logic (question answering)
│   │   ├── config.py        # Configuration (API keys, settings)
│   │   ├── main.py          # FastAPI routes and endpoints
│   │   ├── data/            # Raw PDF files for ingestion
│   │   ├── rag/             # RAG pipeline
│   │   │   ├── ingest.py    # PDF processing and chunking
│   │   │   ├── retriever.py # Semantic search retrieval logic
│   │   │   └── qa_chain.py  # Question-answering chain
│   │   └── vectorstore/     # FAISS vector database
│   │       └── index.faiss  # Persisted embeddings
│   └── requirements.txt     # Backend dependencies
└── README.md
```
---
## ⚙️ Setup & Running (Prototype)

### Backend Setup

1. Navigate to backend directory
```bash
cd backend
```

2. Create virtual environment
```
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
```

3. Install dependencies
```
pip install -r requirements.txt
```

4. Create .env file
```
GEMINI_API_KEY=your_api_key_here
```
5. Run the backend

```
uvicorn app.main:app --reload
```

6. API available at:

- http://127.0.0.1:8000
- Swagger UI: http://127.0.0.1:8000/docs


### Frontend Setup

1. Navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```
npm install
```

3. Run the frontend

```
npm run dev
```

4. Website running at

- http://localhost:5173/ 

5. Explore frontend

- **Try Agent**: to ask questions & instructions, interact with the agent
- **Make sure backend & frontend are simultaneously running.**




---

## 🌱 Future Scope

- Add more women-centric policies (MUDRA, PMEGP, Startup India)
- Multilingual support (Hindi / regional languages)
- Voice-based interaction for accessibility
- State-specific incentive mapping
- Verifiable credentials for document checks

---

## ✨ Why Udyara Stands Out
- Eliminates policy confusion using semantic search
- Ensures zero hallucination with source-backed responses
- Designed specifically for women entrepreneurs in India
- Bridges the gap between policy availability and accessibility

