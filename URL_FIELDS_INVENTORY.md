# Complete Inventory of "url" Fields in /about Page Schemas

## Overview
This document lists every instance of the `"url"` property across all schemas in the `@graph` array that renders on the `/about` page.

---

## Schemas Used on /about Page

Based on `src/pages/About.tsx`, the following schemas are included:

1. **Organization** (`getOrganizationSchema()`)
2. **AboutPage** (`getAboutPageSchema()`)
3. **BreadcrumbList** (`getBreadcrumbSchema()`)
4. **Review** (multiple, via `getReviewSchema()`)

**Note:** `WebSite` schema is NOT used on the `/about` page. It's only used on the homepage (`Index.tsx`).

---

## 1. ORGANIZATION Schema
**Schema Type:** `["Organization", "LocalBusiness", "BailBondService"]`  
**Function:** `getOrganizationSchema()`  
**Location:** `src/lib/schemaUtils.ts:13-185`

### Top-Level "url" Fields (1)
| Line | Property | Value | Status |
|------|----------|-------|--------|
| 24 | `"url"` | `SITE_URL` (resolves to `"https://connies-bailbonds.com"`) | ✅ **SINGLE** |

### Nested "url" Fields (4 - NOT duplicates)
| Line | Location | Property | Value | Purpose |
|------|----------|----------|-------|---------|
| 39 | `founder.hasCredential` | `"url"` | `"https://apbb.alabama.gov/licensee/B0092"` | License URL |
| 68 | `hasCredential[0]` | `"url"` | `"https://apbb.alabama.gov/licensee/B0092"` | Connie's license |
| 74 | `hasCredential[1]` | `"url"` | `"https://apbb.alabama.gov/licensee/S0334"` | Richard's license |
| 80 | `hasCredential[2]` | `"url"` | `"https://apbb.alabama.gov/licensee/S0345"` | Toni's license |

**Summary:** 1 top-level `"url"` field ✅

---

## 2. ABOUTPAGE Schema
**Schema Type:** `"AboutPage"`  
**Function:** `getAboutPageSchema(name, description)`  
**Location:** `src/lib/schemaUtils.ts:423-442`

### Top-Level "url" Fields (1)
| Line | Property | Value | Status |
|------|----------|-------|--------|
| 428 | `"url"` | `` `${SITE_URL}/about` `` (resolves to `"https://connies-bailbonds.com/about"`) | ✅ **SINGLE** |

**Summary:** 1 top-level `"url"` field ✅

---

## 3. BREADCRUMBLIST Schema
**Schema Type:** `"BreadcrumbList"`  
**Function:** `getBreadcrumbSchema(items)`  
**Location:** `src/lib/schemaUtils.ts:305-315`

### "url" Fields
**NONE** - BreadcrumbList does not use `"url"` property.  
It uses `"item"` property instead (which contains URLs, but the property name is `"item"`, not `"url"`).

| Line | Location | Property | Value |
|------|----------|----------|-------|
| 313 | `itemListElement[].item` | `"item"` | `` `${SITE_URL}${item.url}` `` |

**Summary:** 0 `"url"` fields (uses `"item"` instead) ✅

---

## 4. REVIEW Schema
**Schema Type:** `"Review"`  
**Function:** `getReviewSchema(reviews)`  
**Location:** `src/lib/schemaUtils.ts:370-402`

### "url" Fields
**NONE** - Review schema does not contain any `"url"` properties.

**Summary:** 0 `"url"` fields ✅

---

## SUMMARY

### Top-Level "url" Fields by Schema Object:
| Schema | Top-Level "url" Count | Value |
|--------|----------------------|-------|
| **Organization** | **1** | `"https://connies-bailbonds.com"` |
| **AboutPage** | **1** | `"https://connies-bailbonds.com/about"` |
| **BreadcrumbList** | **0** | (uses `"item"` property) |
| **Review** | **0** | (no URL property) |

### Total Top-Level "url" Fields: **2**
- ✅ Organization schema: 1 `"url"` field
- ✅ AboutPage schema: 1 `"url"` field
- ✅ Both are in different schema objects → **NOT duplicates**

### Nested "url" Fields (NOT duplicates - different contexts):
- Organization.hasCredential[].url: 3 fields (license URLs)
- Organization.founder.hasCredential.url: 1 field (license URL)

---

## CONCLUSION

✅ **NO DUPLICATE "url" FIELDS FOUND**

Each schema object has at most **one** top-level `"url"` field:
- Organization: 1 `"url"` field (value: `https://connies-bailbonds.com`)
- AboutPage: 1 `"url"` field (value: `https://connies-bailbonds.com/about`)

These are **separate schema objects** in the `@graph` array, so they are **NOT duplicates**. Each schema type is allowed to have its own `"url"` property according to Schema.org specifications.

**If Google Rich Results is still reporting a duplicate "url" field, it may be:**
1. A false positive in Google's validator
2. An issue with how the JSON-LD is being serialized/rendered
3. A caching issue showing old schema data

---

## Note About WebSite Schema

The `WebSite` schema (`getWebSiteSchema()`) is **NOT** included on the `/about` page. It's only used on the homepage (`Index.tsx`). If you're seeing a duplicate "url" error that mentions WebSite, you may be testing the wrong page, or there may be an issue with how schemas are being combined on a different page.

