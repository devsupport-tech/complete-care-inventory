import React, { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import TimelineStep from "./timeline/TimelineStep";
import TimelineNavigation from "./timeline/TimelineNavigation";
import ProgressIndicator from "./timeline/ProgressIndicator";
import { TimelineStepType } from "./timeline/types";

const steps: TimelineStepType[] = [
  {
    number: "01",
    title: "Prompt Response",
    description: "Available during business hours with quick appointment scheduling and extended availability for urgent situations. Fast response to minimize further damage."
  },
  {
    number: "02",
    title: "Advanced Inventory",
    description: "Each item is photographed, cataloged, and assessed for damage severity. Our digital inventory system with barcode tracking ensures nothing is lost."
  },
  {
    number: "03",
    title: "Professional Packing",
    description: "Specialized packing materials and techniques with careful handling of fragile and valuable items. Organized labeling system for efficient tracking."
  },
  {
    number: "04",
    title: "Restoration & Cleaning",
    description: "State-of-the-art equipment and techniques specifically for disaster recovery. Specialized treatments for different damage types including water, fire, and mold."
  },
  {
    number: "05",
    title: "Secure Storage",
    description: "Climate-controlled facility with 24-hour security monitoring. Organized inventory management and easy access to your items if needed."
  },
  {
    number: "06",
    title: "Complete Return",
    description: "Careful transportation back to your property with placement of items in their original locations. Final inventory verification with assistance for unpacking."
  }
];

const cardColors = [
  "from-cbrs-softblue to-white",
  "from-[#FDE1D3] to-white",
  "from-[#F2FCE2] to-white",
  "from-[#FEF7CD] to-white",
  "from-[#E5DEFF] to-white",
  "from-[#FFDEE2] to-white",
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      goToNextStep();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isInView, activeStep]);

  const goToNextStep = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setIsTransitioning(false);
    }, 300);
  }, [steps.length]);

  const goToPrevStep = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  }, [steps.length]);

  const handleMouseEnter = (index: number) => {
    setHoveredStep(index);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  const handleStepClick = (index: number) => {
    if (index === activeStep) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStep(index);
      setIsTransitioning(false);
    }, 300);
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || 
          document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrevStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextStep, goToPrevStep]);

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-100/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-cbrs-oceanblue/10 text-cbrs-oceanblue rounded-full text-sm font-medium mb-4">
            Restoration Timeline
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-oceanblue mb-6">
            Restoration Project Timeline
          </h2>
          <p className="text-cbrs-blue max-w-2xl mx-auto text-lg">
            Our professional packout process ensures that your belongings are handled with the utmost care from start to finish.
          </p>
        </div>
        
        {/* Progress indicator */}
        <ProgressIndicator totalSteps={steps.length} currentStep={activeStep} />
        
        {/* Timeline Navigation */}
        <TimelineNavigation 
          steps={steps} 
          activeStep={activeStep} 
          onStepClick={handleStepClick} 
        />
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className={cn(
            "space-y-12 relative transition-opacity duration-300",
            isTransitioning ? "opacity-0" : "opacity-100"
          )}>
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isHovered = hoveredStep === index;
              const isLeft = index % 2 === 0;
              const cardColor = cardColors[index % cardColors.length];
              
              return (
                <TimelineStep
                  key={index}
                  step={step}
                  index={index}
                  isActive={isActive}
                  isHovered={isHovered}
                  isLeft={isLeft}
                  cardColor={cardColor}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStepClick(index)}
                />
              );
            })}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-4">
            <Button 
              variant="orange" 
              size="sm" 
              className="shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px]"
              onClick={goToPrevStep}
            >
              Previous Step
            </Button>
            <Button 
              variant="orange" 
              size="lg" 
              className="shadow-lg transition-all hover:shadow-xl hover:translate-y-[-2px]"
              onClick={scrollToContact}
            >
              Start Your Recovery Process
            </Button>
            <Button 
              variant="orange" 
              size="sm" 
              className="shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px]"
              onClick={goToNextStep}
            >
              Next Step
            </Button>
          </div>
        </div>
      </div>

      <style>
        {`
        /* Hide scrollbar but allow scrolling */
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
        `}
      </style>
    </section>
  );
};

export default Process;
