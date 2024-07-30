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
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  officeId: z.string({
    invalid_type_error: "Please select a office.",
  }),
});

export const EditUserFormSchema = z.object({
  id: z.string(),
  email: z.string({
    invalid_type_error: "Please enter a email.",
  }),
  officeId: z.string({
    invalid_type_error: "Please select a office.",
  }),
});

export type UserFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        // officeId: string[];
      };
      message?: string;
    }
  | undefined;

export const AmenityFormSchema = z.object({
  id: z.string(),
  amenity_name: z.string({
    invalid_type_error: "Please enter a amenity name.",
  }),
  categoryId: z.string({
    invalid_type_error: "Please select a category.",
  }),
});

export type AmenityFormState =
  | {
      errors?: {
        amenity_name?: string[];
        categoryId?: string[];
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

export const MenuFormSchema = z.object({
  id: z.string(),
  title: z
    .string({
      invalid_type_error: "Please enter a title.",
    })
    .trim(),
  page_handled: z.string().trim(),
});

export type MenuFormState =
  | {
      errors?: {
        title?: string[];
        page_handled?: string[];
      };
      message?: string;
    }
  | undefined;

export const ProjectFormSchema = z.object({
  id: z.string(),
  space_name: z.string().trim(),
  has_floor_plan: z.boolean(),
  has_address: z.boolean(),
  approximate_size: z.number(),
  rentable_area: z.number(),
  is_base_on_head_count: z.string(),
  target_head_count: z.string(),
  average_attendance: z.string(),
  assigned_seat: z.string(),
});

export type ProjectFormState =
  | {
      errors?: {
        space_name?: string[];
      };
      message?: string;
    }
  | undefined;

export const OfficeFormSchema = z.object({
  id: z.string(),
  location: z
    .string({
      invalid_type_error: "Please enter a location.",
    })
    .trim(),
  status: z.string(),
});

export type OfficeFormState =
  | {
      errors?: {
        location?: string[];
        status?: string[];
      };
      message?: string;
    }
  | undefined;

export const AmenityCategoryFormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: "Please enter a name.",
    })
    .trim(),
});

export type AmenityCategoryFormState =
  | {
      errors?: {
        name?: string[];
      };
      message?: string;
    }
  | undefined;

export const RequirementFormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: "Please enter a name.",
    })
    .trim(),
  group_name: z.string().trim(),
  question: z.string(),
  sort: z.string(),
});

export type RequirementFormState =
  | {
      errors?: {
        name?: string[];
        group_name?: string[];
        question?: string[];
        sort?: string[];
      };
      message?: string;
    }
  | undefined;

export const RefinementFormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: "Please enter a name.",
    })
    .trim(),
});

export type RefinementFormState =
  | {
      errors?: {
        name?: string[];
      };
      message?: string;
    }
  | undefined;

export const RefinementLevelFormSchema = z.object({
  id: z.string(),
  level: z.string(),
  unitRate: z.string(),
  description: z.string(),
  image: z.string(),
  refinementId: z.string({
    invalid_type_error: "Please select a refinement.",
  }),
});

export type RefinementLevelFormState =
  | {
      errors?: {
        level?: string[];
        unitRate?: string[];
        description?: string[];
        image?: string[];
        refinementId?: string[];
      };
      message?: string;
    }
  | undefined;

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const MediaLibraryFormSchema = z.object({
  id: z.string(),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export const UpdateMediaLibraryFormSchema = z.object({
  id: z.string(),
  title: z.string(),
  alternativeText: z.string(),
});

export type MediaLibraryFormState =
  | {
      errors?: {
        image?: string[];
        title?: string[];
        alternativeText?: string[];
      };
      message?: string;
    }
  | undefined;

export const RequirementLevelFormSchema = z.object({
  id: z.string(),
  level: z.string(),
  unitRate: z.string(),
  description: z.string(),
  image: z.string(),
  requirementId: z.string({
    invalid_type_error: "Please select a requirement.",
  }),
});

export type RequiermentLevelFormState =
  | {
      errors?: {
        level?: string[];
        unitRate?: string[];
        description?: string[];
        image?: string[];
        requirementId?: string[];
      };
      message?: string;
    }
  | undefined;
