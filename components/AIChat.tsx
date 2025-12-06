import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User, MessageSquare, Loader2 } from 'lucide-react';
import { chatWithGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: '你好！我是张宇翔的AI助手。你可以问我关于他的技术栈、项目经验，或者为什么他适合这个岗位。', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithGemini(userMsg.content);
      const botMsg: ChatMessage = { role: 'model', content: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#24292f] dark:bg-[#1f6feb] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform z-40 group border border-transparent dark:border-[#58a6ff]"
          title="Chat with Yuxiang's AI Bot"
        >
          <MessageSquare size={24} className="group-hover:text-[#0969da] dark:group-hover:text-white transition-colors" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-96 h-[500px] bg-white dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden font-sans">
          {/* Header */}
          <div className="bg-[#24292f] dark:bg-[#161b22] p-4 border-b border-[#30363d] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-bold text-white dark:text-[#c9d1d9] text-sm">Yuxiang's Assistant</h3>
                <p className="text-xs text-gray-400 dark:text-[#8b949e] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969da] dark:bg-[#1f6feb] animate-pulse"></span>
                  Powered by Gemini
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f6f8fa] dark:bg-[#0d1117]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.role === 'user' ? 'bg-white dark:bg-[#161b22] border-[#d0d7de] dark:border-[#30363d]' : 'bg-[#24292f] dark:bg-[#1f6feb] border-transparent'}`}>
                  {msg.role === 'user' ? <User size={14} className="text-[#24292f] dark:text-[#c9d1d9]" /> : <Bot size={14} className="text-white" />}
                </div>
                <div className={`max-w-[75%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#0969da] dark:bg-[#1f6feb] text-white rounded-tr-none' 
                    : 'bg-white dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] text-[#24292f] dark:text-[#c9d1d9] rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#24292f] dark:bg-[#1f6feb] flex-shrink-0 flex items-center justify-center">
                  <Bot size={14} className="text-white" />
                </div>
                <div className="bg-white dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] p-3 rounded-lg rounded-tl-none shadow-sm">
                  <Loader2 size={16} className="animate-spin text-[#57606a] dark:text-[#8b949e]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-[#161b22] border-t border-[#d0d7de] dark:border-[#30363d]">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my skills..."
                className="w-full bg-[#f6f8fa] dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-md py-3 pl-4 pr-12 text-sm text-[#24292f] dark:text-[#c9d1d9] focus:outline-none focus:border-[#0969da] dark:focus:border-[#1f6feb] focus:ring-1 focus:ring-[#0969da] dark:focus:ring-[#1f6feb] placeholder-[#57606a] dark:placeholder-[#8b949e]"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#0969da] dark:bg-[#1f6feb] text-white rounded hover:bg-[#0a53be] dark:hover:bg-[#388bfd] disabled:opacity-50 disabled:hover:bg-[#0969da] dark:disabled:hover:bg-[#1f6feb] transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-[#57606a] dark:text-[#8b949e]">AI generated content may be inaccurate.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};