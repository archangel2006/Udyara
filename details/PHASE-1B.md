# Phase 1B: Contextual LLM Memory

This phase enables the AI to remember the context of the current conversation by passing previous messages back to Gemini.

## 1. Update Backend `ask_agent`
Modify `backend/app/agent.py` to use Gemini's `ChatSession`.

```python
def ask_agent(question: str, history: list = []):
    # Convert history into Gemini format
    # history = [{"role": "user", "parts": "hi"}, {"role": "model", "parts": "hello"}]
    
    chat = model.start_chat(history=history)
    
    # Send message with context
    response = chat.send_message(question)
    
    return {
        "answer": response.text,
        "sources": [...] # existing source logic
    }
```

## 2. Update FastAPI Route
Modify `backend/app/main.py` to accept history in the request body.

```python
class Message(BaseModel):
    role: str
    content: str

class Query(BaseModel):
    question: str
    history: list[Message] = [] # Optional history

@app.post("/ask")
async def ask_policy(query: Query):
    # Pass query.history to ask_agent
    # Need to map role 'bot' -> 'model' for Gemini
    formatted_history = []
    for m in query.history:
        role = "user" if m.role == "user" else "model"
        formatted_history.append({"role": role, "parts": [m.content]})
        
    result = await asyncio.to_thread(ask_agent, query.question, formatted_history)
    return result
```

## 3. Update Frontend API Call
Update `frontend/src/services/api.js` to send the background messages.

```javascript
export async function askAgent(question, history = []) {
  const response = await fetch(`${API_URL}/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      question, 
      history: history.map(m => ({ role: m.type, content: m.text })) 
    }),
  });
  // ... rest of logic
}
```

## 4. Testing Phase 1B
1. **Pronoun Test**: Ask "What is Stand-Up India?" then ask "How do I apply for **it**?". If the AI knows "it" refers to Stand-Up India, memory is working.
2. **Context Retention**: Tell the AI "My name is Priya" and later ask "What is my name?".
