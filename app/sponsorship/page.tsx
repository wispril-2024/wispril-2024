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
        <div className="flex flex-col items-center justify-center gap-2">
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
        <p className="max-w-[600px] font-cgp text-base font-bold text-[#ECCC9B] sm:text-lg lg:max-w-full lg:text-2xl">
          Our success would not be possible without the continued support of
          these incredible partners.
        </p>
      </section>

      {/* Sponsor Section */}
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-20 text-center font-westmeath xl:min-h-[calc(100vh-96px)]">
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Star Left */}
          <Image
            src="/sponsorship/star.png"
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
            src="/sponsorship/star.png"
            alt="Star"
            width={394}
            height={394}
            className="w-16 lg:w-20"
            sizes="(max-width: 1024px) 64px, 80px"
          />
        </div>

        {/* Sponsors */}
        <div className="flex flex-col items-center gap-12">
          {xlSponsor.map((sponsor, index) => {
            return (
              <div
                key={index}
                className="flex h-96 w-96 flex-col items-center justify-center rounded-xl bg-white p-4"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={720}
                  height={200}
                  className="w-full"
                />
              </div>
            );
          })}

          {lSponsor.map((sponsor, index) => {
            return (
              <div
                key={index}
                className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-white p-4"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={720}
                  height={200}
                  className="w-full"
                />
              </div>
            );
          })}

          <div className="flex gap-12">
            {mSponsor.map((sponsor, index) => {
              return (
                <div
                  key={index}
                  className="flex h-48 w-48 flex-col items-center justify-center rounded-xl bg-white p-4"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={720}
                    height={200}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex gap-12">
            {sSponsor.map((sponsor, index) => {
              return (
                <div
                  key={index}
                  className="flex h-32 w-32 flex-col items-center justify-center rounded-xl bg-white p-2"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={720}
                    height={200}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Partner Section */}
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-20 pb-20 text-center font-westmeath xl:min-h-[calc(100vh-96px)]">
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Star Left */}
          <Image
            src="/sponsorship/star.png"
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
            src="/sponsorship/star.png"
            alt="Star"
            width={394}
            height={394}
            className="w-16 lg:w-20"
            sizes="(max-width: 1024px) 64px, 80px"
          />
        </div>

        {/* Sponsors */}
        <div className="flex flex-col items-center gap-12">
          <div className="grid grid-cols-2 gap-12">
            {xlMedpar.map((medpar, index) => {
              return (
                <div
                  key={index}
                  className="flex h-96 w-96 flex-col items-center justify-center rounded-xl bg-white p-4"
                >
                  <Image
                    src={medpar.src}
                    alt={medpar.alt}
                    width={720}
                    height={200}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>

          {lMedpar.map((medpar, index) => {
            return (
              <div
                key={index}
                className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-white p-4"
              >
                <Image
                  src={medpar.src}
                  alt={medpar.alt}
                  width={720}
                  height={200}
                  className="w-full"
                />
              </div>
            );
          })}

          <div className="flex flex-wrap justify-center gap-12 px-24">
            {mMedpar.map((medpar, index) => {
              return (
                <div
                  key={index}
                  className="flex h-48 w-48 flex-col items-center justify-center rounded-xl bg-white p-6"
                >
                  <Image
                    src={medpar.src}
                    alt={medpar.alt}
                    width={720}
                    height={200}
                    className="w-full"
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
