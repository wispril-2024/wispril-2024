import { DummyData } from "../../lib/data";
import BG from "/public/ta-fair/BG.png";
import coin from "/public/ta-fair/coin.png";
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
        <div className="absolute left-1/2 top-[17%] w-full -translate-x-1/2 px-14 xl:px-52">
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h1
              className="hidden font-westmeath text-6xl lg:block"
              style={{
                WebkitTextStrokeColor: "#F4D38E",
                WebkitTextStrokeWidth: 4,
                WebkitTextFillColor: "#b10300",
              }}
            >
              {data ? data.title : "Judul Tugas Akhir (TA)"}
            </h1>
            <h1
              className="block font-westmeath text-[1rem] lg:hidden lg:text-6xl"
              style={{
                WebkitTextStrokeColor: "#F4D38E",
                WebkitTextStrokeWidth: 0.5,
                WebkitTextFillColor: "#b10300",
              }}
            >
              {data?.title}
            </h1>
            <p className="font-cgp text-[9px] font-bold text-[#F4D38E] lg:mt-4 lg:text-4xl">
              {data ? data.name : "Nama Wisudawan"}
            </p>
            <p className="font-cgp text-[6.5px] font-bold text-[#F4D38E] lg:text-2xl">
              {data ? data.nim : "NIM"} -{" "}
              {data ? data.program : "Jurusan Wisudawan"}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-1 text-[#F4D38E] lg:mt-16 lg:gap-4">
            <h1 className="font-westmeath text-[10.5px] lg:text-4xl">
              CERITA DIBALIK PEMBUATAN
            </h1>
            <p className="text-justify font-cgp text-[6.5px] font-bold lg:text-2xl">
              {data?.background}
            </p>
          </div>
          <div className="mt-[5px] flex flex-col gap-1 text-[#F4D38E] lg:mt-5 lg:gap-4">
            <h1 className="font-westmeath text-[10.5px] lg:text-4xl">
              ABSTRAK
            </h1>
            <p className="text-justify font-cgp text-[6.5px] font-bold lg:text-2xl">
              {data?.abstract}
            </p>
          </div>
          <div className="mt-2 flex justify-center font-cgp text-[5.75px] font-semibold text-[#e7e7e7] underline lg:mt-9 lg:text-xl">
            <Link href="/ta-fair">Baca Abstrak Lengkap</Link>
          </div>
          <div className="-ml-3 mt-4 flex items-center justify-center sm:mt-0 lg:-ml-8">
            <Image
              src={coin}
              alt="Coin"
              className="w-[38px] sm:w-[60px] md:w-[90px] lg:w-[121px]"
            />
            <p className="font-cgp text-[11px] font-bold text-[#F4D38E] lg:text-4xl">
              0
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
