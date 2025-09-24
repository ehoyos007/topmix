import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, Shield, CheckCircle } from "lucide-react";

const DeliveryPumping = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Truck,
      title: "Ready-Mix Delivery",
      description: "Fresh concrete delivered directly to your job site with our modern fleet of mixer trucks."
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "Scheduled deliveries with real-time tracking to ensure your project stays on schedule."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All concrete mixes meet or exceed industry standards with comprehensive quality control."
    }
  ];

  const capabilities = [
    "Standard and custom concrete mixes",
    "Small to large volume orders", 
    "Residential and commercial delivery",
    "Professional pumping services",
    "State-of-the-art equipment",
    "Experienced operators",
    "Flexible scheduling options",
    "Competitive pricing"
  ];

  return (
    <section id="delivery-pumping" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            DELIVERY & <span className="text-primary">PUMPING</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional concrete delivery and pumping services for commercial and residential projects. 
            We provide reliable, on-time concrete delivery with state-of-the-art pumping equipment. 
            Our experienced team ensures quality materials and professional service for projects of all sizes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Capabilities</h3>
          <div className="bg-secondary rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg border bg-card">
            <h4 className="text-lg font-semibold text-foreground mb-2">Modern Equipment</h4>
            <p className="text-muted-foreground text-sm">
              State-of-the-art mixer trucks and pumping equipment for efficient delivery and placement.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg border bg-card">
            <h4 className="text-lg font-semibold text-foreground mb-2">Experienced Team</h4>
            <p className="text-muted-foreground text-sm">
              Professional operators with years of experience in concrete delivery and pumping services.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg border bg-card">
            <h4 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h4>
            <p className="text-muted-foreground text-sm">
              Comprehensive quality control processes to ensure consistent, high-quality concrete delivery.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 font-semibold px-8 py-3"
          >
            Request Delivery & Pumping Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPumping;