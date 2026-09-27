import React, { useState } from 'react';
import { Bot, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Brand title, one line wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              YB
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 font-display">
              Your AI Website Buddy
            </span>
          </a>

          {/* Zone 2: Clean nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-stone-900 transition-colors">
              Philosophy
            </a>
            <a href="#services" className="hover:text-stone-900 transition-colors">
              Services
            </a>
            <a href="#showcase" className="hover:text-stone-900 transition-colors">
              Showcase
            </a>
            <a href="#plans" className="text-amber-800 font-semibold hover:text-amber-900 transition-colors flex items-center gap-1">
              <span>Plans</span>
              <span className="text-xs bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-[11px] font-mono">From $10</span>
            </a>
            <a href="#creator" className="hover:text-stone-900 transition-colors">
              Meet Veed
            </a>
            <a href="#faq" className="hover:text-stone-900 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-medium text-stone-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              title="Chat with Buddy, our Gemini AI assistant"
            >
              <Bot className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">Ask Buddy</span>
              <span className="sm:hidden">AI</span>
            </button>

            <a
              href="#plans"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
            >
              <span>Explore Plans</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF9F6] px-4 pt-3 pb-5 space-y-2">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            Philosophy
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            Services
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            Showcase
          </a>
          <a
            href="#plans"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-amber-900 bg-amber-50/60 rounded-md"
          >
            Plans (Basic $10, Standard $20, Premium $30)
          </a>
          <a
            href="#creator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            Meet Veed Volture
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
          >
            FAQ
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-amber-100 rounded-lg"
            >
              <Bot className="w-4 h-4 text-amber-800" />
              Chat with Buddy (Gemini AI)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
