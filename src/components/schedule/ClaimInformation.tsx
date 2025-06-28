
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";
import { packoutFormSchema } from "./PackoutFormSchema";

interface ClaimInformationProps {
  control: Control<z.infer<typeof packoutFormSchema>>;
}

const ClaimInformation = ({ control }: ClaimInformationProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[#1e3046]">Claim Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="claimName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Claim Contact Full Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Jane Doe" 
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
          name="claimPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Claim Contact Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(555) 987-6543" 
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
        name="claimEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Claim Contact Email Address</FormLabel>
            <FormControl>
              <Input 
                placeholder="claim@example.com" 
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

export default ClaimInformation;
