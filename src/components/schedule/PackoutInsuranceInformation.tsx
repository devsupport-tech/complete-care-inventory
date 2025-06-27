
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Control } from "react-hook-form";
import { z } from "zod";
import { packoutFormSchema } from "./PackoutFormSchema";

interface PackoutInsuranceInformationProps {
  control: Control<z.infer<typeof packoutFormSchema>>;
}

const PackoutInsuranceInformation = ({ control }: PackoutInsuranceInformationProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#1e3046]">Insurance Information</h3>
      
      <FormField
        control={control}
        name="isInsuranceClaim"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>This service is covered by insurance</FormLabel>
              <FormDescription>
                Check this box if you're filing an insurance claim for this service.
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PackoutInsuranceInformation;
