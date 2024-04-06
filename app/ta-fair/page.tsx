import TAFairView from "./components/ta-fair-view";
import banner from "/public/ta-fair/banner.png";
import lamp from "/public/ta-fair/lamp.png";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TA Fair",
};

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-y-hidden bg-[#2d0505] px-7 sm:px-10 md:px-12 lg:px-16">
      <div className="absolute -top-5 lg:-top-28">
        <Image src={lamp} alt="lamp" draggable={false} />
      </div>
      <div className="relative z-10 mt-6 flex flex-col items-center lg:mt-14">
        <Image
          src={banner}
          alt="Banner"
          draggable={false}
          width={700}
          height={700}
          className="w-80 lg:w-[512px]"
        />
        <div className="absolute left-1/2 top-[19%] -translate-x-1/2">
          <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:text-5xl">
            TA FAIR
          </h1>
        </div>
        <p className="text-center font-westmeath text-xl text-[#F4D38E] lg:text-3xl">
          Jangan Lupa berikan like dan Comment kepada TA Favoritmu!
        </p>
      </div>
      <TAFairView />
    </main>
  );
}
