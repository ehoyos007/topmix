import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import DeliveryPumping from "@/components/DeliveryPumping";
import DecorativeConcrete from "@/components/DecorativeConcrete";
import ConcreteSlabs from "@/components/ConcreteSlabs";
import ConcreteForming from "@/components/ConcreteForming";
import PoolConstruction from "@/components/PoolConstruction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesOverview />
        <DeliveryPumping />
        <DecorativeConcrete />
        <ConcreteSlabs />
        <ConcreteForming />
        <PoolConstruction />
        
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