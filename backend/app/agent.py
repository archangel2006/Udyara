import google.generativeai as genai
from app.config import GEMINI_API_KEY
from app.rag.retriever import get_retriever
import time

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

SYSTEM_PROMPT = """
You are Udyara, a policy intelligence agent focused on supporting women entrepreneurs in India.
Answer ONLY from the provided policy context related to women-led startups, schemes, and incentives.
- Give concise answer with eligibility and benefits only. Suggest next steps briefly.
- If the answer is not found, say "Not mentioned in policy" and suggest related questions the user can ask.
- Use simple, easy-to-understand language; avoid technical jargon.
- If applicable, mention other government schemes that may complement the answer.
"""

def ask_agent(question: str):
    start = time.time()
    print("[SEARCH] Retrieving documents...")

    retriever = get_retriever()
    docs = retriever.invoke(question)

    print(f"[SEARCH] Retrieved {len(docs)} chunks")

    context = "\n\n".join([d.page_content[:800] for d in docs])

    prompt = f"""
{SYSTEM_PROMPT}

Policy Context:
{context}

Question:
{question}

Answer clearly.
"""

    print("[LLM] Calling Gemini with fallback...")
    answer_text = generate_with_fallback(prompt)

    print(f"[SUCCESS] Gemini responded in {time.time() - start:.2f}s")

    # ✅ Extract sources from retrieved docs
    sources = []
    for d in docs:
        page = d.metadata.get("page", None)
        source_file = d.metadata.get("source", "Stand-Up India Policy")

        sources.append({
            "title": "Stand-Up India Official Guidelines",
            "url": "https://www.standupmitra.in",
            "page": page
        })

    # Remove duplicates
    unique_sources = { (s["title"], s["url"], s["page"]) for s in sources }

    formatted_sources = [
        {"title": t, "url": u, "page": p}
        for (t, u, p) in unique_sources
    ]

    return {
        "answer": answer_text,
        "sources": formatted_sources
    }
