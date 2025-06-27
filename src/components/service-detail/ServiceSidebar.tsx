
import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceSidebarProps {
  serviceId: string;
  title: string;
}

const ServiceSidebar = ({ serviceId, title }: ServiceSidebarProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 sticky top-24">
        <h3 className="text-xl font-bold text-[#1e3046] mb-4">Ready to Get Started?</h3>
        <p className="text-[#1e3046]/80 mb-6">
          Schedule a consultation with our team to discuss your specific needs and get a customized {title.toLowerCase()} solution.
        </p>
        
        <Link to={`/schedule?service=${serviceId}`}>
          <Button 
            variant="orange" 
            className="w-full mb-4 flex items-center justify-center gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            Book Now
          </Button>
        </Link>
        
        <div className="border-t border-gray-100 pt-6 mt-6">
          <h4 className="font-medium text-[#1e3046] mb-2">Have Questions?</h4>
          <p className="text-[#1e3046]/80 mb-4 text-sm">
            Our team is available to answer any questions about our services and how they can help you.
          </p>
          <a 
            href="tel:+34662986933" 
            className="inline-flex items-center text-cbrs-blue hover:text-blue-700 font-medium"
          >
            Call (346) 298-6933
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h4 className="font-medium text-[#1e3046] mb-4">Service Highlights</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-md text-center">
              <div className="text-2xl font-bold text-cbrs-blue">24/7</div>
              <div className="text-xs text-[#1e3046]/70">Support Available</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md text-center">
              <div className="text-2xl font-bold text-cbrs-blue">100%</div>
              <div className="text-xs text-[#1e3046]/70">Satisfaction Rate</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md text-center">
              <div className="text-2xl font-bold text-cbrs-blue">500+</div>
              <div className="text-xs text-[#1e3046]/70">Projects Completed</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md text-center">
              <div className="text-2xl font-bold text-cbrs-blue">15+</div>
              <div className="text-xs text-[#1e3046]/70">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
