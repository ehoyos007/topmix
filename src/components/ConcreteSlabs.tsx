import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Hammer, CheckSquare } from "lucide-react";

const ConcreteSlabs = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Residential and commercial slab installation",
    "Foundation work and structural concrete",
    "Driveways, patios, and walkway construction", 
    "Garage floors and basement slabs",
    "Quality materials and expert craftsmanship",
    "Competitive pricing with professional results"
  ];

  const process = [
    {
      icon: Search,
      step: "1",
      title: "Site Assessment",
      description: "We evaluate your site conditions, soil type, and project requirements to ensure proper planning."
    },
    {
      icon: Hammer,
      step: "2", 
      title: "Preparation & Pour",
      description: "Professional site preparation, forming, and concrete pouring using high-quality materials."
    },
    {
      icon: CheckSquare,
      step: "3",
      title: "Finishing & Cure",
      description: "Expert finishing techniques followed by proper curing for maximum strength and durability."
    }
  ];

  return (
    <section id="concrete-slabs" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CONCRETE <span className="text-primary">SLABS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional concrete slab installation for residential and commercial projects. From foundation work 
            to driveways and patios, we deliver quality concrete slabs built to last. Our experienced team ensures 
            proper preparation, pouring, and finishing for optimal results.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 font-semibold px-8 py-3"
          >
            Schedule Your Concrete Slab Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConcreteSlabs;