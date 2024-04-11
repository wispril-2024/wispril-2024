import { MenfessCard } from "./menfess-card";
import MenfessPagination from "./menfess-pagination";
import { mockMenfess } from "@/lib/mocks/menfess";
import type { MenfessMessage } from "@/types/menfess";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inbox | Wispril 2024",
};
interface InboxSearchParams {
  page: string;
}

const InboxPage = ({ searchParams }: { searchParams: InboxSearchParams }) => {
  // Get session & validate session

  // Get page from search params
  const page = parseInt(searchParams.page) || 1;

  // Get menfess data (paginated)
  const menfessData: MenfessMessage[] = mockMenfess.slice(0, 5);

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] justify-center bg-gradient-to-br from-[#5e0000] to-[#430000] px-6 py-12 sm:p-16 lg:min-h-[calc(100vh-96px)]">
      {/* Background Image */}
      <Image
        src="/dashboard/light-background.png"
        alt="Background Decoration"
        className="z-0 opacity-20"
        draggable={false}
        fill={true}
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-8 lg:gap-10">
        {/* Title */}
        <div className="relative flex h-24 w-80 items-center justify-center lg:h-36 lg:w-[512px]">
          <Image
            src="/dashboard/banner.png"
            alt="Title Banner"
            draggable={false}
            fill={true}
            sizes="(max-width: 640px) vw, 640px"
            className="z-0"
          />
          <h1 className="relative bottom-5 z-10 inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:bottom-7 lg:text-5xl">
            INBOX
          </h1>
        </div>

        {/* Messages */}
        {menfessData.length === 0 ? (
          // Empty
          <div className="flex max-w-xl flex-col gap-1 lg:gap-3">
            <p className="text-center font-westmeath text-xl text-[#F4D38E] lg:text-3xl">
              Inbox Anda Kosong
            </p>
            <p className="text-center font-cgp text-base text-[#F4D38E] lg:text-xl">
              Sampaikan kepada teman-teman Anda untuk mengirimkan menfess
              wispril kepada Anda!
            </p>
          </div>
        ) : (
          // Non empty
          <div className="flex flex-col gap-4 lg:gap-5">
            {menfessData.map((message, idx) => (
              <MenfessCard
                key={idx}
                from={message.from}
                message={message.message}
                date={message.date}
              />
            ))}
          </div>
        )}

        {/* Serverside Pagination */}
        <MenfessPagination length={menfessData.length} page={page} />
      </div>
    </main>
  );
};
export default InboxPage;
