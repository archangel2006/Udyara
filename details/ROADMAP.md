# Implementation Roadmap: Chat & Memory

This folder contains the master plan for adding persistence and intelligence to Udyara.

### 🚀 Phases
1.  **[Phase 1A: UI Sidebar & Local Memory](./PHASE-1A.md)**
    - Transform the chat interface into a dashboard.
    - Enable chat history using browser storage.
2.  **[Phase 1B: Contextual LLM Memory](./PHASE-1B.md)**
    - Connect chat history to Gemini's reasoning engine.
    - Make the AI remember previous questions in the same session.
3.  **[Phase 2: SQL Database Persistence](./PHASE-2.md)**
    - Move from browser storage to a robust SQLite database.
    - Ensure your chats are saved permanently on the server.

### 🛠 Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion (for smooth sidebar animations), React Icons.
- **Backend**: FastAPI, SQLAlchemy (ORM), SQLite.
- **AI**: Google Generative AI (Gemini 1.5 Flash).

---

### NLP & UI Optimization Tips
- **Formatting**: Use the `prose` class from `@tailwindcss/typography` to make the AI's markdown responses look premium.
- **Prompting**: Always ask the model to "Cite the specific section of the policy" to increase trust.
- **Smoothness**: Use Framer Motion for the sidebar transitions to give it a "premium" feel.
