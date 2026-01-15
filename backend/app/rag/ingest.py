from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import GoogleGenerativeAIEmbeddings

from app.config import GEMINI_API_KEY
import os

def ingest_policy():
    loader = PyPDFLoader("app/data/policies/standup_india.pdf")
    docs = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=100
    )
    chunks = splitter.split_documents(docs)

    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001",
        google_api_key=GEMINI_API_KEY
    )

    vectorstore = FAISS.from_documents(chunks, embeddings)
    vectorstore.save_local("app/vectorstore")

    print("✅ Policy ingested and vectorstore created")

if __name__ == "__main__":
    ingest_policy()
