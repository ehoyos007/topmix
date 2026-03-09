import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How much does a concrete driveway cost in Miami?",
    answer:
      "A standard concrete driveway in Miami typically costs between $6 and $15 per square foot, depending on the size, thickness, and site preparation required. For stamped or decorative concrete, pricing ranges from $12 to $25+ per square foot. Factors that affect the final price include the total area, the type of finish you choose, grading and excavation needs, and whether reinforcement such as rebar or fiber mesh is required. Contact us for a free estimate tailored to your specific project.",
  },
  {
    question: "How long does it take to pour a concrete driveway?",
    answer:
      "The actual pouring process for a concrete driveway typically takes 1 to 3 days, depending on the size and complexity of the project. After pouring, the concrete needs approximately 7 days of cure time before it can handle vehicle traffic. In South Florida, weather plays a significant role — high temperatures can speed up initial setting but require careful moisture management, while rain delays may extend the timeline. We always plan around the forecast to ensure the best results for your project.",
  },
  {
    question: "What is stamped concrete?",
    answer:
      "Stamped concrete is a decorative technique where patterns and textures are pressed into freshly poured concrete before it fully sets. This allows us to replicate the look of natural stone, brick, slate, wood planks, and many other materials at a fraction of the cost. Stamped concrete is extremely popular in South Florida for patios, pool decks, driveways, and walkways. It can be combined with integral color or staining to create a truly custom look that enhances your property's curb appeal and value.",
  },
  {
    question: "Do you offer financing for concrete projects?",
    answer:
      "Yes, we offer flexible financing options to make your concrete project affordable. We understand that quality concrete work is a significant investment, so we provide easy application processes and competitive terms. Whether you're planning a new driveway, patio, pool, or a large commercial project, our financing plans can be tailored to fit your budget. Reach out to our team to discuss available options and get pre-qualified.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Miami-Dade and Broward Counties, including Doral, Hialeah, Kendall, Homestead, Miami Beach, Coral Gables, Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, and all surrounding areas. No matter where you are in South Florida, our team is ready to deliver top-quality concrete services to your doorstep.",
  },
  {
    question: "How do I get a free estimate?",
    answer:
      "Getting a free estimate is easy! You can call us directly at (786) 543-7640, fill out the contact form on our website, or send an email to CCabrera@Topmixconcrete.com. One of our team members will get back to you within 24 hours to discuss your project, answer any questions, and schedule an on-site assessment if needed.",
  },
  {
    question: "What types of concrete services do you offer?",
    answer:
      "We offer a full range of concrete services to meet both residential and commercial needs. Our services include ready-mix concrete delivery and pumping, decorative and stamped concrete, concrete slab installation for driveways, patios, and foundations, professional concrete forming for structural projects, and complete new pool construction. Whatever your concrete project requires, we have the expertise and equipment to get it done right.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. TopMix Concrete is fully licensed and insured, giving you complete peace of mind on every project. With over 10 years of experience serving South Florida, our team of skilled professionals is committed to delivering safe, high-quality work that meets all local building codes and industry standards. Your property and investment are always protected when you work with us.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const FAQ = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="py-16 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our concrete services,
            pricing, and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have more questions? Contact us for a free consultation.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
