
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { getCalApi } from "@calcom/embed-react";
import LoadingSpinner from './LoadingSpinner';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    city: string;
    message: string;
    isInsuranceClaim: boolean;
  };
}

const BookingModal = ({ isOpen, onClose, formData }: BookingModalProps) => {
  const [calLoaded, setCalLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    console.log('BookingModal: Initializing Cal.com booking form');
    console.log('Form data:', formData);

    const initializeCal = async () => {
      try {
        console.log('Initializing Cal.com with React package...');
        
        const cal = await getCalApi({
          "namespace": "cbrs-booking-modal",
          "embedJsUrl": "https://schedule.cbrsgroup.com/embed/embed.js"
        });
        
        cal("ui", {
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });

        // Add a small delay to ensure Cal API is fully loaded
        setTimeout(() => {
          console.log('Cal.com initialized successfully');
          setCalLoaded(true);
        }, 1000);
        
      } catch (initError) {
        console.error('Error initializing Cal.com:', initError);
        setError('Failed to initialize the booking system. Please try again.');
      }
    };

    initializeCal();
  }, [isOpen, formData]);

  const handleBookingClick = () => {
    console.log('Opening Cal.com booking form with prefilled data:', formData);
  };

  // Create prefill data for Cal.com
  const prefillData = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    notes: `Service: ${formData.service}\nCity: ${formData.city}\nInsurance Claim: ${formData.isInsuranceClaim ? 'Yes' : 'No'}${formData.message ? `\nAdditional Notes: ${formData.message}` : ''}`
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1e3046]">
            Schedule Your Service
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          {!calLoaded && !error && (
            <div className="flex items-center justify-center py-8">
              <LoadingSpinner />
            </div>
          )}
          
          {calLoaded && !error && (
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1e3046] mb-2">
                  Service Details
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>City:</strong> {formData.city}</p>
                  {formData.message && <p><strong>Message:</strong> {formData.message}</p>}
                  <p><strong>Insurance Claim:</strong> {formData.isInsuranceClaim ? 'Yes' : 'No'}</p>
                </div>
              </div>
              
              <p className="text-[#1e3046]/70 mb-6">
                Click the button below to select your preferred date and time
              </p>
              
              <button
                data-cal-namespace="cbrs-booking-modal"
                data-cal-link="admin/cbrs-booking-form"
                data-cal-origin="https://schedule.cbrsgroup.com"
                data-cal-config={JSON.stringify({
                  layout: "month_view",
                  prefill: prefillData
                })}
                className="bg-[#1e3046] hover:bg-[#1e3046]/90 text-white px-8 py-3 rounded-md transition-colors font-medium"
                onClick={handleBookingClick}
              >
                Open Booking Calendar
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
