# Phase 1A: UI Sidebar & Local Memory

This phase focuses on creating the visual "Dashboard" experience and enabling state persistence using the browser's `localStorage`.

## 1. Create Sidebar Component
Create a new file `frontend/src/components/Sidebar.jsx`.

```jsx
import { HiPlus, HiChatBubbleLeft, HiPencil, HiTrash } from "react-icons/hi2";

export default function Sidebar({ chats, activeChat, onSelectChat, onNewChat, onRenameChat, onDeleteChat }) {
  return (
    <div className="w-64 bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col h-full transition-all">
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all font-medium"
        >
          <HiPlus /> New Chat
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
              activeChat === chat.id ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400' : 'hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div className="flex items-center gap-3 truncate">
              <HiChatBubbleLeft className="shrink-0" />
              <span className="truncate text-sm font-medium">{chat.title}</span>
            </div>
            
            <div className="hidden group-hover:flex items-center gap-1">
              <button onClick={(e) => { e.stopPropagation(); onRenameChat(chat.id); }} className="p-1 hover:text-teal-600"><HiPencil size={14} /></button>
              <button onClick={(e) => { e.stopPropagation(); onDeleteChat(chat.id); }} className="p-1 hover:text-red-500"><HiTrash size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 2. Update Layout in `App.jsx`
Modify the `Layout` function to include the sidebar on the `/agent` page.

```jsx
// In App.jsx
if (isAgentPage) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar will be placed here eventually or inside Agent.jsx */}
        <div className="flex-1 overflow-hidden">
          <Agent />
        </div>
      </div>
    </div>
  );
}
```

## 3. Manage State in `Agent.jsx`
Replace the simple `messages` state with a robust `chats` state that syncs with `localStorage`.

```javascript
// New State Management logic for Agent.jsx
const [chats, setChats] = useState(() => {
  const saved = localStorage.getItem('udyara_chats');
  return saved ? JSON.parse(saved) : [{ id: 'default', title: 'Welcome Chat', messages: [] }];
});
const [activeChatId, setActiveChatId] = useState('default');

const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

// Save to localStorage whenever chats change
useEffect(() => {
  localStorage.setItem('udyara_chats', JSON.stringify(chats));
}, [chats]);
```

## 4. Testing Phase 1A
1. **Refresh persistence**: Send a message, refresh the page. The message should still be there.
2. **Multiple Chats**: Click "New Chat". You should see a blank screen. Switch back to the previous chat, and your history should return.
3. **Renaming**: Click the pencil icon, change the name, and ensure it updates in the sidebar.
