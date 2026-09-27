import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { Plans } from './components/Plans';
import { PlanQuiz } from './components/PlanQuiz';
import { AboutCreator } from './components/AboutCreator';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { FloatingChatButton } from './components/FloatingChatButton';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialQuery, setChatInitialQuery] = useState<string | undefined>(undefined);

  const handleOpenChat = (query?: string) => {
    setChatInitialQuery(query);
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setChatInitialQuery(undefined);
  };

  const handleAskBuddyAboutPlan = (planName: string, price: string) => {
    handleOpenChat(`Can you tell me more about the ${planName} plan (${price}) and what is included?`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Navigation */}
      <Navbar onOpenChat={() => handleOpenChat()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenChat={() => handleOpenChat()} />

        {/* Philosophy & Approach */}
        <Philosophy />

        {/* Core Services */}
        <Services />

        {/* Work & Showcase */}
        <Showcase />

        {/* Interactive Plan Selector / Recommender Quiz */}
        <PlanQuiz
          onSelectPlan={() => {
            const el = document.getElementById('plans');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onAskBuddy={(planName, price) => handleAskBuddyAboutPlan(planName, price)}
        />

        {/* Plans Section (Basic $10, Standard $20, Premium $30) */}
        <Plans onAskBuddyAboutPlan={handleAskBuddyAboutPlan} />

        {/* About Creator Veed Volture */}
        <AboutCreator onOpenChat={() => handleOpenChat()} />

        {/* FAQ Section */}
        <FAQ onOpenChat={() => handleOpenChat()} />
      </main>

      {/* Footer */}
      <Footer onOpenChat={() => handleOpenChat()} />

      {/* Floating Chatbot Launcher */}
      <FloatingChatButton onClick={() => handleOpenChat()} isOpen={isChatOpen} />

      {/* Gemini Chatbot Dialog / Widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onClose={handleCloseChat}
        initialQuery={chatInitialQuery}
      />
    </div>
  );
}
