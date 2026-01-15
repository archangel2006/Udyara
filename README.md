# NitiAI 🇮🇳
### Trust-Based AI Agent for Women-Led Startup Policy Navigation

NitiAI is a policy-aware AI agent network designed to help women entrepreneurs in India 
understand, verify, and navigate government startup incentives — starting with the 
**Stand-Up India Scheme**.

Built for hackathons to demonstrate:
- AI agents
- Trust-based decision support
- Retrieval-Augmented Generation (RAG)
- Decentralised policy intelligence

---

## 🚩 Problem Statement

Government startup policies are complex, fragmented, and difficult to interpret.
Women entrepreneurs often miss out on benefits due to:
- Poor policy awareness
- Complex eligibility criteria
- Lack of guided assistance

---

## 💡 Solution

NitiAI acts as a **Policy Navigator Agent** that:
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
- ⚡ Fast, hackathon-ready deployment

---

## 🏗 Architecture Overview

```
    User → Frontend (React / Next.js)
    → FastAPI Backend
    → RAG Pipeline
    ├── FAISS Vector DB
    ├── Local Embeddings (Sentence Transformers)
    └── Gemini LLM (Answer Generation)
```

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

- "Am I eligible for Stand-Up India as a woman founder?"
- "What documents are required?"
- "What loan benefits are provided?"
- "What are common rejection reasons?"

---

## 🚀 Tech Stack

**Frontend**
- React / Next.js
- Tailwind CSS

**Backend**
- FastAPI
- LangChain
- FAISS
- Sentence Transformers
- Gemini LLM

---

## 📦 Project Structure

```
NitiAI/
├── backend/
├── frontend/
└── README.md
```

---

## 🌱 Future Scope

- Add more startup policies (Startup India, MSME)
- Multi-policy eligibility comparison
- State-specific incentives
- DID-based credential verification
- Agent-to-agent interoperability
