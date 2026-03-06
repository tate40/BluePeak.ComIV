# Vercel Deployment Guide - BluePeak Studio

This guide provides complete instructions for deploying the BluePeak Studio website to Vercel without errors.

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier works fine)
- Node.js 18+ and pnpm installed locally

## Step 1: Prepare Your Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: BluePeak Studio website ready for Vercel"

# Create a new repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/designfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Configure Environment Variables

Before deploying to Vercel, ensure these environment variables are set in your Vercel project settings:

### Required Environment Variables:
```
DATABASE_URL=your_mysql_connection_string
JWT_SECRET=your_jwt_secret_key
VITE_APP_ID=your_manus_app_id
VITE_APP_TITLE=BluePeak Studio
VITE_APP_LOGO=https://your-cdn-url/logo.png
VITE_OAUTH_PORTAL_URL=https://api.manus.im
OAUTH_SERVER_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your_frontend_api_key
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your_backend_api_key
OWNER_NAME=Your Name
OWNER_OPEN_ID=your_open_id
VITE_ANALYTICS_ENDPOINT=https://cloud.umami.is
VITE_ANALYTICS_WEBSITE_ID=86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b
```

## Step 3: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option B: Using GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. Add environment variables in "Environment Variables" section
6. Click "Deploy"

## Step 4: Verify Deployment

After deployment, Vercel will provide a URL. Test the following:

```bash
# Test homepage loads
curl https://your-vercel-url.vercel.app/

# Test API endpoint
curl https://your-vercel-url.vercel.app/api/trpc/auth.me

# Test Formspree form submission
curl -X POST https://your-vercel-url.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","businessType":"law-firm","projectDetails":"Test"}'
```

## Troubleshooting Common Errors

### Error: "Invalid URL"
**Solution:** The `const.ts` file has been updated to use `URLSearchParams` instead of `new URL()`. This is already fixed in this version.

### Error: "Cannot find module 'vite'"
**Solution:** Ensure `vite` is in devDependencies (it is). Vercel should install all dependencies automatically.

### Error: "ENOENT: no such file or directory"
**Solution:** All asset paths use absolute paths starting with `/`. Check that:
- Images are referenced as `/images/filename.png`
- CSS files are in `client/src/index.css`
- Fonts are loaded from Google Fonts CDN

### Error: "Cannot POST /api/contact"
**Solution:** Ensure the server is properly built. The build script compiles both client and server:
```bash
vite build && esbuild server/_core/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
```

### Error: "Database connection failed"
**Solution:** Verify `DATABASE_URL` is set correctly in Vercel environment variables. The connection string format should be:
```
mysql://user:password@host:port/database
```

## Project Structure for Vercel

```
designfolio/
├── client/                    # React frontend
│   ├── public/               # Static assets (favicon, robots.txt, etc.)
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/           # Page components
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # React entry point
│   └── index.html           # HTML template
├── server/                   # Express backend
│   ├── _core/              # Core server logic
│   ├── routers.ts          # tRPC routes
│   └── db.ts               # Database queries
├── drizzle/                # Database schema
├── shared/                 # Shared types
├── dist/                   # Build output (generated)
│   ├── public/            # Compiled frontend
│   └── index.js           # Compiled server
├── vite.config.ts         # Vite configuration
├── vercel.json            # Vercel deployment config
├── .vercelignore          # Files to exclude from deployment
└── package.json           # Dependencies and scripts
```

## Build Process Explained

When you deploy to Vercel, the following happens:

1. **Install Dependencies:** `pnpm install --frozen-lockfile`
2. **Build:** `pnpm build` runs:
   - `vite build` - Compiles React frontend to `dist/public/`
   - `esbuild server/_core/index.ts ...` - Bundles Node.js server to `dist/index.js`
3. **Start:** Vercel runs `node dist/index.js` to start the server

## Key Files for Vercel

### vercel.json
Configures Vercel deployment:
- Build command: `pnpm build`
- Install command: `pnpm install --frozen-lockfile`
- Routes: API requests → `dist/index.js`, Static files → `dist/public/`

### .vercelignore
Excludes unnecessary files from deployment to reduce build time:
- Development files (.git, .vscode, etc.)
- Test files and coverage
- Documentation
- Dependencies (node_modules)

### vite.config.ts
Configures Vite build:
- Frontend root: `client/`
- Public directory: `client/public/`
- Build output: `dist/public/`
- Aliases: `@` → `client/src`, `@shared` → `shared`

## Production Deployment Checklist

- [ ] All environment variables are set in Vercel
- [ ] Database is accessible from Vercel (not localhost)
- [ ] Formspree endpoint is correct: `https://formspree.io/f/xreyzvar`
- [ ] Umami tracking ID is correct: `86f2ce98-bcae-47b7-8ab5-c2c84a20fc8b`
- [ ] All image URLs are absolute paths or CDN URLs
- [ ] Contact form submits successfully
- [ ] Homepage loads without console errors
- [ ] Navigation links work correctly
- [ ] Responsive design works on mobile

## Custom Domain Setup

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain (e.g., `bluepeakstudio.com`)
3. Follow Vercel's instructions to update DNS records
4. Wait for DNS propagation (usually 24-48 hours)

## Monitoring and Logs

View deployment logs in Vercel dashboard:
1. Go to your project
2. Click "Deployments" tab
3. Click on the latest deployment
4. View "Build Logs" and "Runtime Logs"

## Support

For Vercel-specific issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

For BluePeak Studio issues:
- Check `VERCEL_DEPLOYMENT_GUIDE.md` (this file)
- Review error logs in Vercel dashboard
- Verify all environment variables are set correctly
