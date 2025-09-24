import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Sparkles, Timer, Award } from "lucide-react";
import { LazyImage } from "@/components/LazyImage";
import decorative1 from "@/assets/decorative-1.jpg";
import decorative2 from "@/assets/decorative-2.jpg";
import decorative3 from "@/assets/decorative-3.jpg";

const DecorativeConcrete = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Palette,
      title: "Custom Designs",
      description: "Unlimited color and pattern options to match your vision and aesthetic preferences."
    },
    {
      icon: Sparkles,
      title: "Enhanced Durability",
      description: "Superior strength and longevity compared to traditional concrete finishes."
    },
    {
      icon: Timer,
      title: "Quick Installation", 
      description: "Efficient installation process with minimal disruption to your daily routine."
    },
    {
      icon: Award,
      title: "Professional Results",
      description: "Expert craftsmanship ensuring beautiful, long-lasting decorative concrete."
    }
  ];

  const galleryImages = [
    { 
      src: decorative1, 
      alt: "Stamped concrete patio with decorative patterns",
      srcSet: `${decorative1} 400w, ${decorative1} 800w`
    },
    { 
      src: decorative2, 
      alt: "Polished concrete floor with high-gloss finish",
      srcSet: `${decorative2} 400w, ${decorative2} 800w`
    },
    { 
      src: decorative3, 
      alt: "Stained concrete driveway in earth tones",
      srcSet: `${decorative3} 400w, ${decorative3} 800w`
    }
  ];

  return (
    <section id="decorative-concrete" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            DECORATIVE <span className="text-primary">CONCRETE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your space with beautiful decorative concrete solutions. Our expert team specializes in 
            stamped, stained, and polished concrete that combines aesthetic appeal with long-lasting durability. 
            Perfect for patios, driveways, walkways, and interior floors.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mini Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <LazyImage
                  src={image.src}
                  srcSet={image.srcSet}
                  alt={image.alt}
                  className="h-48 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{image.alt}</span>
                </div>
              </div>
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
            Get Your Free Decorative Concrete Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DecorativeConcrete;