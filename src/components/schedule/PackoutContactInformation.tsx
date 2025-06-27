
import { Control } from "react-hook-form";
import { z } from "zod";
import { packoutFormSchema } from "./PackoutFormSchema";

interface PackoutContactInformationProps {
  control: Control<z.infer<typeof packoutFormSchema>>;
}

const PackoutContactInformation = ({ control }: PackoutContactInformationProps) => {
  // Return empty div - contact information is not needed for packout services
  return <div></div>;
};

export default PackoutContactInformation;
