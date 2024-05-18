import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegistrationSchema } from "@/lib";

interface Props {
  control: Control<RegistrationSchema, any>;
}

export function FullNameTextField({ control }: Props) {
  return (
    <FormField
      control={control}
      name='fullName'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-lg'>Full Name</FormLabel>
          <FormControl>
            <Input {...field} className='text-dark-3 rounded-xl px-4 py-6' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
