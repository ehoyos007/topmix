import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/gallery/hero-main.jpg)` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          COMMERCIAL & RESIDENTIAL
          <br />
          <span className="text-primary">CONCRETE SERVICES</span>
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl mb-2">
            SERVING MIAMI-DADE & BROWARD
          </p>
          <p className="text-lg md:text-xl font-semibold">
            FOR OVER 10 YEARS
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection('services')}
            className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 py-3"
          >
            SEE SERVICES
          </Button>
          
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 font-semibold px-8 py-3"
          >
            REQUEST ESTIMATE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;