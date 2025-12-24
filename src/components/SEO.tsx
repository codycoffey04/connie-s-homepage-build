import { Helmet } from 'react-helmet-async';
import { getReviewSchema } from '@/lib/schemaUtils';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object | object[];
  city?: string;
  reviews?: string[];
  geo?: {
    placename: string;
    region: string;
    position: string;
  };
}

export const SEO = ({ title, description, canonical, ogImage, schema, city, reviews, geo }: SEOProps) => {
  // If title already contains brand name, use as-is; otherwise append brand name
  const fullTitle = title.includes("Connie's Bail") ? title : `${title} | Connie's Bail Bonding`;
  const siteUrl = 'https://connies-bailbonds.com';

  const getCityOGImage = () => {
    if (ogImage) return ogImage;
    if (city) {
      const citySlug = city.toLowerCase().replace(/\s+/g, '-');
      return `${siteUrl}/og-${citySlug}.jpg`;
    }
    return `${siteUrl}/og-image.png`;
  };

  const defaultImage = getCityOGImage();
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Combine all schemas into @graph array
  const buildSchemaGraph = () => {
    const graphItems: object[] = [];
    
    if (schema) {
      if (Array.isArray(schema)) {
        graphItems.push(...schema);
      } else {
        graphItems.push(schema);
      }
    }
    
    if (reviews && reviews.length > 0) {
      graphItems.push(...getReviewSchema(reviews));
    }
    
    if (graphItems.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@graph": graphItems.map(item => {
        // Remove @context from individual items since it's at graph level
        const { "@context": _, ...rest } = item as { "@context"?: string };
        return rest;
      })
    };
  };

  const schemaGraph = buildSchemaGraph();

  return (
    <Helmet>
      <title>{fullTitle}</title>
      
      {/* Primary Meta */}
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph - Enhanced */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Professional bail bond services`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Connie's Bail Bonding" />
      
      {/* Twitter - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:image:alt" content={`${title} - Professional bail bond services`} />
      
      {/* General SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Connie's Bail Bonding" />
      
      {/* Geo Tags for Local SEO */}
      {geo && (
        <>
          <meta name="geo.placename" content={geo.placename} />
          <meta name="geo.region" content={geo.region} />
          <meta name="geo.position" content={geo.position} />
          <meta name="ICBM" content={geo.position.replace(';', ', ')} />
        </>
      )}
      
      {/* Combined Schema Graph */}
      {schemaGraph && (
        <script type="application/ld+json">
          {JSON.stringify(schemaGraph)}
        </script>
      )}
    </Helmet>
  );
};
