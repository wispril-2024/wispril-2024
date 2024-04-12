import BodyLayout from "./body-layout";
import "./globals.css";
import Footer from "@/components/ui/footer";
import { cn } from "@/lib/utils";
import type { Viewport, Metadata } from "next";
import localFont from "next/font/local";

// Local fonts declaration
const westmeath = localFont({
  src: "./fonts/Westmeath.ttf",
  display: "swap",
  variable: "--font-westmeath",
});

const cgp = localFont({
  src: [
    { path: "./fonts/CenturyGothicPaneuropeanRegular.ttf", weight: "400" },
    { path: "./fonts/CenturyGothicPaneuropeanSemiBold.ttf", weight: "600" },
    { path: "./fonts/CenturyGothicPaneuropeanBold.ttf", weight: "700" },
    { path: "./fonts/CenturyGothicPaneuropeanExtraBold.ttf", weight: "800" },
    { path: "./fonts/CenturyGothicPaneuropeanBlack.ttf", weight: "900" },
  ],
  display: "swap",
  variable: "--font-cgp",
});

// Shared viewport config
export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

// Shared metadata config
export const metadata: Metadata = {
  description:
    "Parade Wisuda ITB adalah kegiatan yang ditujukan untuk memaksimalkan hak dan kesempatan dalam mengapresiasi wisudawan ITB dan sebagai wahana integrasi apresiasi massa kampus ITB",
  generator: "Next.js",
  applicationName: "Parade Wisuda April ITB 2024",
  keywords: [
    "Parade Wisuda ITB",
    "Parade Wisuda April",
    "Parade Wisuda April ITB 2024",
    "Wispril ITB 2024",
    "Wisuda ITB 2024",
  ],
  category: "education",
  metadataBase: new URL("https://paradewispril2024.com"),
  manifest: "https://paradewispril2024.com/manifest.webmanifest",
};

// Server component layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id-ID" className={cn(westmeath.variable, cgp.variable)}>
      <BodyLayout>
        {children}
        <Footer />
      </BodyLayout>
    </html>
  );
}
