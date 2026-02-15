import { useState, useEffect, useRef } from 'react';
import { HiPaperAirplane } from 'react-icons/hi2';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: "I'm analyzing this question. In a real deployment, I'd connect to the backend RAG system to pull relevant policy documents and provide verified guidance with source citations.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const suggestedQueries = [
    'Am I eligible for Stand-Up India as a woman entrepreneur?',
    'What documents do I need to apply?',
    'How much loan can I get?',
    'What if my application gets rejected?',
  ];

  return (
    <div className="flex flex-col h-full min-h-0 bg-white dark:bg-slate-950 transition-colors duration-300">
  
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 ">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="py-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to Udyara
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm here to help you understand and navigate government schemes. Try asking me about your eligibility, required documents, or how to apply!
              </p>

              <div className="grid md:grid-cols-2 gap-3 mt-8">
                {suggestedQueries.map((query, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInputValue(query)}
                    className="p-3 text-left bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg hover:border-teal-400 dark:hover:border-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all group"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      {query}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === 'user'
                  ? 'justify-end'
                  : 'justify-start'
              }`}
            >
              <div
                className={`max-w-2xl px-6 py-4 rounded-xl ${
                  message.type === 'user'
                    ? 'bg-linear-to-r from-teal-600 to-teal-500 text-white rounded-br-none'
                    : 'bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white rounded-bl-none border border-gray-200 dark:border-slate-800'
                }`}
              >
                <p className="leading-relaxed text-sm sm:text-base">
                  {message.text}
                </p>

                <span
                  className={`text-xs mt-2 block ${
                    message.type === 'user'
                      ? 'text-teal-100'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white px-6 py-4 rounded-xl rounded-bl-none border border-gray-200 dark:border-slate-800">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 px-3 py-4">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me about policies, eligibility, documents..."
              className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-500 dark:focus:border-teal-500 transition-colors"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="px-6 py-2 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <HiPaperAirplane size={20} />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 max-w-4xl mx-auto">
          💡 Tip: Ask specific questions about your situation for more accurate guidance
        </p>
      </div>
    </div>
  );
}
