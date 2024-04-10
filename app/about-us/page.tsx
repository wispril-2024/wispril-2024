import Description from "./description";
import OrganogramPage from "./organogram";
import VisiMisi from "./visi-misi";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  openGraph: {
    title: "About Us",
  },
  twitter: {
    title: "About Us",
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
      <div className="absolute right-0 top-0 z-0 aspect-video h-auto w-64 rounded-full bg-[#A01B14] blur-[80px] lg:w-80 lg:blur-[160px]" />

      {/* Background theater decoration */}
      <div className="absolute -bottom-60 left-0 right-0 z-0 w-full opacity-50">
        {/* Image mask */}
        <div className="mx-auto h-[1000px] w-full lg:h-[2100px] lg:w-[1000px]">
          {/* Theater */}
          <Image
            className="h-full w-full object-cover"
            src="/about-us/teater.png"
            alt="Background Image"
            fill={true}
            sizes="100vw"
          />
        </div>
      </div>
    </main>
  );
}
