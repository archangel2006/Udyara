from google import genai
from google.genai import types
from app.config import GEMINI_API_KEY
from app.rag.retriever import get_retriever
import time

client = genai.Client(api_key=GEMINI_API_KEY)

SYSTEM_PROMPT = """
You are Udyara, a policy intelligence agent focused on supporting women entrepreneurs in India.
Answer ONLY from the provided policy context related to women-led startups, schemes, and incentives.
- Give concise answer with eligibility and benefits only. Suggest next steps briefly.
- If the answer is not found, say "Not mentioned in policy" and suggest related questions the user can ask.
- Use simple, easy-to-understand language; avoid technical jargon.
- If applicable, mention other government schemes that may complement the answer.
"""

def ask_agent(question: str, history: list = []):
    start = time.time()
    print("🔍 Retrieving documents...")

    retriever = get_retriever()
    docs = retriever.invoke(question)

    print(f"📄 Retrieved {len(docs)} chunks")

    context = "\n\n".join([d.page_content[:800] for d in docs])

    # Format components for the new SDK
    # history is already formatted as [{"role": "user", "parts": ["..."]}, ...]
    # We append the current query at the end
    full_query = f"Policy Context:\n{context}\n\nQuestion: {question}"
    
    contents = []
    for h in history:
        # Map existing history format to new SDK Content objects
        # We assume h["parts"] is a list of strings
        contents.append(types.Content(role=h["role"], parts=[types.Part(text=p) for p in h["parts"]]))
    
    # Append the new user message
    contents.append(types.Content(role="user", parts=[types.Part(text=full_query)]))

    print("🤖 Calling Gemini (New SDK)...")
    
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=contents,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
        )
    )

    print(f"✅ Gemini responded in {time.time() - start:.2f}s")

    # Extract sources from retrieved docs
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
        "answer": response.text,
        "sources": formatted_sources
    }
