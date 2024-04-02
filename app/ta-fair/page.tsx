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
    <main className="relative flex min-h-screen flex-col items-center overflow-y-hidden bg-[#440c0c] px-7 sm:px-10 md:px-12 lg:px-16">
      <div className="absolute -top-5 w-full lg:-top-28">
        <Image src={BG} alt="bg" className="opacity-45" draggable={false} />
        <Image src={BG} alt="bg" className="opacity-45" draggable={false} />
      </div>
      <div className="relative z-10 mt-6 flex flex-col items-center lg:mt-14">
        <Image src={banner} alt="Banner" draggable={false} />
        <div className="absolute left-1/2 top-[15%] -translate-x-1/2 sm:top-[18%] lg:top-[22%]">
          <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            TA FAIR
          </h1>
        </div>
        <p
          className="-mt-6 max-w-[263px] text-center font-westmeath text-[15px] text-[#F4D38E] sm:max-w-none sm:text-2xl lg:-mt-8 lg:text-4xl"
          style={{ textShadow: "0px 7px 5px rgba(0, 0, 0, 0.25)" }}
        >
          Jangan Lupa berikan Coin dan Comment kepada TA Favoritmu!
        </p>
      </div>
      <TAFairView />
    </main>
  );
}
