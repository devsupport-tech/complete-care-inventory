
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { useSearchParams } from "react-router-dom";
import { services } from "@/data/services";
import { formSchema } from "@/components/schedule/ScheduleFormSchema";
import ContactInformation from "@/components/schedule/ContactInformation";
import ServiceDetails from "@/components/schedule/ServiceDetails";
import InsuranceInformation from "@/components/schedule/InsuranceInformation";

const ScheduleService = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');

  const defaultService = serviceId 
    ? services.find(service => service.id === serviceId)?.title 
    : '';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService || "",
      city: "",
      message: "",
      isInsuranceClaim: false,
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    
    toast({
      title: "Service Request Submitted",
      description: "We'll contact you shortly to confirm your service request.",
      variant: "default"
    });

    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e3046] mb-4">
          Schedule a Service
        </h1>
        <p className="text-[#1e3046]/80 max-w-xl mx-auto">
          Complete the form below to request service from CBRS Group. Our team will contact you
          to confirm your appointment.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[#1e3046] mb-2">
            Service Request Form
          </h2>
          <p className="text-[#1e3046]/70 text-sm">
            Please provide the details of the service you need.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ContactInformation control={form.control} />
            <ServiceDetails control={form.control} />
            <InsuranceInformation control={form.control} />

            <Button 
              type="submit" 
              variant="orange" 
              className="w-full py-6 text-base"
            >
              Schedule Service
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ScheduleService;
