import * as z from "zod";

// Avatar
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
  }, `File size should be less than 1 MB`)
  .refine((file) => {
    return allowedImagesTypes.includes(file.type);
  }, "Only these types are allowed .jpg, .jpeg, .png and .webp");

export const menfessSchema = z.object({
  userId: z
    .string({ required_error: "userId required" })
    .uuid({ message: "ID is not valid" }),
  content: z.string({ required_error: "Content is required" }),
});

export const profileupdateschema = z
  .string({ required_error: "Profile url required" })
  .url({ message: "Profile url is not valid" })
  .regex(/\.(jpg|jpeg|png|webp)$/, {
    message: "Profile url allowe types are .jpg, .jpeg, .png and .webp",
  });

export const passwordschema = z.object({
  currentPassword: z.string({ required_error: "current password required" }),
  newPassword: z.string({ required_error: "new password required" }),
});
