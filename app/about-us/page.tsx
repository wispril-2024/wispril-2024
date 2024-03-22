import Description from "./description";
import OrganogramPage from "./organogram";
import VisiMisi from "./visimisi";

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
      <OrganogramPage />
    </main>
  );
}
