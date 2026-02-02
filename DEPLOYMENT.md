# 🚀 Deployment Guide for Flood It Game

## Prerequisites

- **Node.js 20.9.0 or higher** (required for Next.js 16)
- Vercel account (free)
- Base app account

## Quick Deploy to Vercel

### Option 1: Deploy Button (Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/flood-it-game)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

## Post-Deployment Steps

### 1. Update Manifest URLs

After deployment, update these files with your actual Vercel URL:

**File: `public/.well-known/farcaster.json`**

Replace all instances of `your-deployed-url.vercel.app` with your actual URL (e.g., `flood-it-game.vercel.app`)

```json
{
  "homeUrl": "https://YOUR-URL.vercel.app",
  "iconUrl": "https://YOUR-URL.vercel.app/icon.png",
  "splashImageUrl": "https://YOUR-URL.vercel.app/splash.png",
  ...
}
```

**File: `app/layout.tsx`**

Update the `openGraph.url`:

```typescript
openGraph: {
  url: 'https://YOUR-URL.vercel.app',
  ...
}
```

### 2. Add Account Association

To link your mini app to your Farcaster account:

1. Go to [Base Build Account Association Tool](https://www.base.dev/preview?tab=account)
2. Paste your Vercel URL (e.g., `flood-it-game.vercel.app`)
3. Click "Submit"
4. Click "Verify" and follow the instructions
5. Copy the generated `accountAssociation` object
6. Paste it into `public/.well-known/farcaster.json`:

```json
{
  "accountAssociation": {
    "header": "YOUR_HEADER_HERE",
    "payload": "YOUR_PAYLOAD_HERE",
    "signature": "YOUR_SIGNATURE_HERE"
  },
  ...
}
```

7. Redeploy to apply changes:
   ```bash
   vercel --prod
   ```

### 3. Test Your Mini App

1. Visit [base.dev/preview](https://base.dev/preview)
2. Enter your app URL
3. Verify:
   - ✅ Embeds display correctly
   - ✅ Launch button works
   - ✅ Account association is valid
   - ✅ Metadata is complete
   - ✅ Screenshots are visible

### 4. Publish to Base

1. Create a post in the Base app
2. Include your mini app URL
3. The app will appear as an embed
4. Users can launch it directly

### 5. Submit for Featured Placement (Optional)

To get featured on Base:

1. Verify your app in [Base Build Dashboard](https://base.dev/)
2. Fill out the [Featured Submission Form](https://docs.google.com/forms/d/e/1FAIpQLSeZiB3fmMS7oxBKrWsoaew2LFxGpktnAtPAmJaNZv5TOCXIZg/viewform)
3. Ensure your app meets all [featured guidelines](https://docs.base.org/mini-apps/featured-guidelines/overview):
   - ✅ Load time < 3 seconds
   - ✅ High-quality assets (icon, hero, screenshots)
   - ✅ Mobile-optimized
   - ✅ Smooth 60 FPS gameplay
   - ✅ Professional design

## Environment Variables

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add variables:
   ```
   NEXT_PUBLIC_APP_URL=https://your-url.vercel.app
   NEXT_PUBLIC_APP_NAME=Flood It
   ```

## Vercel Settings

Make sure these settings are configured in Vercel:

### Deployment Protection

- **OFF**: Turn off "Vercel Authentication" so the Base validator can access your manifest
- Path: Settings → Deployment Protection → Toggle "Vercel Authentication" OFF

### Build Settings

- **Framework Preset**: Next.js
- **Node Version**: 20.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## Troubleshooting

### Issue: Build Fails with Node Version Error

**Solution**: Vercel uses Node 20+ by default. If you see this error locally, upgrade your Node:

```bash
# Using nvm
nvm install 20
nvm use 20

# Or download from nodejs.org
```

### Issue: Manifest Not Found

**Solution**: Ensure `public/.well-known/farcaster.json` exists and Deployment Protection is OFF

### Issue: Images Not Loading

**Solution**: Check that all image paths are absolute URLs with your domain

### Issue: Account Association Failed

**Solution**: 
1. Make sure Deployment Protection is OFF
2. Wait 5 minutes after deployment
3. Clear browser cache
4. Try the account association tool again

## Performance Optimization

Your app is already optimized, but here are some optional enhancements:

1. **Analytics**: Add Vercel Analytics
   ```bash
   npm install @vercel/analytics
   ```

2. **Speed Insights**: Monitor Core Web Vitals
   ```bash
   npm install @vercel/speed-insights
   ```

3. **Custom Domain**: Add a custom domain in Vercel settings

## Support

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps/)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

🎉 Your Flood It game is now live on Base! Share it on Farcaster!
