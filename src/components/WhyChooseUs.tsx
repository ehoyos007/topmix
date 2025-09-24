import { CreditCard, Calculator, Award, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Financing Available",
      description: "We offer the best services at the most affordable prices. Our financing services will help you get started right away."
    },
    {
      icon: Calculator,
      title: "Free Estimates",
      description: "Contact us today to receive a free estimate on your project and we'll answer any questions you may have during the process."
    },
    {
      icon: Award,
      title: "High Quality Products",
      description: "We can offer you a complete line of standard products and special mixes by request."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "We are fully licensed and insured with experienced staff and excellent customer service."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            WHY CHOOSE US?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <benefit.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;