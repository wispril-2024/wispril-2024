"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { logInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
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
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof logInSchema>) => {
    console.log(values);
  };

  return (
    <div className="mt-32 flex-col font-westmeath md:mt-40 xl:mt-44">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="username"
                    className="font-400 font-400 w-full rounded-xl border-2 border-[#510007]/50 bg-[#F4D692] bg-opacity-10 font-cgp backdrop-blur-sm placeholder:font-cgp md:h-12 xl:h-16"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-400 font-cgp" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    className="font-400 font-400 mt-6 w-full rounded-xl border-2 border-[#510007]/50 bg-[#F4D692] bg-opacity-10 font-cgp backdrop-blur-sm placeholder:font-cgp md:h-12 xl:h-16"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-400 font-cgp" />
              </FormItem>
            )}
          />
          <div className="text-center">
            <button className="relative mt-12 inline-flex items-center justify-center bg-transparent hover:bg-transparent">
              <span className="absolute mb-1 font-westmeath text-lg text-[#ECC786] md:mb-2 md:text-3xl">
                Log In
              </span>
              <Image
                className="w-5/4"
                src="/auth/log-in/log-in-button.png"
                alt="login button"
                width={417}
                height={152}
              />
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LogInForm;
