from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.embeddings import HuggingFaceEmbeddings
from app.config import GEMINI_API_KEY

def get_retriever():
    #embeddings = GoogleGenerativeAIEmbeddings(
    #    model="models/embedding-001",
    #    google_api_key=GEMINI_API_KEY
    #)
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )


    vectorstore = FAISS.load_local(
        "app/vectorstore",
        embeddings,
        allow_dangerous_deserialization=True
    )

    return vectorstore.as_retriever(search_kwargs={"k": 3})
