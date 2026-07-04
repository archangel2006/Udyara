#from unittest import result
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.agent import ask_agent
from app.rag.retriever import get_retriever
from contextlib import asynccontextmanager
import asyncio

# Pre-load the HuggingFace model + FAISS index at startup
# so the first user request isn't slow.
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("[STARTUP] Pre-loading retriever (Gemini Embeddings + FAISS)...")
    await asyncio.to_thread(get_retriever)
    print("[SUCCESS] Retriever ready. Server accepting requests.")
    yield

app = FastAPI(
    title="Udyara - Cultivating Women-Led Enterprises",
    lifespan=lifespan
)

# CORS
origins = [
    "https://udyara.vercel.app",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

class Query(BaseModel):
    question: str

@app.get("/")
def root():
    return {"message": "Udyara API is running successfully"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/ask")
async def ask_policy(query: Query):
    try:
        if not query.question.strip():
            raise HTTPException(status_code=400, detail="Question cannot be empty")
            
        result = await asyncio.to_thread(ask_agent, query.question)

        return {
            "answer": result["answer"],
            "sources": result.get("sources", []),
            "status": "success"
        }

    except Exception as e:
        error_msg = str(e)
        if "429" in error_msg or "quota" in error_msg.lower() or "limit" in error_msg.lower():
            friendly_error = "The AI service is currently experiencing high traffic or has reached its request limit. Please try again in a minute."
        else:
            friendly_error = error_msg
        raise HTTPException(status_code=500, detail=friendly_error)

