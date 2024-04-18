import * as z from "zod";

// Avatar Image Schema
// Image Constants
export const maxImageSize = 1048576; // 1 MB Limit
export const allowedImagesTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
];
export const avatarSchema = z
  .custom<File>()
  .refine((file) => {
    return file.size <= maxImageSize;
  }, `File size should be less than 1 MB`) // File size
  .refine((file) => {
    return allowedImagesTypes.includes(file.type);
  }, "Only these types are allowed .jpg, .jpeg, .png and .webp"); // File type

// Menfess Schema
export const menfessSchema = z.object({
  userId: z
    .string({ required_error: "userId required" })
    .uuid({ message: "ID is not valid" }),
  sender: z.string().nullable(), // Optinal: anonymous
  message: z
    .string({ required_error: "Menfess message is required" }) // Handle null
    .min(1, "Menfess message is required") // Handle empty string
    .max(280, "Maximum message length is 280 characters long"), // Handle max length
});

// Like TaFair Schema
export const likeTaFairSchema = z.object({
  taFairId: z
    .string({ required_error: "taFairId required" })
    .uuid({ message: "ID is not valid" }),
});

// Update Profile Schema
export const profileSchema = z.object({
  image: z
    .string()
    .url({ message: "Profile url is not valid" }) // URL
    .startsWith("https://res.cloudinary.com/") // Only cloudinary
    .regex(/\.(jpg|jpeg|png|webp)$/, {
      message: "Only .jpg, .jpeg, .png and .webp extensions are allowed",
    })
    .nullable(), // Image extension
});

// Update Password Schema
export const passwordSchema = z
  .object({
    currentPassword: z
      .string({ required_error: "Current password is required" }) // Handle null
      .min(1, "Current password is required"), // Handle empty string
    newPassword: z
      .string({ required_error: "New password is required" }) // Handle null
      .min(1, "New password is required"), // Handle empty string
    confirmNewPassword: z
      .string({
        required_error: "Confirm password is required",
      }) // Handle null
      .min(1, "Confirm password is required"), // Handle empty string
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

// Log In Schema
export const logInSchema = z.object({
  username: z
    .string({ required_error: "Username is required" }) // Handle null
    .min(1, "Username is required"), // Handle empty string
  password: z
    .string({ required_error: "Password is required" }) // Handle null
    .min(1, "Password is required"), // Handle empty string
});
