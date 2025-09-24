import { Button } from "@/components/ui/button";
import { ArrowLeft, Truck, Clock, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const DeliveryPumping = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Concrete Delivery & Pumping Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional concrete delivery and pumping services for commercial and residential projects. 
            We provide reliable, on-time concrete delivery with state-of-the-art pumping equipment.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Free Estimate
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg border bg-card">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ready-Mix Delivery</h3>
              <p className="text-muted-foreground">
                Fresh concrete delivered directly to your job site with our modern fleet of mixer trucks.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border bg-card">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
              <p className="text-muted-foreground">
                Scheduled deliveries with real-time tracking to ensure your project stays on schedule.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border bg-card">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                All concrete mixes meet or exceed industry standards with comprehensive quality control.
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Standard and custom concrete mixes",
                  "Small to large volume orders", 
                  "Residential and commercial delivery",
                  "Professional pumping services"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  "State-of-the-art equipment",
                  "Experienced operators",
                  "Flexible scheduling options",
                  "Competitive pricing"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free estimate on your concrete delivery and pumping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Call (786) 543-7640
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Request Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPumping;