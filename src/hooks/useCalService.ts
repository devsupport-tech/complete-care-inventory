
import { useEffect, useState } from 'react';
import { getCalApi } from "@calcom/embed-react";

interface PrefillData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  notes: string;
  insurance: string;
}

export const useCalService = () => {
  const [calLoaded, setCalLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [calApi, setCalApi] = useState<any>(null);

  useEffect(() => {
    console.log('useCalService hook initialized with React Cal package');

    // Initialize Cal.com using the React package
    const initializeCal = async () => {
      try {
        console.log('Initializing Cal.com with React package...');
        
        const cal = await getCalApi({
          "namespace": "cbrs-booking-form",
          "embedJsUrl": "https://schedule.cbrsgroup.com/embed/embed.js"
        });
        
        cal("ui", {
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });

        console.log('Cal.com initialized successfully');
        setCalApi(cal);
        setCalLoaded(true);
      } catch (initError) {
        console.error('Error initializing Cal.com:', initError);
        setError('Failed to initialize the booking system. Please refresh the page.');
      }
    };

    initializeCal();
  }, []);

  const openBookingModal = (prefillData: PrefillData) => {
    if (!calApi || !calLoaded) {
      console.error('Cal.com API not loaded yet');
      return;
    }

    console.log('Opening Cal.com booking modal with prefill data:', prefillData);
    
    try {
      // Open the Cal.com modal with prefilled data
      calApi("modal", {
        calLink: "admin/cbrs-booking-form",
        config: {
          layout: "month_view"
        },
        prefill: {
          name: prefillData.name,
          email: prefillData.email,
          phone: prefillData.phone,
          customField: {
            service: prefillData.service,
            location: prefillData.location,
            notes: prefillData.notes,
            insurance: prefillData.insurance
          }
        }
      });
    } catch (modalError) {
      console.error('Error opening Cal.com modal:', modalError);
    }
  };

  const handleBookingClick = () => {
    // Legacy function for backward compatibility
    console.log('Booking button clicked');
  };

  return {
    calLoaded,
    error,
    handleBookingClick,
    openBookingModal
  };
};
