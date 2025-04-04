
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <AnimatedCard key={index} delay={index * 100} className="h-full">
      <div className="glass-card rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] flex flex-col">
        <div className="mb-6 p-4 bg-cbrs-blue/10 rounded-full w-fit">
          <ServiceIcon icon={service.icon} colorClass={service.iconColor} />
        </div>
        <h3 className="text-2xl font-bold text-[#1e3046] mb-4">{service.title}</h3>
        <p className="text-[#1e3046]/80 mb-6">{service.description}</p>
        <div className="mt-auto">
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="bg-cbrs-green text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1e3046] text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              to={service.detailUrl} 
              className="text-[#1e3046] font-medium inline-flex items-center border border-[#1e3046]/30 px-4 py-2 rounded-md hover:bg-[#1e3046]/5 transition-all duration-300"
            >
              Learn more
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link to={`/schedule?service=${service.id}`}>
              <Button variant="orange" className="w-full sm:w-auto">
                <Calendar className="w-4 h-4 mr-1" />
                Book now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ServiceCard;
