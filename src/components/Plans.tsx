import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Bot, HelpCircle, ShieldCheck, Zap } from 'lucide-react';
import { PLANS_DATA } from '../data/websiteContent';
import { Plan } from '../types';

interface PlansProps {
  onAskBuddyAboutPlan: (planName: string, price: string) => void;
}

export const Plans: React.FC<PlansProps> = ({ onAskBuddyAboutPlan }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('standard');

  return (
    <section id="plans" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Small Business Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display">
            Honest, simple plans. Zero surprise fees.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Pick the tier that fits where you are today. Every site is personally designed by 
            <strong> Veed Volture</strong> and includes modern responsive engineering, mobile polish, 
            and swift delivery.
          </p>

          {/* Testing notice banner */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Test Mode: Purchase buttons route directly to <strong className="font-mono text-stone-900">veedkingz.ai.studio</strong></span>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {PLANS_DATA.map((plan: Plan) => {
            const isPopular = plan.popular;
            const isSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? 'bg-white border-2 border-amber-500/80 shadow-xl shadow-amber-900/5 ring-1 ring-amber-500/20 md:-translate-y-2'
                    : 'bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300'
                } p-6 sm:p-8`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 font-bold text-xs px-3.5 py-1 rounded-full shadow-sm tracking-wide uppercase">
                    {plan.badge || 'Most Popular'}
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-stone-900 font-display">
                      {plan.name}
                    </h3>
                    {plan.id === 'premium' && (
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        Includes AI Buddy
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-500 mt-1 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-6 border-b border-stone-100 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-stone-900 font-display tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-stone-500">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Key Metadata (Turnaround & Revisions) */}
                  <div className="py-4 border-b border-stone-100 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-stone-400 block text-[11px]">Turnaround</span>
                      <span className="font-semibold text-stone-800">{plan.turnaround}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[11px]">Revisions</span>
                      <span className="font-semibold text-stone-800">{plan.revisions}</span>
                    </div>
                  </div>

                  {/* Target audience */}
                  <div className="my-4 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    <strong className="text-stone-800 font-semibold block mb-0.5">Best for:</strong>
                    {plan.recommendedFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-8 space-y-2.5">
                  {/* Primary purchase button leading to veedkingz.ai.studio */}
                  <a
                    href={plan.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 ${
                      isPopular
                        ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {/* Secondary interactive button: Ask Buddy about this plan */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAskBuddyAboutPlan(plan.name, plan.price);
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                  >
                    <Bot className="w-3.5 h-3.5 text-amber-700" />
                    <span>Ask Buddy about {plan.name}</span>
                  </button>

                  <p className="text-[11px] text-center text-stone-400">
                    Links to <span className="font-mono text-stone-500">veedkingz.ai.studio</span>
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassurance Guarantee Footer */}
        <div className="mt-14 max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-display">100% Creator Craft</h4>
                <p className="text-xs text-stone-500 mt-0.5">Every line of code and layout is supervised by Veed Volture personally.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-display">Fast Turnaround</h4>
                <p className="text-xs text-stone-500 mt-0.5">No waiting months. We ship in 48 hours to 5 business days max.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-display">Gemini AI Ready</h4>
                <p className="text-xs text-stone-500 mt-0.5">Equip your website with intelligent AI chat to answer clients 24/7.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
