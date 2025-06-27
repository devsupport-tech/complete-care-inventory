
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
import { packoutFormSchema } from "@/components/schedule/PackoutFormSchema";
import Header from "@/components/Header";
import ContactInformation from "@/components/schedule/ContactInformation";
import ServiceDetails from "@/components/schedule/ServiceDetails";
import InsuranceInformation from "@/components/schedule/InsuranceInformation";
import PackoutContactInformation from "@/components/schedule/PackoutContactInformation";
import PackoutServiceDetails from "@/components/schedule/PackoutServiceDetails";
import PackoutInsuranceInformation from "@/components/schedule/PackoutInsuranceInformation";
import ContractorInformation from "@/components/schedule/ContractorInformation";
import ClaimInformation from "@/components/schedule/ClaimInformation";
import Chatbot from "@/components/Chatbot";
import { getCalApi } from "@calcom/embed-react";

const ScheduleService = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');

  const defaultService = serviceId 
    ? services.find(service => service.id === serviceId)?.title 
    : '';

  const isPackoutService = defaultService === "Packout & Content Management";

  const regularForm = useForm<z.infer<typeof formSchema>>({
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

  const packoutForm = useForm<z.infer<typeof packoutFormSchema>>({
    resolver: zodResolver(packoutFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService || "",
      city: "",
      message: "",
      isInsuranceClaim: false,
      contractorName: "",
      contractorPhone: "",
      contractorEmail: "",
      claimName: "",
      claimPhone: "",
      claimEmail: "",
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

  const buildCalLink = (formData: z.infer<typeof formSchema> | z.infer<typeof packoutFormSchema>) => {
    const baseUrl = "admin/cbrs-booking-form";
    const params = new URLSearchParams();
    
    // Add prefill parameters with exact field names Cal.com expects
    if (formData.name) params.append('name', formData.name);
    if (formData.email) params.append('email', formData.email);
    if (formData.phone) params.append('phone', formData.phone);
    if (formData.city) params.append('city', formData.city);
    
    // For Service Type - using exact field name from Cal.com
    if (formData.service) {
      params.append('servicetype', formData.service);
      console.log('Setting servicetype parameter to:', formData.service);
    }
    
    // Build comprehensive project description with message and insurance info
    let projectDescription = '';
    if (formData.message && formData.message.trim()) {
      projectDescription = formData.message.trim();
    } else {
      projectDescription = 'Service request from CBRS website';
    }
    
    // Add insurance information
    if (formData.isInsuranceClaim) {
      projectDescription += '\n\nInsurance Claim: Yes';
    } else {
      projectDescription += '\n\nInsurance Claim: No';
    }

    // Add contractor and claim information for packout services
    if ('contractorName' in formData) {
      projectDescription += '\n\nContractor Information:';
      projectDescription += `\nName: ${formData.contractorName}`;
      projectDescription += `\nPhone: ${formData.contractorPhone}`;
      projectDescription += `\nEmail: ${formData.contractorEmail}`;
      
      projectDescription += '\n\nClaim Information:';
      projectDescription += `\nName: ${formData.claimName}`;
      projectDescription += `\nPhone: ${formData.claimPhone}`;
      projectDescription += `\nEmail: ${formData.claimEmail}`;
    }
    
    // Use the exact field name that Cal.com expects for project description
    params.append('project-description', projectDescription);
    console.log('Setting project-description parameter to:', projectDescription);
    
    const queryString = params.toString();
    console.log('Complete Cal.com URL:', `${baseUrl}?${queryString}`);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const onSubmitRegular = async (values: z.infer<typeof formSchema>) => {
    console.log('Regular form submitted with values:', values);
    console.log('Service field value (from dropdown):', values.service);
    
    try {
      const cal = await getCalApi({
        "namespace": "cbrs-direct-booking"
      });
      
      // Build the Cal.com link with prefilled data
      const calLink = buildCalLink(values);
      console.log('Opening Cal.com modal with link:', calLink);
      
      // Directly open Cal.com booking modal with prefilled data
      cal("modal", {
        calLink: calLink
      });
      
      toast({
        title: "Opening Booking Calendar",
        description: "Your information has been pre-filled in the booking form.",
      });
      
      console.log('Cal.com booking modal opened successfully');
    } catch (error) {
      console.error('Error opening Cal.com modal:', error);
      toast({
        title: "Error",
        description: "Failed to open booking calendar. Please try again.",
        variant: "destructive"
      });
    }
  };

  const onSubmitPackout = async (values: z.infer<typeof packoutFormSchema>) => {
    console.log('Packout form submitted with values:', values);
    console.log('Service field value (from dropdown):', values.service);
    
    try {
      const cal = await getCalApi({
        "namespace": "cbrs-direct-booking"
      });
      
      // Build the Cal.com link with prefilled data
      const calLink = buildCalLink(values);
      console.log('Opening Cal.com modal with link:', calLink);
      
      // Directly open Cal.com booking modal with prefilled data
      cal("modal", {
        calLink: calLink
      });
      
      toast({
        title: "Opening Booking Calendar",
        description: "Your information has been pre-filled in the booking form.",
      });
      
      console.log('Cal.com booking modal opened successfully');
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
              {isPackoutService ? "Packout & Content Management Request Form" : "Service Request Form"}
            </h2>
            <p className="text-[#1e3046]/70 text-sm">
              {isPackoutService 
                ? "Please provide the details for your packout and content management service, including contractor and claim information."
                : "Please provide the details of the service you need."
              }
            </p>
          </div>

          {isPackoutService ? (
            <Form {...packoutForm}>
              <form onSubmit={packoutForm.handleSubmit(onSubmitPackout)} className="space-y-6">
                <PackoutServiceDetails control={packoutForm.control} />
                <PackoutContactInformation control={packoutForm.control} />
                <ContractorInformation control={packoutForm.control} />
                <ClaimInformation control={packoutForm.control} />
                <PackoutInsuranceInformation control={packoutForm.control} />

                <Button 
                  type="submit" 
                  variant="orange" 
                  className="w-full py-6 text-base bg-[#1e3046] hover:bg-[#1e3046]/90"
                >
                  Schedule Packout Service
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...regularForm}>
              <form onSubmit={regularForm.handleSubmit(onSubmitRegular)} className="space-y-6">
                <ServiceDetails control={regularForm.control} />
                <ContactInformation control={regularForm.control} />
                <InsuranceInformation control={regularForm.control} />

                <Button 
                  type="submit" 
                  variant="orange" 
                  className="w-full py-6 text-base bg-[#1e3046] hover:bg-[#1e3046]/90"
                >
                  Schedule Service
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
      
      <Chatbot />
    </>
  );
};

export default ScheduleService;
