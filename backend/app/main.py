#from unittest import result
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.agent import ask_agent
import asyncio
import traceback

app = FastAPI(title="Udyara - Cultivating Women-Led Enterprises")

# CORS 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=False, 
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    role: str
    content: str

class Query(BaseModel):
    question: str
    history: list[Message] = []

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/ask")
async def ask_policy(query: Query):
    try:
        if not query.question.strip():
            raise HTTPException(status_code=400, detail="Question cannot be empty")
            
        # Format history for Gemini
        formatted_history = []
        for m in query.history:
            # Map role names to Gemini's expected 'user' and 'model'
            role = "user" if m.role == "user" else "model"
            formatted_history.append({"role": role, "parts": [m.content]})

        result = await asyncio.to_thread(ask_agent, query.question, formatted_history)

        return {
            "answer": result["answer"],
            "sources": result.get("sources", []),
            "status": "success"
        }

    except Exception as e:
        print("ERROR OCCURRED:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
