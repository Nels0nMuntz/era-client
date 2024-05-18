import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RegistrationSchema, registrationSchema } from "@/lib";
import { DatePicker } from "./DatePicker/DatePicker";
import { EmailTextField } from "./EmailTextField/EmailTextField";
import { FullNameTextField } from "./FullNameTextField/FullNameTextField";
import { EventSourceRadioGroup } from "./EventSourceRadioGroup/EventSourceRadioGroup";

export function RegistrationForm() {
  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  const onSubmit = (values: RegistrationSchema) => {
    console.log({ 
      ...values,
      dateOfBirth: new Date(values.dateOfBirth).toISOString()
     });
  };

  return (
    <Form {...form}>
      <form className='flex max-w-[25rem] flex-col gap-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <FullNameTextField control={form.control} />
        <EmailTextField control={form.control} />
        <DatePicker control={form.control} />
        <EventSourceRadioGroup control={form.control} />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
