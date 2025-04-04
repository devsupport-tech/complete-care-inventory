
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  tiltEffect?: boolean;
  hoverScale?: boolean;
  hoverRotate?: string;
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0, 
  tiltEffect = false,
  hoverScale = true,
  hoverRotate
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tiltEffect) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setCoords({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCoords({ x: 0, y: 0 });
  };

  // Calculate transform style based on tilt effect, hover state and props
  const getTransformStyle = () => {
    let transform = "translate3d(0, 0, 0)";
    
    if (isVisible) {
      transform = "translate3d(0, 0, 0)";
    } else {
      transform = "translate3d(0, 10px, 0)";
    }
    
    if (tiltEffect && isHovering) {
      transform = `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg)`;
    }
    
    if (hoverScale && isHovering) {
      transform += " scale(1.03)";
    }
    
    if (hoverRotate && isHovering) {
      transform += ` rotate(${hoverRotate})`;
    }
    
    return transform;
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "transform transition-all duration-500 ease-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ transform: getTransformStyle() }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
