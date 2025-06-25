
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

    let scriptElement: HTMLScriptElement | null = null;
    let pollInterval: NodeJS.Timeout | null = null;

    // Function to wait for Cal object to be available
    const waitForCal = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 50; // 10 seconds max wait time
        
        const checkCal = () => {
          attempts++;
          console.log(`Checking for Cal object, attempt ${attempts}`);
          
          if (typeof window.Cal !== 'undefined' && window.Cal) {
            console.log('Cal object found!');
            resolve();
          } else if (attempts >= maxAttempts) {
            console.error('Cal object not found after maximum attempts');
            reject(new Error('Cal object not available after timeout'));
          } else {
            setTimeout(checkCal, 200);
          }
        };
        
        checkCal();
      });
    };

    // Cal.com integration
    const loadCalEmbed = async () => {
      try {
        console.log('Starting Cal.com embed loading...');

        // Remove any existing Cal scripts to avoid conflicts
        const existingScripts = document.querySelectorAll('script[src*="cal.com"]');
        existingScripts.forEach(script => script.remove());

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

        // Create the Cal.com embed script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://app.cal.com/embed/embed.js';
        scriptElement = script;

        // Wait for script to load
        await new Promise<void>((resolve, reject) => {
          script.onload = () => {
            console.log('Cal.com script loaded successfully');
            resolve();
          };

          script.onerror = (err) => {
            console.error('Failed to load Cal.com script:', err);
            reject(new Error('Failed to load Cal.com script'));
          };

          // Add script to document
          document.head.appendChild(script);
        });

        // Wait for Cal object to be available
        await waitForCal();

        // Initialize Cal
        console.log('Initializing Cal.com embed...');
        window.Cal('init', {
          origin: 'https://app.cal.com'
        });

        // Create the inline embed
        window.Cal('inline', {
          elementOrSelector: '#cal-booking-embed',
          calLink: 'cbrsgroup/consultation',
          config: {
            name: formData.name,
            email: formData.email,
            guests: [formData.email].filter(Boolean),
            // Add form data as metadata/notes
            metadata: {
              service: formData.service,
              location: formData.location,
              phone: formData.phone,
              insurance: formData.insurance,
              notes: formData.notes
            }
          }
        });

        console.log('Cal.com embed initialized successfully');
        setCalLoaded(true);

      } catch (loadError) {
        console.error('Error in loadCalEmbed:', loadError);
        setError('Failed to set up the booking system. Please refresh the page and try again.');
      }
    };

    loadCalEmbed();

    // Cleanup function
    return () => {
      try {
        if (pollInterval) {
          clearInterval(pollInterval);
        }
        if (scriptElement && document.head.contains(scriptElement)) {
          document.head.removeChild(scriptElement);
        }
      } catch (cleanupError) {
        console.warn('Error during cleanup:', cleanupError);
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
            {!calLoaded && !error && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cbrs-orange mx-auto mb-4"></div>
                  <p className="text-[#1e3046]/60">Loading booking form...</p>
                  <p className="text-sm text-[#1e3046]/40 mt-2">This may take a few moments</p>
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
