"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { passwordSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const SecurityForm = () => {
  // Form Hooks
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    reset,
    clearErrors,
    formState: { isSubmitting },
  } = form;

  // Handle submit
  const onSubmit = async (values: z.infer<typeof passwordSchema>) => {
    // Initiate loading toast
    const loadingToast = toast.loading("Loading...", {
      description: "Updating profile",
      duration: Infinity,
    });

    // Create form data
    const formData = new FormData();
    formData.append("currentPassword", values.currentPassword);
    formData.append("newPassword", values.newPassword);
    formData.append("confirmNewPassword", values.confirmNewPassword);

    // // Send request
    // const res = await UserAction(formData);

    // // Remove loading toast
    // toast.dismiss(loadingToast);

    // // Error response
    // if (!res.ok) {
    //   toast.error(res.title, { description: res.description });

    //   // Return if there's no error paths
    //   if (!res.errorPaths) return;

    //   // Trigger error focus
    //   res.errorPaths.forEach((item) => {
    //     setError(
    //       item.path as keyof z.infer<typeof passwordSchema>,
    //       { message: item.description },
    //       { shouldFocus: true }
    //     );
    //   });

    //   return;
    // }

    // // Success response

    // // Show success toast
    // toast.success(res.title, { description: res.description });

    // // Refresh router
    // router.refresh();
  };

  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-start font-westmeath text-2xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-4xl">
        SECURITY
      </h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            {/* Current Password */}
            <FormField
              control={control}
              disabled={isSubmitting}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-cgp font-semibold text-[#ECC786]">
                    Current Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-[#975e33] bg-[#7a3e2d] font-cgp text-[#F4D38E] ring-offset-[#4e0000] file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                      placeholder="Current Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* New Password */}
            <FormField
              control={control}
              disabled={isSubmitting}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-cgp font-semibold text-[#ECC786]">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-[#975e33] bg-[#7a3e2d] font-cgp text-[#F4D38E] ring-offset-[#4e0000] file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                      placeholder="New Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={control}
              disabled={isSubmitting}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-cgp font-semibold text-[#ECC786]">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-[#975e33] bg-[#7a3e2d] font-cgp text-[#F4D38E] ring-offset-[#4e0000] file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button
            variant="default"
            size="lg"
            className="w-full bg-[#FFDFA4] font-cgp font-semibold text-[#B87D12] hover:bg-[#FFDFA4]/90"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update Password
          </Button>
        </form>
      </Form>
    </section>
  );
};

export { SecurityForm };