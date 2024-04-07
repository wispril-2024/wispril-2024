import { TA } from "../lib/model";
import card from "/public/ta-fair/card.png";
import like from "/public/ta-fair/like.png";
import Image from "next/image";
import Link from "next/link";

export function TACard({ taData }: { taData: TA }) {
  return (
    <div className="relative w-full">
      <Link href={`/ta-fair/${taData.id}`} className="flex justify-center">
        <Image
          src={card}
          alt="Card"
          draggable={false}
          className="max-h-[400px] min-h-[230px] object-fill"
        />
        <div className="absolute left-1/2 top-[28%] flex w-full -translate-x-1/2 flex-col items-center gap-[1px] px-3 text-center sm:gap-1 md:top-[29%] md:gap-2 lg:top-[30%] lg:gap-4">
          <h1
            className="hidden font-westmeath text-2xl md:block lg:text-4xl"
            style={{
              WebkitTextStrokeColor: "#F4D38E",
              WebkitTextStrokeWidth: 2,
              WebkitTextFillColor: "#b10300",
            }}
          >
            {taData.title}
          </h1>
          <h1
            className="block font-westmeath text-xl md:hidden"
            style={{
              WebkitTextStrokeColor: "#F4D38E",
              WebkitTextStrokeWidth: 1,
              WebkitTextFillColor: "#b10300",
            }}
          >
            {taData.title}
          </h1>
          <p className="font-cgp text-base font-bold text-[#F4D38E] md:text-xl lg:text-2xl">
            {taData.name}
          </p>
          <p className="font-cgp text-sm font-bold text-[#F4D38E] md:text-base lg:text-xl">
            {taData.program}
          </p>
          <div className="mt-1 flex items-center gap-1 md:mt-2 md:gap-2 lg:mt-4">
            <Image src={like} alt="like" className="w-4 md:w-8" />
            <p className="font-cgp text-base font-bold text-[#F4D38E] sm:text-xl md:text-2xl lg:text-4xl">
              {taData.like}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
