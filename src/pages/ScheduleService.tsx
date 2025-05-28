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
import Header from "@/components/Header";
import ContactInformation from "@/components/schedule/ContactInformation";
import ServiceDetails from "@/components/schedule/ServiceDetails";
import InsuranceInformation from "@/components/schedule/InsuranceInformation";
import Chatbot from "@/components/Chatbot";

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
    // Construct URL with query parameters
    const params = new URLSearchParams({
      name: values.name,
      email: values.email,
      phone: values.phone,
      service: values.service,
      location: values.city,
      notes: values.message || '',
      insurance: values.isInsuranceClaim ? 'Yes' : 'No'
    });

    // Redirect to Cal.com booking form with parameters
    window.location.href = `https://schedule.cbrsgroup.com/admin/cbrs-booking-form?${params.toString()}`;
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-2xl mt-20">
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
                className="w-full py-6 text-base bg-[#1e3046] hover:bg-[#1e3046]/90"
              >
                Schedule Service
              </Button>
            </form>
          </Form>
        </div>
      </div>
      
      <Chatbot />
    </>
  );
};

export default ScheduleService;
