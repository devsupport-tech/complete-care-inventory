
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import ServiceIcon from "@/components/services/ServiceIcon";

interface RelatedServicesProps {
  currentServiceId: string;
  services: Service[];
}

const RelatedServices = ({ currentServiceId, services }: RelatedServicesProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-[#1e3046] mb-8 text-center">
          Related Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services
            .filter(s => s.id !== currentServiceId)
            .slice(0, 3)
            .map((relatedService, index) => (
              <Link 
                key={index} 
                to={relatedService.detailUrl}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-cbrs-blue/20 group"
              >
                <div className="mb-4">
                  <ServiceIcon icon={relatedService.icon} colorClass={relatedService.iconColor} />
                </div>
                <h3 className="text-lg font-bold text-[#1e3046] mb-2 group-hover:text-cbrs-blue transition-colors">{relatedService.title}</h3>
                <p className="text-[#1e3046]/80 mb-4 text-sm">{relatedService.description}</p>
                <span className="text-cbrs-orange font-medium inline-flex items-center text-sm group-hover:translate-x-1 transition-transform">
                  Learn more
                  <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
