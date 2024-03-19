import pageBG from "../../public/about-us/bg.png";
import Description from "./description";
import OrganogramPage from "./organogram";
import Title from "./title";
import VisiMisi from "./visimisi";
import Image from "next/image";

// export const metadata = {
//   title: "About Us",
//   openGraph: {
//     title: "About Us",
//   },
//   twitter: {
//     title: "About Us",
//   },
// };

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden  pt-16 ">
      <Image
        className="absolute inset-0 -z-50 h-full w-full object-cover object-top"
        src={pageBG}
        alt="Background Image"
        fill={true}
        sizes="100vw"
        priority
      />
      <Title />
      <Description />
      <VisiMisi />
      <OrganogramPage />
    </main>
  );
}
