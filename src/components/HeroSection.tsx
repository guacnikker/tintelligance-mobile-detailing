import { Button } from "@/components/ui/button";
import { ArrowDown, Phone } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";
import tintelligentLogo from "/lovable-uploads/699fe651-77a8-4f4c-a26e-d0dab3451ef3.png";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroCarImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
      
      {/* Floating Neon Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img 
            src={tintelligentLogo} 
            alt="Tintelligent Mobile Detailing - Southwest Florida's premier car detailing service logo"
            className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full shadow-neon animate-pulse-neon"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
          <span className="text-gradient animate-glow block">TINTELLIGENT</span>
          <span className="text-neon-teal text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal tracking-widest block mt-1 sm:mt-2">
            MOBILE DETAILING
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3 sm:mb-4 font-light px-2">
          <span className="text-neon-magenta">SWFL's Best Luxury Mobile Detailers</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Professional mobile car detailing in Naples, Fort Myers, Cape Coral & Southwest Florida. 
          Premium exterior, interior, and hybrid detailing packages with ceramic coating and paint correction services. 
          We bring luxury-grade automotive care directly to your location.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-16 px-4">
          <Button 
            variant="hero" 
            size="lg"
            className="w-full sm:w-auto group text-sm sm:text-base"
            onClick={() => window.open('tel:239-834-2126')}
          >
            Call Now to Book
            <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
          </Button>
          
          <Button 
            variant="outline_neon" 
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base"
            onClick={() => window.open('tel:239-834-2126')}
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            239-834-2126
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button 
            onClick={scrollToServices}
            className="text-primary hover:text-secondary transition-colors p-2"
            aria-label="Scroll to services"
          >
            <ArrowDown className="h-8 w-8 mx-auto animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;