import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Laptop, Smartphone, Eye } from 'lucide-react';

export const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'local' | 'agency'>('all');

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
              Work & Real Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
              See what Your AI Website Buddy creates.
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Clean typography, intentional spacing, and friendly interfaces that make small businesses look as capable as Fortune 500s.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Concepts
            </button>
            <button
              onClick={() => setActiveTab('local')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'local'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Local Retail
            </button>
            <button
              onClick={() => setActiveTab('agency')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'agency'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Consulting & Studio
            </button>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Local Artisanal & Retail */}
          {(activeTab === 'all' || activeTab === 'local') && (
            <div className="group rounded-2xl bg-white border border-stone-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100">
                  <img
                    src="/src/assets/images/showcase_local_business_1790355819772.jpg"
                    alt="Artisanal cafe and shop website on laptop"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
                    Standard Plan ($20)
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                    <span>Retail & Hospitality</span>
                    <span aria-hidden="true">·</span>
                    <span>4 Custom Pages</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-semibold">+180% Inquiries</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    Artisanal Shop & Neighborhood Bakery
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Designed with warm earth tones, seamless menu showcases, and an interactive reservation form that increased weekly pickup orders significantly.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-500">Delivered in 4 days by Veed</span>
                <a
                  href="#plans"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span>Build One Like This</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Card 2: Professional Service & Consultancy */}
          {(activeTab === 'all' || activeTab === 'agency') && (
            <div className="group rounded-2xl bg-white border border-stone-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-100">
                  <img
                    src="/src/assets/images/showcase_service_agency_1790355834330.jpg"
                    alt="Creative consultancy desktop showcase"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
                    Premium Plan ($30)
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                    <span>Consultancy & Advisory</span>
                    <span aria-hidden="true">·</span>
                    <span>Includes Gemini AI Chat</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-semibold">2.4x Lead Capture</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    Vanguard Strategic Advisory
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Featuring a customized Gemini AI chatbot that qualifies inbound clients, answers questions on rates, and books discovery calls into calendar directly.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-500">Delivered in 48h with Gemini AI</span>
                <a
                  href="#plans"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span>Build One Like This</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
