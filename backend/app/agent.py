import google.generativeai as genai
from app.config import GEMINI_API_KEY
from app.rag.retriever import get_retriever
import time

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")

SYSTEM_PROMPT = """
You are NitiAI, a policy intelligence agent focused on supporting women entrepreneurs in India.
Answer ONLY from the provided policy context related to women-led startups, schemes, and incentives.
- Give concise answer with eligibility and benefits only. Suggest next steps briefly.
- If the answer is not found, say "Not mentioned in policy" and suggest related questions the user can ask.
- Use simple, easy-to-understand language; avoid technical jargon.
- If applicable, mention other government schemes that may complement the answer.
"""

def ask_agent(question: str):
    start = time.time()
    print("🔍 Retrieving documents...")

    retriever = get_retriever()
    #docs = retriever.get_relevant_documents(question)
    docs = retriever.invoke(question)


    print(f"📄 Retrieved {len(docs)} chunks")

    context = "\n\n".join([d.page_content[:800] for d in docs])

    prompt = f"""
{SYSTEM_PROMPT}

Policy Context:
{context}

Question:
{question}

Answer clearly.
"""

    print("🤖 Calling Gemini...")
    response = model.generate_content(prompt)

    print(f"✅ Gemini responded in {time.time() - start:.2f}s")
    return response.text
