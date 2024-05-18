import * as z from "zod";

const eventSourceEnum = z.enum(["Social media", "Friends", "Found myself"]);

export const registrationSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  dateOfBirth: z.date({
    required_error: "Please select a date",
  }),
  eventSource: eventSourceEnum.nullable(),
});

export interface RegistrationSchema extends z.infer<typeof registrationSchema> {}
