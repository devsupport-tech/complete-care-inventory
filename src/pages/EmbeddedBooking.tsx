
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

    // Cal.com integration using your custom embed code
    const loadCalEmbed = () => {
      try {
        console.log('Starting Cal.com embed loading with custom script...');

        // Remove any existing Cal scripts to avoid conflicts
        const existingScripts = document.querySelectorAll('script[src*="cal.com"]');
        existingScripts.forEach(script => script.remove());

        // Your custom Cal.com embed script
        const calScript = `
          (function (C, A, L) { 
            let p = function (a, ar) { a.q.push(ar); }; 
            let d = C.document; 
            C.Cal = C.Cal || function () { 
              let cal = C.Cal; 
              let ar = arguments; 
              if (!cal.loaded) { 
                cal.ns = {}; 
                cal.q = cal.q || []; 
                d.head.appendChild(d.createElement("script")).src = A; 
                cal.loaded = true; 
              } 
              if (ar[0] === L) { 
                const api = function () { p(api, arguments); }; 
                const namespace = ar[1]; 
                api.q = api.q || []; 
                if(typeof namespace === "string"){
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar); 
                return;
              } 
              p(cal, ar); 
            }; 
          })(window, "https://schedule.cbrsgroup.com/embed/embed.js", "init");
          
          Cal("init", "cbrs-booking-form", {origin:"https://schedule.cbrsgroup.com"});
          Cal.ns["cbrs-booking-form"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `;

        // Execute the script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = calScript;
        document.head.appendChild(script);

        // Wait a moment for the script to initialize, then create the booking element
        setTimeout(() => {
          try {
            // Create a clickable element that will trigger the calendar
            const bookingElement = document.getElementById('cal-booking-embed');
            if (bookingElement) {
              // Set the required attributes for the Cal.com embed
              bookingElement.setAttribute('data-cal-link', 'admin/cbrs-booking-form');
              bookingElement.setAttribute('data-cal-namespace', 'cbrs-booking-form');
              bookingElement.setAttribute('data-cal-config', '{"layout":"month_view"}');
              
              // Make it clickable to open the calendar
              bookingElement.style.cursor = 'pointer';
              bookingElement.innerHTML = `
                <div class="text-center p-8 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-cbrs-orange transition-colors">
                  <div class="text-4xl mb-4">📅</div>
                  <h3 class="text-xl font-semibold text-[#1e3046] mb-2">Click to Schedule Your Appointment</h3>
                  <p class="text-[#1e3046]/70">Select your preferred date and time</p>
                </div>
              `;
            }
            
            console.log('Cal.com embed initialized successfully');
            setCalLoaded(true);
          } catch (initError) {
            console.error('Error setting up booking element:', initError);
            setError('Failed to set up the booking interface. Please refresh the page and try again.');
          }
        }, 2000);

      } catch (loadError) {
        console.error('Error in loadCalEmbed:', loadError);
        setError('Failed to set up the booking system. Please refresh the page and try again.');
      }
    };

    loadCalEmbed();

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
              Click below to open the booking calendar and select your preferred date and time. 
              Your information has been noted from the previous form.
            </p>
          </div>
        </div>

        {/* Cal.com embed container */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div 
            id="cal-booking-embed" 
            style={{ 
              width: '100%', 
              minHeight: '200px'
            }}
          >
            {/* Loading state */}
            {!calLoaded && !error && (
              <div className="flex items-center justify-center h-full py-20">
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
