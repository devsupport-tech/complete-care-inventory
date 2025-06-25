
import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const EmbeddedBooking = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize the embed after script loads
    script.onload = () => {
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

      // Initialize Cal embed with prefilled data
      if (window.Cal) {
        window.Cal('init', {
          origin: 'https://app.cal.com',
          calOrigin: 'https://app.cal.com'
        });

        // Configure the booking form with prefilled data
        window.Cal('inline', {
          elementOrSelector: '#cal-booking-embed',
          calLink: 'admin/cbrs-booking-form',
          config: {
            name: formData.name,
            email: formData.email,
            customInputs: [
              {
                label: 'Phone',
                type: 'phone',
                value: formData.phone,
                required: true
              },
              {
                label: 'Service Needed',
                type: 'text',
                value: formData.service,
                required: true
              },
              {
                label: 'Location/City',
                type: 'text',
                value: formData.location,
                required: true
              },
              {
                label: 'Additional Notes',
                type: 'textarea',
                value: formData.notes
              },
              {
                label: 'Insurance Claim',
                type: 'text',
                value: formData.insurance
              }
            ]
          }
        });
      }
    };

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [searchParams]);

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
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cbrs-orange mx-auto mb-4"></div>
                <p className="text-[#1e3046]/60">Loading booking form...</p>
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
};

// Extend Window interface to include Cal
declare global {
  interface Window {
    Cal: any;
  }
}

export default EmbeddedBooking;
