import { Loader2 } from "lucide-react";
import Image from "next/image";

const InboxLoadingPage = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] justify-center bg-gradient-to-br from-[#5e0000] to-[#430000] px-4 py-12 sm:p-16 xl:min-h-[calc(100vh-96px)]">
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
      <section className="z-10 flex flex-row items-center gap-2 lg:gap-4">
        <Loader2 className="size-8 animate-spin text-[#ECC786] lg:size-10" />
        <h1 className="font-westmeath text-3xl text-[#ECC786] lg:text-5xl">
          Loading...
        </h1>
      </section>
    </main>
  );
};

export default InboxLoadingPage;
