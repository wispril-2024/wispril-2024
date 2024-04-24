import { GraduateView } from "./graduates-view";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { asc } from "drizzle-orm";
import { type Metadata } from "next";
import Image from "next/image";
import * as React from "react";

export const metadata: Metadata = {
  title: "Graduates | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Graduates | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Graduates | Wispril 2024",
  },
};

// static route
export const dynamic = "force-static";

// Page
const Page = async () => {
  // Get all graduates from db
  const graduates = await db.query.users.findMany({
    columns: {
      id: true,
      nim: true,
      name: true,
      username: true,
      image: true,
      faculty: true,
      major: true,
    },
    orderBy: [asc(users.name)],
  });

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-start justify-center bg-[#510007] px-5 py-12 sm:p-12 lg:p-16 xl:min-h-[calc(100vh-96px)]">
      {/* Lamp Background */}
      <Image
        src="/components/lamp.png"
        draggable={false}
        className="fixed left-1/2 top-1/2 z-0 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2"
        alt="banner"
        width={800}
        height={1600}
        sizes="(max-width: 896px) 100vw, 896px"
      />

      <section className="z-10 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:max-w-xl lg:max-w-5xl lg:gap-6">
        {/* Title */}
        <div
          data-aos="fade-up"
          className="relative flex h-28 w-80 items-center justify-center lg:h-44 lg:w-[512px]"
        >
          <Image
            src="/components/banner.png"
            alt="Title Banner"
            draggable={false}
            fill={true}
            sizes="(max-width: 640px) vw, 640px"
            className="z-0"
          />
          <h1 className="relative bottom-5 z-10 inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:bottom-7 lg:text-5xl">
            GRADUATES
          </h1>
        </div>

        {/* Subtitle */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center font-westmeath text-xl text-[#F4D38E] lg:text-3xl"
        >
          Jangan Lupa Kirimkan WisprilFess kepada Temanmu!
        </h2>

        {/* Graduates Filters and Views */}
        <React.Suspense fallback={null}>
          <GraduateView graduates={graduates} />
        </React.Suspense>
      </section>
    </main>
  );
};

export default Page;
