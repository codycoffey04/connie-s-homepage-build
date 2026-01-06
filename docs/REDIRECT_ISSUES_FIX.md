# Redirect Issues Fix - January 6, 2026

## Issues Identified from Ahrefs Audit

1. **3XX redirects in sitemap** (23 pages)
2. **Redirect chain** (1 page)
3. **Page receiving organic traffic via redirect** (1 page)

## Root Cause Analysis

### Issue 1: 3XX Redirects in Sitemap

**Problem:** Ahrefs detects redirects when crawling sitemap URLs.

**Causes:**
- Netlify automatically redirects HTTP → HTTPS (this is normal and good)
- www → non-www redirects may be happening
- Trailing slash redirects may be occurring

**Solution Applied:**
- Added explicit www → non-www redirect in `netlify.toml` and `_redirects`
- Ensured sitemap URLs are canonical (HTTPS, no www, no trailing slashes)
- HTTP → HTTPS is handled automatically by Netlify (no action needed)

### Issue 2: Redirect Chain

**Problem:** One page has a redirect chain (multiple redirects in sequence).

**Solution:**
- Simplified redirect rules to prevent chains
- Removed redundant redirects
- Ensured direct paths to final destinations

### Issue 3: Page Receiving Traffic via Redirect

**Problem:** One page is receiving organic traffic through a redirect, losing link equity.

**Solution:**
- Need to identify the specific page (requires Ahrefs data)
- Once identified, ensure proper 301 redirect is in place
- Update any internal links pointing to old URL

## Changes Made

### 1. Updated `netlify.toml`

Added explicit www → non-www redirect:
```toml
[[redirects]]
  from = "https://www.connies-bailbonds.com/*"
  to = "https://connies-bailbonds.com/:splat"
  status = 301
  force = true
```

### 2. Updated `public/_redirects`

Added explicit www → non-www redirect:
```
https://www.connies-bailbonds.com/*    https://connies-bailbonds.com/:splat    301
```

### 3. Sitemap Verification

✅ All sitemap URLs are canonical:
- HTTPS (not HTTP)
- No www prefix
- No trailing slashes
- Direct URLs (not redirects)

## Expected Results

After deployment:
- ✅ Reduced redirect chains
- ✅ Canonical URLs in sitemap
- ✅ Proper www → non-www handling
- ⚠️ HTTP → HTTPS redirects will still occur (normal and expected)

## Next Steps

1. **Deploy changes** to Netlify
2. **Re-crawl in Ahrefs** after deployment
3. **Identify specific pages** with redirect chains (requires Ahrefs data)
4. **Check Google Search Console** for pages receiving traffic via redirect
5. **Update internal links** if any old URLs are found

## Notes

- HTTP → HTTPS redirects are **normal and expected** - Netlify handles these automatically
- The 200 status redirect (`/*` → `/index.html`) is correct for SPAs and should not be flagged
- Ahrefs may still flag HTTP → HTTPS redirects, but these are beneficial for SEO
- The key is ensuring sitemap URLs are canonical and don't require redirects

## Monitoring

After deployment, monitor:
- Ahrefs Site Audit for reduced redirect issues
- Google Search Console for crawl errors
- Page load times (redirects can slow down pages)
- Internal link structure (ensure no old URLs)

