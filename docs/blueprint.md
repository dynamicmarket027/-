# **App Name**: SoftWareHouse AI

## Core Features:

- Lead Capture Form: A form to capture leads with fields for name, email, company, role, product interest, comments, and GDPR consent.
- Product Showcase: Display AI products (Chatbot, Voicebot, AI Agents) with features, benefits, and pricing, presented through interactive elements such as product cards.
- Demo Request: Enable users to book demos of AI products. Implementation can either connect to Calendly or be stored in a Firestore Database.
- AI-Powered FAQ: Smart FAQ section using a Large Language Model tool, which will use reasoning to respond appropriately, depending on if a user question matches content already in the FAQ, or instead requires the LLM to offer a helpful and relevant response. Should the question NOT match an existing FAQ, provide that new answer to the Admin panel to allow the question to be permanently included in the FAQ section
- Dynamic Pricing Tables: Comparison tables that allow side-by-side contrast of Starter/Business/Enterprise, tiers across product categories.
- Customer Testimonials: Showcase customer success stories with logos and testimonials to build trust and credibility.

## Style Guidelines:

- Primary color: Light Blue (#ADD8E6) for trust and professionalism.
- Background color: White (#F7FBFF) for a clean and modern feel.
- Accent color: Light Green (#90EE90) to highlight CTAs.
- Font: 'Poppins' sans-serif for all text; clear, modern, and readable. Note: currently only Google Fonts are supported.
- Use a mobile-first approach with a responsive grid layout to ensure the website is accessible and visually appealing on all devices.
- Subtle animations for transitions and loading to improve user experience, such as fading effects and smooth scrolling.