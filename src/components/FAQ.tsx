import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Bot } from 'lucide-react';
import { FAQ_DATA } from '../data/websiteContent';

interface FAQProps {
  onOpenChat: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenChat }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto">
            Everything you need to know about our plans, the Gemini chatbot, and working with Veed Volture.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-all bg-[#FAF9F6]"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-semibold text-stone-900 text-sm sm:text-base hover:text-amber-800 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100/60 pt-3">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Ask Buddy banner */}
        <div className="mt-10 p-5 sm:p-6 bg-[#FAF9F6] border border-amber-200/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 font-display">Have a specific question?</h4>
              <p className="text-xs text-stone-600">Buddy knows all the details about our website plans and Veed Volture.</p>
            </div>
          </div>

          <button
            onClick={onOpenChat}
            className="w-full sm:w-auto px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <span>Ask Buddy Right Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
