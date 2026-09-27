export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  tagline: string;
  description: string;
  turnaround: string;
  revisions: string;
  features: string[];
  recommendedFor: string;
  ctaText: string;
  purchaseUrl: string;
  popular?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'model';
  content: string;
  timestamp: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'plans' | 'ai' | 'process';
}
