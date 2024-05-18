import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { RegistrationSchema } from "@/lib";
import { Control } from "react-hook-form";

interface Props {
  control: Control<RegistrationSchema, any>;
}

export function EventSourceRadioGroup({control}: Props) {
  return (
    <FormField
      control={control}
      name='eventSource'
      render={({ field }) => (
        <FormItem className='space-y-3'>
          <FormLabel className='text-lg'>Where did you here about this event ?</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex space-x-1'
            >
              <FormItem className='flex items-center space-x-3 space-y-0'>
                <FormControl>
                  <RadioGroupItem value='Social media' />
                </FormControl>
                <FormLabel className='font-normal'>Social media</FormLabel>
              </FormItem>
              <FormItem className='flex items-center space-x-3 space-y-0'>
                <FormControl>
                  <RadioGroupItem value='Friends' /> 
                </FormControl>
                <FormLabel className='font-normal'>Friends</FormLabel>
              </FormItem>
              <FormItem className='flex items-center space-x-3 space-y-0'>
                <FormControl>
                  <RadioGroupItem value='Found myself' />
                </FormControl>
                <FormLabel className='font-normal'>Found myself</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
