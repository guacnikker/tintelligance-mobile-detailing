import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Clock, MapPin } from "lucide-react";
import interiorDetailImage from "@/assets/interior-detail.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Star, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "SWFL", label: "Best Detailers" },
    { icon: Clock, value: "2025", label: "Est. Year" },
    { icon: MapPin, value: "Mobile", label: "Service" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={interiorDetailImage}
                alt="Professional mobile car detailing service in Southwest Florida - interior detailing work being performed by certified technicians"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-primary/90 text-primary-foreground px-4 py-2 text-lg backdrop-blur-sm">
                  <Award className="w-4 h-4 mr-2" />
                  SWFL's Premium Choice
                </Badge>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="card-neon p-4 text-center backdrop-blur-sm">
                    <CardContent className="p-0">
                      <IconComponent className="h-6 w-6 text-primary mx-auto mb-1" />
                      <div className="text-xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gradient mb-6">
                About Tintelligent Mobile Detailing
              </h2>
              <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                <p>
                  Welcome to <span className="text-neon-teal font-semibold">Tintelligent Mobile Detailing</span>, 
                  Southwest Florida's premier luxury automotive care service. We bring professional-grade 
                  detailing directly to your location, combining convenience with uncompromising quality.
                </p>
                <p>
                  Our <span className="text-neon-magenta font-semibold">three-tier system</span> ensures 
                  every client receives exactly the level of care their vehicle deserves - from essential 
                  maintenance to apex-level perfection that rivals the finest detailing facilities.
                </p>
                <p>
                  Using cutting-edge techniques and premium products, we transform your vehicle's 
                  appearance while protecting your investment. Every detail matters, every surface 
                  is perfected, and every client experience exceeds expectations.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-neon-teal">Our Promise</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Mobile convenience at your location</li>
                  <li>• Professional-grade equipment & products</li>
                  <li>• Meticulous attention to every detail</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-neon-magenta">Why Choose Us</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• SWFL's highest-rated detailers</li>
                  <li>• Fully insured & professional service</li>
                  <li>• Satisfaction guaranteed on every job</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Packages
              </Button>
              <Button 
                variant="outline_neon" 
                size="lg"
                onClick={() => window.open('tel:239-834-2126')}
              >
                Call Now
              </Button>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.slice(2).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;