
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Red Background with Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-800 z-10"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 z-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940&auto=format&fit=crop')] 
        bg-cover bg-center opacity-30"
        style={{ transform: isLoaded ? "scale(1)" : "scale(1.1)", transition: "transform 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-30 pt-36 pb-16">
        <div className={`max-w-4xl mx-auto mb-16 text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            STORM & WEATHER DAMAGE
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mb-8 leading-relaxed">
            Rapid, Reliable, and Professional Commercial Restoration
          </h2>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <a 
              href="tel:+12813361888" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg transition-all hover:shadow-xl hover:translate-y-[-2px] inline-flex items-center justify-center"
            >
              CALL NOW! (281) 336-1888
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
            <Link 
              to="/schedule" 
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-lg px-8 py-4 rounded-md shadow-lg transition-all hover:shadow-xl hover:translate-y-[-2px] inline-flex items-center justify-center backdrop-blur-sm border border-white/20"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Schedule Service
            </Link>
          </div>
        </div>

        {/* Service Highlights */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/90">Emergency Response</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">Licensed</div>
            <div className="text-white/90">& Insured Professionals</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">Direct</div>
            <div className="text-white/90">Insurance Billing</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce p-2 bg-white/20 backdrop-blur-md rounded-full">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
