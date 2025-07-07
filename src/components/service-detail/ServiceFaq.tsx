
import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Service } from "@/data/services";

interface ServiceFaqProps {
  service: Service;
}

const ServiceFaq = ({ service }: ServiceFaqProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3046] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#1e3046]/80 max-w-2xl mx-auto">
            Get answers to the most common questions about our {service.title.toLowerCase()} services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden border border-gray-100">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <h3 className="text-lg font-medium text-[#1e3046]">{faq.question}</h3>
                  <span className="transition-transform duration-200 group-open:rotate-180">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-[#1e3046]/80">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#1e3046]/80 mb-6">
            Still have questions about our {service.title.toLowerCase()} services?
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="orange" 
              className="inline-flex items-center font-medium transition-all"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            <a 
              href="tel:+18326327225" 
              className="inline-flex items-center border border-[#1e3046] text-[#1e3046] hover:bg-[#1e3046]/5 font-medium px-6 py-3 rounded-md transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
