
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
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
  );
};

export default ErrorDisplay;
