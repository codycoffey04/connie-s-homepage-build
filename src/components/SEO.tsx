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
}

export const SEO = ({ title, description, canonical, ogImage, schema, city, reviews }: SEOProps) => {
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
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      
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
