import Bundle from "./bundle";
import { bundles, merchs } from "./data-merch";
import Merchandise from "./merch";
import Title from "./title";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Metadata
export const metadata: Metadata = {
  title: "Merchandise | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Merchandise | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Merchandise | Wispril 2024",
  },
};

function ItemsList() {
  return (
    <main className="min-h-screen">
      <div className="relative h-full">
        {/* Layer Gradient */}
        <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007] opacity-45" />

        {/* Main Component */}
        <div className="z-10 flex flex-col items-center">
          {/* Merch Section */}
          <section className="h-full w-full">
            <div className="relative flex h-full w-full flex-col items-center gap-6 overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16 lg:gap-0 lg:pb-32 lg:pt-24">
              {/* Gradient */}
              <div className="absolute z-0 h-full w-full bg-gradient-to-b from-[#510007] to-[#833519]" />

              {/* Background */}
              <Image
                src="/merchandise/Bg.png"
                alt="Background"
                width={720}
                height={1648}
                className="absolute -top-36 hidden w-full object-cover lg:block"
                priority
              />

              <Image
                src="/merchandise/BgMobile.png"
                alt="Background"
                width={360}
                height={2372}
                className="absolute -top-36 block w-full object-cover lg:hidden"
                priority
              />

              <div className="z-10 flex flex-col items-center gap-12 lg:gap-24">
                <div className="flex max-w-xs flex-col items-center gap-8 sm:max-w-xl lg:max-w-6xl lg:gap-16">
                  {/* Title */}
                  <Title />

                  {/* Merchandise */}
                  <ul className="flex w-full flex-wrap justify-center gap-8 sm:gap-x-24 sm:gap-y-8 lg:gap-x-28 lg:gap-y-16">
                    {merchs.map((merch, index) => (
                      <li key={index}>
                        <Merchandise item={merch} data-aos="zoom-in-up" />
                      </li>
                    ))}
                  </ul>

                  <ul className="flex w-full flex-wrap justify-center gap-8 sm:gap-x-24 sm:gap-y-8 lg:gap-x-28 lg:gap-y-16">
                    {bundles.map((bundle, index) => (
                      <li key={index}>
                        <Bundle item={bundle} data-aos="zoom-in-up" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order now */}
                <Link
                  data-aos="fade-up"
                  href="https://bit.ly/MerchandiseWispril24"
                  target="_blank"
                  className="rounded-xl border-4 border-[#B87D12] bg-[#FFDFA4] px-6 py-2 font-westmeath text-2xl text-[#B87D12] lg:rounded-2xl lg:px-10 lg:py-4 lg:text-3xl"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ItemsList;
