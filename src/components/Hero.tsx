import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

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
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-black/60 to-primary/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight drop-shadow-lg">
          COMMERCIAL & RESIDENTIAL
          <br />
          <span className="text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">CONCRETE SERVICES</span>
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl mb-2 font-heading drop-shadow-md">
            SERVING MIAMI-DADE & BROWARD
          </p>
          <p className="text-lg md:text-xl font-semibold drop-shadow-md">
            FOR OVER 10 YEARS
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection('services')}
            className="font-heading font-semibold px-8 py-3 text-base"
          >
            SEE SERVICES
          </Button>
          
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="font-heading font-semibold px-8 py-3 text-base"
          >
            REQUEST ESTIMATE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;