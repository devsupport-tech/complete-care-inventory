
import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const EmbeddedBooking = () => {
  const [searchParams] = useSearchParams();
  const [calLoaded, setCalLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('EmbeddedBooking component mounted');
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

  if (error) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 max-w-4xl mt-20">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <Link to="/">
                <Button 
                  variant="outline" 
                  className="border-[#1e3046] text-[#1e3046] hover:bg-[#1e3046]/5"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Homepage
                </Button>
              </Link>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1e3046] mb-4">
                Booking System Error
              </h1>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-red-800 mb-4">{error}</p>
                <div className="space-y-3">
                  <Button 
                    onClick={() => window.location.reload()} 
                    className="bg-[#1e3046] hover:bg-[#1e3046]/90 mr-4"
                  >
                    Refresh Page
                  </Button>
                  <Link to="/schedule">
                    <Button variant="outline" className="border-[#1e3046] text-[#1e3046]">
                      Return to Schedule Form
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-[#1e3046]/60">
              Having trouble? Contact us at (346) 298-6933 or schedule@cbrsgroup.com
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl mt-20">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-[#1e3046] text-[#1e3046] hover:bg-[#1e3046]/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Homepage
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e3046] mb-4">
              Complete Your Booking
            </h1>
            <p className="text-[#1e3046]/80 max-w-2xl mx-auto">
              Click the button below to open the booking calendar and select your preferred date and time. 
              Your information has been noted from the previous form.
            </p>
          </div>
        </div>

        {/* Booking interface */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {!calLoaded && !error && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cbrs-orange mx-auto mb-4"></div>
                <p className="text-[#1e3046]/60">Loading booking system...</p>
                <p className="text-sm text-[#1e3046]/40 mt-2">This may take a few moments</p>
              </div>
            </div>
          )}

          {calLoaded && (
            <div className="text-center">
              <div 
                onClick={handleBookingClick}
                className="cursor-pointer p-8 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-cbrs-orange transition-colors"
              >
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-[#1e3046] mb-2">
                  Click to Schedule Your Appointment
                </h3>
                <p className="text-[#1e3046]/70">
                  Select your preferred date and time
                </p>
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={handleBookingClick}
                  className="bg-[#1e3046] hover:bg-[#1e3046]/90 px-8 py-3"
                >
                  Open Booking Calendar
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-[#1e3046]/60">
            Having trouble? Contact us at (346) 298-6933 or schedule@cbrsgroup.com
          </p>
        </div>
      </div>
    </>
  );
};

// Extend Window interface to include Cal
declare global {
  interface Window {
    Cal: any;
  }
}

export default EmbeddedBooking;
