import { MenfessCard } from "./menfess-card";
import MenfessPagination from "./menfess-pagination";
import { mockMenfess } from "@/lib/mocks/menfess";
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
  const menfessData = mockMenfess;

  return (
    <main className="flex flex-col items-center justify-center bg-[#510007] px-6 py-12 sm:p-16">
      {/* Background Image */}
      {/* <Image
        src="/dashboard/light-background.png"
        alt="light-background"
        className="fixed left-1/2 top-1/2  h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.2] bg-gradient-to-br from-[#510007] to-[#181715] object-cover"
        draggable={false}
        width={1000}
        height={1000}
      /> */}

      {/* Title */}
      <div className="relative z-10">
        <Image
          src="/graduates/banner.png"
          draggable={false}
          alt="banner"
          width={700}
          height={700}
          className="w-80 lg:w-[384px]"
        />
        <div className="absolute left-1/2 top-[22%] -translate-x-1/2">
          <h1 className="inline-block bg-gradient-to-r from-[#510007] to-[#B70010] bg-clip-text font-westmeath text-3xl text-transparent lg:text-5xl">
            INBOX
          </h1>
        </div>
      </div>

      {/* Inbox */}
      <div className="flex flex-col">
        {menfessData.length === 0 ? (
          // Empty
          <p className="text-center font-westmeath text-xl text-[#F4D38E] lg:text-3xl">
            Inbox Kosong
          </p>
        ) : (
          // Non empty
          menfessData.map((message, idx) => (
            <MenfessCard
              key={idx}
              from={message.from}
              message={message.message}
              date={message.date}
            />
          ))
        )}

        {/* Serverside Pagination */}
        <MenfessPagination length={menfessData.length} page={page} />
      </div>
    </main>
  );
};
export default InboxPage;
