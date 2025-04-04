
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceTabDetailProps {
  service: Service;
}

const ServiceTabDetail = ({ service }: ServiceTabDetailProps) => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-bold text-[#1e3046] mb-4">{service.title}</h3>
          <p className="text-[#1e3046]/80 mb-6">{service.longDescription}</p>
          
          <h4 className="text-xl font-semibold text-[#1e3046] mb-4">Key Benefits</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cbrs-green mr-2 flex-shrink-0" />
                <span className="text-[#1e3046]/80">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            to={service.detailUrl}
            className="inline-flex items-center bg-cbrs-orange text-white px-5 py-2.5 rounded-md hover:bg-cbrs-orange/90 transition-all font-medium mb-8"
          >
            View Full Service Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg h-80">
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTabDetail;
