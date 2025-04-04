
import React from "react";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceProcessProps {
  service: Service;
}

const ServiceProcess = ({ service }: ServiceProcessProps) => {
  return (
    <div className="mt-12">
      <h4 className="text-xl font-semibold text-[#1e3046] mb-6">Our Process</h4>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {service.processSteps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 h-full z-10 relative">
              <div className="w-8 h-8 bg-cbrs-blue text-white rounded-full flex items-center justify-center font-bold mb-3">
                {idx + 1}
              </div>
              <h5 className="font-semibold text-[#1e3046] mb-2">{step.title}</h5>
              <p className="text-sm text-[#1e3046]/70">{step.description}</p>
            </div>
            {idx < service.processSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 z-0 transform translate-x-1/2">
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-400">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProcess;
