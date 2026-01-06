# @id Reference Map - /about Page Schema

This document maps all @id values and their references across the @graph array.

## @id Definitions

| @id Value | Defined In | Schema Type | Purpose |
|-----------|------------|-------------|---------|
| `https://connies-bailbonds.com/#organization` | Organization | Organization/LocalBusiness/BailBondService | Master organization entity |
| `https://connies-bailbonds.com/#service` | Service (not on /about) | Service | Service catalog (referenced but not included) |

## @id References

| @id Value | Referenced By | Reference Path | Purpose |
|-----------|---------------|----------------|---------|
| `https://connies-bailbonds.com/#organization` | Review[0] | `itemReviewed.@id` | Links review to organization |
| `https://connies-bailbonds.com/#organization` | Review[1] | `itemReviewed.@id` | Links review to organization |
| `https://connies-bailbonds.com/#organization` | Review[2] | `itemReviewed.@id` | Links review to organization |
| `https://connies-bailbonds.com/#organization` | Review[3] | `itemReviewed.@id` | Links review to organization |
| `https://connies-bailbonds.com/#service` | Organization | `hasOfferCatalog.@id` | Links organization to service catalog |

## Place @id References (in Organization.areaServed)

The Organization schema references Place schemas via @id (these Place schemas are not included on /about page, but are referenced):

| @id Value | Referenced By | Reference Path |
|-----------|---------------|----------------|
| `https://connies-bailbonds.com/fort-payne#place` | Organization | `areaServed[0].@id` |
| `https://connies-bailbonds.com/rainsville#place` | Organization | `areaServed[1].@id` |
| `https://connies-bailbonds.com/henagar#place` | Organization | `areaServed[2].@id` |
| `https://connies-bailbonds.com/fyffe#place` | Organization | `areaServed[3].@id` |
| `https://connies-bailbonds.com/pisgah#place` | Organization | `areaServed[4].@id` |
| `https://connies-bailbonds.com/valley-head#place` | Organization | `areaServed[5].@id` |
| `https://connies-bailbonds.com/centre#place` | Organization | `areaServed[6].@id` |

## Reference Pattern Analysis

### Valid @id Patterns
✅ **Unique @id values** - No duplicate @id definitions within @graph  
✅ **Proper references** - All @id references point to defined schemas  
✅ **Semantic linking** - Reviews correctly reference Organization via @id  

### No @id Defined For
- AboutPage schema (has no @id - optional per Schema.org)
- BreadcrumbList schema (has no @id - optional per Schema.org)
- Review schemas (have no @id - optional per Schema.org)

## Conclusion

**All @id references are valid and unique.**
- Only one @id is defined in the /about page @graph: `/#organization`
- All references to this @id are from Review schemas (correct pattern)
- No duplicate @id definitions exist
- @id references follow Schema.org best practices

