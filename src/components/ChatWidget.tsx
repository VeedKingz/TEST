import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, ArrowUpRight, MessageSquare } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  isOpen,
  onClose,
  initialQuery,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi there! I'm Buddy, your AI assistant created by Veed Volture. I know all about our small business website packages ($10 Basic, $20 Standard, $30 Premium), how we build sites, and how to get your business online fast. How can I help you today?",
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleSendMessage(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputValue).trim();
    if (!messageText || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send conversation history to backend /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (data.text || data.fallbackText) {
        const botReply: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.text || data.fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, botReply]);
      } else {
        throw new Error(data.error || 'Empty response');
      }
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm having a brief connection pause, but feel free to explore our Plans section ($10 Basic, $20 Standard, $30 Premium) or click directly to veedkingz.ai.studio to connect with Veed Volture!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "Chat cleared! I'm Buddy, ready to help you choose between our Basic ($10), Standard ($20), or Premium ($30) packages. What questions do you have for Veed Volture or me?",
        timestamp: 'Just now',
      },
    ]);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-stone-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="w-full sm:max-w-lg h-[92vh] sm:h-[640px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5 text-stone-950" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-stone-900 rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm tracking-tight text-white font-display">
                  Buddy
                </h3>
                <span className="text-[10px] bg-stone-800 text-amber-300 font-mono px-1.5 py-0.5 rounded">
                  Gemini AI
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                Created by Veed Volture · Knows all website details
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={resetChat}
              title="Reset conversation"
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Purchase Link Bar Notice */}
        <div className="bg-amber-50 px-4 py-2 border-b border-amber-200/70 flex items-center justify-between text-xs text-amber-900">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold">Plans Available:</span>
            <span>$10, $20, $30</span>
          </div>
          <a
            href="https://veedkingz.ai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-amber-950 hover:underline"
          >
            <span>veedkingz.ai.studio</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/60">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-lg bg-amber-400 text-stone-900 flex items-center justify-center shrink-0 text-xs mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    isUser
                      ? 'bg-stone-900 text-white rounded-br-xs'
                      : 'bg-white text-stone-800 border border-stone-200/80 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  <span
                    className={`block text-[10px] mt-1.5 ${
                      isUser ? 'text-stone-400 text-right' : 'text-stone-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-lg bg-stone-300 text-stone-700 flex items-center justify-center shrink-0 text-xs mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-2.5 items-start">
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-stone-900 flex items-center justify-center shrink-0 text-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-stone-200/80 rounded-2xl rounded-bl-xs p-3.5 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-stone-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-stone-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-stone-400 animate-bounce" />
                <span className="text-xs text-stone-500 ml-1">Buddy is typing...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2.5 bg-white border-t border-stone-200/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => handleQuickQuestion('Which plan should I choose?')}
            className="text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors"
          >
            Which plan fits me?
          </button>
          <button
            onClick={() => handleQuickQuestion('Tell me about the $20 Standard plan')}
            className="text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors"
          >
            Standard Plan ($20)
          </button>
          <button
            onClick={() => handleQuickQuestion('How does the Gemini AI integration work?')}
            className="text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors"
          >
            AI Assistant feature
          </button>
          <button
            onClick={() => handleQuickQuestion('Who is Veed Volture?')}
            className="text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors"
          >
            Who is Veed Volture?
          </button>
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Buddy anything about our website plans..."
            disabled={isLoading}
            className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:bg-white text-stone-900 placeholder:text-stone-400"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="p-2.5 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-white rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-stone-900 shrink-0"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
