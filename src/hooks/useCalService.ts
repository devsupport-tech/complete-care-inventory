
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useCalService = () => {
  const [searchParams] = useSearchParams();
  const [calLoaded, setCalLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('useCalService hook initialized');
    console.log('Search params:', Object.fromEntries(searchParams.entries()));

    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      console.error('Window object not available');
      setError('Browser environment not detected. Please refresh the page.');
      return;
    }

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

    console.log('Form data to prefill:', formData);

    // Simplified Cal.com integration
    const loadCalEmbed = () => {
      try {
        console.log('Loading Cal.com embed script...');

        // Remove any existing Cal scripts
        const existingScripts = document.querySelectorAll('script[src*="embed.js"]');
        existingScripts.forEach(script => script.remove());

        // Clear any existing Cal objects
        if (window.Cal) {
          delete window.Cal;
        }

        // Load the Cal.com embed script
        const script = document.createElement('script');
        script.src = 'https://schedule.cbrsgroup.com/embed/embed.js';
        script.async = true;
        
        script.onload = () => {
          console.log('Cal.com script loaded successfully');
          
          // Wait for Cal to be available
          const initCal = () => {
            if (window.Cal) {
              try {
                console.log('Initializing Cal.com embed...');
                
                // Initialize Cal
                window.Cal("init", "cbrs-booking-form", {
                  origin: "https://schedule.cbrsgroup.com"
                });
                
                // Configure the UI
                window.Cal.ns["cbrs-booking-form"]("ui", {
                  hideEventTypeDetails: false,
                  layout: "month_view"
                });

                console.log('Cal.com embed initialized successfully');
                setCalLoaded(true);
              } catch (initError) {
                console.error('Error initializing Cal.com:', initError);
                setError('Failed to initialize the booking system. Please refresh the page.');
              }
            } else {
              console.log('Cal object not available yet, retrying...');
              setTimeout(initCal, 500);
            }
          };
          
          initCal();
        };

        script.onerror = () => {
          console.error('Failed to load Cal.com script');
          setError('Failed to load the booking system. Please check your internet connection and refresh the page.');
        };

        document.head.appendChild(script);

      } catch (loadError) {
        console.error('Error in loadCalEmbed:', loadError);
        setError('Failed to set up the booking system. Please refresh the page and try again.');
      }
    };

    loadCalEmbed();

  }, [searchParams]);

  const handleBookingClick = () => {
    if (window.Cal && window.Cal.ns && window.Cal.ns["cbrs-booking-form"]) {
      try {
        // Open the Cal.com booking modal
        window.Cal.ns["cbrs-booking-form"]("openModal", {
          calLink: "admin/cbrs-booking-form"
        });
      } catch (error) {
        console.error('Error opening booking modal:', error);
        // Fallback: open in new window
        window.open('https://schedule.cbrsgroup.com/admin/cbrs-booking-form', '_blank');
      }
    } else {
      // Fallback: open in new window
      window.open('https://schedule.cbrsgroup.com/admin/cbrs-booking-form', '_blank');
    }
  };

  return {
    calLoaded,
    error,
    handleBookingClick
  };
};

// Extend Window interface to include Cal
declare global {
  interface Window {
    Cal: any;
  }
}
