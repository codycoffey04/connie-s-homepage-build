# Switch from Manual Deploys to GitHub → Netlify Automated Deployments

## Current Status
- ✅ Site is live on Netlify: `www.connies-bailbonds.com`
- ✅ Currently using "Manual deploys"
- ✅ GitHub repository: `https://github.com/codycoffey04/connie-s-homepage-build`
- ✅ `netlify.toml` configured and ready

## Step-by-Step: Connect GitHub to Netlify

### STEP 1: Open Netlify Project Settings

1. In your Netlify dashboard (where you see "connies-bailbonding")
2. Click **"Project configuration"** button (gear icon) in the project card
   - OR go to: **Site settings** → **Build & deploy** → **Continuous Deployment**

### STEP 2: Connect Git Repository

1. In the **"Build & deploy"** section, find **"Continuous Deployment"**
2. Click **"Link repository"** or **"Connect to Git provider"**
3. If you see "Manual deploys" or "No Git provider", click **"Link repository"**

### STEP 3: Authorize GitHub (if needed)

1. If prompted, click **"Authorize Netlify"** or **"Configure Netlify on GitHub"**
2. You may need to:
   - Install the Netlify GitHub App
   - Grant access to your repositories
   - Select which repositories Netlify can access

### STEP 4: Select Your Repository

1. In the repository list, find and select: **`codycoffey04/connie-s-homepage-build`**
2. Click **"Save"** or **"Connect"**

### STEP 5: Configure Build Settings

Netlify should auto-detect from `netlify.toml`, but verify:

**Build settings:**
- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: (Netlify will use latest LTS, or specify in `netlify.toml`)

**Branch to deploy:**
- **Production branch**: `main` (or `master` if that's your default)
- **Branch deploys**: Enable (for preview deployments)

### STEP 6: Save and Deploy

1. Click **"Save"** or **"Deploy site"**
2. Netlify will immediately trigger a new deployment from your GitHub repository
3. You'll see the deployment start in the "Deploys" section

### STEP 7: Verify Automated Deployments

1. Go to **"Deploys"** in the left sidebar
2. You should see a new deployment starting (triggered by Git)
3. The deployment will show:
   - ✅ "Triggered by Git push"
   - ✅ Build logs
   - ✅ Deployment status

### STEP 8: Test Automatic Deployment

1. Make a small change to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push
   ```
3. Go back to Netlify dashboard
4. You should see a new deployment automatically start!

## What Changes After Connecting

### Before (Manual Deploys):
- ❌ You had to manually drag/drop files or use Netlify CLI
- ❌ No automatic updates when code changes

### After (GitHub Deploys):
- ✅ Every push to `main` branch = automatic deployment
- ✅ Pull requests get preview deployments
- ✅ Build logs visible in Netlify
- ✅ Deployment status in GitHub

## Troubleshooting

### If "Link repository" button doesn't appear:
- Go to: **Site settings** → **Build & deploy** → **Continuous Deployment**
- Look for **"Link repository"** or **"Connect to Git provider"**

### If repository not found:
- Make sure you authorized Netlify to access your GitHub account
- Check that the repository is in the account you authorized
- Try disconnecting and reconnecting

### If build fails:
- Check build logs in Netlify
- Verify `netlify.toml` is in the repository root
- Ensure `package.json` has the correct build script

## Next Steps After Connection

1. ✅ **Automatic deployments** - Every push to `main` will deploy
2. ✅ **Preview deployments** - Pull requests get preview URLs
3. ✅ **Build notifications** - Get notified of deployment status
4. ✅ **Rollback capability** - Easy to rollback to previous deployments

## Summary

**What you need to do:**
1. Go to Netlify dashboard → Your site → **"Project configuration"**
2. Find **"Continuous Deployment"** section
3. Click **"Link repository"**
4. Select **`codycoffey04/connie-s-homepage-build`**
5. Verify build settings (auto-detected from `netlify.toml`)
6. Click **"Save"**

**That's it!** Your site will now automatically deploy whenever you push to GitHub.

