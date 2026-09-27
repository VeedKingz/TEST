import React from 'react';
import { Layout, Bot, Smartphone, Search, FileText, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      number: '01',
      title: 'Bespoke Web Design & Architecture',
      desc: 'Clean, intentional typography and layouts tailored specifically to your brand identity, never a clunky generic template.',
      icon: Layout,
    },
    {
      number: '02',
      title: 'Integrated Gemini AI Assistant',
      desc: 'A smart chatbot trained on your actual products, services, and frequently asked questions to answer inquiries 24/7.',
      icon: Bot,
    },
    {
      number: '03',
      title: 'Mobile-First Speed & Performance',
      desc: 'Over 70% of clients browse on mobile. We ensure sub-second loading speeds and pristine touch ergonomics.',
      icon: Smartphone,
    },
    {
      number: '04',
      title: 'Search Optimization & Indexing',
      desc: 'Clean semantic HTML, OpenGraph social cards, and Google Search Console readiness so local customers find you first.',
      icon: Search,
    },
    {
      number: '05',
      title: 'Warm Human Copywriting Support',
      desc: 'We help polish your headlines and offer descriptions into warm, persuasive copy that turns visitors into clients.',
      icon: FileText,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-[#FAF9F6] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
            Everything your small business needs to thrive online.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Engineered by Veed Volture to give small businesses an unfair digital advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.number}
                className="p-6 bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:border-amber-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-amber-800 tracking-wider">
                      {svc.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100">
                  <a
                    href="#plans"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                  >
                    <span>Available in Plans</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="p-6 bg-stone-900 text-white rounded-2xl border border-stone-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                READY TO START?
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                Get online in 48 hours for as little as $10.
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Test out the Basic plan or unlock the full power of a Gemini AI chatbot in the Premium tier.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-stone-800">
              <a
                href="#plans"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-xl transition-all"
              >
                <span>Select Your Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
