"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { logInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const LogInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof logInSchema>) => {
    // Initiate loading toast
    const loadingToast = toast.loading("Loading...", {
      description: "Logging in...",
      duration: Infinity,
    });

    // Send request
    const res = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });

    // Remove loading toast
    toast.dismiss(loadingToast);

    // Response undefined
    if (!res) {
      toast.error("Error", {
        description: "Please try again later.",
      });
      return;
    }

    // Error response
    if (!res.ok) {
      toast.error("Error", { description: "Incorrect username or password" });

      // Return if there's no error paths
      setError("username", { message: "Incorrect username or password" });
      setError("password", { message: "Incorrect username or password" });

      return;
    }

    // Success response

    // Show success toast
    toast.success("Success", { description: "Welcome to Wisuda April 2024!" });

    // Update PostHog identity
    router.replace("/?phState=identify");

    // Refresh router
    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-7"
      >
        <div className="flex flex-col gap-5">
          {/* Username */}
          <FormField
            control={control}
            name="username"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-cgp font-semibold text-[#ECC786]">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-[#975e33] bg-[#7a3e2d] font-cgp text-[#F4D38E] ring-offset-[#4e0000] file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={control}
            name="password"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-cgp font-semibold text-[#ECC786]">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="border-[#975e33] bg-[#7a3e2d] font-cgp text-[#F4D38E] ring-offset-[#4e0000] file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          className="relative flex aspect-[11/2] w-full items-center justify-center self-center disabled:opacity-50 lg:w-4/5"
        >
          <span className="z-10 font-westmeath text-lg text-[#ECC786] lg:text-2xl">
            Log In
          </span>
          <Image
            className="z-0"
            src="/auth/log-in/log-in-button.png"
            alt="Button Background"
            fill={true}
            sizes="(max-width: 1024px) 320px, 512px"
          />
        </button>
      </form>
    </Form>
  );
};

export default LogInForm;
