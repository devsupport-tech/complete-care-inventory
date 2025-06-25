
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cbrs-orange mx-auto mb-4"></div>
        <p className="text-[#1e3046]/60">Loading booking system...</p>
        <p className="text-sm text-[#1e3046]/40 mt-2">This may take a few moments</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
