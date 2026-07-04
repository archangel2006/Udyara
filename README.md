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
## ⚙️ Running Locally

### Option 1 — Docker (Recommended, Single Command)

> **Prerequisites**: [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

```bash
# 1. Clone the repo
git clone https://github.com/your-username/udyara.git
cd udyara

# 2. Create your .env file (never commit this!)
cp .env.example .env
# Edit .env and add your real GEMINI_API_KEY

# 3. Start everything — backend + frontend in one command
docker compose up --build
```

- 🌐 Frontend → http://localhost:5173
- ⚙️  Backend API → http://localhost:8000
- 📖 Swagger UI → http://localhost:8000/docs

> First build takes ~5 minutes (downloads model + dependencies). Subsequent runs use cached layers and start in seconds.

---

### Option 2 — Manual (without Docker)

<details>
<summary>Click to expand manual setup</summary>

**Backend**
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows
# source .venv/bin/activate     # macOS/Linux
pip install -r requirements.txt
# Create .env with GEMINI_API_KEY=your_key
uvicorn app.main:app --reload
# Running at http://127.0.0.1:8000
```

**Frontend** (in a new terminal)
```bash
cd frontend
npm install
npm run dev
# Running at http://localhost:5173
```
</details>

---

## 🚀 Cloud Deployment (Free)

Udyara deploys for free using **Render** (backend) + **Vercel** (frontend).

```
Browser → Vercel (React) → Render (FastAPI + RAG)
```

### Backend → Render

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New** → **Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Root Directory**: *(leave blank — uses `render.yaml`)*
   - **Runtime**: Docker
   - **Dockerfile Path**: `./Dockerfile.backend`
5. Add environment variable:
   - `GEMINI_API_KEY` = your Gemini API key
6. Click **Deploy** → copy the URL (e.g. `https://udyara-backend.onrender.com`)

> ⚠️ Free tier spins down after 15 min of inactivity. First request after sleep takes ~30s.

### Frontend → Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project** → import GitHub repo
2. Set **Root Directory** to `frontend`
3. Add environment variable:
   - `VITE_API_URL` = `https://udyara-backend.onrender.com` *(your Render URL)*
4. Click **Deploy** → your app is live! 🎉

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
