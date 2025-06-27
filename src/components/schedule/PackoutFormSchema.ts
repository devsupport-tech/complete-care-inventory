
import { z } from "zod";

export const packoutFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service type." }),
  city: z.string().min(1, { message: "Please enter your city." }),
  message: z.string().optional(),
  isInsuranceClaim: z.boolean().default(false),
  // Contractor Information
  contractorName: z.string().min(2, { message: "Contractor name must be at least 2 characters." }),
  contractorPhone: z.string().min(10, { message: "Please enter a valid contractor phone number." }),
  contractorEmail: z.string().email({ message: "Invalid contractor email address." }),
  // Claim Information
  claimName: z.string().min(2, { message: "Claim contact name must be at least 2 characters." }),
  claimPhone: z.string().min(10, { message: "Please enter a valid claim contact phone number." }),
  claimEmail: z.string().email({ message: "Invalid claim contact email address." }),
});
