import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    { name: "Decorative Concrete", anchor: "decorative-concrete" },
    { name: "Concrete Slabs", anchor: "concrete-slabs" },
    { name: "Concrete Forming", anchor: "concrete-forming" },
    { name: "Pool Construction", anchor: "pool-construction" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-muted py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>Call today for a free estimate!</span>
            <a href="tel:(786) 543-7640" className="flex items-center gap-1 font-medium hover:text-primary">
              <Phone className="h-3 w-3" />
              (786) 543-7640
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="hover:text-primary"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Request An Estimate
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded"></div>
              <span className="font-bold text-xl">TopMix Concrete</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-primary font-medium hover:text-primary/80"
              >
                HOME
              </button>
              
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  SERVICES <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    {services.map((service) => (
                      <button
                        key={service.anchor}
                        onClick={() => scrollToSection(service.anchor)}
                        className="block w-full text-left px-3 py-2 hover:bg-secondary rounded-sm"
                      >
                        {service.name}
                      </button>
                    ))}
                    <Link
                      to="/concrete-services/delivery-pumping"
                      className="block w-full text-left px-3 py-2 hover:bg-secondary rounded-sm"
                    >
                      Delivery & Pumping
                    </Link>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('calculator')}
                className="hover:text-primary transition-colors"
              >
                CONCRETE CALCULATOR
              </button>
              
              <button 
                onClick={() => scrollToSection('gallery')}
                className="hover:text-primary transition-colors"
              >
                GALLERY
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary transition-colors"
              >
                CONTACT US
              </button>
              
              <Button className="bg-primary hover:bg-primary/90">
                REQUEST AN ESTIMATE
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="space-y-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block text-primary font-medium"
                >
                  HOME
                </button>
                
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    SERVICES <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {services.map((service) => (
                        <button
                          key={service.anchor}
                          onClick={() => scrollToSection(service.anchor)}
                          className="block text-muted-foreground hover:text-primary"
                        >
                          {service.name}
                        </button>
                      ))}
                      <Link
                        to="/concrete-services/delivery-pumping"
                        className="block text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Delivery & Pumping
                      </Link>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => scrollToSection('calculator')}
                  className="block hover:text-primary"
                >
                  CONCRETE CALCULATOR
                </button>
                
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="block hover:text-primary"
                >
                  GALLERY
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block hover:text-primary"
                >
                  CONTACT US
                </button>
                
                <Button className="w-full bg-primary hover:bg-primary/90 mt-4">
                  REQUEST AN ESTIMATE
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;