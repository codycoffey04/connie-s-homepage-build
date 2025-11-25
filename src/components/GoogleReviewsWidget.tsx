import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface GoogleReviewsWidgetProps {
  placeId: string;
  businessName?: string;
}

export const GoogleReviewsWidget = ({ 
  placeId, 
  businessName = "Connie's Bail Bonding" 
}: GoogleReviewsWidgetProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header with Average Rating */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-brand-red text-brand-red" />
            ))}
          </div>
          <span className="text-2xl font-bold">5.0</span>
        </div>
        <p className="text-muted-foreground">Based on Google Reviews</p>
      </div>

      {/* Google Maps Embed with Reviews */}
      <Card className="overflow-hidden border-2 border-border/30 shadow-lg">
        <CardContent className="p-0">
          <iframe
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=&q=place_id:${placeId}&zoom=15`}
            allowFullScreen
            title={`${businessName} Google Reviews`}
          />
        </CardContent>
      </Card>

      {/* CTA to Write a Review */}
      <div className="text-center mt-6">
        <a
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white hover:bg-red-600 transition-colors font-bold uppercase tracking-wide shadow-lg hover:shadow-xl rounded"
        >
          <Star className="w-5 h-5" />
          Write a Review on Google
        </a>
      </div>
    </div>
  );
};
