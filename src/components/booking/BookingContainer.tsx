
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import BookingInterface from './BookingInterface';

interface BookingContainerProps {
  calLoaded: boolean;
  onBookingClick: () => void;
}

const BookingContainer = ({ calLoaded, onBookingClick }: BookingContainerProps) => {
  return (
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
        <BookingInterface calLoaded={calLoaded} onBookingClick={onBookingClick} />
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-[#1e3046]/60">
          Having trouble? Contact us at (346) 298-6933 or schedule@cbrsgroup.com
        </p>
      </div>
    </div>
  );
};

export default BookingContainer;
