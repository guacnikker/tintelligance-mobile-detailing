import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      vehicle: "2023 Porsche 911",
      rating: 5,
      text: "Absolutely incredible work! My Porsche has never looked better. The attention to detail in the Apex package is phenomenal. Every surface was perfected to showroom quality.",
      service: "Apex Hybrid Detail"
    },
    {
      name: "Sarah Chen",
      vehicle: "2022 BMW X5",
      rating: 5,
      text: "Professional, punctual, and perfectionist. The mobile service is so convenient - they came to my office and transformed my SUV while I worked. The interior looks brand new!",
      service: "Elevated Interior"
    },
    {
      name: "David Thompson",
      vehicle: "2021 Mercedes S-Class",
      rating: 5,
      text: "After trying several detailers in SWFL, Tintelligent is hands down the best. The paint correction and ceramic coating exceeded my expectations. Worth every penny!",
      service: "Apex Exterior Detail"
    },
    {
      name: "Jennifer Martinez", 
      vehicle: "2020 Tesla Model S",
      rating: 5,
      text: "The hybrid package was perfect for my Tesla. They understand luxury vehicles and treat them with the respect they deserve. The results speak for themselves!",
      service: "Elevated Hybrid"
    },
    {
      name: "Robert Kim",
      vehicle: "2023 Range Rover",
      rating: 5,
      text: "Best detailing experience I've ever had. The team is professional, the work is flawless, and the convenience of mobile service can't be beat. Highly recommended!",
      service: "Apex Hybrid Detail"
    },
    {
      name: "Amanda Foster",
      vehicle: "2022 Audi Q7",
      rating: 5,
      text: "My Audi looks absolutely stunning after their work. The interior detailing removed years of wear and tear. I'll definitely be booking them regularly!",
      service: "Essential Hybrid"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Tintelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-neon relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {testimonial.service}
                  </Badge>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-foreground/90 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-neon-teal text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.vehicle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">500+</div>
              <div className="text-lg text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">4.9★</div>
              <div className="text-lg text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">100%</div>
              <div className="text-lg text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;