"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { avatarSchema, profileSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Trash2 } from "lucide-react";
import { type Session } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

interface SecurityFormProps {
  session: Session;
}

const ProfileForm = ({ session }: SecurityFormProps) => {
  // Router
  const router = useRouter();

  // Session update hook
  const { update } = useSession();

  // File input ref
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Form Hooks
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      image: session.image,
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    reset,
    clearErrors,
    formState: { isSubmitting, isDirty },
  } = form;

  // Image value
  const uploadedAvatarUrl = form.getValues("image") ?? "";

  // Image Upload Loading State
  const [isUploadingImage, setIsUploadingImage] = React.useState(false);

  const onUploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Reset previous errors
    clearErrors("image");

    // If no files, return
    const file = e.target.files![0];
    if (!file) return;

    // Validate image
    const zodResult = avatarSchema.safeParse(file);
    if (!zodResult.success) {
      // Set error to first error message
      setError("image", { message: zodResult.error.errors[0].message });
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append("file", file);

    // Set loading state
    setIsUploadingImage(true);
    const loadingToast = toast.loading("Loading...", {
      description: "Uploading image",
      duration: Infinity,
    });

    // Upload file
    const res = await fetch("/api/user/avatar", {
      method: "POST",
      body: formData,
    });
    const resJSON = await res.json();
    const imageUrl = resJSON.avatar_url;

    // Reset loading state
    toast.dismiss(loadingToast);
    setIsUploadingImage(false);

    // If upload fails
    if (!imageUrl) {
      toast.error("Error", { description: "Failed to upload image" });
      return;
    }

    // Upload succeeded
    toast.success("Success", { description: "Image uploaded successfully" });
    setValue("image", imageUrl, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  // Form Submit Handler (After validated with zod)
  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    // Initiate loading toast
    const loadingToast = toast.loading("Loading...", {
      description: "Updating profile",
      duration: Infinity,
    });

    // Create form data
    const formData = new FormData();
    values.image && formData.append("image", values.image);

    // Send request
    const res = await fetch("/api/user/profile", {
      method: "PUT",
      body: formData,
    });
    const resJSON = await res.json();

    // Remove loading toast
    toast.dismiss(loadingToast);

    // Error response
    if (!res.ok) {
      toast.error(resJSON.error, { description: resJSON.message });
      return;
    }

    // Success response
    // Show success toast
    toast.success("Success", { description: "Profile successfully updated." });

    // Update session
    await update();

    // Reset form
    reset({ image: values.image });

    // Update PostHog identity
    router.replace("/dashboard/settings?phState=identify");

    // Refresh router
    router.refresh();
  };

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-start font-westmeath text-2xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-4xl">
        PROFILE
      </h2>

      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center">
        {/* Avatar Preview */}
        <button
          type="button"
          disabled={isSubmitting || isUploadingImage}
          onClick={() =>
            !isSubmitting && !isUploadingImage && fileInputRef!.current!.click()
          }
        >
          <Avatar className="aspect-[3/4] h-auto w-32 rounded-lg border-2 border-[#F4D38E] sm:w-40 lg:w-44">
            <AvatarImage
              width={200}
              height={267}
              src={uploadedAvatarUrl}
              alt="Avatar Upload Preview"
              className="object-cover object-center"
            />
            <AvatarFallback className="rounded-none">
              <Image
                src="/dashboard/default-avatar.png"
                alt="Default Avatar"
                className="size-full object-cover object-center"
                width={200}
                height={267}
              />
            </AvatarFallback>
          </Avatar>
        </button>

        {/* Data */}
        <div className="flex w-full flex-col gap-3">
          <div>
            {/* Username */}
            <p className="font-cgp text-base font-semibold text-[#F4D38E] lg:text-lg">
              @{session.username}
            </p>

            {/* Name */}
            <p className="font-cgp text-xl font-bold text-[#F4D38E] lg:text-2xl">
              {session.name}
            </p>

            {/* Major */}
            <p className="font-cgp text-lg font-semibold text-[#F4D38E] lg:text-xl">
              {session.major}
            </p>
          </div>

          {/* Update Photo */}
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Profile Picture */}
              <FormField
                control={control}
                name="image"
                render={({ field: { onChange }, ...field }) => {
                  return (
                    <FormItem>
                      <div className="flex flex-row gap-4">
                        {/* File Upload */}
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            disabled={isSubmitting || isUploadingImage}
                            onChange={onUploadAvatar}
                            className="border-[#975e33] bg-[#7a3e2d] font-cgp font-semibold text-[#F4D38E] ring-offset-[#4e0000] file:font-cgp file:font-semibold file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                            {...field}
                          />
                        </FormControl>

                        {/* File Delete */}
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="flex-none"
                          disabled={
                            isSubmitting ||
                            isUploadingImage ||
                            !uploadedAvatarUrl
                          }
                          onClick={() =>
                            setValue("image", null, {
                              shouldDirty: true,
                              shouldValidate: true,
                            })
                          }
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              {/* Submit Button */}
              <Button
                variant="default"
                size="lg"
                className="w-full bg-[#FFDFA4] font-cgp font-semibold text-[#B87D12] hover:bg-[#FFDFA4]/90"
                type="submit"
                disabled={isSubmitting || isUploadingImage || !isDirty}
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Update Profile
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export { ProfileForm };
