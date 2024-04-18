"use client";

import CardComponent from "./component/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import * as React from "react";

type CarouselCardData = {
  frameSrc: string;
  photo: string;
};

type CarouselSpacingProps = {
  cardsData: CarouselCardData[];
};

export function CarouselSpacing({ cardsData }: CarouselSpacingProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const isMdScreen = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth >= 768;
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => {
    if (api) {
      const slidesToScroll = isMdScreen() ? 3 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollPrev();
      }
    }
  };

  const scrollNext = () => {
    if (api) {
      const slidesToScroll = isMdScreen() ? 3 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollNext();
      }
    }
  };

  const carouselSize = isMdScreen() ? 3 : 1;

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: false,
      }}
      className="min-w-1/2 z-20 mx-auto max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-5xl"
      data-aos="fade-left"
    >
      <CarouselContent className="-ml-1 ">
        {cardsData.map((card, index) => (
          <CarouselItem key={index} className="p-1 md:basis-1/3">
            <div className="flex flex-row items-center justify-center gap-6">
              <CardComponent frameSrc={card.frameSrc} photo={card.photo} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onClick={scrollPrev}
        className={`absolute -left-4 top-24 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-contain bg-center bg-no-repeat sm:-left-8
           sm:h-14 sm:w-14 md:-left-24 md:top-36 lg:-left-32 lg:top-36 lg:h-16 lg:w-16 ${
             current === 0 ? "opacity-50" : ""
           }`}
      />
      <CarouselNext
        onClick={scrollNext}
        className={`absolute -right-4 top-24 z-10 h-12 w-12 -translate-y-1/2 rotate-180 rounded-full bg-contain bg-center bg-no-repeat sm:-right-8 sm:h-14 sm:w-14 md:-right-24 md:top-36 lg:-right-32 lg:top-36 lg:h-16 lg:w-16 ${
          current >= cardsData.length - carouselSize ? "opacity-50" : ""
        }`}
      />
    </Carousel>
  );
}
