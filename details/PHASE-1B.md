# Phase 1B: Contextual LLM Memory (Final)

This phase enables the AI to "remember" the context of a conversation, making it a true intelligent assistant rather than a one-off query tool.

## 1. Backend: Gemini Chat Session (`agent.py`)
Instead of single completions, we use Gemini's `start_chat` method. This maintains an internal state of the conversation.

```python
def ask_agent(question: str, history: list = []):
    # Pass existing history to start the chat session
    chat = model.start_chat(history=history)
    response = chat.send_message(question)
    return {
        "answer": response.text,
        "sources": ...
    }
```

## 2. API Schema Update (`main.py`)
The `/ask` endpoint now accepts an optional `history` array in the request body.

```python
class Query(BaseModel):
    question: str
    history: list[dict] = [] # Format: [{"role": "user", "content": "..."}, ...]
```

## 3. Frontend: Hooking into State (`api.js`)
We've already updated the frontend to pass the `activeChat.messages` directly to the `askAgent` service.

```javascript
// In Agent.jsx
const data = await askAgent(newUserMessage.text, updatedMessages);

// In api.js
body: JSON.stringify({ 
  question, 
  history: history.map(m => ({ 
    role: m.type === "user" ? "user" : "model", 
    content: m.text 
  })) 
})
```

## 4. Key Improvements
- **Contextual Awareness**: You can ask follow-up questions like "How much is the loan amount?" followed by "What are the interest rates for **it**?".
- **Role Mapping**: Frontend using `user/bot` is automatically mapped to Gemini's expected `user/model` roles.

## 5. Testing
1. **The 'It' Test**: Ask about a specific policy, then ask a follow-up using "it" or "this scheme".
2. **Sequential Logic**: Tell the AI "I am a woman founder with 51% stake" and later ask "Am I eligible based on what I told you?".
