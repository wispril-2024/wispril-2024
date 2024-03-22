import Description from "./description";
import OrganogramPage from "./organogram";
import VisiMisi from "./visimisi";
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
    <main className="relative min-h-screen overflow-hidden bg-custom-gradient px-1 py-12 sm:py-16 lg:py-24 ">
      <Description />
      <VisiMisi />
      <div className="mb-40">
        <OrganogramPage />
      </div>
      <div className="absolute -bottom-60 z-0 w-full  overflow-hidden brightness-75 saturate-[.75]">
        <div className=" mx-auto h-[1000px] w-full md:h-[2100px] md:w-[1000px]">
          <Image
            className="h-full w-full object-cover"
            src="/about-us/teater.png"
            alt="Background Image"
            layout="fill"
            priority
          />
        </div>
      </div>
    </main>
  );
}
