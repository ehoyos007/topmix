import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Sparkles, Square, Building, Waves } from "lucide-react";

const ServicesOverview = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Truck,
      title: "Delivery & Pumping", 
      description: "Professional concrete delivery and pumping services for all project sizes. Complete line of standard products and special mixes by request.",
      anchor: "delivery-pumping"
    },
    {
      icon: Sparkles,
      title: "Decorative Concrete",
      description: "Transform your space with beautiful decorative concrete solutions. Stamped, stained, and polished options available.",
      anchor: "decorative-concrete"
    },
    {
      icon: Square,
      title: "Concrete Slabs",
      description: "Professional concrete slab installation for driveways, patios, walkways, and foundation work. Quality guaranteed.",
      anchor: "concrete-slabs"
    },
    {
      icon: Building,
      title: "Concrete Forming",
      description: "Expert concrete forming services for commercial and residential projects. Precision work with attention to detail.",
      anchor: "concrete-forming"
    },
    {
      icon: Waves,
      title: "New Pool Construction", 
      description: "Complete pool construction services using high-quality concrete. From design to completion with professional results.",
      anchor: "pool-construction"
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a company that thrives on providing excellent service along with high quality products to all of our customers. 
            Whether it's flooring to be installed in a residential area or in a commercial area we have many years of service working for both.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection(service.anchor)}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;