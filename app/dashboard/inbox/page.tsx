import { MenfessCard } from "./menfess-card";
import MenfessPagination from "./menfess-pagination";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { db } from "@/db/drizzle";
import { menfess } from "@/db/schema";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { count, desc, eq } from "drizzle-orm";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Inbox | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Inbox | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Inbox | Wispril 2024",
  },
};

interface InboxSearchParams {
  page: string;
}

const InboxPage = async ({
  searchParams,
}: {
  searchParams: InboxSearchParams;
}) => {
  // Get session & validate session
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/log-in");
  }

  // Get page from search params
  const page = parseInt(searchParams.page);
  // Validate larger than or equal 1
  if (page < 1 || isNaN(page)) {
    redirect(`/dashboard/inbox?page=1`);
  }
  const totalPerPage = 5;

  // Get menfess data (paginated)
  const menfessQuery = db.query.menfess.findMany({
    where: eq(menfess.userId, session.id),
    orderBy: [desc(menfess.createdAt)],
    limit: totalPerPage,
    offset: (page - 1) * totalPerPage,
  });

  // Get total menfess data
  const totalQuery = db
    .select({ total: count() })
    .from(menfess)
    .where(eq(menfess.userId, session.id));

  // Execute query
  const [menfessMessages, [{ total }]] = await Promise.all([
    menfessQuery,
    totalQuery,
  ]);

  // Validate page upper bound
  const maximumPage = Math.ceil(total / totalPerPage);
  if (page > maximumPage) {
    redirect(`/dashboard/inbox?page=1`);
  }

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] justify-center bg-gradient-to-br from-[#5e0000] to-[#430000] px-4 py-12 sm:p-16 lg:min-h-[calc(100vh-96px)]">
      {/* Background Image */}
      <Image
        src="/dashboard/light-background.png"
        alt="Background Decoration"
        className="z-0 opacity-20"
        draggable={false}
        fill={true}
        sizes="100vw"
      />

      {/* Content */}
      <div className="z-10 flex w-full flex-col items-center gap-8 lg:gap-10">
        {/* Title */}
        <div className="relative flex h-24 w-80 items-center justify-center lg:h-36 lg:w-[512px]">
          <Image
            src="/components/banner.png"
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
        {menfessMessages.length === 0 ? (
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
            {menfessMessages.map((message, idx) => (
              <MenfessCard key={idx} {...message} />
            ))}
          </div>
        )}

        {/* Serverside Pagination */}
        <MenfessPagination
          total={total}
          totalPerPage={totalPerPage}
          page={page}
        />
      </div>
    </main>
  );
};
export default InboxPage;
