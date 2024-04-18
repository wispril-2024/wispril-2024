import { type Metadata } from "next";

export const openGraphTemplate: Metadata["openGraph"] = {
  description:
    "Parade Wisuda ITB adalah kegiatan yang ditujukan untuk memaksimalkan hak dan kesempatan dalam mengapresiasi wisudawan ITB dan sebagai wahana integrasi apresiasi massa kampus ITB",
  url: "https://paradewispril2024.com",
  siteName: "Parade Wisuda April ITB 2024",
  locale: "id-ID",
  type: "website",
  images: {
    url: "https://paradewispril2024.com/logo/link-preview.jpg",
    width: "1200",
    height: "630",
    alt: "Parade Wisuda April ITB 2024 Logo",
  },
};

export const twitterTemplate: Metadata["twitter"] = {
  card: "summary_large_image",
  description:
    "Parade Wisuda ITB adalah kegiatan yang ditujukan untuk memaksimalkan hak dan kesempatan dalam mengapresiasi wisudawan ITB dan sebagai wahana integrasi apresiasi massa kampus ITB",
  site: "@paradewisudaitb",
  siteId: "1052282401",
  creator: "@paradewisudaitb",
  creatorId: "1052282401",
  images: {
    url: "https://paradewispril2024.com/logo/link-preview.jpg",
    alt: "Parade Wisuda April ITB 2024 Logo",
  },
};
