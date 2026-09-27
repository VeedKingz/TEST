import React from 'react';
import { ArrowDown, Bot, Sparkles, Check, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Quiet kicker with creator credit */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-600">
              <span className="text-amber-800 font-semibold">Your AI Website Buddy</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Handcrafted by Veed Volture</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-emerald-700 font-medium">Ready in 48 Hours</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.08] font-display text-balance">
              The website your small business deserves.
              <span className="block text-stone-600 font-normal mt-1">
                Warm, human, and powered by Gemini AI.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              No generic robotic templates. No confusing $4,000 agency quotes. We design bespoke, 
              aesthetic websites tailored for local businesses, creators, and service professionals—complete 
              with an intelligent 24/7 AI Buddy to turn curious visitors into paying customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow-sm hover:shadow transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              >
                <span>View Plans & Pricing</span>
                <span className="text-xs bg-amber-400 text-stone-950 font-mono px-1.5 py-0.5 rounded font-bold">From $10</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenChat}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200/90 rounded-xl shadow-xs transition-all hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <Bot className="w-4 h-4 text-amber-700" />
                <span>Talk with Buddy (Gemini AI)</span>
              </button>
            </div>

            {/* Unboxed human trust markers */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500">
              <div className="flex items-center gap-1.5 text-stone-700 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-friction launch</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5 text-stone-700 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mobile & SEO perfected</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5 text-stone-700 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct craft by Veed Volture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-2xl bg-white p-3 shadow-xl shadow-stone-200/60 border border-stone-200/70 overflow-hidden">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src="/src/assets/images/hero_website_craft_1790355780889.jpg"
                    alt="Creative website crafting studio workspace"
                    className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Overlay badge with human note */}
                  <div className="absolute bottom-3 left-3 right-3 bg-stone-900/85 backdrop-blur-md text-white p-3 rounded-lg border border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-amber-300">Your AI Website Buddy</span>
                      <span className="text-[11px] text-stone-400 font-mono">Live Demo</span>
                    </div>
                    <p className="text-stone-200 text-[11px] mt-0.5 line-clamp-1">
                      "Where clean craftsmanship meets conversational Gemini intelligence."
                    </p>
                  </div>
                </div>

                {/* Interactive conversation snippet teaser */}
                <div className="mt-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center text-xs font-bold">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-stone-900">Buddy</span>
                      <span className="text-[10px] text-stone-500">Gemini Assistant</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Online
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 leading-snug">
                    "Hey! Looking for the perfect website? Our <strong>$10 Basic</strong>, <strong>$20 Standard</strong>, or <strong>$30 Premium</strong> plans have you covered. Ask me anything!"
                  </p>
                  <button
                    onClick={onOpenChat}
                    className="w-full text-center text-xs font-semibold text-amber-900 hover:text-amber-950 bg-amber-100/70 hover:bg-amber-100 py-1.5 rounded-md transition-colors"
                  >
                    Open Live Chat With Buddy →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
