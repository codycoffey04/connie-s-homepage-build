import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavLink } from "@/components/NavLink";
import { cities, phoneNumbers } from "@/lib/cityUtils";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Connie's Bail Bonding - Available 24/7" 
              className="h-14 w-auto hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-navy-deep transition-colors">
              Home
            </Link>
            <a href="/#about" className="text-sm font-medium text-foreground/70 hover:text-navy-deep transition-colors">
              About
            </a>
            <a href="/#contact" className="text-sm font-medium text-foreground/70 hover:text-navy-deep transition-colors">
              Contact
            </a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Cities We Serve
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-1 p-2">
                      {cities.map((city) => (
                        <Link
                          key={city.slug}
                          to={`/${city.slug}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{city.name}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a 
              href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal/10 text-teal font-semibold hover:bg-teal/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">24/7 HELP:</span> {phoneNumbers.richard.number}
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <a 
                  href="/#about" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/#contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                
                <div className="border-t pt-4 mt-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Cities We Serve</p>
                  <div className="flex flex-col gap-2">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/${city.slug}`}
                        className="text-base hover:text-primary transition-colors pl-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 mt-2">
                  <a 
                    href={`tel:${phoneNumbers.richard.number.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-2 text-lg font-semibold text-primary"
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
