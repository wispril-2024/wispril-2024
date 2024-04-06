import { TA } from "../lib/model";
import card from "/public/ta-fair/card.png";
import like from "/public/ta-fair/like.png";
import Image from "next/image";
import Link from "next/link";

export function TACard({ taData }: { taData: TA }) {
  return (
    <div className="relative">
      <Link href={`/ta-fair/${taData.id}`}>
        <Image src={card} alt="Card" draggable={false} />
      </Link>
      <div className="absolute left-1/2 top-[28%] flex -translate-x-1/2 flex-col items-center gap-[1px] sm:gap-1 md:top-[29%] md:gap-2 lg:top-[30%] lg:gap-4">
        <h1
          className="hidden font-westmeath text-6xl lg:block"
          style={{
            WebkitTextStrokeColor: "#F4D38E",
            WebkitTextStrokeWidth: 4,
            WebkitTextFillColor: "#b10300",
          }}
        >
          {taData.title}
        </h1>
        <h1
          className="hidden font-westmeath text-4xl md:block lg:hidden lg:text-6xl"
          style={{
            WebkitTextStrokeColor: "#F4D38E",
            WebkitTextStrokeWidth: 2,
            WebkitTextFillColor: "#b10300",
          }}
        >
          {taData.title}
        </h1>
        <h1
          className="block font-westmeath text-[1rem] sm:text-3xl md:hidden"
          style={{
            WebkitTextStrokeColor: "#F4D38E",
            WebkitTextStrokeWidth: 0.5,
            WebkitTextFillColor: "#b10300",
          }}
        >
          {taData.title}
        </h1>
        <p className="font-cgp text-[10px] font-bold text-[#F4D38E] sm:text-xl md:text-2xl lg:text-4xl">
          {taData.name}
        </p>
        <p className="font-cgp text-[7px] font-bold text-[#F4D38E] sm:text-lg lg:text-2xl">
          {taData.program}
        </p>
        <div className="flex items-center gap-1 md:gap-2">
          <Image src={like} alt="like" className="w-2 md:w-8" />
          <p className="font-cgp text-[10px] font-bold text-[#F4D38E] sm:text-xl md:text-2xl lg:text-4xl">
            {taData.like}
          </p>
        </div>
      </div>
    </div>
  );
}
