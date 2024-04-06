import { DummyData } from "../../lib/data";
import BG from "/public/ta-fair/BG.png";
import like from "/public/ta-fair/like.png";
import Rectangle from "/public/ta-fair/rectangle.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TA Detail",
};

export default function Page({ params }: { params: { id: string } }) {
  const data = DummyData.find((d) => d.id === params.id);

  return (
    <main className="relative flex flex-col items-center overflow-y-hidden px-4 py-20 sm:min-h-screen">
      <div className="absolute -top-5 w-full lg:-top-28">
        <Image src={BG} alt="bg" className="opacity-45" draggable={false} />
      </div>
      <div className="relative">
        <Image src={Rectangle} alt="Rectangle" draggable={false} />
        <div className="absolute left-1/2 top-[16%] w-full -translate-x-1/2 px-14 sm:px-24 md:px-36 lg:px-44 xl:top-[17%] xl:px-52">
          <div className="flex flex-col items-center gap-2 lg:gap-3 xl:gap-4">
            <h1
              className="hidden font-westmeath text-6xl lg:block"
              style={{
                WebkitTextStrokeColor: "#F4D38E",
                WebkitTextStrokeWidth: 4,
                WebkitTextFillColor: "#b10300",
              }}
            >
              {data?.title}
            </h1>
            <h1
              className="hidden font-westmeath text-4xl md:block lg:hidden lg:text-6xl"
              style={{
                WebkitTextStrokeColor: "#F4D38E",
                WebkitTextStrokeWidth: 2,
                WebkitTextFillColor: "#b10300",
              }}
            >
              {data?.title}
            </h1>
            <h1
              className="block font-westmeath text-[1rem] sm:text-3xl md:hidden"
              style={{
                WebkitTextStrokeColor: "#F4D38E",
                WebkitTextStrokeWidth: 0.5,
                WebkitTextFillColor: "#b10300",
              }}
            >
              {data?.title}
            </h1>
            <p className="font-cgp text-[9px] font-bold text-[#F4D38E] sm:text-xl md:mt-2 md:text-2xl lg:text-3xl xl:mt-4 xl:text-4xl">
              {data ? data.name : "Nama Wisudawan"}
            </p>
            <p className="font-cgp text-[6.5px] font-bold text-[#F4D38E] sm:text-[12px] md:text-lg lg:text-xl xl:text-2xl">
              {data ? data.nim : "NIM"} -{" "}
              {data ? data.program : "Jurusan Wisudawan"}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-1 text-[#F4D38E] sm:mt-6 lg:mt-8 lg:gap-4 xl:mt-16">
            <h1 className="font-westmeath text-[10.5px] md:text-2xl lg:text-3xl xl:text-4xl">
              CERITA DIBALIK PEMBUATAN
            </h1>
            <p className="text-justify font-cgp text-[6.5px] font-bold sm:text-xs md:text-sm lg:text-xl xl:text-2xl">
              {data?.background}
            </p>
          </div>
          <div className="mt-[5px] flex  flex-col gap-1 text-[#F4D38E] md:mt-3 lg:mt-5 lg:gap-4">
            <h1 className="font-westmeath text-[10.5px] md:text-2xl lg:text-3xl xl:text-4xl">
              ABSTRAK
            </h1>
            <p className="text-justify font-cgp text-[6.5px] font-bold sm:text-xs md:text-sm lg:text-xl xl:text-2xl">
              {data?.abstract}
            </p>
          </div>
          <div className="mt-2 flex justify-center font-cgp text-[5.75px] font-semibold text-[#e7e7e7] underline sm:text-xs md:mt-3 md:text-lg lg:mt-5 xl:mt-9 xl:text-xl">
            <Link href="/ta-fair">Baca Abstrak Lengkap</Link>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1 sm:mt-4 md:mt-6 lg:mt-8 lg:gap-4 xl:mt-12">
            <Image
              src={like}
              alt="like"
              className="w-4 sm:w-6 md:w-8 lg:w-10"
            />
            <p className="font-cgp text-[11px] font-bold text-[#F4D38E] md:text-2xl lg:text-3xl xl:text-4xl">
              0
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
