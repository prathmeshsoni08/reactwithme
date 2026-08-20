import { z } from "zod";

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),

    email: z.string().email("Please enter a valid email address"),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),

    terms: z.boolean().refine((value) => value === true, {
      message: "You must accept the Terms and Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default signupSchema;
