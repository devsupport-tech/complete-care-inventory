
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingUrl: string;
}

const BookingModal = ({ isOpen, onClose, bookingUrl }: BookingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-0">
        <div className="w-full h-full">
          <iframe
            src={bookingUrl}
            className="w-full h-full border-0"
            title="Service Booking Form"
            allow="payment"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
