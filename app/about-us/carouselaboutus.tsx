import CardComponent from "./component/card";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";

type CarouselCardData = {
  frameColor: string;
  // "yellow" or "red"
  photo: string;
  name: string;
  title: string;
  batch: string;
};

type CarouselSpacingProps = {
  cardsData: CarouselCardData[];
};
export function CarouselSpacing({ cardsData }: CarouselSpacingProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="min-w-1/2  mx-auto  max-w-2xl md:w-full"
    >
      <CarouselContent className="-ml-1">
        {cardsData.map((card, index) => (
          <CarouselItem key={index} className=" p-1 md:basis-1/2">
            <div className="flex items-center justify-center gap-6 ">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
// {cardsData.map(
//   (card, index) =>
//     // Render a CarouselItem only for odd indexes or the first item
//     (index % 2 === 0 || index === 0) && (
//       <CarouselItem key={index} className="pl-1">
//         <div
//           className={`flex items-center  gap-6  md:w-full ${
//             cardsData[index + 1] ? " flex-row " : "flex-row"
//           }`}
//         >
//           {/* Always render the first CardComponent */}
// <CardComponent
//   frameColor={card.frameColor}
//   photo={card.photo}
//   name={card.name}
//   title={card.title}
//   batch={card.batch}
// />
//           {/* Render the second CardComponent if it exists */}
//           {cardsData[index + 1] && (
//             <CardComponent
//               frameColor={cardsData[index + 1].frameColor}
//               photo={cardsData[index + 1].photo}
//               name={cardsData[index + 1].name}
//               title={cardsData[index + 1].title}
//               batch={cardsData[index + 1].batch}
//             />
//           )}
//         </div>
//       </CarouselItem>
//     )
// )}
