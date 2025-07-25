import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import exteriorDetailImage from "@/assets/exterior-detail.jpg";
import interiorDetailImage from "@/assets/interior-detail.jpg";
import heroCarImage from "@/assets/hero-car.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: heroCarImage,
      title: "Apex Hybrid Detail",
      category: "Luxury Sports Car",
      description: "Complete transformation with our premium hybrid package"
    },
    {
      src: exteriorDetailImage,
      title: "Exterior Detail in Progress",
      category: "Elevated Package", 
      description: "Professional exterior detailing with premium products"
    },
    {
      src: interiorDetailImage,
      title: "Interior Restoration",
      category: "Apex Interior",
      description: "Meticulous interior detailing and restoration work"
    }
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
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the transformative results of our premium detailing services. Each vehicle tells a story of meticulous care and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="card-neon overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {image.category}
                </Badge>
                
                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-neon-teal mb-1">{image.title}</h3>
                  <p className="text-sm text-foreground/80">{image.description}</p>
                </div>
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
              className="absolute top-4 right-4 z-10 text-white hover:text-primary bg-black/50 hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary bg-black/50 hover:bg-black/70"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-primary bg-black/50 hover:bg-black/70"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Image */}
            <div className="relative">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-neon-teal mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <Badge className="mb-2 bg-primary/90 text-primary-foreground">
                  {galleryImages[selectedImage].category}
                </Badge>
                <p className="text-foreground/90">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
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