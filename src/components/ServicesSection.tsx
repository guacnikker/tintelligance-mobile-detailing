import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star, Sparkles, Crown } from "lucide-react";

const ServicesSection = () => {
  const servicePackages = {
    exterior: {
      title: "Exterior Packages",
      packages: [
        {
          name: "Essential Exterior Detail",
          tier: "Essential",
          description: "Simple, yet effective.",
          price: { sedan: 100, suv: 120 },
          time: "1.5 Hours",
          features: [
            "Foam Bath",
            "Contact wash",
            "Tire cleaning",
            "Window cleaning",
            "Tire Shine"
          ],
          icon: Sparkles,
          color: "text-primary"
        },
        {
          name: "Elevated Exterior Detail",
          tier: "Elevated",
          description: "Perfect for those who desire more than the ordinary.",
          price: { sedan: 175, suv: 200 },
          time: "2 Hours",
          features: [
            "Everything in Essential",
            "Rim/tire treatment",
            "Trim detailing",
            "Wheel well scrubbing/cleaning",
            "Air blowout of emblems, badges & more"
          ],
          icon: Star,
          color: "text-secondary"
        },
        {
          name: "Apex Exterior Detail",
          tier: "Apex",
          description: "Designed for those who demand the peak of exterior care.",
          price: { sedan: 225, suv: 275 },
          time: "3.5 Hours",
          features: [
            "Everything in Elevated",
            "Chemical decontamination",
            "Clay bar treatment",
            "Plastic restoration",
            "Water spot removal",
            "Signature Gift (towel, freshener, care card)"
          ],
          icon: Crown,
          color: "text-yellow-400"
        }
      ]
    },
    interior: {
      title: "Interior Packages",
      packages: [
        {
          name: "Essential Interior Detail",
          tier: "Essential",
          description: "Transform your car's interior with a deep, refreshing clean.",
          price: { sedan: 100, suv: 120 },
          time: "1.5 Hours",
          features: [
            "Vacuum",
            "Wipe Down",
            "Window Cleaning",
            "Air Blowout",
            "Light Interior Fragrance"
          ],
          icon: Sparkles,
          color: "text-primary"
        },
        {
          name: "Elevated Interior Detail",
          tier: "Elevated",
          description: "Perfect for those who want more attention and care.",
          price: { sedan: 200, suv: 225 },
          time: "3.5 Hours",
          features: [
            "Everything in Essential",
            "Door jambs & seat rail cleaning",
            "Cupholders, center console & more",
            "UV-protected plastic restoration"
          ],
          icon: Star,
          color: "text-secondary"
        },
        {
          name: "Apex Interior Detail",
          tier: "Apex",
          description: "Treat your vehicle to the ultimate interior care package, restoring every detail.",
          price: { sedan: 275, suv: 325 },
          time: "4.5 Hours",
          features: [
            "Everything in Elevated",
            "Cluster/screen cleaning",
            "Meticulous Full Detail",
            "Full air blowout",
            "Signature Gift (Microfiber towel, Custom freshener, care card)"
          ],
          icon: Crown,
          color: "text-yellow-400"
        }
      ]
    },
    hybrid: {
      title: "Hybrid Packages",
      packages: [
        {
          name: "Essential Hybrid Detail",
          tier: "Essential",
          description: "The foundation of great car care.",
          price: { sedan: 175, suv: 210 },
          time: "2.5 Hours",
          features: [
            "Full vacuum, wipe-down, mirror cleaning",
            "Contact wash, tire cleaning & shine",
            "Air blowout & light fragrance",
            "Basic trim and glass care"
          ],
          icon: Sparkles,
          color: "text-primary"
        },
        {
          name: "Elevated Hybrid Detail",
          tier: "Elevated",
          description: "Where attention to detail is not just a standard, but a promise.",
          price: { sedan: 325, suv: 375 },
          time: "3.75 Hours",
          features: [
            "Everything in Essential",
            "Deep interior: jambs, rails, cupholders Detailing",
            "UV plastic restoration & full interior air blowout",
            "Rim/tire treatment",
            "Wheel Well Detailing",
            "Air blowout of Badges"
          ],
          icon: Star,
          color: "text-secondary"
        },
        {
          name: "Apex Hybrid Detail",
          tier: "Apex",
          description: "The Apex of Car Care.",
          price: { sedan: 450, suv: 525 },
          time: "5.5 Hours",
          features: [
            "Everything in Elevated",
            "Full meticulous interior detail",
            "Chemical Decontamination + clay bar treatment",
            "Plastic restoration, water spot removal"
          ],
          icon: Crown,
          color: "text-yellow-400"
        }
      ]
    }
  };

  const PackageCard = ({ pkg, category }: { pkg: any, category: string }) => {
    const IconComponent = pkg.icon;
    const isApex = pkg.tier === "Apex";
    const isElevated = pkg.tier === "Elevated";
    
    return (
      <Card className={`card-neon relative overflow-hidden group hover:scale-105 transition-all duration-300 ${isApex ? 'border-yellow-400/50' : isElevated ? 'border-secondary/50' : 'border-primary/50'}`}>
        {isApex && (
          <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-yellow-600 text-black px-4 py-1 text-xs font-bold rounded-bl-lg">
            PREMIUM
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-3">
            <IconComponent className={`h-12 w-12 ${pkg.color}`} />
          </div>
          <CardTitle className="text-xl font-orbitron text-neon-teal">{pkg.name}</CardTitle>
          <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
          
          <div className="space-y-2 mt-4">
            <div className="text-3xl font-bold text-gradient">
              ${pkg.price.sedan} <span className="text-sm text-muted-foreground">(Sedan)</span>
            </div>
            <div className="text-2xl font-semibold text-foreground/80">
              ${pkg.price.suv} <span className="text-sm text-muted-foreground">(SUV/Truck)</span>
            </div>
            <Badge variant="outline" className="border-primary/50 text-primary">
              <Clock className="w-3 h-3 mr-1" />
              {pkg.time}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <ul className="space-y-2 mb-6">
            {pkg.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start text-sm">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            variant="neon" 
            className="w-full"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book {pkg.tier} Package
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4">
            Car Detailing Services in Southwest Florida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional mobile car detailing packages in Naples, Fort Myers, Cape Coral, and throughout SWFL. 
            Choose from our three-tier system: Essential foundations, Elevated excellence, or Apex perfection.
            Each package includes ceramic coating, paint correction, and luxury car care services.
          </p>
        </div>

        <Tabs defaultValue="exterior" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/20 backdrop-blur-sm border border-primary/20 mb-12">
            <TabsTrigger value="exterior" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Exterior
            </TabsTrigger>
            <TabsTrigger value="interior" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Interior
            </TabsTrigger>
            <TabsTrigger value="hybrid" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Hybrid
            </TabsTrigger>
          </TabsList>

          {Object.entries(servicePackages).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-neon-teal mb-2">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.packages.map((pkg, index) => (
                  <PackageCard key={index} pkg={pkg} category={key} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;