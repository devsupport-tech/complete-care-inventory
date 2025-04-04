
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/data/services";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  serviceType: z.string({ required_error: "Please select a service type" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  city: z.string().optional(),
  description: z.string().optional(),
  insuranceCompany: z.string().optional(),
  policyNumber: z.string().optional(),
  hasInsurance: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const ScheduleService = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);
  
  // Set default form values
  const defaultValues: Partial<FormValues> = {
    name: "",
    email: "",
    phone: "",
    serviceType: searchParams.get("service") || "",
    date: undefined,
    time: "",
    city: "",
    description: "",
    insuranceCompany: "",
    policyNumber: "",
    hasInsurance: false,
  };

  // Initialize the form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Watch the hasInsurance field to conditionally show insurance fields
  const hasInsurance = form.watch("hasInsurance");

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Show success toast
    toast({
      title: "Service Scheduled!",
      description: "We'll contact you shortly to confirm your appointment.",
      className: "bg-green-500 text-white",
    });
    
    // Set submitted state to show success screen
    setSubmitted(true);
  };

  // Available time slots
  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  // If form is submitted, show success screen
  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="border-green-100 shadow-lg">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <CardTitle className="text-green-700 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  Scheduling Request Received
                </CardTitle>
                <CardDescription className="text-green-600">
                  We've received your request and will be in touch soon!
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 pb-4">
                <p className="text-gray-700 mb-6">
                  Thank you for scheduling a service with CBRS Group. A member of our team will contact you within 1 business day to confirm your appointment and discuss any additional details.
                </p>
                <div className="rounded-lg bg-gray-50 p-4 border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">What happens next?</h3>
                  <ol className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                      <span>You'll receive an email confirmation of your request</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                      <span>Our team will call you to confirm appointment details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                      <span>We'll send a calendar invitation for your confirmed time</span>
                    </li>
                  </ol>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
                <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
                <Button variant="outline" onClick={() => window.location.reload()}>
                  Schedule Another Service
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-cbrs-blue mb-2">Schedule a Service</h1>
            <p className="text-[#1e3046]/70 max-w-2xl">
              Complete the form below to request service from CBRS Group. Our team will contact you to confirm your appointment.
            </p>
          </div>

          <Card className="border-gray-100 shadow-lg">
            <CardHeader className="border-b border-gray-100 bg-gray-50">
              <CardTitle>Service Request Form</CardTitle>
              <CardDescription>
                Please provide the details of the service you need.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address*</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Service Details */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-lg font-medium">Service Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type*</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select the service you're interested in.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Preferred Date*</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                    date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormDescription>
                              Select your preferred service date.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time">
                                    {field.value ? (
                                      <div className="flex items-center">
                                        <Clock className="mr-2 h-4 w-4" />
                                        {field.value}
                                      </div>
                                    ) : (
                                      "Select a time"
                                    )}
                                  </SelectValue>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Choose your preferred appointment time.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your city (Houston, Spring, etc.)" {...field} />
                          </FormControl>
                          <FormDescription>
                            Which city in the Houston area will the service be performed?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your project or restoration needs..."
                              className="resize-y min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include relevant details about your service needs.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Insurance Information */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-lg font-medium">Insurance Information</h3>
                    
                    <FormField
                      control={form.control}
                      name="hasInsurance"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              This service is covered by insurance
                            </FormLabel>
                            <FormDescription>
                              Check this box if you're filing an insurance claim for this service.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    {hasInsurance && (
                      <div className="space-y-4 animate-fade-in">
                        <FormField
                          control={form.control}
                          name="insuranceCompany"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Insurance Company</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. State Farm, Allstate" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="policyNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Policy/Claim Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Your policy or claim number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Schedule Service
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleService;
