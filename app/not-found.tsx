import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error 404 | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Error 404 | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Error 404 | Wispril 2024",
  },
};

function Page() {
  return (
    <main className="h-full w-full">
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 lg:min-h-[calc(100vh-96px)]">
        <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007] opacity-60"></div>

        <div className="relative h-full w-full">
          {/* Background */}
          <Image
            src="/home/poker-card.png"
            alt="Poker Background"
            fill={true}
            sizes="100vw"
            draggable={false}
            className="object-cover opacity-15"
          />

          <div className="z-10 flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-center gap-4 px-12 py-12 sm:flex-row lg:min-h-[calc(100vh-96px)] lg:gap-10">
            <div className="z-10 flex flex-col items-center gap-4 text-center sm:items-start sm:text-start lg:gap-4">
              <div className="flex flex-col gap-2 lg:gap-4">
                {/* Title */}
                <h1 className="w-fit bg-gradient-to-r from-[#EAC050] to-[#F4D38E] bg-clip-text font-westmeath text-5xl text-transparent lg:text-7xl">
                  ERROR 404
                </h1>
                {/* Subtitle */}
                <p className="font-cgp text-2xl font-bold text-[#ECCC9B] lg:text-4xl">
                  PAGE NOT FOUND
                </p>
              </div>

              {/* Description */}
              <p className="max-w-xl font-cgp text-base text-[#ECCC9B] xl:text-lg">
                Sorry, but it looks like the page you&apos;re trying to reach
                isn&apos;t available. You can go back to our homepage or
                double-check the URL to make sure it&apos;s correct.
              </p>

              <Link
                href="/"
                className="rounded-xl border-4 border-[#B87D12] bg-[#FFDFA4] px-6 py-2 font-westmeath text-xl text-[#B87D12] hover:bg-[#FFDFA4]/90 lg:self-start lg:rounded-2xl lg:px-9 lg:py-3 lg:text-2xl"
              >
                GO TO HOME
              </Link>
            </div>

            {/* Mascott */}
            <Image
              src="/components/maskot.png"
              alt="Maskot"
              width={490}
              height={686}
              className="z-10 h-auto w-[200px] lg:w-[300px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
