import React from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface AboutCreatorProps {
  onOpenChat: () => void;
}

export const AboutCreator: React.FC<AboutCreatorProps> = ({ onOpenChat }) => {
  return (
    <section id="creator" className="py-20 md:py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Creator Portrait */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-lg shadow-stone-200/50">
                <img
                  src="/src/assets/images/creator_veed_volture_1790355799097.jpg"
                  alt="Veed Volture - Creator of Your AI Website Buddy"
                  className="w-full h-auto aspect-square object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-amber-300 font-display">Veed Volture</h4>
                      <p className="text-xs text-stone-300">Creator & Lead Web Architect</p>
                    </div>
                    <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                      Accepting Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
                Direct From The Creator
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
                "I believe every passionate small business deserves a website that truly converts."
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I'm <strong>Veed Volture</strong>. Over the past several years, I saw hard-working shop owners, consultants, coaches, and local tradespeople get cornered into two awful options: struggle for dozens of hours with rigid DIY website builders, or shell out $3,000+ to agencies that treat them like a ticket number.
              </p>
              <p>
                I founded <strong>Your AI Website Buddy</strong> to fix that. I pair high-end visual design and clean typography with modern conversational AI (powered by Google Gemini), so you don't just get a static digital brochure—you get a website that actively welcomes people, answers their questions, and drives revenue.
              </p>
            </div>

            {/* Veed's 3 Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-stone-200/70">
                <span className="text-xs font-bold text-stone-900 block font-display">Direct Access</span>
                <span className="text-xs text-stone-500 mt-1 block">Work directly with me, never outsourced interns.</span>
              </div>
              <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-stone-200/70">
                <span className="text-xs font-bold text-stone-900 block font-display">Swift 48h Delivery</span>
                <span className="text-xs text-stone-500 mt-1 block">Rapid turnaround without cutting corners.</span>
              </div>
              <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-stone-200/70">
                <span className="text-xs font-bold text-stone-900 block font-display">Affordable Testing</span>
                <span className="text-xs text-stone-500 mt-1 block">Plans from $10, test link at veedkingz.ai.studio.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://veedkingz.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all shadow-xs"
              >
                <span>Connect With Veed on Studio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 rounded-xl transition-all"
              >
                <span>Ask Buddy a Question</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
