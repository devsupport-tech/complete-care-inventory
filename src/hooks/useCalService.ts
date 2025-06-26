
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCalApi } from "@calcom/embed-react";

export const useCalService = () => {
  const [searchParams] = useSearchParams();
  const [calLoaded, setCalLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('useCalService hook initialized with React Cal package');
    console.log('Search params:', Object.fromEntries(searchParams.entries()));

    // Get form data from URL parameters
    const formData = {
      name: searchParams.get('name') || '',
      email: searchParams.get('email') || '',
      phone: searchParams.get('phone') || '',
      service: searchParams.get('service') || '',
      location: searchParams.get('location') || '',
      notes: searchParams.get('notes') || '',
      insurance: searchParams.get('insurance') || 'No'
    };

    console.log('Form data to prefill with servicetype identifier:', formData);

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
        setCalLoaded(true);
      } catch (initError) {
        console.error('Error initializing Cal.com:', initError);
        setError('Failed to initialize the booking system. Please refresh the page.');
      }
    };

    initializeCal();

  }, [searchParams]);

  const handleBookingClick = () => {
    // The booking will be handled by the data attributes on the button
    console.log('Booking button clicked with servicetype identifier');
  };

  return {
    calLoaded,
    error,
    handleBookingClick
  };
};
