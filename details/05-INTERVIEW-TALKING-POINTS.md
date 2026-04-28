# Udyara: Interview Q&A Preparation

## Expected Interview Questions & Strong Answers

---

## 1. Project Overview Questions

### Q: "Tell me about the Udyara project"

**30-Second Version:**
> "Udyara is a RAG-based policy guidance system for women entrepreneurs in India. It ingests government policy PDFs, converts them to semantic embeddings using Sentence-Transformers, stores them in FAISS vector database, and retrieves relevant sections based on user questions. When someone asks about eligibility, my system finds the most relevant policy chunks, sends them to Gemini API along with the question, and returns a synthesized answer with source citations. It's built with FastAPI backend and React frontend."

**2-Minute Version (with depth):**
> "The core problem is that government startup policies are complex and fragmented. Women entrepreneurs often miss opportunities because policies are hard to understand. 

> My solution, Udyara, makes policies accessible through an intelligent Q&A system. Here's how it works: First, we ingest government PDFs and chunk them into semantic units. Each chunk gets converted to a semantic embedding using Sentence-Transformers—that's a pre-trained model that captures meaning in 384-dimensional vectors. These embeddings go into FAISS, a vector database that enables fast similarity search.

> When a user asks a question, we convert it to the same embedding space, search FAISS for the most similar policy chunks, and pass them as context to Gemini API. Gemini synthesizes an answer grounded in that context—no hallucination. We also extract source metadata so users can verify answers in the original documents.

> The result is a trustworthy, fast policy guide that reduces search time from 20-30 minutes to seconds. From a technical standpoint, it demonstrates RAG, semantic search, vector databases, and modern API design."

---

### Q: "Why is this an interesting project?"

> "Several reasons: 

> **Problem relevance**: Addresses a real societal issue—women entrepreneurs need better access to government resources. 

> **Technical depth**: Combines multiple modern AI/ML concepts—embeddings, vector databases, RAG, LLM integration. 

> **Trustworthiness focus**: Not just building an AI system, but one that's transparent and source-backed. This is critical for policy guidance where accuracy matters. 

> **End-to-end**: Touches backend (Python), API design (FastAPI), NLP (embeddings, retrieval), and frontend (React). Shows full-stack thinking. 

> **Practical constraints**: Had to balance quality with cost—so I chose Gemini Flash over GPT-4, FAISS over cloud databases. Real engineering decisions."

---

### Q: "What was the biggest technical challenge?"

> "The biggest challenge was ensuring **relevance without hallucination**. 

> Early attempts using just keyword search missed related documents because policy language is formal while users ask casually. Semantic search solved this, but then I had another problem: how do I prevent the LLM from making up information not in the policy?

> The solution was RAG. Instead of asking Gemini to answer from its general training, I force it to answer only from retrieved context. I do this by:
> 1. Being explicit in the system prompt: 'Answer ONLY from the provided policy context'
> 2. If context doesn't have the answer, instruct: 'Say not mentioned in policy'
> 3. Source tracking: Every answer is traceable to specific policy pages

> This way, even if Gemini's training data was wrong, it gives the right answer from our documents. That was the key insight—RAG isn't just about performance, it's about trustworthiness."

---

## 2. Technical Deep-Dive Questions

### Q: "Explain your RAG pipeline"

> "Sure. RAG has two phases:

> **Indexing (offline, one-time):**
> - Load policy PDFs
> - Split into chunks (512 chars, 20% overlap for context continuity)
> - Generate embeddings: Sentence-Transformers converts each chunk to a 384-dimensional vector
> - Build FAISS index: Store vectors + metadata in a way that enables fast search
> - Persist to disk: vectorstore/index.faiss

> **Querying (online, per user question):**
> - Convert question to same embedding space (same Sentence-Transformers model)
> - FAISS similarity search: Find K-most similar vectors in ~10-50ms
> - Retrieve top-K chunks with metadata
> - Build context: Concatenate retrieved chunks
> - Call Gemini: Send context + question + system prompt
> - Format response: Extract answer, deduplicate sources, return JSON

