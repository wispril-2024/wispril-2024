import { lMedpar, mMedpar, xlMedpar } from "./medpar-data";
import { lSponsor, mSponsor, sSponsor, xlSponsor } from "./sponsor-data";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { Metadata } from "next";
import Image from "next/image";

// Metadata
export const metadata: Metadata = {
  title: "Sponsorship | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Sponsorship | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Sponsorship | Wispril 2024",
  },
};

function page() {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] flex-col gap-36 xl:min-h-[calc(100vh-96px)]">
      <div className="absolute h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007] opacity-60"></div>

      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-8 px-12 text-center font-westmeath xl:min-h-[calc(100vh-96px)]">
        {/* Top Right Gradient Decorator */}
        <div className="absolute -left-10 z-0 aspect-[4/3] h-auto w-[700px] rounded-full bg-[#A01B14] bg-opacity-60 blur-[80px] lg:w-[1000px] lg:blur-[160px]" />

        <div
          data-aos="fade-up"
          className="z-10 flex flex-col items-center justify-center gap-2"
        >
          <h1 className="w-fit bg-gradient-to-r from-[#EAC050] to-[#F4D38E] bg-clip-text font-cgp text-2xl font-bold tracking-wider text-transparent sm:text-3xl lg:text-5xl">
            SPECIAL THANKS TO
          </h1>
          <h1 className="w-fit bg-gradient-to-r from-[#EAC050] to-[#F4D38E] bg-clip-text text-4xl tracking-widest text-transparent sm:text-5xl lg:text-7xl">
            OUR SPONSORS &
          </h1>
          <h1 className="w-fit bg-gradient-to-r from-[#EAC050] to-[#F4D38E] bg-clip-text text-4xl tracking-widest text-transparent sm:text-5xl lg:text-7xl">
            MEDIA PARTNERS
          </h1>
        </div>
        <p
          data-aos="fade-up"
          className="z-10 max-w-[600px] font-cgp text-base font-bold text-[#ECCC9B] sm:text-lg lg:max-w-full lg:text-2xl"
        >
          Our success would not be possible without the continued support of
          these incredible partners.
        </p>
      </section>

      {/* Sponsor Section */}
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-20 text-center font-westmeath xl:min-h-[calc(100vh-96px)]">
        <div className="absolute -right-10 z-0 aspect-[4/3] h-auto w-[700px] rounded-full bg-[#A01B14] bg-opacity-60 blur-[80px] lg:w-[1000px] lg:blur-[160px]" />

        <div
          data-aos="fade-up"
          className="z-10 flex items-center gap-4 lg:gap-8"
        >
          {/* Star Left */}
          <Image
            src="/sponsorship/Star.png"
            alt="Star"
            width={394}
            height={394}
            className="w-16 lg:w-20"
            sizes="(max-width: 1024px) 64px, 80px"
          />

          <h1 className="w-fit bg-gradient-to-r from-[#EAC050] to-[#F4D38E] bg-clip-text font-cgp text-3xl font-bold tracking-wider text-transparent lg:text-5xl">
            SPONSORS
          </h1>

          {/* Star Right */}
          <Image
            src="/sponsorship/Star.png"
            alt="Star"
            width={394}
            height={394}
            className="w-16 lg:w-20"
            sizes="(max-width: 1024px) 64px, 80px"
          />
        </div>

        {/* Sponsors */}
        <div className="z-10 flex flex-col items-center gap-12 px-12">
          {xlSponsor.map((sponsor, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                key={index}
                className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-white p-4 lg:h-96 lg:w-96"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={720}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 1024px) 200px, 360px"
                />
              </div>
            );
          })}

          {lSponsor.map((sponsor, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                key={index}
                className="flex h-48 w-48 flex-col items-center justify-center rounded-xl bg-white p-4 lg:h-64 lg:w-64"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={720}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 1024px) 150px, 225px"
                />
              </div>
            );
          })}

          <div className="flex flex-wrap justify-center gap-12">
            {mSponsor.map((sponsor, index) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  key={index}
                  className="flex h-32 w-32 flex-col items-center justify-center rounded-xl bg-white p-4 lg:h-48 lg:w-48"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={720}
                    height={200}
                    className="w-full"
                    sizes="(max-width: 1024px) 100px, 150px"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {sSponsor.map((sponsor, index) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  key={index}
                  className="flex h-24 w-24 flex-col items-center justify-center rounded-xl bg-white p-2 lg:h-32 lg:w-32"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={720}
                    height={200}
                    className="w-full"
                    sizes="(max-width: 1024px) 75px, 100px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Partner Section */}
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-20 pb-20 text-center font-westmeath xl:min-h-[calc(100vh-96px)]">
        <div className="absolute -left-10 bottom-0 z-0 aspect-[4/3] h-auto w-[700px] rounded-full bg-[#A01B14] bg-opacity-60 blur-[80px] lg:w-[1000px] lg:blur-[160px]" />

        <div
          data-aos="fade-up"
          className="z-10 flex items-center gap-4 lg:gap-8"
        >
          {/* Star Left */}
          <Image
            src="/sponsorship/Star.png"
            alt="Star"
            width={394}
            height={394}
            className="w-16 lg:w-20"
            sizes="(max-width: 1024px) 64px, 80px"
          />

          <h1 className="w-fit bg-gradient-to-r from-[#EAC050] to-[#F4D38E] bg-clip-text font-cgp text-3xl font-bold tracking-wider text-transparent lg:text-5xl">
            MEDIA PARTNERS
          </h1>

          {/* Star Right */}
          <Image
            src="/sponsorship/Star.png"
            alt="Star"
            width={394}
            height={394}
            className="w-16 lg:w-20"
            sizes="(max-width: 1024px) 64px, 80px"
          />
        </div>

        {/* Media Partners */}
        <div className="z-10 flex flex-col items-center gap-12 px-12">
          <div className="grid gap-12 sm:grid-cols-2">
            {xlMedpar.map((medpar, index) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  key={index}
                  className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-white p-4 lg:h-96 lg:w-96"
                >
                  <Image
                    src={medpar.src}
                    alt={medpar.alt}
                    width={720}
                    height={200}
                    className="w-full"
                    sizes="(max-width: 1024px) 200px, 360px"
                  />
                </div>
              );
            })}
          </div>

          {lMedpar.map((medpar, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                key={index}
                className="flex h-48 w-48 flex-col items-center justify-center rounded-xl bg-white p-4 lg:h-64 lg:w-64"
              >
                <Image
                  src={medpar.src}
                  alt={medpar.alt}
                  width={720}
                  height={200}
                  className="w-full"
                  sizes="(max-width: 1024px) 150px, 225px"
                />
              </div>
            );
          })}

          <div className="flex flex-wrap justify-center gap-12 xl:max-w-5xl">
            {mMedpar.map((medpar, index) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  key={index}
                  className="flex h-32 w-32 flex-col items-center justify-center rounded-xl bg-white p-6 lg:h-48 lg:w-48"
                >
                  <Image
                    src={medpar.src}
                    alt={medpar.alt}
                    width={720}
                    height={200}
                    className="w-full"
                    sizes="(max-width: 1024px) 100px, 150px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
