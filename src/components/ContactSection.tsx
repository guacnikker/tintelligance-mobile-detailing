import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    packageType: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 2 hours to confirm your appointment.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicleType: "",
      packageType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4">
            Book Your Detail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience SWFL's premier mobile detailing? Get in touch to schedule your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-neon-teal flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Info
                </CardTitle>
                <CardDescription>
                  Get in touch with us directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <a 
                    href="tel:239-834-2126"
                    className="flex items-center text-lg hover:text-primary transition-colors group"
                  >
                    <Phone className="w-5 h-5 mr-3 text-primary group-hover:animate-pulse" />
                    <span className="font-semibold">239-834-2126</span>
                  </a>
                  
                  <div className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-3 text-secondary" />
                    <span>Southwest Florida</span>
                  </div>
                  
                  <div className="flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                    <span>7 Days a Week</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-neon-magenta mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="ghost_neon" size="icon" className="rounded-full">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost_neon" size="icon" className="rounded-full">
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">@Tintelligent_</p>
                </div>
              </CardContent>
            </Card>

            {/* Current Promotion */}
            <Card className="card-neon border-yellow-400/50">
              <CardHeader>
                <Badge className="bg-yellow-400 text-black w-fit mb-2">
                  LIMITED TIME
                </Badge>
                <CardTitle className="text-yellow-400">
                  Special Promotion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    Full Detail $325
                  </div>
                  <div className="text-sm text-muted-foreground line-through mb-2">
                    Reg. $375
                  </div>
                  <p className="text-sm text-yellow-400 font-semibold">
                    Promotion ends this week. Book below.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-neon-teal">Book Your Appointment</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll contact you to confirm your booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="bg-muted/20 border-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(239) 123-4567"
                        required
                        className="bg-muted/20 border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="bg-muted/20 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Vehicle Type *</label>
                      <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
                        <SelectTrigger className="bg-muted/20 border-primary/30">
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="coupe">Coupe</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Package Interest</label>
                      <Select value={formData.packageType} onValueChange={(value) => handleInputChange('packageType', value)}>
                        <SelectTrigger className="bg-muted/20 border-primary/30">
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exterior-essential">Exterior Essential</SelectItem>
                          <SelectItem value="exterior-elevated">Exterior Elevated</SelectItem>
                          <SelectItem value="exterior-apex">Exterior Apex</SelectItem>
                          <SelectItem value="interior-essential">Interior Essential</SelectItem>
                          <SelectItem value="interior-elevated">Interior Elevated</SelectItem>
                          <SelectItem value="interior-apex">Interior Apex</SelectItem>
                          <SelectItem value="hybrid-essential">Hybrid Essential</SelectItem>
                          <SelectItem value="hybrid-elevated">Hybrid Elevated</SelectItem>
                          <SelectItem value="hybrid-apex">Hybrid Apex</SelectItem>
                          <SelectItem value="consultation">Need Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your vehicle's condition, preferred timing, or any special requests..."
                      rows={4}
                      className="bg-muted/20 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="hero" size="lg" className="flex-1">
                      Request Booking
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline_neon" 
                      size="lg"
                      onClick={() => window.open('tel:239-834-2126')}
                    >
                      Call Now
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;