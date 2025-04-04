
import React from "react";
import { cn } from "@/lib/utils";
import { TimelineStepType } from "./types";

interface TimelineNavigationProps {
  steps: TimelineStepType[];
  activeStep: number;
  onStepClick: (index: number) => void;
}

const TimelineNavigation = ({ 
  steps, 
  activeStep, 
  onStepClick 
}: TimelineNavigationProps) => {
  return (
    <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex space-x-2 md:space-x-4">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => onStepClick(index)}
            className={cn(
              "relative px-3 py-2 md:px-4 md:py-2 rounded-full text-sm transition-all duration-300 font-medium flex items-center",
              activeStep === index 
                ? "bg-cbrs-orange text-white shadow-lg scale-110" 
                : "bg-white text-cbrs-blue hover:bg-cbrs-blue/5 hover:text-cbrs-blue"
            )}
          >
            <span className="mr-2">{step.number}</span>
            <span className="hidden md:inline">{step.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimelineNavigation;
