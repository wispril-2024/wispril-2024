import TAFairView from "./components/ta-fair-view";
import BG from "/public/ta-fair/BG.png";
import banner from "/public/ta-fair/banner.png";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TA Fair",
};

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-y-hidden">
      <Image
        src={BG}
        alt="bg"
        className="absolute -top-28 w-full opacity-45"
        draggable={false}
      />
      <div className="relative z-10 mt-14">
        <Image src={banner} alt="Banner" draggable={false} />
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2">
          <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent sm:text-5xl lg:text-7xl">
            TA FAIR
          </h1>
        </div>
        <p
          className="-mt-8 text-center font-westmeath text-4xl text-[#F4D38E]"
          style={{ textShadow: "0px 7px 5px rgba(0, 0, 0, 0.25)" }}
        >
          Jangan Lupa berikan Coin kepada TA Favoritmu!
        </p>
      </div>
      <TAFairView />
    </main>
  );
}
