
import React, { useEffect } from "react";
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
import { getCalApi } from "@calcom/embed-react";

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

  // Initialize Cal.com when component mounts
  useEffect(() => {
    const initializeCal = async () => {
      try {
        console.log('Initializing Cal.com for direct booking...');
        
        const cal = await getCalApi({
          "namespace": "cbrs-direct-booking",
          "embedJsUrl": "https://schedule.cbrsgroup.com/embed/embed.js"
        });
        
        cal("ui", {
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });

        console.log('Cal.com initialized successfully for direct booking');
      } catch (error) {
        console.error('Error initializing Cal.com:', error);
      }
    };

    initializeCal();
  }, []);

  const buildCalLink = (formData: z.infer<typeof formSchema>) => {
    const baseUrl = "admin/cbrs-booking-form";
    const params = new URLSearchParams();
    
    // Add prefill parameters
    if (formData.name) params.append('name', formData.name);
    if (formData.email) params.append('email', formData.email);
    if (formData.phone) params.append('phone', formData.phone);
    if (formData.service) params.append('service', formData.service);
    if (formData.city) params.append('city', formData.city);
    
    // Combine message and insurance info
    const projectDescription = `${formData.message || 'No additional message'}${formData.isInsuranceClaim ? '\n\nInsurance Claim: Yes' : '\n\nInsurance Claim: No'}`;
    if (projectDescription) {
      params.append('message', projectDescription);
      params.append('description', projectDescription);
      params.append('notes', projectDescription);
    }
    
    const queryString = params.toString();
    console.log('Cal.com URL with prefill params:', `${baseUrl}?${queryString}`);
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted with values:', values);
    
    try {
      const cal = await getCalApi({
        "namespace": "cbrs-direct-booking"
      });
      
      // Directly open Cal.com booking modal with prefilled data
      cal("modal", {
        calLink: buildCalLink(values)
      });
      
      toast({
        title: "Opening Booking Calendar",
        description: "Your information has been pre-filled in the booking form.",
      });
      
      console.log('Cal.com booking modal opened directly with prefill data');
    } catch (error) {
      console.error('Error opening Cal.com modal:', error);
      toast({
        title: "Error",
        description: "Failed to open booking calendar. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Add global styles for Cal.com z-index
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .cal-modal-overlay,
      .cal-modal,
      [data-cal-namespace="cbrs-direct-booking"] .cal-modal-overlay,
      [data-cal-namespace="cbrs-direct-booking"] .cal-modal {
        z-index: 99999 !important;
        position: fixed !important;
      }
      
      [data-cal-namespace="cbrs-direct-booking"] * {
        pointer-events: auto !important;
      }
      
      [data-cal-namespace="cbrs-direct-booking"] button,
      [data-cal-namespace="cbrs-direct-booking"] [role="button"] {
        pointer-events: auto !important;
        z-index: inherit !important;
        position: relative !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

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
