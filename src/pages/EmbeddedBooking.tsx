
import React from "react";
import Header from "@/components/Header";
import ErrorDisplay from "@/components/booking/ErrorDisplay";
import BookingContainer from "@/components/booking/BookingContainer";
import { useCalService } from "@/hooks/useCalService";

const EmbeddedBooking = () => {
  const { calLoaded, error, handleBookingClick } = useCalService();

  if (error) {
    return (
      <>
        <Header />
        <ErrorDisplay error={error} />
      </>
    );
  }

  return (
    <>
      <Header />
      <BookingContainer calLoaded={calLoaded} onBookingClick={handleBookingClick} />
    </>
  );
};

export default EmbeddedBooking;
