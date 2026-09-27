import React from 'react';
import { Heart, Sparkles, Zap, Shield, Smile } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            The Philosophy Behind The Buddy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
            Websites built for humans, not just algorithms.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Most small business websites fail for one of two reasons: either they're built using a 
            cookie-cutter template that feels sterile and generic, or the owner paid thousands to a bloated agency 
            that vanished once the bill was paid. We created <strong>Your AI Website Buddy</strong> to bridge the gap.
          </p>
        </div>

        {/* 3 Human Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9F6] border border-stone-200/70 space-y-4 hover:border-amber-300 transition-colors">
            <span className="font-mono text-xs font-bold text-amber-800 tracking-wider">01. HUMAN TOUCH FIRST</span>
            <h3 className="text-xl font-bold text-stone-900 font-display">
              Aesthetic Craft & Personality
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Every detail—from typography and color contrast to mobile touch targets—is intentionally chosen to reflect your business's unique voice and make visitors feel genuinely welcomed.
            </p>
            <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-amber-600" />
              <span>Tailored for real community trust</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9F6] border border-stone-200/70 space-y-4 hover:border-amber-300 transition-colors">
            <span className="font-mono text-xs font-bold text-amber-800 tracking-wider">02. GEMINI AI SUPERPOWERS</span>
            <h3 className="text-xl font-bold text-stone-900 font-display">
              24/7 Intelligent Customer Chat
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              We integrate custom Gemini AI assistants directly on your site. The bot understands your service catalog, prices, and policies, answering client inquiries in real time while you sleep.
            </p>
            <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Instant answers for curious visitors</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9F6] border border-stone-200/70 space-y-4 hover:border-amber-300 transition-colors">
            <span className="font-mono text-xs font-bold text-amber-800 tracking-wider">03. CREATOR DIRECT</span>
            <h3 className="text-xl font-bold text-stone-900 font-display">
              No Middlemen, Honest Pricing
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              You collaborate directly with <strong>Veed Volture</strong>. Test plans start at just $10, with transparent turnarounds and zero recurring agency lock-in fees.
            </p>
            <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Basic $10 · Standard $20 · Premium $30</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
