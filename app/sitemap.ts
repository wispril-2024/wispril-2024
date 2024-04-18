import { db } from "@/db/drizzle";
import { taFair, users } from "@/db/schema";
import { asc } from "drizzle-orm";
import { MetadataRoute } from "next";

const urls = [
  {
    url: "https://paradewispril2024.com/",
    lastModified: new Date(),
    priority: 1,
  },
  {
    url: "https://paradewispril2024.com/ta-fair",
    lastModified: new Date(),
    priority: 0.8,
  },
  {
    url: "https://paradewispril2024.com/graduates",
    lastModified: new Date(),
    priority: 0.8,
  },
  {
    url: "https://paradewispril2024.com/about-us",
    lastModified: new Date(),
    priority: 0.8,
  },
  {
    url: "https://paradewispril2024.com/merchandise",
    lastModified: new Date(),
    priority: 0.8,
  },
  {
    url: "https://paradewispril2024.com/auth/log-in",
    lastModified: new Date(),
    priority: 0.8,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all graduates from db
  const graduatesQuery = db.query.users.findMany({
    columns: {
      id: true,
    },
    orderBy: [asc(users.name)],
  });

  // Get all ta fair from db
  const taFairDataQuery = db.query.taFair.findMany({
    columns: {
      id: true,
    },
    orderBy: [asc(taFair.title)],
  });

  const [graduates, taFairData] = await Promise.all([
    graduatesQuery,
    taFairDataQuery,
  ]);

  const graduatesPageCount = Math.floor(graduates.length / 6);
  for (let i = 0; i < graduatesPageCount; i++) {
    urls.push({
      url: `https://paradewispril2024.com/graduates?page=${i + 1}`,
      lastModified: new Date(),
      priority: 0.64,
    });
  }

  const taFairPageCount = Math.floor(taFairData.length / 6);
  for (let i = 0; i < taFairPageCount; i++) {
    urls.push({
      url: `https://paradewispril2024.com/ta-fair?page=${i + 1}`,
      lastModified: new Date(),
      priority: 0.64,
    });
  }

  for (const taFair of taFairData) {
    urls.push({
      url: `https://paradewispril2024.com/ta-fair/${taFair.id}`,
      lastModified: new Date(),
      priority: 0.64,
    });
  }

  return urls;
}
