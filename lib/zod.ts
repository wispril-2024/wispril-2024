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
