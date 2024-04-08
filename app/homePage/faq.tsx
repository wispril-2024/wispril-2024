import { FaqCard } from "./component/faqcard";
import { faqsData } from "./faqdata";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="h-full w-full pt-12 sm:pt-24 md:pt-48 lg:pt-64">
      <div className="relative h-full w-full">
        <Image
          src="/home/mobil.png"
          alt="Background Mobil"
          width={1920}
          height={1080}
          className="absolute -z-10 h-full object-cover opacity-15"
        />

        <div className="z-10 flex h-[calc(100vh-80px)] flex-col gap-12 pt-8 lg:h-[calc(100vh-96px)]">
          <h1 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-5xl xl:text-7xl">
            FAQ
          </h1>
          <div className="z-10 flex flex-col items-center">
            <FaqCard faqs={faqsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
