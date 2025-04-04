
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceAreas = () => {
  return (
    <div className="mt-16 animate-fade-in-up">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-[#1e3046] mb-4">Service Areas</h3>
        <p className="text-[#1e3046]/80 max-w-2xl mx-auto">
          We provide comprehensive restoration support services throughout the greater Houston area and surrounding communities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?auto=format&fit=crop&q=80&w=2970" 
            alt="Houston Service Area Map" 
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-[#1e3046] mb-4">Communities We Serve</h4>
          <p className="text-[#1e3046]/80 mb-6">
            Our team provides expert contractor support services in the following areas:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {["Houston", "Spring", "The Woodlands", "Cypress", "Humble", "Sugar Land", "Pasadena", "Conroe", "Richmond", "Katy", "Pearland", "League City"].map((city) => (
              <div key={city} className="bg-[#1e3046]/5 rounded-md px-4 py-3 text-[#1e3046] font-medium hover:bg-[#1e3046]/10 transition-colors">
                {city}
              </div>
            ))}
          </div>
          
          <p className="text-[#1e3046]/80">
            Don't see your area listed? Contact us to check if we service your location.
          </p>
          
          <Link 
            to="/schedule" 
            className="mt-6 inline-flex items-center bg-cbrs-orange text-white px-5 py-2.5 rounded-md hover:bg-cbrs-orange/90 transition-all font-medium"
          >
            Schedule in Your Area
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
