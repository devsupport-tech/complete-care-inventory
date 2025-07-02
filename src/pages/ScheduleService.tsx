
import React, { useEffect, useState } from "react";
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
import BookingModal from "@/components/BookingModal";
import { getCalApi } from "@calcom/embed-react";

const ScheduleService = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const [selectedService, setSelectedService] = useState<string>("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const defaultService = serviceId 
    ? services.find(service => service.id === serviceId)?.title 
    : '';

  // Set initial selected service
  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  const isPackoutService = selectedService === "Packout & Content Management";
  const isEstimatingService = selectedService === "Estimating & Insurance Supplementing";
  const isProductionManagementService = selectedService === "Production Management";

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

  // Watch for service changes in both forms and update selectedService state
  const regularServiceValue = regularForm.watch("service");
  const packoutServiceValue = packoutForm.watch("service");

  useEffect(() => {
    if (regularServiceValue && regularServiceValue !== selectedService) {
      setSelectedService(regularServiceValue);
      // Update packout form service value to keep them in sync
      packoutForm.setValue("service", regularServiceValue);
    }
  }, [regularServiceValue, selectedService, packoutForm]);

  useEffect(() => {
    if (packoutServiceValue && packoutServiceValue !== selectedService) {
      setSelectedService(packoutServiceValue);
      // Update regular form service value to keep them in sync
      regularForm.setValue("service", packoutServiceValue);
    }
  }, [packoutServiceValue, selectedService, regularForm]);

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
    // For packout services, use contractor info as primary contact if no direct contact info
    if (formData.name) {
      params.append('name', formData.name);
    } else if ('contractorName' in formData && formData.contractorName) {
      params.append('name', formData.contractorName);
    }
    
    if (formData.email) {
      params.append('email', formData.email);
    } else if ('contractorEmail' in formData && formData.contractorEmail) {
      params.append('email', formData.contractorEmail);
    }
    
    if (formData.phone) {
      params.append('contractor_phone', formData.phone);
    } else if ('contractorPhone' in formData && formData.contractorPhone) {
      params.append('contractor_phone', formData.contractorPhone);
    }
    
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
    params.append('description', projectDescription);
    console.log('Setting project-description parameter to:', projectDescription);
    
    const queryString = params.toString();
    console.log('Complete Cal.com URL:', `${baseUrl}?${queryString}`);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const buildPackoutCalLink = (formData: z.infer<typeof packoutFormSchema>) => {
    const baseUrl = "admin/packout-services";
    const params = new URLSearchParams();
    
    // Map form fields to the exact Cal.com field names - ensure proper encoding
    if (formData.contractorName?.trim()) {
      params.append('name', formData.contractorName.trim());
      console.log('Setting contractorfullname to:', formData.contractorName.trim());
    }
    
    if (formData.contractorPhone?.trim()) {
      params.append('contractor_phone', formData.contractorPhone.trim());
      console.log('Setting contractorphonenumber to:', formData.contractorPhone.trim());
    }
    
    if (formData.contractorEmail?.trim()) {
      params.append('email', formData.contractorEmail.trim());
      console.log('Setting contractoremailaddress to:', formData.contractorEmail.trim());
    }
    
    if (formData.claimName?.trim()) {
      params.append('claim_name', formData.claimName.trim());
      console.log('Setting claimfullname to:', formData.claimName.trim());
    }
    
    if (formData.claimPhone?.trim()) {
      params.append('claim_number', formData.claimPhone.trim());
      console.log('Setting claimphonenumber to:', formData.claimPhone.trim());
    }
    
    if (formData.claimEmail?.trim()) {
      params.append('claim_email', formData.claimEmail.trim());
      console.log('Setting claimemailaddress to:', formData.claimEmail.trim());
    }
    
    if (formData.service?.trim()) {
      params.append('servicetype', formData.service.trim());
      console.log('Setting servicetype parameter to:', formData.service.trim());
    }
    
    if (formData.city?.trim()) {
      params.append('city', formData.city.trim());
      console.log('Setting city to:', formData.city.trim());
    }
    
    // Project Description with proper formatting
    let projectDescription = '';
    if (formData.message?.trim()) {
      projectDescription = formData.message.trim();
    } else {
      projectDescription = 'Packout service request from CBRS website';
    }
    
    if (formData.isInsuranceClaim) {
      projectDescription += '\n\nInsurance Claim: Yes';
    } else {
      projectDescription += '\n\nInsurance Claim: No';
    }
    
    params.append('description', projectDescription);
    console.log('Setting projectdescription parameter to:', projectDescription);
    
    const queryString = params.toString();
    const fullUrl = `${baseUrl}?${queryString}`;
    console.log('Complete Cal.com URL for packout services:', fullUrl);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    
    return fullUrl;
  };

  const buildEstimatingCalLink = (formData: z.infer<typeof formSchema>) => {
    const baseUrl = "admin/estimating-services";
    const params = new URLSearchParams();
    
    // Map form fields to the exact Cal.com field names - ensure proper encoding
    if (formData.name?.trim()) {
      params.append('name', formData.name.trim());
      console.log('Setting name to:', formData.name.trim());
    }
    
    if (formData.phone?.trim()) {
      params.append('phone', formData.phone.trim());
      console.log('Setting contractor_phone to:', formData.phone.trim());
    }
    
    if (formData.email?.trim()) {
      params.append('email', formData.email.trim());
      console.log('Setting email to:', formData.email.trim());
    }
    
    if (formData.service?.trim()) {
      params.append('servicetype', formData.service.trim());
      console.log('Setting servicetype parameter to:', formData.service.trim());
    }
    
    if (formData.city?.trim()) {
      params.append('city', formData.city.trim());
      console.log('Setting city to:', formData.city.trim());
    }
    
    // Project Description with proper formatting
    let projectDescription = '';
    if (formData.message?.trim()) {
      projectDescription = formData.message.trim();
    } else {
      projectDescription = 'Estimating & Insurance Supplementing service request from CBRS website';
    }
    
    if (formData.isInsuranceClaim) {
      projectDescription += '\n\nInsurance Claim: Yes';
    } else {
      projectDescription += '\n\nInsurance Claim: No';
    }
    
    params.append('description', projectDescription);
    console.log('Setting description parameter to:', projectDescription);
    
    const queryString = params.toString();
    const fullUrl = `${baseUrl}?${queryString}`;
    console.log('Complete Cal.com URL for estimating services:', fullUrl);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    
    return fullUrl;
  };

  const buildProductionCalLink = (formData: z.infer<typeof formSchema>) => {
    const baseUrl = "admin/production-management-services";
    const params = new URLSearchParams();
    
    // Map form fields to the exact Cal.com field names - ensure proper encoding
    if (formData.name?.trim()) {
      params.append('name', formData.name.trim());
      console.log('Setting name to:', formData.name.trim());
    }
    
    if (formData.phone?.trim()) {
      params.append('phone', formData.phone.trim());
      console.log('Setting phone to:', formData.phone.trim());
    }
    
    if (formData.email?.trim()) {
      params.append('email', formData.email.trim());
      console.log('Setting email to:', formData.email.trim());
    }
    
    if (formData.service?.trim()) {
      params.append('servicetype', formData.service.trim());
      console.log('Setting servicetype parameter to:', formData.service.trim());
    }
    
    if (formData.city?.trim()) {
      params.append('city', formData.city.trim());
      console.log('Setting city to:', formData.city.trim());
    }
    
    // Project Description with proper formatting
    let projectDescription = '';
    if (formData.message?.trim()) {
      projectDescription = formData.message.trim();
    } else {
      projectDescription = 'Production Management service request from CBRS website';
    }
    
    if (formData.isInsuranceClaim) {
      projectDescription += '\n\nInsurance Claim: Yes';
    } else {
      projectDescription += '\n\nInsurance Claim: No';
    }
    
    params.append('description', projectDescription);
    console.log('Setting description parameter to:', projectDescription);
    
    const queryString = params.toString();
    const fullUrl = `${baseUrl}?${queryString}`;
    console.log('Complete Cal.com URL for production management services:', fullUrl);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    
    return fullUrl;
  };

  const onSubmitRegular = async (values: z.infer<typeof formSchema>) => {
    console.log('Regular form submitted with values:', values);
    console.log('Service field value (from dropdown):', values.service);
    
    try {
      const cal = await getCalApi({
        "namespace": "cbrs-direct-booking"
      });
      
      // Build the Cal.com link with prefilled data based on service type
      let calLink;
      if (isEstimatingService) {
        calLink = buildEstimatingCalLink(values);
        console.log('Opening Cal.com estimating services modal with link:', calLink);
      } else if (isProductionManagementService) {
        calLink = buildProductionCalLink(values);
        console.log('Opening Cal.com production management services modal with link:', calLink);
      } else {
        calLink = buildCalLink(values);
        console.log('Opening Cal.com modal with link:', calLink);
      }
      
      // Directly open Cal.com booking modal with prefilled data
      cal("modal", {
        calLink: calLink
      });
      
      toast({
        title: "Opening Booking Calendar",
        description: `Your information has been pre-filled in the ${isEstimatingService ? 'estimating services' : isProductionManagementService ? 'production management services' : ''} booking form.`,
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
    console.log('All form field values:');
    console.log('- contractorName:', values.contractorName);
    console.log('- contractorPhone:', values.contractorPhone);
    console.log('- contractorEmail:', values.contractorEmail);
    console.log('- claimName:', values.claimName);
    console.log('- claimPhone:', values.claimPhone);
    console.log('- claimEmail:', values.claimEmail);
    console.log('- service:', values.service);
    console.log('- city:', values.city);
    console.log('- message:', values.message);
    console.log('- isInsuranceClaim:', values.isInsuranceClaim);
    
    // For packout services, open the new booking URL in modal
    setIsBookingModalOpen(true);
    
    toast({
      title: "Opening Packout Services Booking",
      description: "Your booking form is opening in a new window.",
    });
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
              {isPackoutService ? "Packout & Content Management Request Form" : 
               isEstimatingService ? "Estimating & Insurance Supplementing Request Form" : 
               isProductionManagementService ? "Production Management Request Form" :
               "Service Request Form"}
            </h2>
            <p className="text-[#1e3046]/70 text-sm">
              {isPackoutService 
                ? "Please provide details about your packout needs. Number of beds, number of bathrooms, number of other rooms, if it in site or off site storage."
                : isEstimatingService
                ? "Please provide the details for your estimating and insurance supplementing service."
                : isProductionManagementService  
                ? "Please provide the details for your production management service."
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
                  {isEstimatingService ? "Schedule Estimating Service" : 
                   isProductionManagementService ? "Schedule Production Management Service" : 
                   "Schedule Service"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
      
      {/* Booking Modal for Packout Services */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        bookingUrl="https://booking.cbrsgroup.com/support-cbrsgroup.com/packout-services?overlayCalendar=true"
      />
      
      <Chatbot />
    </>
  );
};

export default ScheduleService;
