import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import DeliveryPumping from "@/components/DeliveryPumping";
import DecorativeConcrete from "@/components/DecorativeConcrete";
import ConcreteSlabs from "@/components/ConcreteSlabs";
import ConcreteForming from "@/components/ConcreteForming";
import PoolConstruction from "@/components/PoolConstruction";
import ConcreteCalculator from "@/components/ConcreteCalculator";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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
        <ConcreteCalculator />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
