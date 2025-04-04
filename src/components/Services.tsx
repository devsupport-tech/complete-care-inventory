
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/data/services";
import ServiceCard from "./services/ServiceCard";
import ServiceTabDetail from "./services/ServiceTabDetail";
import ServiceProcess from "./services/ServiceProcess";
import ServiceFaqs from "./services/ServiceFaqs";
import InsuranceCoverage from "./services/InsuranceCoverage";
import ServiceAreas from "./services/ServiceAreas";

// Re-export services for backwards compatibility
export { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-100/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-cbrs-blue/10 text-cbrs-blue rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3046] mb-6">
            Restoration and Construction Support Services
          </h2>
          <p className="text-[#1e3046] max-w-2xl mx-auto text-lg">
            CBRS Group provides essential support services for restoration contractors, helping you manage every aspect of the restoration process from packout to project completion.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Detailed Service Information Section */}
        <div className="mb-16 animate-fade-in-up">
          <Tabs defaultValue="packout-management" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-white p-1 border rounded-lg">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="flex-1 data-[state=active]:bg-cbrs-blue data-[state=active]:text-white"
                >
                  {service.title.split("&")[0].trim()}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="animate-fade-in">
                <ServiceTabDetail service={service} />
                <ServiceProcess service={service} />
                <ServiceFaqs service={service} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Insurance Section */}
        <InsuranceCoverage />
        
        {/* Service Areas Map Section */}
        <ServiceAreas />
      </div>
    </section>
  );
};

export default Services;
