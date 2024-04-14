import type { TugasAkhir } from "@/types/ta";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TaFairCard({ taFairData }: { taFairData: TugasAkhir }) {
  return (
    <Link
      href={`/ta-fair/${taFairData.id}`}
      className="relative flex h-full w-full"
    >
      <article className="flex h-full w-full px-5 pb-5 pt-10 sm:px-7 lg:px-10 lg:pb-10 lg:pt-28">
        {/* Card background */}
        <Image
          src="/ta-fair/card.jpg"
          alt="Card"
          draggable={false}
          fill={true}
          className="z-0 object-fill"
        />

        {/* Texts */}
        <div className="z-10 flex w-full flex-col items-center gap-1 text-center lg:gap-2">
          {/* Title Mobile */}
          <p
            className="font-westmeath text-xl lg:hidden"
            style={{
              WebkitTextStrokeColor: "#F4D38E",
              WebkitTextStrokeWidth: 1,
              WebkitTextFillColor: "#b10300",
            }}
          >
            {taFairData.title}
          </p>

          {/* Title Desktop */}
          <h3
            className="hidden lg:block lg:font-westmeath lg:text-3xl"
            style={{
              WebkitTextStrokeColor: "#F4D38E",
              WebkitTextStrokeWidth: 2,
              WebkitTextFillColor: "#b10300",
            }}
          >
            {taFairData.title}
          </h3>

          {/* Author name */}
          <p className="font-cgp text-base font-bold text-[#F4D38E] lg:text-xl">
            {taFairData.user.name}
          </p>

          {/* Author major */}
          <p className="font-cgp text-sm font-bold text-[#F4D38E] lg:text-lg">
            {taFairData.user.major}
          </p>

          {/* Like count */}
          <div className="flex flex-row items-center justify-center gap-2">
            <Heart className="size-5 fill-[#f4d38e] stroke-[#b87d12] stroke-1 lg:size-7" />
            <p className="font-cgp text-sm font-bold text-[#F4D38E] lg:text-lg lg:leading-none">
              {taFairData.likes}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
