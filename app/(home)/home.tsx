import Description from "./description";
import Faq from "./faq";
import Graduationparade from "./graduation-parade";
import MainSection from "./main-section";
import Sponsors from "./sponsors";
import Tanggallokasi from "./tanggal-lokasi";
import Timeline from "./timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007] opacity-60"></div>

      <div className="-z-10">
        {/* Hero */}
        <section className="h-full w-full">
          <div className="relative flex h-full w-full flex-col sm:gap-24 sm:pb-48">
            <Image
              src="/home/BackgroundWeb.png"
              alt="Background"
              width={1920}
              height={1080}
              className="animate-in-fadetop absolute h-full object-cover opacity-50 xl:object-fill"
            />

            {/* Main Hero */}
            <MainSection />

            {/* Description */}
            <Description />

            {/* Tanggal dan Lokasi */}
            <Tanggallokasi />
          </div>
        </section>

        {/* Graduation Parade */}
        <Graduationparade />

        {/* Timeline */}
        <Timeline />

        {/* Sponsors */}
        <Sponsors />

        {/* Faq */}
        <Faq />
      </div>
    </div>
  );
}
