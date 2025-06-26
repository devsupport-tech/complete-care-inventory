
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
  const [calReady, setCalReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset states when modal closes
      setCalLoaded(false);
      setCalReady(false);
      return;
    }

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

        console.log('Cal.com initialized successfully');
        setCalLoaded(true);
        
        // Add additional delay to ensure Cal.com is fully interactive
        setTimeout(() => {
          console.log('Cal.com is now ready for interaction');
          setCalReady(true);
        }, 2000);
        
      } catch (initError) {
        console.error('Error initializing Cal.com:', initError);
        setError('Failed to initialize the booking system. Please try again.');
      }
    };

    initializeCal();
  }, [isOpen, formData]);

  const handleBookingClick = async () => {
    if (!calReady) {
      console.log('Cal.com not ready yet, please wait...');
      return;
    }
    
    console.log('Opening Cal.com booking form with prefilled data:', formData);
    
    try {
      const cal = await getCalApi({
        "namespace": "cbrs-booking-modal"
      });
      
      // Prepare prefill data
      const prefillData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        // Try different possible field names for service type
        service: formData.service,
        serviceType: formData.service,
        "Service Type": formData.service,
        city: formData.city,
        location: formData.city,
        // Combine message and insurance info
        message: `${formData.message || 'No additional message'}${formData.isInsuranceClaim ? '\n\nInsurance Claim: Yes' : '\n\nInsurance Claim: No'}`,
        description: `${formData.message || 'No additional message'}${formData.isInsuranceClaim ? '\n\nInsurance Claim: Yes' : '\n\nInsurance Claim: No'}`,
        notes: `${formData.message || 'No additional message'}${formData.isInsuranceClaim ? '\n\nInsurance Claim: Yes' : '\n\nInsurance Claim: No'}`,
        "Project Description": `${formData.message || 'No additional message'}${formData.isInsuranceClaim ? '\n\nInsurance Claim: Yes' : '\n\nInsurance Claim: No'}`
      };

      console.log('Prefill data being sent to Cal.com:', prefillData);
      
      // Use Cal.com's prefill method before opening modal
      cal("prefill", prefillData);
      
      // Small delay to ensure prefill is processed
      setTimeout(() => {
        cal("modal", {
          calLink: "admin/cbrs-booking-form"
        });
        console.log('Cal.com booking modal opened with prefill data');
      }, 500);
      
    } catch (openError) {
      console.error('Error opening Cal.com modal:', openError);
    }
  };

  // Enhanced global styles for Cal.com z-index and interaction issues
  useEffect(() => {
    if (isOpen) {
      const style = document.createElement('style');
      style.textContent = `
        /* Ensure Cal.com modal and overlays are at the highest z-index */
        .cal-modal-overlay,
        .cal-modal,
        [data-cal-namespace="cbrs-booking-modal"] .cal-modal-overlay,
        [data-cal-namespace="cbrs-booking-modal"] .cal-modal {
          z-index: 99999 !important;
          position: fixed !important;
        }
        
        .cal-embed-iframe,
        [data-cal-namespace="cbrs-booking-modal"] .cal-embed-iframe {
          z-index: 99999 !important;
          position: relative !important;
        }
        
        /* Ensure Cal.com overlays are above everything */
        div[data-radix-popper-content-wrapper] {
          z-index: 100000 !important;
        }
        
        /* Fix interaction issues with Cal.com calendar */
        [data-cal-namespace="cbrs-booking-modal"] * {
          pointer-events: auto !important;
        }
        
        /* Ensure calendar days and time slots are clickable */
        [data-cal-namespace="cbrs-booking-modal"] button,
        [data-cal-namespace="cbrs-booking-modal"] [role="button"],
        [data-cal-namespace="cbrs-booking-modal"] [data-testid],
        [data-cal-namespace="cbrs-booking-modal"] .cal-calendar-day,
        [data-cal-namespace="cbrs-booking-modal"] .cal-time-slot {
          pointer-events: auto !important;
          z-index: inherit !important;
          position: relative !important;
        }
        
        /* Remove any overlay that might be blocking clicks */
        [data-cal-namespace="cbrs-booking-modal"] .cal-overlay {
          pointer-events: none !important;
        }
        
        /* Ensure the entire Cal.com container allows interactions */
        [data-cal-namespace="cbrs-booking-modal"] {
          pointer-events: auto !important;
          isolation: isolate !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, [isOpen]);

  // Build Cal.com link with query parameters for prefilling
  const buildCalLink = () => {
    const baseUrl = "admin/cbrs-booking-form";
    const params = new URLSearchParams();
    
    // Add basic contact info
    if (formData.name) params.append('name', formData.name);
    if (formData.email) params.append('email', formData.email);
    if (formData.phone) params.append('phone', formData.phone);
    if (formData.city) params.append('city', formData.city);
    
    // Try different variations for Service Type field
    if (formData.service) {
      // Most common field names for service type
      params.append('serviceType', formData.service);
      params.append('service_type', formData.service);
      params.append('Service%20Type', formData.service); // URL encoded
      params.append('field_service_type', formData.service);
      params.append('custom_service_type', formData.service);
    }
    
    // Combine message and insurance info
    const projectDescription = `${formData.message || 'No additional message'}${formData.isInsuranceClaim ? '\n\nInsurance Claim: Yes' : '\n\nInsurance Claim: No'}`;
    if (projectDescription) {
      params.append('description', projectDescription);
      params.append('projectDescription', projectDescription);
      params.append('Project%20Description', projectDescription); // URL encoded
      params.append('notes', projectDescription);
      params.append('message', projectDescription);
    }
    
    const queryString = params.toString();
    const fullUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
    console.log('Cal.com URL with prefill params:', fullUrl);
    console.log('Service type being passed:', formData.service);
    
    return fullUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" style={{ zIndex: 50 }}>
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
          
          {!calReady && !error && (
            <div className="flex flex-col items-center justify-center py-8">
              <LoadingSpinner />
              <p className="mt-4 text-[#1e3046]/70 text-sm">
                {calLoaded ? 'Preparing booking calendar...' : 'Loading booking system...'}
              </p>
            </div>
          )}
          
          {calReady && !error && (
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
              
              <div style={{ position: 'relative', zIndex: 99999 }}>
                <button
                  className={`px-8 py-3 rounded-md transition-colors font-medium ${
                    calReady 
                      ? 'bg-[#1e3046] hover:bg-[#1e3046]/90 text-white cursor-pointer' 
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                  onClick={handleBookingClick}
                  disabled={!calReady}
                  style={{ position: 'relative', zIndex: 99999 }}
                >
                  {calReady ? 'Open Booking Calendar' : 'Loading Calendar...'}
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>Debug info: Service type = "{formData.service}"</p>
                <p>Prefill method: Using Cal.com's prefill API</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
