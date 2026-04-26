#from unittest import result
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.agent import ask_agent
import asyncio

app = FastAPI(title="Udyara - Cultivating Women-Led Enterprises")

# CORS 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=False, 
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    question: str

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
        raise HTTPException(status_code=500, detail=str(e))
