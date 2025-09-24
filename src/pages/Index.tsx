import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesOverview />
        
        {/* Placeholder sections for anchor navigation */}
        <section id="decorative-concrete" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Decorative Concrete</h2>
            <p className="text-muted-foreground">Coming soon - Decorative concrete services section</p>
          </div>
        </section>
        
        <section id="concrete-slabs" className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Concrete Slabs</h2>
            <p className="text-muted-foreground">Coming soon - Concrete slabs services section</p>
          </div>
        </section>
        
        <section id="concrete-forming" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Concrete Forming</h2>
            <p className="text-muted-foreground">Coming soon - Concrete forming services section</p>
          </div>
        </section>
        
        <section id="pool-construction" className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">New Pool Construction</h2>
            <p className="text-muted-foreground">Coming soon - Pool construction services section</p>
          </div>
        </section>
        
        <section id="calculator" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Concrete Calculator</h2>
            <p className="text-muted-foreground">Coming soon - Concrete calculator tool</p>
          </div>
        </section>
        
        <section id="gallery" className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <p className="text-muted-foreground">Coming soon - Project gallery showcase</p>
          </div>
        </section>
        
        <section id="contact" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">Coming soon - Contact form and information</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;