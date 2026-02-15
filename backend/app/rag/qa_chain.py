import google.generativeai as genai
from app.config import GEMINI_API_KEY
from app.rag.retriever import get_retriever

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-pro")

def ask_udyara(question: str):
    retriever = get_retriever()
    docs = retriever.get_relevant_documents(question)

    context = "\n\n".join([d.page_content for d in docs])

    prompt = f"""
You are Udyara, an AI policy navigator.
Answer ONLY using the policy context below.
Explain eligibility clearly and transparently.

Policy Context:
{context}

User Question:
{question}

Answer:
"""

    response = model.generate_content(prompt)
    return response.text
