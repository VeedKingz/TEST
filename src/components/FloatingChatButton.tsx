import React from 'react';
import { Bot, Sparkles, MessageCircle } from 'lucide-react';

interface FloatingChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onClick}
        className="group relative flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white pl-4 pr-5 py-3 rounded-2xl shadow-xl shadow-stone-900/20 hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
        aria-label="Open Buddy Gemini AI chat"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
            <Bot className="w-4 h-4 text-stone-950" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-stone-900 rounded-full" />
        </div>

        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold tracking-tight text-white font-display">
              Chat with Buddy
            </span>
            <span className="text-[10px] bg-amber-400/20 text-amber-300 font-mono px-1 py-0.2 rounded font-semibold">
              Gemini
            </span>
          </div>
          <p className="text-[11px] text-stone-300 leading-tight">
            Ask about $10, $20, $30 plans
          </p>
        </div>
      </button>
    </div>
  );
};
