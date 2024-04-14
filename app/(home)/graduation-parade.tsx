import { CarouselSpacing } from "./carousel-home";
import { cardsData } from "./data-parade";
import Image from "next/image";

export default function Graduationparade() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 lg:min-h-[calc(100vh-96px)]">
      <div className="relative h-full w-full">
        {/* Background */}
        <Image
          src="/home/poker-card.png"
          alt="Poker Background"
          width={1920}
          height={1080}
          className="absolute -z-10 h-full object-cover opacity-15"
        />

        {/* Header */}
        <Image
          src="/home/banner-header.png"
          alt="Banner Header"
          width={1920}
          height={1080}
          className="absolute -top-0 z-10 w-full object-cover sm:-top-12 md:-top-24 lg:-top-36 xl:-top-52"
        />

        {/* Footer */}
        <Image
          src="/home/banner-header.png"
          alt="Banner Header"
          width={1920}
          height={1080}
          className="absolute -bottom-0 z-10 w-full rotate-180 object-cover sm:-bottom-12 md:-bottom-24 lg:-bottom-36 xl:-bottom-52"
        />

        <div className="z-10 flex h-full flex-col gap-4 py-32 md:gap-8">
          <h1 className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-5xl xl:text-7xl">
            GRADUATION PARADE
          </h1>
          <CarouselSpacing cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
}
