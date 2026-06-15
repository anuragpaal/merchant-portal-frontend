import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters"),

    email: z
      .email("Please enter a valid email address"),

    mobile: z
      .string()
      .regex(
        /^[6-9]\d{9}$/,
        "Please enter a valid mobile number"
      ),

    password: z
      .string()
      .min(
        8,
        "Password must be at least 8 characters"
      )
      .regex(
        /[A-Z]/,
        "Password must contain one uppercase letter"
      )
      .regex(
        /[a-z]/,
        "Password must contain one lowercase letter"
      )
      .regex(
        /\d/,
        "Password must contain one number"
      )
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain one special character"
      ),

    confirmPassword: z.string(),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );

export type RegisterSchemaType =
  z.infer<typeof registerSchema>;