import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceLinks = [
    { name: "Delivery & Pumping", anchor: "delivery-pumping" },
    { name: "Decorative Concrete", anchor: "decorative-concrete" },
    { name: "Concrete Slabs", anchor: "concrete-slabs" },
    { name: "Concrete Forming", anchor: "concrete-forming" },
    { name: "Pool Construction", anchor: "pool-construction" },
  ];

  const serviceAreas = [
    "Miami-Dade County",
    "Broward County",
    "Doral",
    "Hialeah",
    "Kendall",
    "Homestead",
    "Fort Lauderdale",
    "Hollywood",
    "Pembroke Pines",
    "Coral Springs",
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <img src="/logos/topmix-logo-light.svg" alt="TopMix Concrete" className="h-8 w-auto" />
            </div>

            <p className="text-background/70 leading-relaxed mb-6 text-sm">
              Professional concrete services serving Miami-Dade & Broward
              Counties for over 10 years.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/topmixconcrete"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow TopMix Concrete on Facebook"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/topmixconcrete/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow TopMix Concrete on Instagram"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-base mb-4 text-background">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.anchor}>
                  <button
                    onClick={() => scrollToSection(service.anchor)}
                    className="text-background/70 hover:text-primary transition-colors duration-200 text-sm text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="font-bold text-base mb-4 text-background">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-background/70 text-sm flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-primary shrink-0" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-base mb-4 text-background">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {/* Phone */}
              <li>
                <a
                  href="tel:+17865437640"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200 shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">(786) 543-7640</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:CCabrera@Topmixconcrete.com"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200 shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm break-all">
                    CCabrera@Topmixconcrete.com
                  </span>
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="text-sm text-background/70">
                  <p>Mon-Fri: 7AM - 5PM</p>
                  <p>Sat: 8AM - 3PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-background/50 text-sm">
            &copy; 2026 TopMix Concrete. All rights reserved. | Licensed &
            Insured | Se Habla Espa&ntilde;ol
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
