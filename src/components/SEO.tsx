import { Helmet } from 'react-helmet-async';
import { getReviewSchema } from '@/lib/schemaUtils';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object[];
  city?: string;
  reviews?: string[];
  geo?: {
    placename: string;
    region: string;
    position: string;
  };
}

export const SEO = ({ title, description, canonical, ogImage, schema, city, reviews, geo }: SEOProps) => {
  const fullTitle = `${title} | Connie's Bail Bonding`;
  
  // City-specific OG images
  const getCityOGImage = () => {
    if (ogImage) return ogImage;
    if (city) {
      const citySlug = city.toLowerCase().replace(/\s+/g, '-');
      return `https://conniesbailbonding.com/og-${citySlug}.jpg`;
    }
    return 'https://conniesbailbonding.com/og-image.jpg';
  };
  
  const defaultImage = getCityOGImage();
  const siteUrl = 'https://conniesbailbonding.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
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
          <meta name="ICBM" content={geo.position} />
        </>
      )}
      
      {/* Structured Data */}
      {schema && schema.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
      
      {/* Review Schema */}
      {reviews && reviews.length > 0 && getReviewSchema(reviews).map((reviewSchema, index) => (
        <script key={`review-${index}`} type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      ))}
    </Helmet>
  );
};
