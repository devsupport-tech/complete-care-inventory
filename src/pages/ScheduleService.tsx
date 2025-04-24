
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useSearchParams } from "react-router-dom";
import { services } from "@/data/services";

// Updated form schema without preferred date and time
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().optional(),
  message: z.string().optional()
});

const ScheduleService = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');

  // Determine the default service based on URL parameter
  const defaultService = serviceId 
    ? services.find(service => service.id === serviceId)?.title 
    : '';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService || "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Simulate form submission
    console.log("Form submitted:", values);
    
    // Show success toast
    toast({
      title: "Service Request Submitted",
      description: "We'll contact you shortly to confirm your service request.",
      variant: "default"
    });

    // Reset form after submission
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e3046] mb-4">
          Schedule a Service
        </h1>
        <p className="text-[#1e3046]/80 max-w-xl mx-auto">
          Fill out the form below, and our team will reach out to discuss your specific restoration needs.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cbrs-blue focus:ring-cbrs-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="johndoe@example.com" 
                      type="email"
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cbrs-blue focus:ring-cbrs-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(123) 456-7890" 
                      type="tel"
                      {...field} 
                      className="bg-white border-gray-200 focus:border-cbrs-blue focus:ring-cbrs-blue"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Select Service" 
                      {...field} 
                      readOnly
                      className="bg-gray-50 border-gray-200 cursor-default"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Provide any additional information about your service request..."
                    {...field}
                    className="bg-white border-gray-200 focus:border-cbrs-blue focus:ring-cbrs-blue min-h-[120px]"
                  />
                </FormControl>
                <FormDescription>
                  Optional: Help us understand your specific needs better.
                </FormDescription>
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            variant="orange" 
            className="w-full py-6 text-base"
          >
            Submit Service Request
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ScheduleService;
