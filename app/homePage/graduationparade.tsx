import { CarouselSpacing } from "./carouselhome";
import CardComponent from "./component/card";
import { cardsData } from "./dataparade";
import Image from "next/image";

export default function Graduationparade() {
  return (
    <section>
      <div>
        <Image
          src="/home/bannerUp1.png"
          alt="bannerUp1"
          layout="contain"
          width={200}
          height={10}
          className="w-full"
        />
        <h1 className="font-wesmeath mt-8 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-6xl xl:text-8xl">
          {" "}
          GRADUATION PARADE
        </h1>
        <CarouselSpacing cardsData={cardsData} />
        <div className="mt-16"></div>
        <Image
          src="/home/bannerDown1.png"
          alt="bannerDown1"
          layout="contain"
          width={200}
          height={10}
          className="w-full"
        />
      </div>
    </section>
  );
}
