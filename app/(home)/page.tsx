import Home from "./home";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Wispril 2024",
  openGraph: {
    ...openGraphTemplate,
    title: "Wispril 2024",
  },
  twitter: {
    ...twitterTemplate,
    title: "Wispril 2024",
  },
};

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Home />
    </main>
  );
};

export default HomePage;
