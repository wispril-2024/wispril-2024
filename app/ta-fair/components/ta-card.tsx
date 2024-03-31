import { TA } from "../lib/model";
import card from "/public/ta-fair/card.png";
import coin from "/public/ta-fair/coin.png";
import Image from "next/image";
import Link from "next/link";

export function TACard({
  onClick,
  taData,
}: {
  onClick?: () => void;
  taData: TA;
}) {
  return (
    <button className="relative" onClick={onClick}>
      <Image src={card} alt="Card" draggable={false} />
      <div className="absolute left-1/2 top-[30%] flex -translate-x-1/2 flex-col items-center gap-4">
        <h1
          className="font-westmeath text-6xl"
          style={{
            WebkitTextStrokeColor: "#F4D38E",
            WebkitTextStrokeWidth: 4,
            WebkitTextFillColor: "#b10300",
          }}
        >
          {taData.title}
        </h1>
        <p className="font-cgp text-4xl font-bold text-[#F4D38E]">
          {taData.name}
        </p>
        <p className="font-cgp text-2xl font-bold text-[#F4D38E]">
          {taData.program}
        </p>
        <div className="-ml-8 flex items-center">
          <Image src={coin} alt="Coin" />
          <p className="font-cgp text-4xl font-bold text-[#F4D38E]">
            {taData.coin}
          </p>
        </div>
      </div>
    </button>
  );
}
