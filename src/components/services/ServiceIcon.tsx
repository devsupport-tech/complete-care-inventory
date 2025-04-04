
import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  icon: React.ComponentType<any>;
  colorClass: string;
}

const ServiceIcon = ({ icon: Icon, colorClass }: ServiceIconProps) => {
  return <Icon className={`w-12 h-12 ${colorClass}`} />;
};

export default ServiceIcon;
