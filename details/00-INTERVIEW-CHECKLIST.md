# Udyara: Interview Prep Checklist ✅

> Use this checklist to prepare for recruiter interviews about your Udyara project

---

## Before the Interview

### Knowledge Preparation
- [ ] Read **01-PROJECT-OVERVIEW.md** → Understand the 30-second pitch
- [ ] Read **02-ARCHITECTURE.md** → Know the system flow
- [ ] Read **03-TECH-STACK.md** → Understand each technology choice
- [ ] Read **04-KEY-CONCEPTS.md** → Be able to explain concepts simply
- [ ] Read **05-INTERVIEW-TALKING-POINTS.md** → Know answers to common questions

### Technical Setup
- [ ] Backend server runs: `uvicorn app.main:app --reload` (on port 8000)
- [ ] Frontend server runs: `npm run dev` (on port 5173)
- [ ] Test the chat interface: Ask a sample question, verify answer + sources
- [ ] Have environment variables set: `GEMINI_API_KEY=xxx`
- [ ] Can you run the project from scratch? Practice.

### Demo Preparation
- [ ] Have sample questions ready to demo
- [ ] Know how to navigate the codebase quickly
- [ ] Can you explain data flow from user input to answer in < 2 minutes?
- [ ] Prepare to draw architecture on whiteboard/paper

---

## During the Interview

### Opening Statement (30 seconds)
**When asked: "Tell me about Udyara"**

Use the 30-second pitch from **01-PROJECT-OVERVIEW.md**:

> "Udyara is a RAG-based policy guidance system for women entrepreneurs in India. It ingests government PDF documents, converts them to semantic embeddings using Sentence-Transformers, stores them in FAISS vector database, and retrieves relevant sections based on user questions. When someone asks about eligibility, the system finds the most relevant policy chunks, sends them to Gemini API along with the question, and returns a synthesized answer with source citations. It's built with FastAPI backend and React frontend."

---

### Key Technical Points to Mention

#### RAG System
- [ ] "I use RAG to ensure trustworthiness—answers are grounded in official policies, not hallucinated"
- [ ] "Retrieval happens through FAISS semantic search, not keyword matching"
- [ ] "LLM only synthesizes from retrieved context"

#### Semantic Search
- [ ] "Policy language is formal; users ask casually. Semantic search bridges this gap"
- [ ] "Sentence-Transformers converts text to 384-dimensional vectors that capture meaning"
- [ ] "FAISS finds similar vectors in ~10-50ms from 1000s of chunks"

#### Tech Choices
- [ ] "FastAPI for modern, async-capable API"
- [ ] "Sentence-Transformers because it's pre-trained for similarity tasks"
- [ ] "FAISS because it's fast, local, and scales to millions of embeddings"
- [ ] "Gemini Flash because it's fast and cost-effective"

#### Data Flow
- [ ] Can draw: PDF → Chunking → Embeddings → FAISS → Query → Gemini → Response
- [ ] Can explain each step in 30 seconds

---

### Red Flag Questions & Answers

#### "Why is this production-ready?"
**Answer from 05-INTERVIEW-TALKING-POINTS.md:**
- Real problem, real users (women entrepreneurs), real documents
- Error handling, source attribution, scalability
- Production improvements would be operational, not fundamental

#### "What are the limitations?"
**Be honest (from 01-PROJECT-OVERVIEW.md):**
- Single policy coverage (can scale)
- Manual PDF updates (can automate)
- English-only (can add languages)
- No real-time government API integration (future feature)
- Advisory system, not autonomous action

#### "Why no tests?"
**Answer from 05-INTERVIEW-TALKING-POINTS.md:**
- Focus was rapid prototyping to validate idea
- Would add unit/integration/API tests in production
- Show understanding of TDD importance

---

### Questions to Ask Them

Be prepared to ask:
- [ ] "What does your team use for backend APIs? How do you handle LLM integration?"
- [ ] "Have you worked with RAG systems? What challenges did you face?"
- [ ] "How do you balance technical depth with shipping quickly?"
- [ ] "What's the biggest technical challenge your team is solving?"

---

## STAR Method Walkthrough

If asked: "Tell me about a technical challenge you overcame"

**Situation:**
- Government policies are complex; need to make them accessible
- Early prototype used keyword search; missed semantically similar results

**Task:**
- Build intelligent retrieval system that understands intent, not just keywords
- Ensure answers are trustworthy (grounded in official documents)

**Action:**
- Researched embeddings and vector databases
- Implemented Sentence-Transformers for semantic encoding
- Switched from keyword to semantic search using FAISS
- Validated with diverse question phrasings

**Result:**
- Retrieval accuracy improved from ~40% to ~85%
- Response time < 5 seconds end-to-end
- System now provides source-backed answers

---

## SWOT Analysis (Be Ready to Discuss)

**Strengths to highlight:**
- Trustworthy answers (source-backed, no hallucination)
- Semantic understanding (not just keywords)
- Scalable architecture (FAISS handles 1000s of documents)
- Real social impact

