# Deployment Guide - Softinities Landing Page

## Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier works)
- Git repository initialized

### Step-by-Step Deployment

#### 1. Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ready for deployment"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/softinities.git

# Push to main branch
git push -u origin main
```

#### 2. Deploy via Vercel Dashboard

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto)
   - **Output Directory:** `.next` (auto)
   - **Install Command:** `npm install` (auto)

4. **Environment Variables (Optional):**
   - Currently, no environment variables are required
   - If you want to enable email notifications later, add:
     - `RESEND_API_KEY` or `SENDGRID_API_KEY`
     - `CONTACT_EMAIL`

5. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - Your site will be live!

#### 3. Configure Custom Domain (Optional)

After deployment:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `softinities.com`)
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

## Alternative: Deploy via CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (creates preview deployment)
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test navigation and smooth scrolling
- [ ] Check SEO meta tags (view page source)
- [ ] Verify sitemap.xml is accessible: `https://yourdomain.com/sitemap.xml`
- [ ] Verify robots.txt is accessible: `https://yourdomain.com/robots.txt`
- [ ] Set up custom domain (if applicable)
- [ ] Configure email notifications for contact form (optional)

## Email Service Integration (Optional)

To enable email notifications for contact form submissions:

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Add environment variable in Vercel:
   - Key: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx`
5. Update `app/api/contact/route.ts` to send emails

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```
4. Add environment variable in Vercel:
   - Key: `SENDGRID_API_KEY`
   - Value: `SG.xxxxxxxxxxxxx`
5. Update `app/api/contact/route.ts` to send emails

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | No | API key for Resend email service |
| `SENDGRID_API_KEY` | No | API key for SendGrid email service |
| `CONTACT_EMAIL` | No | Email address to receive form submissions |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics tracking ID |
| `NEXT_PUBLIC_SITE_URL` | No | Production site URL |

## Build Verification

Before deploying, verify the build works locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test production build locally
npm start
```

Visit `http://localhost:3000` to verify everything works.

## Troubleshooting

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Ensure Node.js version is compatible (18.x or later)
4. Check for TypeScript errors: `npm run build` locally

### Contact Form Not Working

1. Check API route logs in Vercel dashboard
2. Verify form validation is working
3. Check browser console for errors
4. Ensure API route is deployed correctly

### Styling Issues

1. Verify Tailwind CSS is building correctly
2. Check `tailwind.config.ts` configuration
3. Ensure all CSS imports are correct

## Performance Optimization

The site is already optimized, but you can:

1. **Enable Image Optimization:**
   - Add actual project images to `/public` folder
   - Use Next.js `Image` component for better performance

2. **Enable Analytics:**
   - Add Google Analytics tracking ID
   - Configure in Vercel environment variables

3. **Monitor Performance:**
   - Use Vercel Analytics (available in dashboard)
   - Check Lighthouse scores
   - Monitor Core Web Vitals

## Support

For issues or questions:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Project repository: [GitHub Issues](https://github.com/yourusername/softinities/issues)


