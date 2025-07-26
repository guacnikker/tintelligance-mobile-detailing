import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What areas do you serve in Southwest Florida?",
      answer: "We provide mobile car detailing services throughout Southwest Florida, including Naples, Fort Myers, Cape Coral, Estero, Bonita Springs, and surrounding areas. We travel directly to your location for maximum convenience."
    },
    {
      question: "How long does a car detailing service take?",
      answer: "Service times vary by package: Essential packages take 1.5-2.5 hours, Elevated packages take 2-3.75 hours, and our premium Apex packages take 3.5-5.5 hours. We'll provide an exact time estimate when you book."
    },
    {
      question: "Do you offer ceramic coating services?",
      answer: "Yes! Our Apex packages include advanced paint protection treatments. We use premium ceramic coating products that provide long-lasting protection and enhanced shine for your vehicle's exterior."
    },
    {
      question: "What's included in your mobile detailing service?",
      answer: "Our mobile service includes all equipment, water, and premium products. We bring professional-grade tools, eco-friendly cleaning solutions, and everything needed to detail your vehicle at your preferred location."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For optimal protection and appearance, we recommend detailing every 3-4 months for regular drivers, or every 2-3 months for luxury vehicles or those exposed to harsh conditions in Southwest Florida's climate."
    },
    {
      question: "Do you work on all vehicle types?",
      answer: "Yes! We detail sedans, SUVs, trucks, luxury vehicles, classic cars, and motorcycles. Our pricing is structured for sedans and SUV/trucks, with custom quotes available for specialty vehicles."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, and digital payment methods. Payment is due upon completion of service, and we provide detailed invoices for all work performed."
    },
    {
      question: "Is your service insured?",
      answer: "Absolutely! Tintelligent Mobile Detailing is fully licensed and insured. We carry comprehensive liability insurance to protect both your vehicle and property during our service."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
            Mobile Car Detailing FAQ - Naples, Fort Myers & Cape Coral
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about our mobile car detailing, ceramic coating, interior cleaning, and RV/boat detailing services in Southwest Florida
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-primary/20 rounded-lg px-6 card-neon"
            >
              <AccordionTrigger className="text-left hover:text-neon-teal transition-colors">
                <h3 className="font-semibold">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have more questions about our car detailing services?
          </p>
          <p className="text-lg">
            Call us at{" "}
            <a 
              href="tel:239-834-2126" 
              className="text-neon-teal font-semibold hover:text-neon-magenta transition-colors"
            >
              239-834-2126
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;