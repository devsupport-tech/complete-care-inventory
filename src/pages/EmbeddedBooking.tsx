
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
    let scriptAdded = false;
    
    // Define initializeCal function first
    const initializeCal = () => {
      try {
        console.log('Initializing Cal...');
        
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

        console.log('Form data:', formData);

        // Initialize Cal embed
        window.Cal('init', {
          origin: 'https://app.cal.com'
        });

        // Configure the booking form with prefilled data
        window.Cal('inline', {
          elementOrSelector: '#cal-booking-embed',
          calLink: 'admin/cbrs-booking-form',
          config: {
            name: formData.name,
            email: formData.email,
            // Note: Cal.com may not support all custom inputs as expected
            // This is a limitation of their embed system
          }
        });

        setCalLoaded(true);
        console.log('Cal initialized successfully');
      } catch (err) {
        console.error('Error initializing Cal:', err);
        setError('Failed to initialize booking system. Please refresh the page.');
      }
    };
    
    // Check if Cal script is already loaded
    if (window.Cal) {
      console.log('Cal already loaded, initializing...');
      initializeCal();
      return;
    }

    // Check if script is already in the DOM
    const existingScript = document.querySelector('script[src*="cal.com/embed"]');
    if (existingScript) {
      console.log('Cal script already exists, waiting for load...');
      // Wait for existing script to load
      const checkCal = setInterval(() => {
        if (window.Cal) {
          console.log('Cal loaded from existing script');
          clearInterval(checkCal);
          initializeCal();
        }
      }, 100);
      
      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkCal);
        if (!window.Cal) {
          setError('Failed to load booking system. Please refresh the page.');
        }
      }, 10000);
      return;
    }

    // Load Cal.com embed script
    console.log('Loading Cal script...');
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    scriptAdded = true;

    const handleScriptLoad = () => {
      console.log('Cal script loaded successfully');
      // Wait a bit for Cal to initialize
      setTimeout(() => {
        if (window.Cal) {
          console.log('Cal object available, initializing...');
          initializeCal();
        } else {
          console.error('Cal script loaded but Cal object not available');
          setError('Failed to initialize booking system. Please refresh the page.');
        }
      }, 100);
    };

    const handleScriptError = () => {
      console.error('Failed to load Cal script');
      setError('Failed to load booking system. Please check your internet connection and refresh the page.');
    };

    script.addEventListener('load', handleScriptLoad);
    script.addEventListener('error', handleScriptError);
    
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (scriptAdded && document.head.contains(script)) {
        script.removeEventListener('load', handleScriptLoad);
        script.removeEventListener('error', handleScriptError);
        document.head.removeChild(script);
      }
    };
  }, [searchParams]);

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
              Select your preferred date and time for your service appointment. 
              Your information has been pre-filled from the previous form.
            </p>
          </div>
        </div>

        {/* Cal.com embed container */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div 
            id="cal-booking-embed" 
            style={{ 
              width: '100%', 
              height: '700px',
              overflow: 'hidden'
            }}
          >
            {/* Loading state */}
            {!calLoaded && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cbrs-orange mx-auto mb-4"></div>
                  <p className="text-[#1e3046]/60">Loading booking form...</p>
                </div>
              </div>
            )}
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
};

// Extend Window interface to include Cal
declare global {
  interface Window {
    Cal: any;
  }
}

export default EmbeddedBooking;
