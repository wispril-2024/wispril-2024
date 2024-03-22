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
  frameColor: string;
  photo: string;
  name: string;
  title: string;
  batch: string;
  division: string;
};

type CarouselSpacingProps = {
  cardsData: CarouselCardData[];
};

export function CarouselSpacing({ cardsData }: CarouselSpacingProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const isMdScreen = () => {
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
      const slidesToScroll = isMdScreen() ? 2 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollPrev();
      }
    }
  };

  const scrollNext = () => {
    if (api) {
      const slidesToScroll = isMdScreen() ? 2 : 1;
      for (let i = 0; i < slidesToScroll; i++) {
        api.scrollNext();
      }
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: false,
      }}
      className="min-w-1/2 z-20 mx-auto max-w-2xl md:w-full"
    >
      {cardsData[current]?.division ? (
        <h1 className="mb-12 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent shadow-[#F4D38E] [text-shadow:2px_2px_10px_var(--tw-shadow-color)] md:bottom-32 md:text-5xl lg:bottom-44 lg:text-6xl">
          {cardsData[current]?.division}
        </h1>
      ) : (
        <div className=" h-12 md:h-1 lg:h-16"></div> // Adjust the heights to match your h1 element
      )}
      <CarouselContent className="  -ml-1 ">
        {cardsData.map((card, index) => (
          <CarouselItem key={index} className="p-1 md:basis-1/2">
            <div className="flex items-center justify-center gap-6">
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
      <CarouselPrevious onClick={scrollPrev} />
      <CarouselNext onClick={scrollNext} />
    </Carousel>
  );
}