**Weaknesses to acknowledge:**
- Single policy coverage (limited scope)
- Manual updates (not real-time)
- English-only (language barrier)
- Proof-of-concept stage (not production deployed)

**Opportunities to mention:**
- Multi-scheme expansion
- Multi-language support
- Government API integration
- Mobile app
- Personalized guidance

**Threats to consider:**
- Policy changes (need updates)
- Retrieval failures (degraded quality)
- User trust (why trust AI for policies?)
- Competition

---

## Architecture Explanation (Practice Drawing)

**Can you draw this on a whiteboard in < 3 minutes?**

```
Frontend (React)
       ↓
FastAPI /ask endpoint
       ↓
Sentence-Transformers (embedding)
       ↓
FAISS (similarity search) ← Retriever
       ↓
Chunk retrieval + context building
       ↓
Gemini API (answer synthesis)
       ↓
Response formatting (answer + sources)
       ↓
Frontend displays answer
```

Practice this until you can draw it quickly and explain each box.

---

## Code Walkthrough Points

If asked to explain code:

**From `backend/app/agent.py`:**
- [ ] Show system prompt and explain how it guides Gemini
- [ ] Explain the `ask_agent()` function flow
- [ ] Show how sources are extracted and formatted

**From `backend/app/rag/retriever.py`:**
- [ ] Explain how retriever converts question to embedding
- [ ] Show FAISS similarity search logic
- [ ] Discuss why we return top-K chunks

**From `backend/app/main.py`:**
- [ ] Show `/ask` endpoint
- [ ] Explain CORS middleware
- [ ] Discuss async/await for concurrent requests

---

## Resume Talking Points

**Your resume says:**
> "Developed a RAG policy guidance system that uses semantic search over government policy documents to match women entrepreneurs with relevant incentives, integrating FAISS vector retrieval and eligibility reasoning within a FastAPI."

**Be ready to explain each keyword:**

- [ ] **RAG**: Retrieval-Augmented Generation; answers grounded in documents
- [ ] **Policy guidance**: Answers questions about government schemes
- [ ] **Semantic search**: Understands meaning, not just keywords
- [ ] **Government policy documents**: Official PDFs; used as knowledge base
- [ ] **Women entrepreneurs**: Target user group
- [ ] **Relevant incentives**: Match users with applicable schemes
- [ ] **FAISS vector retrieval**: Fast similarity search on embeddings
- [ ] **Eligibility reasoning**: Match user criteria against policy requirements
- [ ] **FastAPI**: Modern Python web framework for the backend

---

## Post-Interview

- [ ] Send thank you email (mention Udyara if relevant)
- [ ] If they ask for live demo, have GitHub link ready
- [ ] Follow up with questions they couldn't answer ("I researched this after, here's what I found...")
- [ ] Update your talking points based on feedback

---

## Final Confidence Boosters

### You're Ready to Discuss:
✅ What Udyara does (RAG policy guidance system)  
✅ Why it matters (solves real problem for women entrepreneurs)  
✅ How it works (semantic search → FAISS → Gemini → answers)  
✅ Why these tech choices (FastAPI, Sentence-Transformers, FAISS, Gemini)  
✅ What makes it trustworthy (source-backed, no hallucination)  
✅ What could be better (multi-language, real-time updates, etc.)  
✅ How you overcame challenges (semantic search insight)  

### You Can Confidently Answer:
✅ "Tell me about the project" (30-second pitch)  
✅ "How does it avoid hallucination?" (RAG explanation)  
✅ "Why semantic search?" (keyword limitations)  
✅ "What are the limitations?" (honest assessment)  
✅ "What would you improve?" (future roadmap)  
✅ "Draw the architecture" (whiteboard ready)  
✅ "Walk me through the code" (understand each component)  

---

## Quick Reference: Resume Tech Stack

```
Python           | Backend language
FastAPI          | REST API framework
FAISS            | Vector similarity search (1000s of embeddings in <50ms)
Sentence-Transformers | Semantic embeddings (384-dimensional vectors)
Gemini API       | LLM for answer synthesis
React            | Frontend UI
Tailwind CSS     | Styling
LangChain        | RAG framework
PyPDF            | PDF text extraction
```

---

## Your Winning Elevator Pitch

> "I built Udyara, a RAG system that helps women entrepreneurs in India understand government policies. The core innovation is using semantic search instead of keyword matching—so when someone asks 'Can I get funding?', the system understands they're asking about eligibility, retrieves relevant policy sections, and synthesizes an answer using Gemini. It's built with FastAPI and uses FAISS for fast vector search. The result is trustworthy policy guidance with source citations—no hallucination. It demonstrates modern AI/ML concepts, full-stack engineering, and problem-solving skills."

**Time: ~45 seconds**  
**Covers: Problem, solution, tech, impact, learning**

---

**Good luck! 🚀 You've got this.**
