import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    "/lovable-uploads/c9fcb32e-3e0d-4cae-b586-7b033feb8e43.png",
    "/lovable-uploads/846cd544-0679-44d8-b64b-8a5de0e3fc00.png",
    "/lovable-uploads/4495cfcc-5d08-4b42-8323-11604e0b7a4a.png",
    "/lovable-uploads/a5d03e0c-e78c-4b48-8c64-64c9b9e96377.png",
    "/lovable-uploads/b943876c-bb59-4e59-82ab-105c7d37b4dd.png",
    "/lovable-uploads/52c4360c-6e2a-4a70-b9d2-5c537e1d4962.png"
  ];

  const galleryAltTexts = [
    "Professional mobile car detailing results in Southwest Florida - luxury vehicle exterior wash and wax",
    "Interior car detailing service in Fort Myers FL - deep cleaning and leather conditioning",
    "Mobile ceramic coating application in Naples Florida - paint protection and shine enhancement",
    "SUV detailing service in Cape Coral - complete exterior and interior transformation",
    "Premium boat detailing service in Southwest Florida - marine vessel cleaning and protection",
    "Mobile RV detailing in SWFL - recreational vehicle exterior wash and interior cleaning"
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4">
            Mobile Car Detailing Gallery - Naples, Fort Myers & Cape Coral Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the transformative results of our premium mobile car detailing services throughout Southwest Florida. Each vehicle showcases our expert interior detailing, exterior cleaning, ceramic coating, and paint correction work.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((imageSrc, index) => (
            <Card 
              key={index}
              className="card-neon overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img 
                  src={imageSrc}
                  alt={galleryAltTexts[index]}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see your vehicle transformed? Call us today to schedule.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('tel:239-834-2126')}
          >
            Call to Book
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:text-primary bg-black/50 hover:bg-black/70 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary bg-black/50 hover:bg-black/70 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary bg-black/50 hover:bg-black/70 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Image */}
            <div className="relative">
              <img 
                src={galleryImages[selectedImage]}
                alt={galleryAltTexts[selectedImage]}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;