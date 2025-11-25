import { Link } from "react-router-dom";
import { Phone, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t-4 border-brand-red text-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-tight">Contact Us</h3>
            <div className="space-y-4 text-white/90">
              <a href="tel:256-601-2041" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-red" />
                <span>Richard: 256-601-2041</span>
              </a>
              <a href="tel:256-523-7685" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-red" />
                <span>Connie: 256-523-7685</span>
              </a>
              <a href="tel:256-997-9932" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-red" />
                <span>Toni: 256-997-9932</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-tight">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-white/90 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-white/90 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-white/90 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="block text-white/90 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/bail-bonds-guide" className="block text-white/90 hover:text-white transition-colors">
                Bail Guide
              </Link>
            </div>
          </div>

          {/* Cities We Serve */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-tight">Cities We Serve</h3>
            <div className="space-y-3">
              <Link to="/fort-payne" className="block text-white/90 hover:text-white transition-colors">
                Fort Payne
              </Link>
              <Link to="/rainsville" className="block text-white/90 hover:text-white transition-colors">
                Rainsville
              </Link>
              <Link to="/henagar" className="block text-white/90 hover:text-white transition-colors">
                Henagar
              </Link>
              <Link to="/fyffe" className="block text-white/90 hover:text-white transition-colors">
                Fyffe
              </Link>
              <Link to="/valley-head" className="block text-white/90 hover:text-white transition-colors">
                Valley Head
              </Link>
              <Link to="/pisgah" className="block text-white/90 hover:text-white transition-colors">
                Pisgah
              </Link>
              <Link to="/centre" className="block text-white/90 hover:text-white transition-colors">
                Centre
              </Link>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 uppercase tracking-tight">About Us</h3>
            <div className="space-y-3 text-white/90">
              <p>Licensed Alabama Bail Bond Agents</p>
              <p>Family-Owned Since 2019</p>
              <p>Available 24/7/365</p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-tight">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/connies.bailbonding/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-red hover:bg-red-700 p-2 rounded-full transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm space-y-3">
          <p className="text-white/70 italic">
            This website does not constitute legal advice. Bail bond approval is subject to court discretion.
          </p>
          <p className="font-bold text-white">
            © 2025 Connie's Bail Bonding, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
