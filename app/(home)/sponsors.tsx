import { CarouselSpacing } from "./carousel-home";
import SponsorCard from "./component/sponsor-card";
import { cardsData } from "./data-parade";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 xl:min-h-[calc(100vh-96px)]">
      <div className="relative h-full w-full">
        {/* Background */}
        <Image
          src="/home/poker-card.png"
          alt="Poker Background"
          className="absolute -z-10 h-full object-cover opacity-15"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          fill
        />

        {/* Header */}
        <Image
          src="/home/banner-header-top.png"
          alt="Banner Header"
          width={1280}
          height={245}
          className="absolute -top-0 z-10 w-full object-cover sm:-top-12 md:-top-24 lg:-top-36 xl:-top-52"
          data-aos="fade-up"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />

        {/* Footer */}
        <Image
          src="/home/banner-header-bottom.png"
          alt="Banner Header"
          width={1280}
          height={245}
          className="absolute -bottom-0 z-10 w-full object-cover sm:-bottom-12 md:-bottom-24 lg:-bottom-36 xl:-bottom-52"
          data-aos="fade-up"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />

        <div className="z-10 flex h-full flex-col items-center gap-4 py-32 md:gap-8">
          <h1
            data-aos="fade-up"
            className="z-10 bg-gradient-to-r from-[#F4D38E] to-[#EAC050] bg-clip-text text-center font-westmeath text-3xl font-normal text-transparent sm:text-4xl md:text-5xl xl:text-7xl"
          >
            SPONSORS
          </h1>

          <div className="z-10 flex flex-wrap justify-center gap-12 px-32 xl:gap-x-24">
            <SponsorCard data-aos="fade-up" />
            <SponsorCard data-aos="fade-up" />
            <SponsorCard data-aos="fade-up" />
            <SponsorCard data-aos="fade-up" />
            <SponsorCard data-aos="fade-up" />
          </div>
        </div>
      </div>
    </section>
  );
}
