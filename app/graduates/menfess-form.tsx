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
import { menfessSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

interface MenfessFormProps {
  targetUserId: string; // Target
  onFinishSubmit?: () => void;
}

const MenfessForm = ({ targetUserId, onFinishSubmit }: MenfessFormProps) => {
  // Form Hooks
  const form = useForm<z.infer<typeof menfessSchema>>({
    resolver: zodResolver(menfessSchema),
    defaultValues: {
      userId: targetUserId,
      sender: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  // Handle submit
  const onSubmit = async (values: z.infer<typeof menfessSchema>) => {
    // Initiate loading toast
    const loadingToast = toast.loading("Loading...", {
      description: "Mohon menunggu...",
      duration: Infinity,
    });

    // Create form data
    const formData = new FormData();
    values.sender && formData.append("sender", values.sender);
    formData.append("message", values.message);
    formData.append("userId", values.userId);

    // Send request
    const res = await fetch("/api/menfess", {
      method: "POST",
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
    toast.success("Success", { description: "Menfess berhasil dikirim!" });

    // Call onFinishSubmit callback
    onFinishSubmit?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {/* From (sender) */}
          <FormField
            control={control}
            disabled={isSubmitting}
            name="sender"
            render={({ field: { value, onChange }, ...field }) => (
              <FormItem>
                <FormLabel className="font-cgp font-semibold text-[#ECC786]">
                  From
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    value={value ?? ""}
                    onChange={(e) => onChange(e.target.value)}
                    className="border-[#975e33] bg-[#7a3e2d] font-cgp text-[#F4D38E] ring-offset-[#4e0000] file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                    placeholder="From (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={control}
            disabled={isSubmitting}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-cgp font-semibold text-[#ECC786]">
                  Message
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="border-[#975e33] bg-[#7a3e2d] font-cgp text-[#F4D38E] ring-offset-[#4e0000] file:text-[#F4D38E] placeholder:text-[#b87d12] focus-visible:ring-[#f4d38e]"
                    placeholder="Message"
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
          className="w-full border-2 border-[#b87d12] bg-[#f4d38e] font-cgp font-semibold text-[#b87d12] ring-offset-[#4e0000] hover:bg-[#FFDFA4]/90 focus-visible:ring-[#f4d38e]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Menfess
        </Button>
      </form>
    </Form>
  );
};

export { MenfessForm };
