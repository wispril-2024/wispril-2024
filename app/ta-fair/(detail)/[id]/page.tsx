import BG from "/public/ta-fair/BG.png";
import Rectangle from "/public/ta-fair/Rectangle.png";
import coin from "/public/ta-fair/coin.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TA Detail",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-y-hidden py-20">
      <Image
        src={BG}
        alt="bg"
        className="absolute -top-28 w-full opacity-45"
        draggable={false}
      />
      <div className="relative">
        <Image src={Rectangle} alt="Rectangle" draggable={false} />
        <div className="absolute left-1/2 top-[17%] w-full -translate-x-1/2 px-52">
          <div className="flex flex-col items-center gap-4">
            <h1
              className="font-westmeath text-6xl"
              style={{
                WebkitTextStrokeColor: "#F4D38E",
                WebkitTextStrokeWidth: 4,
                WebkitTextFillColor: "#b10300",
              }}
            >
              Judul Tugas Akhir (TA)
            </h1>
            <p className="mt-4 font-cgp text-4xl font-bold text-[#F4D38E]">
              Nama Wisudawan
            </p>
            <p className="font-cgp text-2xl font-bold text-[#F4D38E]">
              NIM - Jurusan Wisudawan
            </p>
          </div>
          <div className="mt-16 flex flex-col gap-4 text-[#F4D38E]">
            <h1 className="font-westmeath text-4xl">
              CERITA DIBALIK PEMBUATAN
            </h1>
            <p className="text-justify font-cgp text-2xl font-bold">
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-4 text-[#F4D38E]">
            <h1 className="font-westmeath text-4xl">ABSTRAK</h1>
            <p className="text-justify font-cgp text-2xl font-bold">
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet
            </p>
          </div>
          <div className="mt-9 flex justify-center font-cgp text-xl font-semibold text-[#e7e7e7] underline">
            <Link href="/ta-fair">Baca Abstrak Lengkap</Link>
          </div>
          <div className="-ml-8 flex items-center justify-center">
            <Image src={coin} alt="Coin" />
            <p className="font-cgp text-4xl font-bold text-[#F4D38E]">0</p>
          </div>
        </div>
      </div>
    </main>
  );
}
