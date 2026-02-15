from fastapi import FastAPI
from pydantic import BaseModel
from app.agent import ask_agent

app = FastAPI(title="Udyara - Cultivating Women-Led Enterprises")

class Query(BaseModel):
    question: str

@app.post("/ask")
def ask_policy(query: Query):
    answer = ask_agent(query.question)
    return {"answer": answer}
