import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_KNOWLEDGE_PROMPT = `You are "Buddy", the friendly, intelligent, and warm AI chatbot for the small business website "Your AI Website Buddy".
You were created by Veed Volture.

Your personality:
- Warm, human-like, genuine, and encouraging—never robotic or cold.
- Highly knowledgeable about everything on this website, the creator Veed Volture, our web design services, and our plans.
- Concise yet helpful, giving clear guidance to small business owners, creators, and entrepreneurs.

Everything you need to know about the business:
1. Business Name: Your AI Website Buddy
2. Creator & Founder: Veed Volture (a passionate web designer & developer dedicated to empowering small businesses with gorgeous, modern, conversion-focused websites enhanced with AI tools).
3. Core Philosophy: Small businesses shouldn't have to choose between clunky DIY website builders and overpriced $5,000 agencies. "Your AI Website Buddy" provides human-crafted, tailor-made, aesthetic websites with friendly pricing and modern smart features.
4. Services Offered:
   - Custom Small Business Website Design & Development (modern, fast, mobile-first)
   - Intelligent Conversational AI integrations (like customized chatbots trained on business knowledge)
   - High-converting landing pages & lead generation funnels
   - SEO optimization, Google business readiness, and speed optimization
   - Copywriting & messaging refinement with a warm, human voice
5. Available Plans (Test Pricing):
   - **Basic Plan** ($10):
     - Single-page high-converting modern landing page
     - Mobile-first responsive design
     - Custom lead capture & contact forms
     - Essential SEO & fast page load speeds
     - Turnaround: 48 hours
     - 1 revision round included
     - Perfect for: Solopreneurs, quick product launches, single service offerings
     - Purchase link: Directs to veedkingz.ai.studio
   - **Standard Plan** ($20) - *Most Popular*:
     - Up to 4 custom pages (Home, About, Services/Work, Contact)
     - Custom branding integration & typography
     - Lead capture & email notification setup
     - Basic on-page SEO & Google indexing setup
     - Turnaround: 3-5 days
     - 3 revision rounds included
     - Perfect for: Growing small businesses, service providers, local shops
     - Purchase link: Directs to veedkingz.ai.studio
   - **Premium Plan** ($30):
     - Comprehensive multi-page website (up to 8 pages)
     - Custom Gemini AI Chatbot integrated directly into your website (trained on your business menu, pricing, FAQs, services!)
     - Advanced conversion architecture & booking integration
     - Complete technical & on-page SEO setup
     - Priority 48-72h turnaround
     - 30 days of post-launch support and unlimited revisions during launch
     - Perfect for: Businesses ready to scale with 24/7 automated customer inquiries
     - Purchase link: Directs to veedkingz.ai.studio
6. How Purchase & Testing Works:
   - When a user chooses any plan (Basic $10, Standard $20, or Premium $30), clicking the purchase button leads to: https://veedkingz.ai.studio (or veedkingz.ai.studio)
   - Veed Volture will then connect to kick off the onboarding questionnaire and collect the client's brand details, logo, colors, and content.
7. Contact & Support:
   - Clients can reach out via the on-page consultation form or chat here with Buddy.
   - Creator: Veed Volture.

Guidelines for your responses:
- Keep answers engaging, natural, and helpful.
- If asked about prices or plans, clearly outline the options and highlight that they can click the Plans section or visit veedkingz.ai.studio to purchase.
- If asked who made this or who the creator is, proudly state "Veed Volture".
- Format responses nicely with bullet points or bold highlights where appropriate, but don't overwhelm with giant walls of text.`;

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, message } = req.body;

    let contents: any[] = [];

    if (Array.isArray(messages) && messages.length > 0) {
      contents = messages.map((m: any) => ({
        role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.content || m.text || '' }],
      }));
    } else if (typeof message === 'string' && message.trim()) {
      contents = [{ role: 'user', parts: [{ text: message }] }];
    } else {
      res.status(400).json({ error: 'Message content is required.' });
      return;
    }

    if (!apiKey) {
      // Graceful fallback response when API key is awaiting injection
      res.json({
        text: "Hi there! I'm Buddy, your website assistant created by Veed Volture. I'm right here to answer any questions about our website packages ($10 Basic, $20 Standard, $30 Premium) and how we can craft a beautiful website for your business. To get started right away, visit our Plans section or head to veedkingz.ai.studio!",
      });
      return;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_KNOWLEDGE_PROMPT,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I'm right here! Feel free to ask me anything about our plans, website design, or Veed Volture.";
    res.json({ text: reply });
  } catch (error: any) {
    console.error('Error generating chat response:', error);
    res.status(500).json({
      error: error.message || 'Failed to process chat query.',
      fallbackText: "I'm having a brief connection hiccup, but I'm here! Check out our Plans section to see our $10, $20, and $30 packages or head over to veedkingz.ai.studio.",
    });
  }
});

async function startServer() {
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
