
import React from 'react';
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
      <div className="p-8 bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-cbrs-orange transition-colors">
        <div className="text-4xl mb-4">📅</div>
        <h3 className="text-xl font-semibold text-[#1e3046] mb-4">
          Ready to Schedule Your Appointment
        </h3>
        <p className="text-[#1e3046]/70 mb-6">
          Click the button below to select your preferred date and time
        </p>
        
        <button
          data-cal-namespace="cbrs-booking-form"
          data-cal-link="admin/cbrs-booking-form"
          data-cal-origin="https://schedule.cbrsgroup.com"
          data-cal-config='{"layout":"month_view"}'
          className="bg-[#1e3046] hover:bg-[#1e3046]/90 text-white px-8 py-3 rounded-md transition-colors font-medium"
          onClick={onBookingClick}
        >
          Open Booking Calendar
        </button>
      </div>
    </div>
  );
};

export default BookingInterface;
