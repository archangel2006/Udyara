import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Policies from "./pages/Policies";
import About from "./pages/About";
import Agent from "./pages/Agent";
import Sidebar from "./components/Sidebar";

import { useState, useEffect } from "react";
import { HiChatBubbleLeft } from "react-icons/hi2";

function Layout() {
  const location = useLocation();
  const isAgentPage = location.pathname.startsWith("/agent");

  // State Management for Chats
  const [chats, setChats] = useState(() => {
    try {
      const saved = localStorage.getItem('udyara_chats');
      const parsed = saved ? JSON.parse(saved) : null;
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(c => ({ ...c, messages: c.messages || [] }));
      }
    } catch (e) {
      console.error("Failed to parse chats", e);
    }
    return [{ id: 'default', title: 'Welcome Chat', messages: [] }];
  });
  const [activeChatId, setActiveChatId] = useState('default');

  // Save to localStorage whenever chats change
  useEffect(() => {
    localStorage.setItem('udyara_chats', JSON.stringify(chats));
  }, [chats]);

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: `Chat ${chats.length + 1}`,
      messages: []
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
  };

  const handleSelectChat = (id) => setActiveChatId(id);

  const handleRenameChat = (id) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      setChats(chats.map(c => c.id === id ? { ...c, title: newTitle } : c));
    }
  };

  const handleDeleteChat = (id) => {
    if (chats.length === 1) {
      alert("Cannot delete the last chat.");
      return;
    }
    const filtered = chats.filter(c => c.id !== id);
    setChats(filtered);
    if (activeChatId === id) {
      setActiveChatId(filtered[0].id);
    }
  };

  const handleUpdateMessages = (chatId, newMessages) => {
    setChats(chats.map(c => c.id === chatId ? { ...c, messages: newMessages } : c));
  };

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isAgentPage) {
    return (
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex flex-1 min-h-0 overflow-hidden relative">
          <Sidebar 
            chats={chats} 
            activeChat={activeChatId} 
            onSelectChat={handleSelectChat}
            onNewChat={handleNewChat}
            onRenameChat={handleRenameChat}
            onDeleteChat={handleDeleteChat}
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />
          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden p-4 border-b border-gray-100 dark:border-slate-900 bg-white dark:bg-slate-950 flex items-center">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 text-teal-600 font-semibold text-sm"
              >
                <HiChatBubbleLeft size={18} />
                <span>Chat History</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <Agent 
                activeChat={activeChat} 
                onUpdateMessages={(msgs) => handleUpdateMessages(activeChat.id, msgs)} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Layout />
      </div>
    </BrowserRouter>
  );
}
