
import React, { useState } from "react";
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
import BookingInterface from "@/components/booking/BookingInterface";
import { useCalService } from "@/hooks/useCalService";
import Chatbot from "@/components/Chatbot";

const ScheduleService = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [showBookingInterface, setShowBookingInterface] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const { calLoaded, handleBookingClick } = useCalService();
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
    console.log('Form submitted with values:', values);
    
    // Store the form data and show the booking interface
    setBookingData(values);
    setShowBookingInterface(true);
    
    toast({
      title: "Form Submitted",
      description: "Please select your preferred date and time below.",
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-2xl mt-20">
        {!showBookingInterface ? (
          <>
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
          </>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1e3046] mb-4">
                Select Your Appointment Time
              </h1>
              <p className="text-[#1e3046]/80 max-w-xl mx-auto">
                Your information has been received. Please select your preferred date and time below.
              </p>
            </div>

            {bookingData && (
              <div className="bg-gray-50 p-4 rounded-lg mb-8 text-left">
                <h3 className="text-lg font-semibold text-[#1e3046] mb-2">Service Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <p><strong>Name:</strong> {bookingData.name}</p>
                  <p><strong>Email:</strong> {bookingData.email}</p>
                  <p><strong>Phone:</strong> {bookingData.phone}</p>
                  <p><strong>Service:</strong> {bookingData.service}</p>
                  <p><strong>City:</strong> {bookingData.city}</p>
                  <p><strong>Insurance Claim:</strong> {bookingData.isInsuranceClaim ? 'Yes' : 'No'}</p>
                  {bookingData.message && (
                    <p className="col-span-full"><strong>Message:</strong> {bookingData.message}</p>
                  )}
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm p-6">
              <BookingInterface calLoaded={calLoaded} onBookingClick={handleBookingClick} />
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowBookingInterface(false)}
                className="text-[#1e3046]/70 hover:text-[#1e3046] text-sm underline"
              >
                ← Back to form
              </button>
            </div>
          </>
        )}
      </div>
      
      <Chatbot />
    </>
  );
};

export default ScheduleService;
