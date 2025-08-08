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
import { supabase } from "@/integrations/supabase/client";

const ScheduleService = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const [selectedService, setSelectedService] = useState<string>("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [packoutFormData, setPackoutFormData] = useState<z.infer<typeof packoutFormSchema> | null>(null);
  const [estimatingFormData, setEstimatingFormData] = useState<z.infer<typeof formSchema> | null>(null);
  const [productionFormData, setProductionFormData] = useState<z.infer<typeof formSchema> | null>(null);

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

  const buildPackoutBookingUrl = (formData: z.infer<typeof packoutFormSchema>) => {
    const baseUrl = "https://booking.cbrsgroup.com/support-cbrsgroup.com/packout-services";
    const params = new URLSearchParams();
    
    // Map form fields to Cal.com field names exactly as they appear in the booking form
    if (formData.contractorName?.trim()) {
      // Prefill attendee name AND the custom contractor_name field
      const contractorName = formData.contractorName.trim();
      params.append('name', contractorName);
      params.append('contractor_name2', contractorName);
      console.log('Setting Contractor Full Name to:', contractorName);
    }
    
    if (formData.contractorEmail?.trim()) {
      // Prefill attendee email AND the custom contractor_email field
      const contractorEmail = formData.contractorEmail.trim();
      params.append('email', contractorEmail);
      params.append('contractor_email2', contractorEmail);
      console.log('Setting Contractor Email Address to:', contractorEmail);
    }
    
    if (formData.contractorPhone?.trim()) {
      params.append('contractor_phone', formData.contractorPhone.trim());
      console.log('Setting Contractor Phone Number to:', formData.contractorPhone.trim());
    }
    
    if (formData.claimName?.trim()) {
      params.append('claim_name', formData.claimName.trim());
      console.log('Setting Claim Full Name to:', formData.claimName.trim());
    }
    
    if (formData.claimPhone?.trim()) {
      params.append('claim_number', formData.claimPhone.trim());
      console.log('Setting Claim Phone Number to:', formData.claimPhone.trim());
    }
    
    if (formData.claimEmail?.trim()) {
      params.append('claim_email', formData.claimEmail.trim());
      console.log('Setting Claim Email Address to:', formData.claimEmail.trim());
    }
    
    if (formData.service?.trim()) {
      params.append('servicetype', formData.service.trim());
      console.log('Setting Service Type to:', formData.service.trim());
    }
    
    if (formData.city?.trim()) {
      params.append('city', formData.city.trim());
      console.log('Setting City to:', formData.city.trim());
    }
    
    // Build description with project details and insurance info
    let description = '';
    if (formData.message?.trim()) {
      description = formData.message.trim();
    } else {
      description = 'Packout service request from CBRS website';
    }
    
    if (formData.isInsuranceClaim) {
      description += '\n\nInsurance Claim: Yes';
    } else {
      description += '\n\nInsurance Claim: No';
    }
    
    params.append('description', description);
    console.log('Setting Description to:', description);
    
    const queryString = params.toString();
    const fullUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
    console.log('Complete packout booking URL:', fullUrl);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    
    return fullUrl;
  };

  const buildEstimatingBookingUrl = (formData: z.infer<typeof formSchema>) => {
    const baseUrl = "https://booking.cbrsgroup.com/support-cbrsgroup.com/estimating-services";
    const params = new URLSearchParams();
    
    // Map form fields to Cal.com field names exactly as they appear in the booking form
    if (formData.name?.trim()) {
      params.append('name', formData.name.trim());
      console.log('Setting name to:', formData.name.trim());
    }
    
    if (formData.email?.trim()) {
      params.append('email', formData.email.trim());
      console.log('Setting email to:', formData.email.trim());
    }
    
    if (formData.phone?.trim()) {
      params.append('phone', formData.phone.trim());
      console.log('Setting phone to:', formData.phone.trim());
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
    const fullUrl = `${baseUrl}?${queryString}&overlayCalendar=true`;
    console.log('Complete estimating services booking URL:', fullUrl);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    
    return fullUrl;
  };

  const buildProductionBookingUrl = (formData: z.infer<typeof formSchema>) => {
    const baseUrl = "https://booking.cbrsgroup.com/support-cbrsgroup.com/production-services";
    const params = new URLSearchParams();
    
    // Map form fields to Cal.com field names exactly as they appear in the booking form
    if (formData.name?.trim()) {
      params.append('name', formData.name.trim());
      console.log('Setting name to:', formData.name.trim());
    }
    
    if (formData.email?.trim()) {
      params.append('email', formData.email.trim());
      console.log('Setting email to:', formData.email.trim());
    }
    
    if (formData.phone?.trim()) {
      params.append('phone', formData.phone.trim());
      console.log('Setting phone to:', formData.phone.trim());
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
    console.log('Complete production services booking URL:', fullUrl);
    console.log('All URL parameters:', Object.fromEntries(params.entries()));
    
    return fullUrl;
  };

  const buildCalLink = (formData: z.infer<typeof formSchema>) => {
    //const baseUrl = "admin/cbrs-booking-form";
    const baseUrl = "";
    const params = new URLSearchParams();
    
    // Map form fields to Cal.com field names exactly as they appear in the booking form
    if (formData.name?.trim()) {
      params.append('name', formData.name.trim());
      console.log('Setting name to:', formData.name.trim());
    }
    
    if (formData.email?.trim()) {
      params.append('email', formData.email.trim());
      console.log('Setting email to:', formData.email.trim());
    }
    
    if (formData.phone?.trim()) {
      params.append('phone', formData.phone.trim());
      console.log('Setting phone to:', formData.phone.trim());
    }
    
    if (formData.service?.trim()) {
      params.append('servicetype', formData.service.trim());
      console.log('Setting servicetype parameter to:', formData.service.trim());
    }
    
    if (formData.city?.trim()) {
      params.append('city', formData.city.trim());
      console.log('Setting city to:', formData.city.trim());
    }
    
    // Build comprehensive project description with message and insurance info
    let projectDescription = '';
    if (formData.message?.trim()) {
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
    
    // Use the exact field name that Cal.com expects for project description
    params.append('project-description', projectDescription);
    console.log('Setting project-description parameter to:', projectDescription);
    
    const queryString = params.toString();
    const fullUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
    console.log('Complete Cal.com URL:', fullUrl);
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


  // Function to save estimating service data to Supabase
  const saveEstimatingService = async (formData: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase
        .from('estimating_services')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          city: formData.city,
          message: formData.message,
          is_insurance_claim: formData.isInsuranceClaim,
        });

      if (error) {
        console.error('Error saving estimating service:', error);
        throw error;
      }

      console.log('Estimating service saved successfully:', data);
      return data;
    } catch (error) {
      console.error('Failed to save estimating service:', error);
      throw error;
    }
  };

  // Function to save production service data to Supabase
  const saveProductionService = async (formData: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase
        .from('production_services')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          city: formData.city,
          message: formData.message,
          is_insurance_claim: formData.isInsuranceClaim,
        });

      if (error) {
        console.error('Error saving production service:', error);
        throw error;
      }

      console.log('Production service saved successfully:', data);
      return data;
    } catch (error) {
      console.error('Failed to save production service:', error);
      throw error;
    }
  };

  const onSubmitRegular = async (values: z.infer<typeof formSchema>) => {
    console.log('Regular form submitted with values:', values);
    console.log('Service field value (from dropdown):', values.service);
    
    // Handle estimating services with popup modal
    if (isEstimatingService) {
      console.log('Estimating service detected, saving to database and opening booking modal');
      
      try {
        await saveEstimatingService(values);
        setEstimatingFormData(values);
        setIsBookingModalOpen(true);
        
        toast({
          title: "Opening Estimating Services Booking",
          description: "Your information has been saved and booking form is opening.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to save service data. Please try again.",
          variant: "destructive"
        });
      }
      return;
    }
    
    // Handle production management services - save to database only
    if (isProductionManagementService) {
      console.log('Production management service detected, saving to database');
      
      try {
        await saveProductionService(values);

        // Reset the form after successful submission
        regularForm.reset({
          name: "",
          email: "",
          phone: "",
          service: "",
          city: "",
          message: "",
          isInsuranceClaim: false,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to save service data. Please try again.",
          variant: "destructive"
        });
      }
      return;
    }
    
    try {
      const cal = await getCalApi({
        "namespace": "cbrs-direct-booking"
      });
      
      // Build the Cal.com link with prefilled data based on service type
      let calLink;
      if (isProductionManagementService) {
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
        description: `Your information has been pre-filled in the ${isProductionManagementService ? 'production management services' : ''} booking form.`,
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

  // Function to save packout service data to Supabase
  const savePackoutService = async (formData: z.infer<typeof packoutFormSchema>) => {
    try {
      const { data, error } = await supabase
        .from('packout_services')
        .insert({
          service: formData.service,
          city: formData.city,
          message: formData.message,
          is_insurance_claim: formData.isInsuranceClaim,
          contractor_name2: formData.contractorName,
          contractor_phone: formData.contractorPhone,
          contractor_email2: formData.contractorEmail,
          claim_name: formData.claimName,
          claim_phone: formData.claimPhone,
          claim_email: formData.claimEmail,
        });

      if (error) {
        console.error('Error saving packout service:', error);
        throw error;
      }

      console.log('Packout service saved successfully:', data);
      return data;
    } catch (error) {
      console.error('Failed to save packout service:', error);
      throw error;
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
    
    try {
      // Open booking without inserting into database to avoid duplicate rows
      setPackoutFormData(values);
      setIsBookingModalOpen(true);
      
      toast({
        title: "Opening Packout Services Booking",
        description: "Your booking form is opening.",
      });
    } catch (error) {
      console.error('Error opening packout booking modal:', error);
      toast({
        title: "Error",
        description: "Failed to open booking form. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Get the appropriate booking URL based on the service type
  const getBookingUrl = () => {
    if (packoutFormData) {
      return buildPackoutBookingUrl(packoutFormData);
    }
    if (estimatingFormData) {
      return buildEstimatingBookingUrl(estimatingFormData);
    }
    if (productionFormData) {
      return buildProductionBookingUrl(productionFormData);
    }
    return "https://booking.cbrsgroup.com/support-cbrsgroup.com/packout-services";
  };

  // Reset form data when modal closes
  const handleModalClose = () => {
    setIsBookingModalOpen(false);
    setPackoutFormData(null);
    setEstimatingFormData(null);
    setProductionFormData(null);
    
    // Reset all form fields to default values
    packoutForm.reset();
    regularForm.reset();
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
      
      {/* Booking Modal for Packout and Estimating Services */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleModalClose}
        bookingUrl={getBookingUrl()}
      />
      
      <Chatbot />
    </>
  );
};

export default ScheduleService;
