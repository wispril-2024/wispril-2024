import { GraduateView } from "./graduatesView";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Graduates",
};

const Page = async () => {
  return (
    <main className="flex flex-col items-center justify-center px-16 py-12 sm:p-12 lg:p-24">
      <div className="relative">
        <Image
          src="/graduates/banner.png"
          draggable={false}
          alt="banner"
          width={700}
          height={700}
        />
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2">
          <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-5xl text-transparent sm:text-7xl">
            GRADUATES
          </h1>
        </div>
      </div>
      <p className="text-center font-westmeath text-3xl text-[#F4D38E]">
        Jangan Lupa Kirimkan WisprillFess kepada Temanmu!
      </p>
      <GraduateView />
    </main>
  );
};

export default Page;
