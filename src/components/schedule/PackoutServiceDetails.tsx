
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { Control } from "react-hook-form";
import { z } from "zod";
import { packoutFormSchema } from "./PackoutFormSchema";

interface PackoutServiceDetailsProps {
  control: Control<z.infer<typeof packoutFormSchema>>;
}

const PackoutServiceDetails = ({ control }: PackoutServiceDetailsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[#1e3046]">Service Details</h3>
      
      <FormField
        control={control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Service Type*</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.title}>
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

      <FormField
        control={control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter your city (Houston, Spring, etc.)" 
                {...field} 
                className="bg-white border-gray-200 focus:border-cbrs-blue focus:ring-cbrs-blue"
              />
            </FormControl>
            <FormDescription>
              Which city in the Houston area will the service be performed?
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Please provide details about your packout and content management needs..."
                className="bg-white border-gray-200 focus:border-cbrs-blue focus:ring-cbrs-blue min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Include relevant details about your packout and content management service needs.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default PackoutServiceDetails;
