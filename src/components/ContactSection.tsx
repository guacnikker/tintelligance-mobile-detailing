import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4">
            Contact Southwest Florida's Premier Mobile Detailing Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience Naples, Fort Myers, and Cape Coral's best mobile car detailing? Call 239-834-2126 now to schedule your appointment throughout SWFL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-neon-teal flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Info
                </CardTitle>
                <CardDescription>
                  Call us directly to schedule your appointment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <Button 
                    variant="hero"
                    size="lg"
                    onClick={() => window.open('tel:239-834-2126')}
                    className="w-full text-xl py-6"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Call 239-834-2126
                  </Button>
                  
                  <div className="flex items-center text-lg justify-center">
                    <MapPin className="w-5 h-5 mr-3 text-secondary" />
                    <span>Southwest Florida</span>
                  </div>
                  
                  <div className="flex items-center text-lg justify-center">
                    <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                    <span>7 Days a Week</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-neon-magenta mb-3 text-center">Follow Us</h4>
                  <div className="flex space-x-4 justify-center">
                    <Button variant="ghost_neon" size="icon" className="rounded-full">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost_neon" size="icon" className="rounded-full">
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">@Tintelligent_</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;