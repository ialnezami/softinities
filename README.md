# Softinities Landing Page

Modern landing page for Softinities - a full-stack development company.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
softinities/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # UI components (Button, Card, etc.)
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Features

- ✅ Responsive design
- ✅ Smooth animations
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Modern UI with glassmorphism effects
- ✅ Dark theme

## Deployment

### Deploy to Vercel (Recommended)

The project is fully configured for Vercel deployment.

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository

3. **Configure & Deploy:**
   - Vercel auto-detects Next.js (no configuration needed)
   - Add environment variables if needed (see `.env.example`)
   - Click "Deploy"
   - Your site will be live in seconds!

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (preview)
vercel

# Deploy to production
vercel --prod
```

#### Environment Variables

If you want to set up email notifications for the contact form, add these in Vercel dashboard:

- `RESEND_API_KEY` - If using Resend email service
- `SENDGRID_API_KEY` - If using SendGrid
- `CONTACT_EMAIL` - Email address to receive form submissions

Currently, the contact form logs submissions to the console. To enable email notifications, uncomment and configure the email service in `app/api/contact/route.ts`.

#### Build Settings (Auto-detected by Vercel)

- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (auto)
- **Output Directory:** `.next` (auto)
- **Install Command:** `npm install` (auto)
- **Node Version:** 18.x or later (auto)

### Other Platforms

This Next.js app can also be deployed to:
- **Netlify** - Similar to Vercel, auto-detects Next.js
- **AWS Amplify** - Supports Next.js with minimal configuration
- **Cloudflare Pages** - Requires adapter configuration
- **Any platform supporting Node.js** - Use `npm run build && npm start`

## License

MIT

