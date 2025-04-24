
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service type." }),
  preferredDate: z.date({
    required_error: "Please select a preferred date.",
  }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time." }),
  city: z.string().min(1, { message: "Please enter your city." }),
  message: z.string().optional(),
  isInsuranceClaim: z.boolean().default(false),
});
