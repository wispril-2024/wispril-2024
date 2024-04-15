import TAFairView from "./ta-fair-view";
import { db } from "@/db/drizzle";
import { taFair } from "@/db/schema";
import { asc } from "drizzle-orm";
import type { Metadata } from "next";
import Image from "next/image";
import * as React from "react";

export const metadata: Metadata = {
  title: "TA Fair | Wispril 2024",
};

// static route
export const dynamic = "force-static";

const Page = async () => {
  // Get all ta fair from db
  const taFairData = await db.query.taFair.findMany({
    columns: {
      id: true,
      title: true,
      story: true,
      abstract: true,
      link: true,
      likes: true,
    },
    with: {
      user: {
        columns: {
          id: true,
          name: true,
          nim: true,
          major: true,
          faculty: true,
        },
      },
    },
    orderBy: [asc(taFair.title)],
  });

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-start justify-center bg-[#510007] px-5 py-12 sm:p-12 lg:min-h-[calc(100vh-96px)] lg:p-16">
      {/* Lamp Background */}
      <Image
        src="/components/lamp.png"
        draggable={false}
        className="fixed left-1/2 top-1/2 z-0 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2"
        alt="banner"
        width={800}
        height={1600}
      />

      <section className="z-10 flex w-full  flex-col items-center justify-center gap-4 lg:max-w-5xl lg:gap-6">
        {/* Title */}
        <div className="relative flex h-28 w-80 items-center justify-center lg:h-44 lg:w-[512px]">
          <Image
            src="/components/banner.png"
            alt="Title Banner"
            draggable={false}
            fill={true}
            sizes="(max-width: 640px) vw, 640px"
            className="z-0"
          />
          <h1 className="relative bottom-5 z-10 inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:bottom-7 lg:text-5xl">
            TA FAIR
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-center font-westmeath text-xl text-[#F4D38E] lg:text-3xl">
          Jangan Lupa berikan like dan Comment kepada TA Favoritmu!
        </h2>

        {/* Ta fair Filters and Views */}
        <React.Suspense fallback={null}>
          <TAFairView taFairData={taFairData} />
        </React.Suspense>
      </section>
    </main>
  );
};

export default Page;
