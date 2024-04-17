import { Button } from "@/components/ui/button";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { Metadata } from "next";
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

function page() {
  return (
    <main className="h-full w-full">
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-4 lg:min-h-[calc(100vh-96px)]">
        <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007] opacity-60"></div>

        <div className="relative h-full w-full">
          {/* Background */}
          <Image
            src="/home/poker-card.png"
            alt="Poker Background"
            width={1920}
            height={1080}
            className="absolute -z-10 h-full object-cover opacity-15"
          />

          <div className="z-10 flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-center px-12 py-12 lg:min-h-[calc(100vh-96px)] lg:flex-row">
            <div className="z-10 flex flex-col items-center gap-4 text-center lg:items-start lg:gap-6 lg:text-start">
              <div className="flex flex-col gap-2">
                <h1 className="w-fit bg-gradient-to-r from-[#EAC050] to-[#F4D38E] bg-clip-text font-westmeath text-4xl text-transparent lg:text-6xl xl:text-7xl">
                  ERROR 404
                </h1>
                <p className="font-cgp text-lg font-bold text-[#ECCC9B] lg:text-xl xl:text-2xl">
                  PAGE NOT FOUND
                </p>
              </div>

              <p className="max-w-lg font-cgp text-base text-[#ECCC9B] xl:text-lg">
                Sorry, but it looks like the page you&apos;re trying to reach
                isn&apos;t available. You can go back to our homepage or
                double-check the URL to make sure it&apos;s correct.
              </p>

              <Button
                variant="default"
                size="lg"
                className="rounded-2xl border-4 border-[#b87d12] bg-[#f4d38e] px-4 py-6 font-cgp text-lg font-semibold text-[#b87d12] ring-offset-[#4e0000] hover:bg-[#FFDFA4]/90 focus-visible:ring-[#f4d38e] lg:self-start xl:text-2xl"
              >
                <Link href="/" className="font-westmeath">
                  GO TO HOMEPAGE
                </Link>
              </Button>
            </div>
            <div className="z-10">
              <Image
                src="/components/maskot.png"
                alt="Maskot"
                width={720}
                height={720}
                className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
