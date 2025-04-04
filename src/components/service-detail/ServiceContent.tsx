
import React from "react";
import { CheckCircle } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceContentProps {
  service: Service;
  details: {
    title: string;
    description: string;
    features: string[];
    image: string;
  };
}

const ServiceContent = ({ service, details }: ServiceContentProps) => {
  return (
    <div className="lg:col-span-2">
      <div className="inline-block px-3 py-1 bg-cbrs-blue/10 text-cbrs-blue rounded-full text-sm font-medium mb-4">
        Professional Services
      </div>
      <h2 className="text-3xl font-bold text-[#1e3046] mb-6">About {service.title}</h2>
      <div className="prose max-w-none">
        <p className="text-[#1e3046]/80 mb-6 text-lg leading-relaxed">
          {service.longDescription}
        </p>
        
        <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-[#1e3046] mb-4">Why Choose Our {service.title} Service</h3>
          <ul className="space-y-4">
            {details.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cbrs-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#1e3046] font-medium">{feature}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold text-[#1e3046] mt-8 mb-4">How Our Process Works</h3>
        <p className="text-[#1e3046]/80 mb-6">
          Our comprehensive {service.title.toLowerCase()} service follows a proven process designed to ensure efficient, effective results for your restoration project. We've refined our methods through years of experience to deliver exceptional outcomes for restoration contractors.
        </p>
        
        <div className="space-y-6 my-8">
          {service.processSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 bg-cbrs-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-[#1e3046] text-lg">{step.title}</h4>
                <p className="text-[#1e3046]/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
