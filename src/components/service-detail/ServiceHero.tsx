
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRightCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServiceHeroProps {
  title: string;
  description: string;
  galleryImages: string[];
}

const ServiceHero = ({ title, description, galleryImages }: ServiceHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <Carousel className="w-full absolute inset-0">
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container mx-auto px-4 relative">
          <div className="absolute bottom-4 right-4 z-30 flex space-x-2">
            <CarouselPrevious className="bg-white/20 hover:bg-white/40 border-none text-white" />
            <CarouselNext className="bg-white/20 hover:bg-white/40 border-none text-white" />
          </div>
        </div>
      </Carousel>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          {/* 
          <Link to="/services" className="inline-flex items-center text-white mb-4 hover:text-cbrs-blue transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>*/}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 
            <Button 
              variant="orange"
              className="inline-flex items-center font-medium transition-all hover:translate-y-[-2px] group"
              asChild
            >
              <Link to="/schedule">
                Book a Consultation
                <ArrowRightCircle className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <a 
              href="tel:+18326327225" 
              className="inline-flex items-center border border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              (832) 632-7225
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
