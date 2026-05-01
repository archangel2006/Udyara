import { HiPlus, HiChatBubbleLeft, HiPencil, HiTrash, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ 
  chats, 
  activeChat, 
  onSelectChat, 
  onNewChat, 
  onRenameChat, 
  onDeleteChat,
  isCollapsed,
  setIsCollapsed,
  isOpen, // For mobile
  setIsOpen 
}) {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.div
        animate={{ 
          width: isOpen || !isCollapsed ? 260 : 80,
          x: isOpen ? 0 : (typeof window !== "undefined" && window.innerWidth < 1024 ? -260 : 0)
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed lg:relative top-0 bottom-0 left-0 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 flex flex-col h-full z-50 transition-colors duration-300 ${isOpen ? "shadow-2xl" : ""}`}
      >
        {/* Header & Toggle */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-slate-900">
          <AnimatePresence>
            {(isOpen || !isCollapsed) && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-bold text-teal-600 dark:text-teal-500"
              >
                Udyara History
              </motion.span>
            )}
          </AnimatePresence>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-900 rounded-lg text-gray-500 hidden lg:block"
          >
            {isCollapsed ? <HiChevronRight strokeWidth={2} /> : <HiChevronLeft strokeWidth={2} />}
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button
            onClick={onNewChat}
            className="w-full flex items-center justify-center gap-2 p-2.5 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all font-semibold text-sm"
          >
            <HiPlus strokeWidth={2.5} />
            {(isOpen || !isCollapsed) && <span>New Chat</span>}
          </button>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5 scrollbar-hide">
          {chats.map(chat => (
            <div
              key={chat.id}
              onClick={() => {
                onSelectChat(chat.id);
                if (window.innerWidth < 1024) setIsOpen(false);
              }}
              className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                activeChat === chat.id 
                ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400' 
                : 'hover:bg-gray-100 dark:hover:bg-slate-900 text-gray-700 dark:text-gray-400'
              }`}
            >
              <HiChatBubbleLeft className="shrink-0" size={20} />
              {(isOpen || !isCollapsed) && (
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <span className="truncate text-sm font-medium">{chat.title}</span>
                  <div className="hidden group-hover:flex items-center gap-1 ml-2">
                    <button onClick={(e) => { e.stopPropagation(); onRenameChat(chat.id); }} className="p-1 hover:text-teal-600 dark:hover:text-teal-400">
                      <HiPencil size={14} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); onDeleteChat(chat.id); }} className="p-1 hover:text-red-500 underline-offset-4">
                      <HiTrash size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}