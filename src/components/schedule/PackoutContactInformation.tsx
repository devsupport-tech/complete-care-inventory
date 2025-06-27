
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";
import { packoutFormSchema } from "./PackoutFormSchema";

interface PackoutContactInformationProps {
  control: Control<z.infer<typeof packoutFormSchema>>;
}

const PackoutContactInformation = ({ control }: PackoutContactInformationProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[#1e3046]">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name*</FormLabel>
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
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(555) 123-4567" 
                  type="tel"
                  {...field} 
                  className="bg-white border-gray-200 focus:border-cbrs-blue focus:ring-cbrs-blue"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address*</FormLabel>
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
  );
};

export default PackoutContactInformation;
