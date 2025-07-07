
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const InsuranceCoverage = () => {
  return (
    <div className="bg-[#1e3046]/5 rounded-2xl p-8 md:p-12 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#1e3046]">Insurance-Covered Services</h3>
          <p className="text-[#1e3046]/80">
            Our services are designed to work seamlessly with insurance claims, helping contractors maximize their reimbursements while delivering exceptional results to their clients.
          </p>
          <ul className="space-y-4">
            {[
              "Direct Insurance Billing: We work directly with insurance companies",
              "Complete Documentation: We provide detailed reports that meet adjuster requirements",
              "Supplement Expertise: We identify and document additional necessary work",
              "Contractor Advocacy: We help ensure fair compensation for quality restoration"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-cbrs-green text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-[#1e3046]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/schedule" 
              className="bg-cbrs-orange hover:bg-cbrs-orange/90 text-white font-medium px-6 py-3 rounded-md shadow-lg transition-all hover:shadow-xl hover:translate-y-[-2px] inline-flex items-center"
            >
              Schedule a Service
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+18326327225" 
              className="border border-[#1e3046] text-[#1e3046] hover:bg-[#1e3046]/5 font-medium px-6 py-3 rounded-md transition-all inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (832) 632-7225
            </a>
          </div>
        </div>
        
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2970" 
            alt="Professional contractor reviewing documents and plans"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3046]/50 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h4 className="font-bold text-xl mb-2">Comprehensive Support</h4>
              <p>We handle the administrative details so you can focus on restoration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCoverage;
