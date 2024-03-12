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

  return (
    <div className="flex-col font-westmeath mt-20 md:mt-40">
      <Form {...form}>
        <form>
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="username"
                    className="mb-6 w-full  text-red ring-offset-[#1C1C1C] md:h-12 xl:h-16"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
                    className="w-full z-10 text-black ring-offset-[#1C1C1C] md:h-12 xl:h-16"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <div className="text-center">
          <Button className="relative xl:-bottom-8 mt-14 bg-transparent hover:bg-transparent md:w-4/5">
            <h1 className="absolute font-westmeath text-[#ECC786] text-lg mb-1 md:text-2xl md:mb-2 xl:text-4xl">Log In</h1>
            <Image
              className=""
              src="/log in button.svg"
              alt="title"
              width={420}
              height={420}
            />

          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
