
import React from 'react';
import { Button } from '@/components/ui/button';
import LoadingSpinner from './LoadingSpinner';

interface BookingInterfaceProps {
  calLoaded: boolean;
  onBookingClick: () => void;
}

const BookingInterface = ({ calLoaded, onBookingClick }: BookingInterfaceProps) => {
  if (!calLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div className="text-center">
      <div 
        onClick={onBookingClick}
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
          onClick={onBookingClick}
          className="bg-[#1e3046] hover:bg-[#1e3046]/90 px-8 py-3"
        >
          Open Booking Calendar
        </Button>
      </div>
    </div>
  );
};

export default BookingInterface;
