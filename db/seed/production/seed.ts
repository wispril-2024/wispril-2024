import { ScrapeData } from "./digilib-itb";
import { getDataWisudaInkam } from "./inkam";
import { db } from "@/db/drizzle";
import { taFair, users } from "@/db/schema";
import { FacultiesType, MajorsType } from "@/types/faculty-major";
import fs from "fs";
import { v4 as uuid } from "uuid";

interface CombinedData {
  name: string;
  nim: string;
  faculty: string;
  major: string;
  title: string;
  abstract: string;
  link: string;
}

// Get combined data
const getCombinedData = async () => {
  // Get newest inkam data
  const inkamData = await getDataWisudaInkam();

  // Get newest data from ta-cleaned.json
  const taData = JSON.parse(
    fs.readFileSync("db/seed/production/ta/ta-cleaned.json", "utf-8")
  ) as ScrapeData[];

  // Combine data
  const combinedData: CombinedData[] = [];
  for (const inkam of inkamData) {
    // Find ta data with same nim
    const ta = taData.find((ta) => String(ta.nim) == String(inkam.nim));
    combinedData.push({
      name: inkam.name,
      nim: inkam.nim,
      faculty: inkam.faculty,
      major: inkam.major,
      title: ta?.title || "",
      abstract: ta?.abstract || "",
      link: ta?.link || "",
    });
    if (!ta) {
      console.log("No data for", inkam.name);
    }
  }

  // Return combined data
  return combinedData;
};

// Write combined data to JSON
const writeCombinedDataToJSON = (combinedData: CombinedData[]) => {
  const date = new Date().getTime();
  const filePath = `db/seed/production/combined/combined-${date}.json`;
  fs.writeFileSync(filePath, JSON.stringify(combinedData, null, 2));
};

// Get new data (find data from combined that is not in database)
const getUpdatedData = async (combinedData: CombinedData[]) => {
  // Get data from database
  const databaseData = await db.query.users.findMany({
    columns: {
      id: true,
      nim: true,
      name: true,
      faculty: true,
      major: true,
    },
  });

  // Find data that is not in database
  const updatedData = combinedData.filter((data) => {
    return !databaseData.find((dbData) => dbData.nim == data.nim);
  });

  // Return updated data
  return updatedData;
};

// Write seed history json
const writeSeedHistoryJson = (updatedData: CombinedData[]) => {
  const date = new Date().getTime();
  const filePath = `db/seed/production/seed-history/seed-history-${date}.json`;
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
};

// Insert new data
const insertNewData = async (updatedData: CombinedData[]) => {
  // Generate NIM - ID (UUID) map
  const nimIdMap: Record<string, string> = {};
  for (const data of updatedData) {
    nimIdMap[data.nim] = uuid();
  }

  // Generate users data
  const usersInsertData = updatedData.map((data) => {
    return {
      id: nimIdMap[data.nim],
      nim: data.nim,
      name: data.name,
      username: `user@${data.nim}`,
      password: `password@${data.nim}`, // Default password
      faculty: data.faculty as FacultiesType,
      major: data.major as MajorsType,
    };
  });

  // Generate TA Data
  const taInsertData = updatedData
    .filter((data) => data.title && data.abstract && data.link)
    .map((data) => {
      return {
        userId: nimIdMap[data.nim],
        title: data.title,
        abstract: data.abstract,
        link: data.link,
      };
    });

  // Inser userdata
  try {
    await db.insert(users).values(usersInsertData);
  } catch (e) {
    console.log(e);
  }

  // Insert ta data
  try {
    await db.insert(taFair).values(taInsertData);
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  // Get all ta fair (scrape) & mahasiswa data (inkam) and combine them
  const combinedData = await getCombinedData();

  // Get newly updated data
  // New data in inkam but not in database
  const updatedData = await getUpdatedData(combinedData);

  // Insert data
  await insertNewData(updatedData);

  // Log updated data & combined data
  writeCombinedDataToJSON(combinedData);
  writeSeedHistoryJson(updatedData);
};

main();
