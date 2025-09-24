import { Button } from "@/components/ui/button";
import { Building, CheckCircle } from "lucide-react";

const ConcreteForming = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const useCases = [
    "Foundation walls and footings",
    "Retaining walls and barriers", 
    "Structural columns and beams",
    "Commercial building foundations",
    "Residential basement walls",
    "Bridge and infrastructure work",
    "Custom architectural elements",
    "Industrial facility construction",
    "Storm water management systems",
    "Parking structure foundations",
    "High-rise building components",
    "Precast concrete elements"
  ];

  return (
    <section id="concrete-forming" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <Building className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CONCRETE <span className="text-primary">FORMING</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert concrete forming services for commercial and residential construction projects. Our skilled team 
            provides precision forming work with attention to detail, ensuring structural integrity and professional 
            results. From foundation work to complex architectural elements, we handle projects of all sizes.
          </p>
        </div>

        {/* Use Cases Checklist */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Applications & Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-secondary rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Precision Work</h4>
              <p className="text-muted-foreground">Accurate measurements and professional forming techniques for exact specifications.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Quality Materials</h4>
              <p className="text-muted-foreground">High-grade forming materials and equipment for superior concrete finishes.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Experienced Team</h4>
              <p className="text-muted-foreground">Skilled professionals with years of experience in complex forming projects.</p>
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
            Get Expert Concrete Forming Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConcreteForming;