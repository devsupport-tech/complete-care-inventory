
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";
import { packoutFormSchema } from "./PackoutFormSchema";

interface ContractorInformationProps {
  control: Control<z.infer<typeof packoutFormSchema>>;
}

const ContractorInformation = ({ control }: ContractorInformationProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[#1e3046]">Contractor Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="contractorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contractor Full Name*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Smith" 
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
          name="contractorPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contractor Phone Number*</FormLabel>
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
        name="contractorEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contractor Email Address*</FormLabel>
            <FormControl>
              <Input 
                placeholder="contractor@example.com" 
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

export default ContractorInformation;
