import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RegistrationSchema, registrationSchema } from "@/lib";
import { DatePicker } from "./DatePicker/DatePicker";
import { EmailTextField } from "./EmailTextField/EmailTextField";
import { FullNameTextField } from "./FullNameTextField/FullNameTextField";
import { EventSourceRadioGroup } from "./EventSourceRadioGroup/EventSourceRadioGroup";
import { eventsApi } from "@/api";
import { RegisterUserRequest } from "@/types";
import { APP_PATHS } from "@/router";

export function RegistrationForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  const { id } = useParams();
  const mutation = useMutation({
    mutationFn: (data: RegisterUserRequest) => eventsApi.registerUser(data),
    onError: (error: any) => {
      const description = error?.error || "Failed to register to the event.";
      toast({
        title: "Uh oh! Something went wrong.",
        description,
      });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You are registered to the event.",
      });
      navigate(APP_PATHS.board.path);
    },
  });
  const onSubmit = (values: RegistrationSchema) => {
    const data = {
      fullName: values.fullName,
      email: values.email,
      eventSource: values.eventSource,
      dateOfBirth: new Date(values.dateOfBirth).toISOString(),
    };
    mutation.mutate({
      eventId: id,
      userData: data,
    });
  };

  return (
    <Form {...form}>
      <form className='flex max-w-[25rem] flex-col gap-y-8' onSubmit={form.handleSubmit(onSubmit)}>
        <FullNameTextField control={form.control} />
        <EmailTextField control={form.control} />
        <DatePicker control={form.control} />
        <EventSourceRadioGroup control={form.control} />
        <Button disabled={mutation.isPending} type='submit'>
          {mutation.isPending ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
