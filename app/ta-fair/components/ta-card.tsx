import { TA } from "../lib/model";
import card from "/public/ta-fair/card.png";
import coin from "/public/ta-fair/coin.png";
import Image from "next/image";
import Link from "next/link";

export function TACard({ taData }: { taData: TA }) {
  return (
    <div className="relative">
      <Link href={`/ta-fair/${taData.id}`}>
        <Image src={card} alt="Card" draggable={false} />
      </Link>
      <div className="absolute left-1/2 top-[28%] flex -translate-x-1/2 flex-col items-center gap-[1px] lg:top-[30%] lg:gap-4">
        <h1
          className="hidden font-westmeath text-[1rem] lg:block lg:text-6xl"
          style={{
            WebkitTextStrokeColor: "#F4D38E",
            WebkitTextStrokeWidth: 4,
            WebkitTextFillColor: "#b10300",
          }}
        >
          {taData.title}
        </h1>
        <h1
          className="block font-westmeath text-[1rem] lg:hidden lg:text-6xl"
          style={{
            WebkitTextStrokeColor: "#F4D38E",
            WebkitTextStrokeWidth: 0.5,
            WebkitTextFillColor: "#b10300",
          }}
        >
          {taData.title}
        </h1>
        <p className="font-cgp text-[10px] font-bold text-[#F4D38E] lg:text-4xl">
          {taData.name}
        </p>
        <p className="font-cgp text-[7px] font-bold text-[#F4D38E] lg:text-2xl">
          {taData.program}
        </p>
        <div className="-ml-3 flex items-center lg:-ml-8">
          <Image src={coin} alt="Coin" className="w-[33px] sm:w-full" />
          <p className="font-cgp text-[10px] font-bold text-[#F4D38E] lg:text-4xl">
            {taData.coin}
          </p>
        </div>
      </div>
    </div>
  );
}
