
import React from "react";
import { Progress } from "../ui/progress";

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressIndicator = ({ totalSteps, currentStep }: ProgressIndicatorProps) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-xs text-cbrs-muted mb-2">
        <span>Start</span>
        <span>Complete</span>
      </div>
      <Progress 
        value={progressPercentage} 
        className="h-2 bg-gray-100" 
        indicatorClassName="bg-cbrs-orange" 
      />
      <div className="flex justify-center mt-2">
        <span className="text-xs font-medium text-cbrs-blue">
          Step {currentStep + 1} of {totalSteps}
        </span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
