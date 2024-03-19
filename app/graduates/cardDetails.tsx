import { X } from "lucide-react";
import Image from "next/image";

const containerWidth = 2596;
const containerHeight = 1362;
const containerRatio = containerWidth / containerHeight;

type CardDetailsProp = {
  onClose?: () => void;
};

export function CardDetails({ onClose = () => {} }: CardDetailsProp) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center p-10 text-[#F4D38E]">
      <div className="absolute h-screen w-screen bg-black opacity-90"></div>
      <div
        className="relative z-[51] flex"
        style={{ aspectRatio: containerRatio }}
      >
        <Image
          src={"/graduates/card-details-background.png"}
          alt=""
          width={containerWidth}
          height={containerHeight}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center gap-5 overflow-hidden px-[20%] pb-[13%] pt-[7%]">
          <button
            onClick={onClose}
            className="absolute left-[7%] top-[10%] -translate-x-1/2 -translate-y-1/2"
          >
            <X strokeWidth={5} className="text-lg" />
          </button>
          <img
            className="max-h-full object-scale-down"
            src="/graduates/placeholder.png"
          />
          <div className="flex h-full flex-grow flex-col gap-3 overflow-x-scroll p-1">
            <div className="font-westmeath">
              <p className="text-3xl">Biodata Wisudawan</p>
              <p className="text-2xl">Nama Wisudawan</p>
              <p>NIM Wisudawan</p>
              <p>Nama Jurusan Wisudawan</p>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <input
                className="rounded-xl border-2 border-[#F4D38E] bg-[#82080A] px-2 py-1 font-westmeath placeholder-[#F4D38E]"
                placeholder="Anonymous"
                spellCheck={false}
              />
              <input
                className="rounded-xl border-2 border-[#F4D38E] bg-[#82080A] px-2 py-1 font-westmeath placeholder-[#F4D38E]"
                placeholder="Write menfess to Wisudawan"
                spellCheck={false}
              />
              <button className="self-start rounded-xl bg-[#FFDFA4] px-6 py-1 font-westmeath text-[#B87D12]">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
