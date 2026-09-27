import React, { useState } from 'react';
import { Sparkles, ArrowRight, Bot, CheckCircle } from 'lucide-react';
import { PLANS_DATA } from '../data/websiteContent';

interface PlanQuizProps {
  onSelectPlan: (planId: string) => void;
  onAskBuddy: (planName: string, price: string) => void;
}

export const PlanQuiz: React.FC<PlanQuizProps> = ({ onSelectPlan, onAskBuddy }) => {
  const [goal, setGoal] = useState<'fast' | 'full' | 'ai'>('full');
  const [stage, setStage] = useState<'solo' | 'growing' | 'established'>('growing');

  // Logic to determine recommended plan
  let recommendedPlan = PLANS_DATA[1]; // default Standard ($20)
  if (goal === 'fast' || stage === 'solo') {
    recommendedPlan = PLANS_DATA[0]; // Basic ($10)
  }
  if (goal === 'ai' || stage === 'established') {
    recommendedPlan = PLANS_DATA[2]; // Premium ($30)
  }

  return (
    <section className="py-16 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Interactive Guide
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-display">
              Find your ideal plan in 10 seconds
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Select your current priority and see our tailored recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Question 1 */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                1. What is your primary objective?
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setGoal('fast')}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                    goal === 'fast'
                      ? 'bg-white border-stone-900 shadow-xs text-stone-900 font-medium ring-1 ring-stone-900'
                      : 'bg-stone-50/60 border-stone-200 text-stone-600 hover:bg-white'
                  }`}
                >
                  ⚡ Fast single landing page to test an idea ($10)
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('full')}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                    goal === 'full'
                      ? 'bg-white border-stone-900 shadow-xs text-stone-900 font-medium ring-1 ring-stone-900'
                      : 'bg-stone-50/60 border-stone-200 text-stone-600 hover:bg-white'
                  }`}
                >
                  🏢 Complete multi-page site for my business ($20)
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('ai')}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                    goal === 'ai'
                      ? 'bg-white border-stone-900 shadow-xs text-stone-900 font-medium ring-1 ring-stone-900'
                      : 'bg-stone-50/60 border-stone-200 text-stone-600 hover:bg-white'
                  }`}
                >
                  🤖 Full site + 24/7 Gemini AI assistant ($30)
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                2. What best describes your stage?
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setStage('solo')}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                    stage === 'solo'
                      ? 'bg-white border-stone-900 shadow-xs text-stone-900 font-medium ring-1 ring-stone-900'
                      : 'bg-stone-50/60 border-stone-200 text-stone-600 hover:bg-white'
                  }`}
                >
                  🌱 Solopreneur, freelancer, or new venture
                </button>
                <button
                  type="button"
                  onClick={() => setStage('growing')}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                    stage === 'growing'
                      ? 'bg-white border-stone-900 shadow-xs text-stone-900 font-medium ring-1 ring-stone-900'
                      : 'bg-stone-50/60 border-stone-200 text-stone-600 hover:bg-white'
                  }`}
                >
                  📈 Local shop, clinic, boutique, or contractor
                </button>
                <button
                  type="button"
                  onClick={() => setStage('established')}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                    stage === 'established'
                      ? 'bg-white border-stone-900 shadow-xs text-stone-900 font-medium ring-1 ring-stone-900'
                      : 'bg-stone-50/60 border-stone-200 text-stone-600 hover:bg-white'
                  }`}
                >
                  🏆 Established practice ready for automated lead capture
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Recommendation Box */}
          <div className="p-5 sm:p-6 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  RECOMMENDED FOR YOU
                </span>
                <span className="text-sm font-bold text-stone-900">{recommendedPlan.name} Plan</span>
                <span className="text-sm font-extrabold text-stone-900 font-display">({recommendedPlan.price})</span>
              </div>
              <p className="text-xs text-stone-600 max-w-md">
                {recommendedPlan.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onAskBuddy(recommendedPlan.name, recommendedPlan.price)}
                className="px-3.5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/70 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <Bot className="w-3.5 h-3.5 text-amber-700" />
                <span>Ask Buddy</span>
              </button>

              <a
                href={recommendedPlan.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <span>Purchase {recommendedPlan.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
