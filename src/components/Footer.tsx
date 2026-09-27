import React from 'react';
import { ArrowUpRight, Bot } from 'lucide-react';

interface FooterProps {
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChat }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-sm tracking-tight">
                YB
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                Your AI Website Buddy
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Warm, human-crafted websites with intelligent Gemini AI superpowers for small businesses, creators, and consultants. Created by Veed Volture.
            </p>

            <div className="pt-2 text-xs text-stone-400">
              <span>Testing Purchase Link: </span>
              <a
                href="https://veedkingz.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline font-mono ml-1"
              >
                veedkingz.ai.studio
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
              </li>
              <li>
                <a href="#plans" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                  Plans ($10, $20, $30)
                </a>
              </li>
              <li>
                <a href="#creator" className="hover:text-white transition-colors">Meet Veed Volture</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Action Callout */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Need Assistance?
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Our custom Gemini AI chatbot knows all package specifics, timelines, and options.
            </p>
            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-xl text-xs font-semibold text-white transition-colors"
            >
              <Bot className="w-3.5 h-3.5 text-amber-400" />
              <span>Open Gemini Buddy Chat</span>
            </button>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Your AI Website Buddy · Handcrafted by <strong className="text-stone-300">Veed Volture</strong>.
          </div>
          <div className="flex items-center gap-4">
            <a href="#plans" className="hover:text-stone-300 transition-colors">Choose a Plan</a>
            <span>·</span>
            <a
              href="https://veedkingz.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              veedkingz.ai.studio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
