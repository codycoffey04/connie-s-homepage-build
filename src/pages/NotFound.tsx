import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Home, HelpCircle, BookOpen } from "lucide-react";
import { phoneNumbers } from "@/lib/cityUtils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Page Not Found | 404 Error"
        description="The page you're looking for doesn't exist. Get fast 24/7 bail bond help in DeKalb and Cherokee Counties, Alabama."
        canonical={location.pathname}
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        
        <main className="flex-grow flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl w-full text-center space-y-8">
            <div>
              <h1 className="text-8xl md:text-9xl font-black text-brand-red mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Emergency Help Section */}
            <div className="bg-black text-white p-8 rounded-lg border-4 border-brand-red">
              <h3 className="text-2xl font-black uppercase mb-4">Need Help Now?</h3>
              <p className="text-white/80 mb-6">Available 24/7 for emergency bail bonds</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 justify-center px-6 py-3 bg-brand-red text-white font-black uppercase text-sm hover:bg-red-600 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Richard: {phoneNumbers.richard.number}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link to="/">
                <Button variant="outline" className="w-full h-full py-6 border-2 hover:border-brand-red hover:text-brand-red">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full h-full py-6 border-2 hover:border-brand-red hover:text-brand-red">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="outline" className="w-full h-full py-6 border-2 hover:border-brand-red hover:text-brand-red">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  FAQ
                </Button>
              </Link>
            </div>

            <div className="pt-4">
              <Link to="/bail-bonds-guide" className="inline-flex items-center gap-2 text-brand-red hover:underline font-bold">
                <BookOpen className="w-5 h-5" />
                Browse Bail Bonds Guide
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
