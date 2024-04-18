"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

function page({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
                  ERROR 500
                </h1>
                {/* Subtitle */}
                <p className="font-cgp text-2xl font-bold text-[#ECCC9B] lg:text-4xl">
                  INTERNAL SERVER ERROR
                </p>
              </div>

              {/* Description */}
              <p className="max-w-xl font-cgp text-base text-[#ECCC9B] xl:text-lg">
                It appears an interval server error occured. Please wait for a
                few moments and click try again.
              </p>

              <Button
                className="h-auto rounded-xl border-4 border-[#B87D12] bg-[#FFDFA4] px-6 py-2 font-westmeath text-xl text-[#B87D12] hover:bg-[#FFDFA4]/90 lg:self-start lg:rounded-2xl lg:px-9 lg:py-3 lg:text-2xl"
                onClick={() => {
                  window.location.reload();
                  reset();
                }}
              >
                REFRESH PAGE
              </Button>
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

export default page;
