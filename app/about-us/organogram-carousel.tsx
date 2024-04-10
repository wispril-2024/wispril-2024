"use client";

import CardComponent from "./organogram-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import type { OrganogramData } from "@/types/organogram";
import * as React from "react";

type CarouselSpacingProps = {
  cardsData: OrganogramData[];
};

export function OrganogramCarousel({ cardsData }: CarouselSpacingProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isPrevHidden, setIsPrevHidden] = React.useState(true);
  const [isNextHidden, setIsNextHidden] = React.useState(true);

  // Snap to the selected scroll
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Set prev and next button visibility on mount
  React.useEffect(() => {
    if (api) {
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  }, [api]);

  // Hanlde how much scroll
  const isSmScreen = () => {
    return window.innerWidth >= 640;
  };

  // Handle prev
  const scrollPrev = () => {
    if (api) {
      // Handle how much scroll
      const slidesToScroll = isSmScreen() ? 2 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollPrev();
      }

      // Set visibility of prev and next button
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  };

  // Handle next
  const scrollNext = () => {
    if (api) {
      // Handle how much scroll
      const slidesToScroll = isSmScreen() ? 2 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollNext();
      }

      // Set visibility of prev and next button
      setIsPrevHidden(!api.canScrollPrev());
      setIsNextHidden(!api.canScrollNext());
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: false,
      }}
      className="z-20 mx-auto flex w-full max-w-xs flex-col gap-6 sm:max-w-md lg:max-w-2xl lg:gap-8"
    >
      {cardsData[current]?.division ? (
        <h1 className="bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-2xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] lg:text-4xl">
          {cardsData[current]?.division}
        </h1>
      ) : (
        <div className="h-8 lg:h-10" /> // Adjust the heights to match your h1 element
      )}

      {/* Content */}
      <CarouselContent>
        {cardsData.map((card, index) => (
          <CarouselItem key={index} className="sm:basis-1/2">
            <div className="flex items-center justify-center">
              <CardComponent
                frameColor={card.frameColor}
                photo={card.photo}
                name={card.name}
                title={card.title}
                batch={card.batch}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous */}
      {!isPrevHidden && (
        <CarouselPrevious
          onClick={scrollPrev}
          className="absolute left-1 top-48 z-10 size-11 rounded-full bg-contain bg-center sm:-left-14 lg:-left-14 lg:top-64 lg:size-14"
        />
      )}

      {/* Next */}
      {!isNextHidden && (
        <CarouselNext
          onClick={scrollNext}
          className="absolute right-1 top-48 z-10 size-11 rounded-full bg-contain bg-center sm:-right-14 lg:-right-14 lg:top-64 lg:size-14"
        />
      )}
    </Carousel>
  );
}
