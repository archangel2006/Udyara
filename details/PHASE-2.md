# Phase 2: SQL Database Persistence

This phase replaces `localStorage` with a permanent SQLite database on the backend.

## 1. Setup Database Models
Create `backend/app/models.py`.

```python
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class ChatSession(Base):
    __tablename__ = "chats"
    id = Column(String, primary_key=True) # UUID
    title = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class ChatMessage(Base):
    __tablename__ = "messages"
    id = Column(Integer, primary_key=True)
    chat_id = Column(String, ForeignKey("chats.id"))
    role = Column(String) # user/bot
    content = Column(Text)
    timestamp = Column(DateTime, default=datetime.utcnow)
```

## 2. API Endpoints for Persistence
Add routes to `backend/app/main.py`.

- `GET /chats`: List all chat titles.
- `GET /chats/{id}`: Get full message history for a chat.
- `POST /chats`: Create new chat session.
- `DELETE /chats/{id}`: Delete a chat.

## 3. Frontend Migration
Update `Agent.jsx` to fetch chats from the backend on mount.

```javascript
useEffect(() => {
  const fetchChats = async () => {
    const res = await fetch(`${API_URL}/chats`);
    const data = await res.json();
    setChats(data);
  };
  fetchChats();
}, []);
```

## 4. Testing Phase 2
1. **Database Check**: Open the `udyara.db` file (using a SQLite viewer) to see if messages are being saved.
2. **Multi-Browser Test**: Opening the app in a Private Window (or another browser) should show the same chat history if you implement user accounts (or just shared history for now).
3. **Data Integrity**: Ensure that deleting a chat also deletes its messages from the database.
