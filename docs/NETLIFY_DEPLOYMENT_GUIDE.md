# Netlify Deployment Guide - Making Your Site Live

## Prerequisites ✅

- ✅ GitHub repository: `https://github.com/codycoffey04/connie-s-homepage-build`
- ✅ `netlify.toml` configured
- ✅ `public/_redirects` file ready
- ✅ Build verified working

## Step-by-Step Deployment Instructions

### STEP 1: Sign Up / Log In to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up for a free account (or log in if you already have one)
   - You can sign up with GitHub, which makes the connection easier

### STEP 2: Import Your GitHub Repository

1. Once logged in, click **"Add new site"** button (top right)
2. Select **"Import an existing project"**
3. Choose **"GitHub"** as your Git provider
4. If this is your first time:
   - Click **"Authorize Netlify"** to connect your GitHub account
   - Grant Netlify access to your repositories
   - You may need to install the Netlify GitHub App

### STEP 3: Select Your Repository

1. In the repository list, find and select: **`connie-s-homepage-build`**
2. Netlify will automatically detect your settings from `netlify.toml`:
   - **Build command**: `npm run build` ✅
   - **Publish directory**: `dist` ✅
   - **Redirects**: Already configured ✅

### STEP 4: Configure Build Settings (Verify)

Netlify should auto-detect these from `netlify.toml`, but verify:

- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: Netlify will use the latest LTS (or you can specify in `netlify.toml`)

### STEP 5: Deploy!

1. Click **"Deploy site"** button
2. Netlify will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Run the build (`npm run build`)
   - Deploy the `dist` folder
3. Wait 2-5 minutes for the first deployment

### STEP 6: Your Site is Live!

Once deployment completes, you'll see:
- ✅ A success message
- ✅ A live URL like: `https://random-name-123.netlify.app`
- ✅ You can click the URL to see your live site!

## Setting Up Custom Domain (connies-bailbonds.com)

### Option A: Add Domain in Netlify

1. In your Netlify site dashboard, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter: `connies-bailbonds.com`
4. Netlify will provide DNS records to add to your domain registrar

### Option B: Update DNS at Your Domain Registrar

Netlify will show you DNS records like:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

Add these to your domain registrar (where you bought `connies-bailbonds.com`).

## Automatic Deployments

Once connected, Netlify will automatically:
- ✅ Deploy every time you push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show deployment status in GitHub

## Troubleshooting

### If Build Fails:
1. Check the build logs in Netlify dashboard
2. Common issues:
   - Missing environment variables (if needed)
   - Node version mismatch
   - Build timeout (rare for this project)

### If Site Shows 404 Errors:
- ✅ Already handled! The `netlify.toml` and `_redirects` file ensure SPA routing works

### If You Need to Update Settings:
- Edit `netlify.toml` and push to GitHub
- Netlify will automatically redeploy

## Quick Reference

**GitHub Repository**: `https://github.com/codycoffey04/connie-s-homepage-build`

**Netlify Dashboard**: `https://app.netlify.com`

**After Deployment**: Your site will be live at a Netlify subdomain, then you can add your custom domain.

---

## Summary

1. ✅ Go to [app.netlify.com](https://app.netlify.com)
2. ✅ Click "Add new site" → "Import an existing project"
3. ✅ Connect GitHub and select `connie-s-homepage-build`
4. ✅ Verify settings (auto-detected from `netlify.toml`)
5. ✅ Click "Deploy site"
6. ✅ Wait 2-5 minutes
7. ✅ Your site is live!

That's it! The site will automatically redeploy whenever you push to GitHub.

