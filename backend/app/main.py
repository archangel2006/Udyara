from fastapi import FastAPI
from app.rag.qa_chain import ask_nitiai

app = FastAPI(title="NitiAI – Policy Navigator")

@app.get("/")
def health():
    return {"status": "NitiAI running"}

@app.post("/query")
def query_agent(question: str):
    answer = ask_nitiai(question)
    return {"answer": answer}
