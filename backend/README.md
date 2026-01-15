# NitiAI Backend

FastAPI backend powering the NitiAI policy agent.

---

## ⚙️ Setup Instructions

### 1️⃣ Create virtual environment

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
```

### 2️⃣ Install dependencies
```
pip install -r requirements.txt
```

### 🔑 Environment Variables

Create .env file:
```
GEMINI_API_KEY=your_api_key_here
```

---

### 📄 Policy Ingestion (RAG Setup)

Place policy PDFs inside:
```
backend/app/data/
```

Run ingestion:
```
python -m app.rag.ingest
```

This creates a FAISS vector store.

### 🚀 Run Backend Server

```
uvicorn app.main:app --reload
```

Server runs at: http://localhost:8000


Swagger Docs: http://localhost:8000/docs

### 📡 API Endpoints
- METHOD: POST
- Endpoint: /ask
- Description: Ask policy-related questions

---

## RAG Pipeline

1. PDF Loader
2. Text Chunking
3. Local Embeddings (Sentence Transformers)
4. FAISS Vector Store
5. Gemini LLM for answers