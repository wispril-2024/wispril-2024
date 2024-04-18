"use client";

import { MenfessForm } from "./menfess-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog";
import { UserPublic } from "@/types/user";
import { X } from "lucide-react";
import Image from "next/image";
import * as React from "react";

type GraduateCardProps = {
  graduate: UserPublic;
  isPriority?: boolean;
};

export function GraduateCard({
  graduate,
  isPriority,
  ...props
}: GraduateCardProps) {
  // Portrait or Landscape
  const portrait =
    typeof window !== "undefined"
      ? window.innerHeight > window.innerWidth
      : false;

  // Dialog open state
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild data-aos="fade-up">
        {/* Card */}
        <button
          {...props}
          className="relative flex aspect-[3/4] h-full w-full overflow-hidden px-4 pb-4 pt-10 "
        >
          {/* Avatar */}
          <Avatar className="absolute inset-4 z-0 size-full rounded-none">
            <AvatarImage
              width={400}
              height={500}
              src={graduate.image ?? ""}
              alt={`Photo Profile ${graduate.name}`}
              className="object-cover object-center"
              sizes="(max-width: 640px) 290px, (max-width: 1024px) 240px, 280px"
            />
            <AvatarFallback className="rounded-none">
              <Image
                src="/components/default-avatar.png"
                alt="Default Avatar"
                className="size-full object-cover object-center"
                width={200}
                height={267}
                sizes="(max-width: 640px) 290px, (max-width: 1024px) 240px, 280px"
              />
            </AvatarFallback>
          </Avatar>

          {/* Card */}
          <Image
            width={400}
            height={500}
            className="absolute inset-0 z-10 h-full w-full"
            src={"/graduates/card.png"}
            alt="photo profile"
            draggable={false}
            priority={isPriority}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 270px, 310px"
          />
          <div className="relative top-[60%] z-20 flex max-h-32 w-full flex-col items-center font-westmeath text-[#F4D38E]">
            <p className="text-lg font-bold lg:text-xl">{graduate.name}</p>
            <p className="text-base font-medium lg:text-lg">{graduate.major}</p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="flex h-full max-h-[90vh] w-full max-w-[95vw] flex-col justify-center border-none bg-transparent px-10 py-20 sm:px-20 sm:py-12 lg:aspect-[19/10] lg:h-full lg:max-h-[60vh] lg:lg:w-auto lg:px-36 lg:py-16">
        {/* Background Image */}
        <Image
          src={`/graduates/card-details-background${
            portrait ? "-rotated" : ""
          }.png`}
          alt="Modal Background Image"
          priority={true} // Preload image, because it's only up in the DOM when the dialog is open
          fill={true}
          sizes="80vw"
          className="z-0"
          draggable={false}
        />

        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center gap-2 overflow-y-auto px-1 sm:max-w-3xl sm:flex-row sm:items-start sm:gap-6 lg:items-center lg:gap-10">
          {/* Close button */}
          <DialogClose asChild>
            <button className="absolute right-10 top-14 sm:right-14 sm:top-10 lg:right-20 lg:top-16">
              <X strokeWidth={3} className="size-7 text-lg text-[#F4D38E]" />
            </button>
          </DialogClose>

          {/* Avatar */}
          <Avatar className="aspect-[3/4] h-auto w-32 rounded-lg border-4 border-[#F4D38E] sm:w-48 lg:w-60">
            <AvatarImage
              width={200}
              height={267}
              src={graduate.image ?? ""}
              alt="Avatar Upload Preview"
              className="object-cover object-center"
            />
            <AvatarFallback className="rounded-none">
              <Image
                src="/components/default-avatar.png"
                alt="Default Avatar"
                className="size-full object-cover object-center"
                width={200}
                height={267}
              />
            </AvatarFallback>
          </Avatar>

          <div className="flex w-full flex-col gap-1 ">
            {/* Identity */}
            <div className="flex w-full flex-col items-center font-cgp text-[#F4D38E] sm:items-start">
              <p className="text-xl font-bold">{graduate.name}</p>
              <p className="text-lg font-bold">{graduate.nim}</p>
              <p className="text-base font-bold">{graduate.major}</p>
            </div>

            {/* Menfess Form */}
            <MenfessForm
              targetUserId={graduate.id}
              onFinishSubmit={() => setIsOpen(false)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
