# URL Field Inventory - /about Page Schema

This document catalogs every instance of a "url" property in the @graph array for the /about page.

## Complete URL Property List

| Schema Type | Property Path | Value | Notes |
|-------------|---------------|-------|-------|
| Organization | `url` | `https://connies-bailbonds.com` | ✅ **Top-level property** |
| Organization | `founder.hasCredential.url` | `https://apbb.alabama.gov/licensee/B0092` | ✅ Nested in credential object |
| Organization | `hasCredential[0].url` | `https://apbb.alabama.gov/licensee/B0092` | ✅ Nested in credential array |
| Organization | `hasCredential[1].url` | `https://apbb.alabama.gov/licensee/S0334` | ✅ Nested in credential array |
| Organization | `hasCredential[2].url` | `https://apbb.alabama.gov/licensee/S0345` | ✅ Nested in credential array |
| AboutPage | `url` | `https://connies-bailbonds.com/about` | ✅ Different schema object |
| BreadcrumbList | `itemListElement[0].item` | `https://connies-bailbonds.com/` | ⚠️ Uses `item`, not `url` |
| BreadcrumbList | `itemListElement[1].item` | `https://connies-bailbonds.com/about` | ⚠️ Uses `item`, not `url` |
| Review[0] | `itemReviewed.@id` | `https://connies-bailbonds.com/#organization` | ⚠️ References via @id, no `url` |
| Review[1] | `itemReviewed.@id` | `https://connies-bailbonds.com/#organization` | ⚠️ References via @id, no `url` |
| Review[2] | `itemReviewed.@id` | `https://connies-bailbonds.com/#organization` | ⚠️ References via @id, no `url` |
| Review[3] | `itemReviewed.@id` | `https://connies-bailbonds.com/#organization` | ⚠️ References via @id, no `url` |

## Analysis by Schema Type

### Organization Schema
- **Top-level `url` properties:** 1
  - `url`: `https://connies-bailbonds.com` ✅ **ONLY ONE TOP-LEVEL URL**
  
- **Nested `url` properties:** 4
  - All within `EducationalOccupationalCredential` objects
  - Valid Schema.org structure - credentials should have URLs
  - NOT duplicates of the top-level `url`

### AboutPage Schema
- **Top-level `url` properties:** 1
  - `url`: `https://connies-bailbonds.com/about`
  - Different schema object from Organization - valid

### BreadcrumbList Schema
- **No `url` properties** - uses `item` instead (Schema.org spec)

### Review Schemas
- **No `url` properties** - reference Organization via `@id`

## Conclusion

**Total "url" properties:** 6
- 1 top-level in Organization ✅
- 4 nested in Organization credentials ✅ (valid nesting)
- 1 in AboutPage ✅ (different schema)

**Finding:** There is only **ONE top-level `url` property** in the Organization schema. All other `url` properties are:
1. Correctly nested within credential objects (Schema.org compliant)
2. In different schema objects (AboutPage)
3. Referenced via `@id` (Reviews)

**No duplicate top-level `url` properties exist.**

