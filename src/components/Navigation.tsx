import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cities, phoneNumbers } from "@/lib/cityUtils";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b-2 border-brand-red shadow-lg">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-red focus:text-white focus:font-bold focus:rounded"
      >
        Skip to main content
      </a>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight hover:text-brand-red transition-colors sm:whitespace-nowrap">
              CONNIE'S BAIL BONDING
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link to="/" className="text-sm font-bold text-white tracking-wide hover:text-brand-red transition-colors" aria-label="Go to homepage">
              Home
            </Link>
            <Link to="/about" className="text-sm font-bold text-white tracking-wide hover:text-brand-red transition-colors" aria-label="Learn about Connie's Bail Bonding">
              About
            </Link>
            <Link to="/contact" className="text-sm font-bold text-white tracking-wide hover:text-brand-red transition-colors" aria-label="Contact us">
              Contact
            </Link>
            <Link to="/faq" className="text-sm font-bold text-white tracking-wide hover:text-brand-red transition-colors" aria-label="Frequently asked questions">
              FAQ
            </Link>
            <Link to="/bail-bonds-guide" className="text-sm font-bold text-white tracking-wide hover:text-brand-red transition-colors" aria-label="Read our bail bonds guide">
              Bail Guide
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-bold text-white tracking-wide hover:text-brand-red bg-transparent">
                    Cities
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-1 p-2 bg-black border-brand-red border-2">
                      {cities.map((city) => (
                        <Link
                          key={city.slug}
                          to={`/${city.slug}`}
                          className="block rounded p-3 text-white hover:bg-brand-red hover:text-white transition-colors font-medium"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a 
              href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-black uppercase text-xs tracking-wider hover:bg-red-600 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              24/7 Emergency
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-brand-red hover:bg-white/10"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-l-2 border-brand-red">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-bold text-white hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-lg font-bold text-white hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-lg font-bold text-white hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/faq" 
                  className="text-lg font-bold text-white hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/bail-bonds-guide" 
                  className="text-lg font-bold text-white hover:text-brand-red transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bail Guide
                </Link>
                
                <div className="border-t border-white/20 pt-4 mt-2">
                  <p className="text-sm font-bold text-white/70 mb-3 uppercase">Cities We Serve</p>
                  <div className="flex flex-col gap-2">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/${city.slug}`}
                        className="text-base text-white hover:text-brand-red transition-colors pl-2 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4 mt-2">
                  <a 
                    href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-2 text-lg font-bold text-brand-red"
                  >
                    <Phone className="w-5 h-5" />
                    {phoneNumbers.richard.number}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
