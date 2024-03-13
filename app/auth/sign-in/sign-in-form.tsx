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
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);
  };

  return (
    <div className="mt-20 flex-col font-westmeath md:mt-40">
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
                    className="w-full rounded-xl border-2 border-[#510007]/50 bg-[#F4D692] bg-opacity-10 font-cgp-regular  backdrop-blur-sm placeholder:font-cgp-regular md:h-12 xl:h-16"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-cgp-regular" />
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
                    className="mt-6 w-full rounded-xl border-2 border-[#510007]/50 bg-[#F4D692] bg-opacity-10 font-cgp-regular backdrop-blur-sm placeholder:font-cgp-regular md:h-12 xl:h-16"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-cgp-regular" />
              </FormItem>
            )}
          />
          <div className="text-center">
            <Button className="relative mt-14 bg-transparent hover:bg-transparent md:w-4/5 xl:-bottom-8">
              <span className="absolute mb-1 font-westmeath text-lg text-[#ECC786] md:mb-2 md:text-2xl xl:text-4xl">
                Log In
              </span>
              <Image
                className=""
                src="/auth/sign-in/log-in-button.svg"
                alt="title"
                width={420}
                height={420}
              />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