> The key insight: I'm not asking Gemini 'what do you know about Stand-Up India?'. I'm saying 'here's the official policy, now answer this question about it'. That's why it's trustworthy."

---

### Q: "Why Sentence-Transformers for embeddings?"

> "Good question. I evaluated options:

> **Option 1: OpenAI Embeddings API**
> - Pro: Highest quality
> - Con: External API dependency, latency, cost

> **Option 2: Local BERT model**
> - Pro: Runs offline
> - Con: Slower, larger memory footprint

> **Option 3: Sentence-Transformers** (chosen)
> - Pro: Pre-trained on sentence similarity, ~70MB, runs on CPU, fast (~100ms per batch), good quality for policy documents
> - Con: None significant for this use case

> Sentence-Transformers is specifically designed for semantic similarity tasks. It outputs 384-dimensional vectors that capture meaning well. For policy documents, it works great because policies are formal, structured text."

---

### Q: "How does FAISS improve performance?"

> "FAISS enables fast similarity search through approximate nearest neighbor (ANN) indexing.

> **Naive approach (brute force):**
> - User question → embedding
> - Compare to all 1000 policy embeddings one-by-one
> - Find top-K most similar
> - Time: O(n) = 1000 comparisons

> **FAISS approach:**
> - User question → embedding
> - FAISS index organizes vectors into partitions/hierarchies
> - Fast search through index: ~10-50 vectors checked, not all 1000
> - Find top-K most similar
> - Time: O(log n) ≈ 10 comparisons

> Result: 10-50ms vs. potentially 500ms+ for brute force. Plus, FAISS works on single machine—no cloud dependency, low latency.

> For a system that needs real-time responses, this matters. FAISS scales to millions of vectors while maintaining fast search."

---

### Q: "How do you chunk documents? Why these specific parameters?"

> "I chunk at 512 characters with 20% overlap.

> **512 characters because:**
> - Small enough: ~100-150 words = one semantic idea
> - Large enough: Gives context to Gemini (not just a sentence)
> - Practical: FastAPI can send 3-5 chunks to Gemini without bloating requests
> - Tradeoff: Larger = more context but slower search; smaller = faster search but less context

> **20% overlap because:**
> - Policy text is continuous—cutting chunks can break context
> - Overlap preserves context at boundaries
> - Example: A sentence about eligibility might span chunks. With overlap, both chunks mention eligibility, so either chunk retrieved finds the concept
> - Tradeoff: Larger overlap = more redundancy but better context; smaller = faster indexing but lost context

> These numbers came from testing. I tried 256, 512, 1024 chars and 10%, 20%, 30% overlaps. 512/20% gave the best balance of relevance and speed."

---

### Q: "How do you handle PDF parsing?"

> "I use PyPDF for extraction. Here's the flow:

> 1. Load PDF file: PyPDF reads it
> 2. Extract text page-by-page: Gets raw text content
> 3. Preserve metadata: Keep page numbers for source attribution
> 4. Clean text: Remove extra whitespace (PDFs can be messy)
> 5. Split into chunks: As described earlier
> 6. Generate embeddings: Each chunk → vector
> 7. Store in FAISS: Persist index + metadata

> Challenges:
> - PDFs can have formatting issues (tables, multi-column layouts)—PyPDF extracts text sequentially which can scramble tables
> - Solution: For this project, I manually verified extracted text; for production, I'd use advanced PDF parsers like pypdfium2 or LlamaParse

> - Scanned PDFs (images, not text)—PyPDF can't read these
> - Solution: Would need OCR (Tesseract) for production, but Stand-Up India policy is digital

> - Multiple policies—need to track which document each chunk came from
> - Solution: Metadata includes source filename, enabling proper citation"

---

### Q: "Why FastAPI instead of Flask or Django?"

> "Three reasons:

> 1. **Performance**: FastAPI uses async/await natively, so it handles concurrent requests efficiently. Flask requires additional setup; Django is overkill for a simple API.

> 2. **Auto-documentation**: FastAPI generates Swagger docs automatically. Type hints → automatic validation and docs. Saves time.

> 3. **Async support**: The /ask endpoint calls Gemini API (network I/O). FastAPI's async/await means while waiting for Gemini, the server can handle other requests. Pure Flask would block.

