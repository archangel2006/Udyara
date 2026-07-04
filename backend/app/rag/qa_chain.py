import google.generativeai as genai
from app.config import GEMINI_API_KEY
from app.rag.retriever import get_retriever


genai.configure(api_key=GEMINI_API_KEY)


def generate_with_fallback(prompt: str) -> str:
    models_to_try = ["gemini-2.5-flash", "gemini-3.5-flash", "gemini-2.0-flash", "gemini-flash-latest"]
    last_err = None
    for model_name in models_to_try:
        try:
            print(f"[LLM] Trying model: {model_name}...")
            model = genai.GenerativeModel(model_name)
            response = model.generate_content(prompt)
            if response.text:
                print(f"[LLM] Success with model: {model_name}")
                return response.text
        except Exception as e:
            print(f"[LLM] Model {model_name} failed: {e}")
            last_err = e
    raise last_err or Exception("All Gemini models failed to respond")

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

    return generate_with_fallback(prompt)

