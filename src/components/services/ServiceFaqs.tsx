
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Service } from "@/data/services";

interface ServiceFaqsProps {
  service: Service;
}

const ServiceFaqs = ({ service }: ServiceFaqsProps) => {
  return (
    <div className="mt-12">
      <h4 className="text-xl font-semibold text-[#1e3046] mb-6">Frequently Asked Questions</h4>
      <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm border border-gray-100">
        {service.faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`} className="border-b last:border-0">
            <AccordionTrigger className="px-6 hover:no-underline text-[#1e3046] font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 text-[#1e3046]/80">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFaqs;
