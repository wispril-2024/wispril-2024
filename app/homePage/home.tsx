import Description from "./description";
import Faq from "./faq";
import Graduationparade from "./graduationparade";
import MainSection from "./mainSection";
import Sponsors from "./sponsors";
import Tanggallokasi from "./tanggallokasi";
import Timeline from "./timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007] opacity-60"></div>
      {/* <div className="absolute z-10 h-full w-full bg-gradient-to-b from-[#631F20] via-[#B2000F] to-[#510007]"></div> */}

      <div className="-z-10">
        {/* Hero */}
        <section className="h-full w-full pb-48">
          <div className="relative h-full w-full">
            <Image
              src="/home/BackgroundWeb.png"
              alt="Background"
              width={1920}
              height={1080}
              className="absolute h-full object-cover opacity-50 xl:object-fill"
            />

            {/* Main Hero */}
            <MainSection />

            {/* Description */}
            <Description />

            {/* Tanggal dan Lokasi */}
            <Tanggallokasi />
          </div>
        </section>

        {/* Graduation Parade */}
        <Graduationparade />

        {/* Timeline */}
        <Timeline />

        {/* Sponsors */}
        {/* Nanti ganti sama page aslinya */}
        <Graduationparade />

        {/* Faq */}
        <Faq />
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="w-full">
//         <div className="relative">
//           <Image
//             src="/home/BackgroundWeb.png"
//             alt="backgroundweb"
//             // width={1920}
//             // height={1080}
//             // className="h-screen object-cover"
//             layout="fill"
//           />
//           <MainSection />
//           <Description />
//           <Tanggallokasi />
//         </div>
//         <Graduationparade />
//         <Timeline />
//         <Sponsors />
//         <Faq />
//       </div>
//     </div>
//   );
// }
