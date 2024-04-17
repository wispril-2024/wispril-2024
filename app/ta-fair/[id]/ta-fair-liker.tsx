"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

interface TaFairLikerProps {
  initialLike: number;
  taFairId: string;
  className?: string;
}

export const TaFairLiker = ({
  initialLike,
  taFairId,
  className,
}: TaFairLikerProps) => {
  // Like state
  const [likes, setLikes] = React.useState(initialLike);
  const [isDisabled, setIsDisabled] = React.useState(false);

  // Handle like click
  const onLikeClick = async () => {
    setIsDisabled(true);
    // Initiate loading toast
    const loadingToast = toast.loading("Loading...", {
      description: "Mohon menunggu...",
      duration: Infinity,
    });

    // Send like request
    const res = await fetch("/api/ta", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taFairId: taFairId,
      }),
    });
    const resJSON = await res.json();

    // Remove loading toast
    toast.dismiss(loadingToast);
    setIsDisabled(false);

    if (!res.ok) {
      toast.error(resJSON.error, {
        description: resJSON.message,
      });
      return;
    }

    // Handle response
    setLikes(likes + 1);
    toast.success("Success", { description: "Berhasil menyukai tugas akhir!" });
  };

  return (
    <button
      disabled={isDisabled}
      className={cn(
        "flex w-fit items-center justify-center gap-2 self-center",
        className
      )}
      onClick={onLikeClick}
    >
      <Heart className="size-7 fill-[#f4d38e] stroke-[#b87d12] stroke-1 lg:size-8" />
      <span className="font-cgp text-lg font-bold text-[#F4D38E] lg:text-2xl">
        {likes}
      </span>
    </button>
  );
};
