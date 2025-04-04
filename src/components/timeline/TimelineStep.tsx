
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { TimelineStepType } from "./types";

interface TimelineStepProps {
  step: TimelineStepType;
  index: number;
  isActive: boolean;
  isHovered: boolean;
  isLeft: boolean;
  cardColor: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const TimelineStep = ({
  step,
  index,
  isActive,
  isHovered,
  isLeft,
  cardColor,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: TimelineStepProps) => {
  return (
    <div 
      className={cn(
        "relative md:grid md:grid-cols-2 items-center",
        isLeft ? "" : "md:grid-flow-dense"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Circle Indicator */}
      <div 
        className={cn(
          "hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 transition-all duration-500",
          isActive || isHovered ? "bg-cbrs-orange scale-125" : "bg-white border border-gray-200"
        )}
      >
        <span 
          className={cn(
            "font-bold text-sm",
            isActive || isHovered ? "text-white" : "text-cbrs-muted"
          )}
        >
          {index + 1}
        </span>
      </div>
      
      {/* Content Box */}
      <div 
        className={cn(
          "md:col-span-1 transition-all duration-500 transform cursor-pointer",
          isLeft ? "md:text-right md:pr-12" : "md:pl-12",
          isActive ? "scale-105" : isHovered ? "scale-103" : "scale-100 opacity-80"
        )}
      >
        <div 
          className={cn(
            "rounded-xl p-6 shadow-md hover:shadow-lg transition-all bg-gradient-to-br",
            cardColor,
            isActive || isHovered ? "rotate-0" : isLeft ? "-rotate-1" : "rotate-1",
            isActive || isHovered ? "border-cbrs-orange" : "border-transparent",
            "border-2",
            isActive ? "animate-fade-in" : ""
          )}
        >
          <div 
            className={cn(
              "text-3xl font-bold",
              isActive || isHovered ? "text-cbrs-orange" : "text-gray-200"
            )}
          >
            {step.number}
          </div>
          <h3 className="text-xl font-bold text-cbrs-oceanblue mt-2 mb-3">{step.title}</h3>
          <p className="text-cbrs-blue/80">{step.description}</p>
          
          {(isActive || isHovered) && (
            <div className={cn(
              "mt-4 flex",
              isLeft ? "justify-end" : "justify-start"
            )}>
              <Button 
                variant="orange" 
                size="sm" 
                className="opacity-0 animate-fade-in"
              >
                Learn More <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Empty Space for Alternating Layout */}
      <div className="hidden md:block md:col-span-1"></div>
    </div>
  );
};

export default TimelineStep;
