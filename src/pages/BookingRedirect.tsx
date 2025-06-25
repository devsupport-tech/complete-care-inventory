
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Clock } from "lucide-react";
import Header from "@/components/Header";

const BookingRedirect = () => {
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Construct the Cal.com URL with all the parameters
          const calParams = new URLSearchParams();
          searchParams.forEach((value, key) => {
            calParams.append(key, value);
          });
          
          // Redirect to Cal.com
          window.location.href = `https://schedule.cbrsgroup.com/admin/cbrs-booking-form?${calParams.toString()}`;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [searchParams]);

  const handleManualRedirect = () => {
    const calParams = new URLSearchParams();
    searchParams.forEach((value, key) => {
      calParams.append(key, value);
    });
    
    window.location.href = `https://schedule.cbrsgroup.com/admin/cbrs-booking-form?${calParams.toString()}`;
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-2xl mt-20">
        <div className="text-center mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="mb-6">
              <div className="w-16 h-16 bg-cbrs-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-cbrs-orange" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1e3046] mb-4">
                Redirecting to Booking Form
              </h1>
              <p className="text-[#1e3046]/80 mb-6">
                You'll be automatically redirected to our booking form in {countdown} seconds...
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Button 
                onClick={handleManualRedirect}
                variant="orange" 
                className="w-full md:w-auto"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Continue to Booking Form
              </Button>
              
              <div className="text-sm text-[#1e3046]/60">
                or
              </div>
              
              <Link to="/">
                <Button 
                  variant="outline" 
                  className="w-full md:w-auto border-[#1e3046] text-[#1e3046] hover:bg-[#1e3046]/5"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Homepage
                </Button>
              </Link>
            </div>

            <div className="text-xs text-[#1e3046]/50 border-t pt-4">
              <p>Having trouble? Contact us at (346) 298-6933 or schedule@cbrsgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingRedirect;
