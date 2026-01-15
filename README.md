# Udyara: Cultivating Women Led Enterprises 

### Trust-Based AI Agent for Women-Led Startup Policy Navigation

Udyara is a policy-aware AI agent network designed to help women entrepreneurs in India 
understand, verify, and navigate government startup incentives — starting with the 
**Stand-Up India Scheme**.

Built  to demonstrate:
- AI agents
- Trust-based decision support
- Retrieval-Augmented Generation (RAG)
- Decentralised policy intelligence

---

## 🚩 Problem Statement

- Government startup policies are complex, fragmented, and difficult to interpret.
- Women entrepreneurs often miss out on benefits.
- This gap results in underutilization of public funds, delayed entrepreneurship,
and reduced participation of women in the startup ecosystem.

---

## 💡 Solution

Udyara acts as a **Policy Navigator Agent** that:
- Retrieves official policy documents
- Understands eligibility criteria
- Guides users through benefits & next steps
- Provides transparent, explainable responses

---

## 🧠 Core Features

- 📄 Policy-aware AI using RAG
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

## Flow
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
├── backend/
├── frontend/
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

5. Ingest policy documents (one-time)
```
python -m app.rag.ingest
```

6. Run the backend

```
uvicorn app.main:app --reload
```

7. API available at:

- http://127.0.0.1:8000
- Swagger UI: http://127.0.0.1:8000/docs

(Frontend UI is planned but not fully integrated in this prototype due to time constraints.
Current interaction is demonstrated via API / Swagger UI)

---

## 🌱 Future Scope

- Add more women-centric policies (MUDRA, PMEGP, Startup India)
- Multilingual support (Hindi / regional languages)
- Voice-based interaction for accessibility
- State-specific incentive mapping
- Verifiable credentials for document checks

