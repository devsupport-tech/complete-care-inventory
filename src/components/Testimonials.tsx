import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";

const testimonials = [
  {
    quote: "After our home flooded, we were devastated about potentially losing family heirlooms and personal treasures. The packout team carefully documented and packed everything, restored what could be saved, and helped us through the entire process. They turned a nightmare into a manageable situation.",
    author: "Michael R.",
    location: "Homeowner, Atlanta GA"
  },
  {
    quote: "The inventory system was impressive—every single item was tracked and accounted for. When everything was returned, it was placed exactly where it belonged. The attention to detail made all the difference.",
    author: "Sarah T.",
    location: "Property Manager, Seattle WA"
  },
  {
    quote: "We had no idea these services were covered by our insurance. The team handled everything directly with our adjuster, and we didn't have to pay anything out-of-pocket beyond our deductible. It was such a relief during an already stressful time.",
    author: "David & Jennifer K.",
    location: "Homeowners, Boston MA"
  },
  {
    quote: "As a contractor who rarely dealt with insurance work, their production management services were invaluable. They helped me understand the insurance process, properly document everything, and ensure I was paid correctly and on time.",
    author: "Robert L.",
    location: "General Contractor, Chicago IL"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setTouchStart(null);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [activeIndex, isAnimating]);

  return (
    <section id="about" className="py-20 bg-cbrs-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-cbrs-blue/10 text-cbrs-blue rounded-full text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cbrs-dark mb-6">
            What Clients in Your Service Area Say
          </h2>
          <p className="text-cbrs-muted max-w-2xl mx-auto">
            Read success stories from real clients in your area who have experienced our professional support services firsthand.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md transition-all hover:scale-110"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-cbrs-dark" />
          </button>
          
          <div 
            className="overflow-hidden relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                    <div className="text-cbrs-orange mb-6">
                      <Quote className="w-12 h-12 opacity-20" />
                    </div>
                    <blockquote className="text-lg md:text-xl text-cbrs-dark mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex flex-col items-start">
                      <p className="font-bold text-cbrs-dark">{testimonial.author}</p>
                      <p className="text-cbrs-muted text-sm flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-cbrs-orange" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md transition-all hover:scale-110"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-cbrs-dark" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index 
                    ? "bg-cbrs-orange w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-cbrs-muted text-sm max-w-lg mx-auto">
              These are just a few of the many success stories from clients in your service area. 
              Contact us today to see how we can help with your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
