import Description from "./description";
import OrganogramPage from "./organogram";
import VisiMisi from "./visi-misi";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "About Us | Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "About Us | Wispril 2024",
  },
};

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-24 overflow-hidden bg-custom-gradient py-12 sm:py-16 lg:gap-32 lg:py-24 ">
      {/* Short description */}
      <Description />

      {/* Visi misi */}
      <VisiMisi />

      {/* Organogram */}
      <OrganogramPage />

      {/* Top Right Gradient Decorator */}
      <div className="absolute -right-20 top-0 z-0 aspect-[4/3] h-auto w-64 rounded-full bg-[#A01B14] bg-opacity-60 blur-[80px] lg:w-96 lg:blur-[160px]" />

      {/* Background theater decoration */}
      <div className="absolute -bottom-24 left-0 right-0 z-0 h-[1000px] w-full opacity-50 lg:h-[2100px]">
        <Image
          className="h-full w-full object-cover"
          src="/about-us/teater.png"
          alt="Background Image"
          fill={true}
          sizes="100vw"
        />
      </div>
    </main>
  );
}
