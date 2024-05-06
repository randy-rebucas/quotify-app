import { z } from "zod";

export type SessionPayload = {};

export const SignupFormSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirm_password: z.string({
      invalid_type_error: "Enter confirm password.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export type AuthFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        confirm_password?: string[];
      };
      message?: string;
    }
  | undefined;

export const UserFormSchema = z.object({
  id: z.string(),
  email: z.string({
    invalid_type_error: "Please enter a email.",
  }),
});

export type UserFormState =
  | {
      errors?: {
        email?: string[];
      };
      message?: string;
    }
  | undefined;

export const AmenityFormSchema = z.object({
  id: z.string(),
  amenity_name: z.string({
    invalid_type_error: "Please enter a amenity name.",
  }),
});

export type AmenityFormState =
  | {
      errors?: {
        amenity_name?: string[];
      };
      message?: string;
    }
  | undefined;

export const CustomSpaceFormSchema = z.object({
  id: z.string(),
  custom_space_name: z.string({
    invalid_type_error: "Please enter a custom space name.",
  }),
  custom_space_group_name: z.string().trim(),
  capacity: z.string().trim(),
});

export type CustomSpaceFormState =
  | {
      errors?: {
        custom_space_name?: string[];
        custom_space_group_name?: string[];
        capacity?: string[];
      };
      message?: string;
    }
  | undefined;