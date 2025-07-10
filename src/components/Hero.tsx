
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "./Services";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedCard from "./ui/AnimatedCard";
import ServiceIcon from "./services/ServiceIcon";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a slight delay for the animation to start after page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/95 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470471736218-024179a77156?q=80&w=2874&auto=format&fit=crop')] 
        bg-cover bg-center opacity-50"
        style={{ transform: isLoaded ? "scale(1)" : "scale(1.1)", transition: "transform 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-24 pb-16">
        <div className={`max-w-3xl mx-auto mb-16 text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3046] mb-6 leading-tight animate-fade-in-down">
            Supporting Contractors Every Step of the Way
          </h1>
          
          <p className="text-lg md:text-xl text-[#1e3046] mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in">
            CBRS Group provides comprehensive solutions for restoration contractors, from packout services to project management and insurance support.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/schedule" className="bg-cbrs-orange hover:bg-cbrs-orange/90 text-white font-medium px-8 py-4 rounded-md shadow-lg transition-all hover:shadow-xl hover:translate-y-[-2px] inline-flex items-center justify-center">
              Schedule a Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+18326327225" className="bg-white hover:bg-gray-100 text-[#1e3046] font-medium px-8 py-4 rounded-md shadow-lg transition-all hover:shadow-xl hover:translate-y-[-2px] inline-flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              (832) 632-7225
            </a>
          </div>
        </div>

        {/* Services Overview - Cards with Updated Blue */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {services.map((service, index) => (
            <AnimatedCard 
              key={service.id} 
              delay={index * 200}
              className="h-full"
            >
              <div 
                className="bg-white/90 backdrop-blur-sm border border-[#1e3046]/10 rounded-xl p-6 transition-all hover:bg-white hover:transform hover:scale-105 duration-300 shadow-sm h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-[#1e3046]/15 mr-3">
                    <ServiceIcon icon={service.icon} colorClass={service.iconColor} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3046]">{service.title}</h3>
                </div>
                <p className="text-[#1e3046]/80 mb-4 text-sm">{service.description}</p>
                <Link 
                  to={`/schedule?service=${service.id}`}
                  className="inline-flex items-center text-white bg-cbrs-orange hover:bg-cbrs-orange/80 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce p-2 bg-[#1e3046]/20 backdrop-blur-md rounded-full">
          <svg className="w-6 h-6 text-[#1e3046]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
