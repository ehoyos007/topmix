import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Hammer, Sparkles } from "lucide-react";

const PoolConstruction = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phases = [
    {
      icon: PenTool,
      title: "Design & Planning",
      description: "Comprehensive design consultation, site evaluation, and detailed planning to bring your vision to life. We work with you to create the perfect pool design for your space and needs.",
      features: ["Site assessment", "Custom design", "Permit assistance", "Timeline planning"]
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Professional excavation, steel reinforcement, and concrete pouring using industry-best practices. Our experienced crew ensures structural integrity and quality workmanship throughout the build.",
      features: ["Excavation work", "Steel reinforcement", "Concrete shell", "Plumbing installation"]
    },
    {
      icon: Sparkles,
      title: "Finishing",
      description: "Final touches including surface finishing, equipment installation, and quality inspections. We complete your pool with attention to detail and prepare it for years of enjoyment.",
      features: ["Surface finishing", "Equipment setup", "Final inspections", "Client walkthrough"]
    }
  ];

  return (
    <section id="pool-construction" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            NEW POOL <span className="text-primary">CONSTRUCTION</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete pool construction services using high-quality concrete construction methods. From initial design 
            to final completion, we handle every aspect of your pool project with professional expertise and attention 
            to detail. Transform your backyard into a beautiful oasis with our comprehensive pool construction services.
          </p>
        </div>

        {/* Phases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Construction Phases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <phase.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-3 text-center">
                    {phase.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 text-center leading-relaxed flex-grow">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {phase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-background rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Pool Construction?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Licensed & Insured</h4>
              <p className="text-muted-foreground text-sm">Fully licensed contractors with comprehensive insurance coverage.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Quality Materials</h4>
              <p className="text-muted-foreground text-sm">Premium concrete and materials for long-lasting pool construction.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
              <p className="text-muted-foreground text-sm">Experienced pool construction specialists with proven track record.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Warranty</h4>
              <p className="text-muted-foreground text-sm">Comprehensive warranty coverage for peace of mind.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 font-semibold px-8 py-3"
          >
            Start Your Pool Construction Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PoolConstruction;