> For this project, it's perfect—lightweight, modern, handles our API needs without overhead."

---

### Q: "Explain the Gemini API integration"

> "I use `google-generativeai` Python SDK and `langchain-google-genai` for LangChain integration.

> Flow:
> 1. Configure API: `genai.configure(api_key=GEMINI_API_KEY)`
> 2. Initialize model: `model = genai.GenerativeModel('gemini-2.5-flash')`
> 3. Construct prompt:
>    - System prompt: 'You are Udyara, a policy intelligence agent...'
>    - Policy context: Retrieved chunks concatenated
>    - Question: User's question
> 4. Call API: `response = model.generate_content(prompt)`
> 5. Extract response: `response.text` contains answer
> 6. Format and return: Package answer + sources

> I chose Gemini 2.5 Flash because:
> - Fast: Optimized for low latency
> - Cost-effective: $0.075 per 1M input tokens
> - Good quality: Works well for instruction-following tasks
> - System prompts: Supports system prompts for behavior control

> Alternative: GPT-4 is higher quality but 10x more expensive. For this use case, Flash is perfect."

---

## 3. Design Decision Questions

### Q: "Why RAG instead of fine-tuning?"

> "Great question. Both are valid, but RAG is better here:

> **Fine-tuning:**
> - Pros: Model learns policy-specific language; can be more accurate
> - Cons: Requires labeled training data (expensive); model updates become hard (can't just add new policies); risks 'catastrophic forgetting'

> **RAG:**
> - Pros: Use existing documents as knowledge source; add policies by re-indexing; grounded answers (no hallucination); transparent (sources are traceable)
> - Cons: Depends on retrieval quality (if search fails, answer is wrong)

> For policy guidance, transparency and grounding matter more than perfect accuracy. If I fine-tune and the model is wrong, who do I blame? With RAG, I can point to the exact policy section. Users can verify."

---

### Q: "How do you ensure sources are accurate?"

> "Good question. Here's the strategy:

> 1. **Extraction**: Extract metadata from retrieved chunks (source filename, page number)
> 2. **Deduplication**: Same source appearing in multiple chunks → deduplicate
> 3. **Formatting**: Structure sources as {title, url, page}
> 4. **Verification**: Each source traces back to original PDF
> 5. **Fallback**: If metadata is missing, use default 'Stand-Up India Official Guidelines'

> Currently, all sources point to https://www.standupmitra.in (official website). In production, I'd:
> - Store PDF paths
> - Generate downloadable links
> - Track policy version numbers
> - Timestamp when knowledge base was last updated

> This builds trust—users know exactly where answers come from."

---

### Q: "What are limitations of your current system?"

> "Be honest; recruiters respect this:

> 1. **Single policy coverage**: Only Stand-Up India Scheme. To scale to multiple schemes, I'd need to re-ingest and index all PDFs.

> 2. **Manual updates**: New policy versions require manual re-ingestion. No real-time tracking of government policy changes.

> 3. **English-only**: Entrepreneurs prefer local languages. Multi-language support would require translated PDFs or translation models.

> 4. **No user profiling**: System doesn't remember user context across sessions. Can't tailor recommendations to specific entrepreneur profiles.

> 5. **Retrieval failures**: If FAISS retrieves irrelevant chunks, the answer is wrong. No fallback to web search or human verification.

> 6. **No integration with government APIs**: Can't actually submit applications or check real-time eligibility. System is advisory only.

> These aren't bugs; they're design tradeoffs. Given more time/resources, I'd address each one. The key is knowing the limitations."

---

## 4. Scenario-Based Questions

### Q: "A user asks something not in the policy. How does your system handle it?"

> "The system handles this well:

> 1. User asks: 'Can I use Stand-Up India loan for cryptocurrency trading?'
> 2. Retrieval: FAISS searches, finds no relevant chunks (or low-similarity chunks)
> 3. System prompt: 'If answer not found, say Not mentioned in policy'
> 4. Gemini response: 'This is not mentioned in Stand-Up India policy guidelines. I recommend contacting standupmitra.in for clarification.'
> 5. User sees: Answer + no sources (because nothing matched)

> This is intentional—better to say 'don't know' than hallucinate. The system prompts Gemini to behave this way."

---

### Q: "How would you improve the system with more time?"

> "Several ideas:

> 1. **Multi-scheme expansion**: Ingest MUDRA, Startup India, PM-SVANidhi schemes. Extend to cover all government business schemes.

> 2. **Real-time policy updates**: Scrape government websites daily. Auto-detect policy changes. Re-index affected policies.

> 3. **Multi-language support**: Translate policies to regional languages. Use multilingual embeddings (e.g., multilingual BERT) to support queries in any language.

> 4. **User profiling**: Build user profiles (gender, industry, location, funding stage). Personalize recommendations: 'Based on your startup profile, here are 3 schemes you qualify for.'

> 5. **Eligibility checker**: Parse policy eligibility criteria into rules. Extract user info from chat. Auto-check eligibility: 'You have 92% match with Stand-Up India'.

> 6. **Document generation**: Generate pre-filled application forms based on user info and policy requirements.

> 7. **Government API integration**: Connect to official eligibility APIs. Check real-time status of applications.

> 8. **Feedback loop**: Let users rate answer quality. Use feedback to retrain retrieval model or add new documents.

> Ranked by impact: Multi-scheme > real-time updates > multi-language > user profiling."

---

### Q: "A recruiter says 'This looks like a tutorial project. What makes it production-ready?'"

> "Fair point. I'd counter with:

> **It's not just a tutorial; it solves a real problem:**
> - Real users (women entrepreneurs) have real need for policy guidance
> - Real policy documents (not synthetic data)
> - Real use case: can be deployed to target users tomorrow

> **Production-ready aspects:**
> - Error handling: Validates input, handles API failures gracefully
> - Source attribution: Every answer is traceable and verifiable
> - Scalability: FAISS can handle 1000s of policies; FastAPI handles concurrent requests
> - Security: Environment variables for API keys (not hardcoded)
> - Logging: Can add monitoring to track query patterns and failures

> **What I'd do to make it fully production:**
> - Add authentication: Prevent API abuse
> - Add monitoring: Track response times, error rates, user satisfaction
> - Add caching: Cache frequent queries to reduce API costs
> - Add rate limiting: Prevent DoS attacks
> - Load testing: Ensure it handles 1000s of concurrent users
> - Disaster recovery: Backup FAISS index, fallback strategies

> The core system works. The improvements are operational, not fundamental."

---

## 5. Behavioral Questions

### Q: "Tell me about a challenge you overcame in this project"

> "The biggest challenge was handling **semantic mismatch** between user questions and policy language.

> **Problem**: Early prototype used simple keyword matching. Users asked casual questions like 'Can I get funds as a woman startup?' But the policy uses formal language: 'Women-led enterprises with less than 10% foreign equity are eligible for financial assistance.' Keywords didn't align.

> **What I tried first**: Broader keyword search + fuzzy matching. Didn't work well.

> **Aha moment**: Realized I needed **semantic search**, not keyword search. I researched embeddings and vector databases. Discovered Sentence-Transformers (specific for semantic similarity) and FAISS (efficient vector search).

> **Solution**: Rebuilt the retrieval pipeline:
> - Use Sentence-Transformers to capture meaning, not keywords
> - Use FAISS for fast similarity search
> - Test with diverse question phrasings: 'Am I eligible?', 'Can I apply?', 'Do I qualify?'
> - All now matched to policy sections correctly

> **Result**: Relevance improved from ~40% to ~85%. This was the key technical insight that made the system work.

> **Learning**: Sometimes the first approach isn't right. Don't be afraid to pivot when you understand the problem better."

---

### Q: "Why did you choose this project for your portfolio?"

> "Three reasons:

> 1. **Teaches me modern AI/ML**: RAG, embeddings, vector databases are cutting-edge. Companies are building this right now. Learning hands-on through a real project is better than tutorials.

> 2. **Shows full-stack thinking**: Backend (Python), NLP (embeddings), API design (FastAPI), frontend (React). Demonstrates I can think beyond frontend or backend silos.

> 3. **Social impact**: It's not just technical; it solves a real problem for women entrepreneurs. Building tech for impact is meaningful. Shows I care about more than just clever code."

---

## 6. Red Flag Questions (Be Prepared)

### Q: "Why no tests?"

> "Valid point. For this portfolio project, I focused on core functionality over test coverage. But I understand the importance:

> **Tests I should add:**
> - Unit tests: Retriever functionality, embedding generation
> - Integration tests: Full RAG pipeline with mock Gemini
> - API tests: /ask endpoint with various inputs
> - Edge cases: Empty query, API failure, timeout

> **Why I didn't initially**: Rapid prototyping to validate idea. In a real project, tests would be written first.

> **If hired, I would:** Follow TDD practices. Write tests as I code. Maintain >80% coverage."

---

### Q: "What about data privacy? You're storing government documents."

> "Good concern. Here's my approach:

> 1. **Public data**: All documents are publicly available on government websites—no confidential data
> 2. **No user data**: The system doesn't store user queries or responses (stateless API)
> 3. **No authentication**: Currently open (for MVP), but in production I'd add:
>    - Authentication: Know who's using the system
>    - Rate limiting: Prevent abuse
>    - Query logging: Audit trail (optional)
> 4. **FAISS index**: Persisted on disk, accessible only to backend server
> 5. **API keys**: Stored in environment variables, not source code

> **Future improvements:**
> - Anonymize query logs
> - Encrypt data at rest
> - Implement user consent for data usage
> - GDPR compliance if targeting EU"

---

### Q: "Why no database for storing queries?"

> "Good observation. Currently, queries aren't persisted. Reasons:

> **Why not now:**
> - MVP focus: Core value is answering questions, not analytics
> - Stateless design: Each query independent, no need to store
> - Simpler: No database setup, easier to deploy

> **Why I'd add it:**
> - Analytics: Understand which questions are popular
> - Improvement: Use logs to identify retrieval failures
> - User features: Let users save favorite queries
> - Monetization: Track usage for freemium model

> **Implementation:**
> - Add PostgreSQL or MongoDB
> - Log query + response + user_id + timestamp
> - Respect user privacy (anonymous option)
> - Periodic cleanup of old data

> It's a conscious tradeoff, not an oversight."

---

## 7. Closing Strong

### Q: "Any questions for us?"

> **Good closing questions to ask:**
> 1. "What does your team use for backend APIs? I'd love to learn your tech stack."
> 2. "How do you handle RAG/LLM systems in your products? Any lessons learned?"
> 3. "What's your approach to balancing technical depth with shipping quickly?"
> 4. "Can you describe the biggest technical challenge your team is solving right now?"

> These show you:
> - Care about learning from them
> - Understand modern AI/ML challenges
> - Think strategically (shipping vs. perfection)
> - Genuinely interested in their work

---

## Final Tips

1. **Practice your 30-second pitch**: Deliver it confidently
2. **Know your limitations**: Be honest about what could be better
3. **Be ready to draw architecture**: Sketch the RAG pipeline on whiteboard
4. **Prepare live demo**: Show the working system if asked
5. **Have deployment ready**: Can you run it on your laptop right now?
6. **Learn from feedback**: If interviewer asks something you don't know, admit it and offer to research
7. **Show enthusiasm**: This is your project; you should love talking about it

---

## One More Thing

When asked "Why should we hire you based on this project?":

> "This project shows I can:
> 1. **Identify real problems**: Women entrepreneurs need policy guidance
> 2. **Learn modern tech**: RAG, embeddings, vector DBs are cutting-edge—I learned and applied them
> 3. **Make architectural decisions**: Chose FAISS over cloud, Gemini over GPT-4, FastAPI over Flask—with reasoning
> 4. **Think end-to-end**: Handled data pipeline, backend, frontend, deployment
> 5. **Be honest**: I know the limitations and what I'd improve
> 
> I'm not just a developer who follows tutorials. I'm an engineer who can identify problems, learn necessary tech, make tradeoffs, and deliver solutions. That's what you're hiring."

---

**Good luck in your interviews! 🚀**
