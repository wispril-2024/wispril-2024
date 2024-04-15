import { TaFairLiker } from "./ta-fair-liker";
import { db } from "@/db/drizzle";
import { taFair } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static paths
export const generateStaticParams = async () => {
  const paths = await db.query.taFair.findMany({
    columns: {
      id: true,
    },
  });

  return paths.map((p) => ({
    slug: p.id,
  }));
};

interface PageProps {
  params: { id: string };
}

// Generate metadata
export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const taFairData = await db.query.taFair.findFirst({
    where: eq(taFair.id, params.id),
    columns: {
      title: true,
    },
  });

  return {
    title: `TA Fair ${taFairData?.title} | Wispril 2024`,
  };
};

const Page = async ({ params }: PageProps) => {
  const taFairData = await db.query.taFair.findFirst({
    where: eq(taFair.id, params.id),
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
  });

  if (!taFairData) {
    return notFound();
  }

  return (
    <main className="flex h-[calc(100vh-80px)] items-start justify-center bg-[#510007] px-5 py-12 sm:h-auto sm:min-h-[calc(100vh-80px)] sm:p-12 lg:min-h-[calc(100vh-96px)] lg:p-24">
      {/* Lamp Background */}
      <Image
        src="/components/lamp.png"
        draggable={false}
        className="fixed left-1/2 top-1/2 z-0 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2"
        alt="Lamp Decoration"
        width={800}
        height={1600}
      />

      <div className="z-10 flex h-full flex-col gap-4">
        {/* Back button */}
        <Link
          href="/ta-fair"
          className="flex flex-row items-center gap-1 font-cgp text-base font-semibold leading-none text-[#F4D38E] lg:text-lg lg:leading-none"
        >
          <ChevronLeft className="size-6 lg:size-7" />
          <span>Back</span>
        </Link>

        {/* Content */}
        <section className="relative flex h-full w-full max-w-5xl px-12 py-32 sm:px-16 sm:py-44 lg:px-24 lg:py-64">
          {/* Background Container */}
          <Image
            src="/ta-fair/rectangle.jpg"
            fill={true}
            alt="Card Background"
            draggable={false}
            className="z-0"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />

          {/* Texts */}
          <article className="z-10 flex h-full w-full flex-col gap-3 overflow-y-auto lg:gap-6">
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              {/* Title Mobile */}
              <h1
                className="text-center font-westmeath text-2xl lg:hidden"
                style={{
                  WebkitTextStrokeColor: "#F4D38E",
                  WebkitTextStrokeWidth: 1,
                  WebkitTextFillColor: "#b10300",
                }}
              >
                {taFairData.title}
              </h1>
              {/* Title Desktop */}
              <h1
                className="hidden lg:block lg:text-center lg:font-westmeath lg:text-4xl"
                style={{
                  WebkitTextStrokeColor: "#F4D38E",
                  WebkitTextStrokeWidth: 2,
                  WebkitTextFillColor: "#b10300",
                }}
              >
                {taFairData.title}
              </h1>

              {/* Author */}
              <p className="text-center font-cgp text-lg font-bold text-[#F4D38E] lg:text-2xl">
                {taFairData.user.name}
              </p>
              <p className="text-center font-cgp text-base font-bold text-[#F4D38E] lg:text-xl">
                {taFairData.user.nim} - {taFairData.user.major}
              </p>
            </div>

            {/* Story */}
            <div className="flex flex-col gap-1 text-[#F4D38E] lg:gap-2">
              <h2 className="font-westmeath text-xl md:text-2xl lg:text-3xl">
                CERITA DIBALIK PEMBUATAN
              </h2>
              <p className="text-justify font-cgp text-sm font-semibold sm:text-sm lg:text-lg">
                {taFairData.story}
              </p>
            </div>

            {/* Abstract */}
            <div className="flex flex-col gap-1 text-[#F4D38E] lg:gap-2">
              <h2 className="font-westmeath text-xl lg:text-3xl">ABSTRAK</h2>
              <p className="text-justify font-cgp text-sm font-semibold lg:text-lg">
                {taFairData.abstract}
              </p>
            </div>

            {/* External Link */}
            {taFairData.link && (
              <Link
                href={taFairData.link}
                className="self-center font-cgp text-base font-bold text-[#e7e7e7] underline underline-offset-4 lg:text-xl"
              >
                Baca Abstrak Lengkap
              </Link>
            )}

            {/* Like Counter */}
            <TaFairLiker
              initialLike={taFairData.likes}
              taFairId={taFairData.id}
            />
          </article>
        </section>
      </div>
    </main>
  );
};

export default Page;
