import fs from "fs";
import { JSDOM } from "jsdom";

export interface ScrapeData {
  name: string;
  nim: string;
  professors: string[];
  type: "Tugas Akhir" | "Tesis" | "Disertasi" | ""; // Cari yang Tugas Akhir
  major: string;
  faculty: string;
  subject: string;
  keywords: string[];
  source: string;
  staffInput: string;
  dateInput: string;
  title: string;
  abstract: string;
  link: string;
  params: string;
  // story: string Gak ada di website
}

const targetUrlScrape = "https://digilib.itb.ac.id/gdl/view/";

// id: https://digilib.itb.ac.id/gdl/view/[id]
export const getScrapeData = async (id: string): Promise<ScrapeData> => {
  // Create url
  const url = targetUrlScrape + id;
  const res = await fetch(url);

  const emptyData: ScrapeData = {
    name: "",
    nim: "",
    professors: [""],
    type: "",
    major: "",
    faculty: "",
    subject: "",
    keywords: [""],
    source: "",
    staffInput: "",
    dateInput: "",
    title: "",
    abstract: "",
    link: url,
    params: id,
  };

  // Page is redirected
  if (res.status != 200) {
    console.log(url);
    return emptyData;
  }

  const html = await res.text();

  // Initialize jsdom
  const dom = new JSDOM(html);

  const table = dom.window.document.querySelector("tbody");
  if (!table) {
    console.log(url);
    return emptyData;
  }

  // Nama & Nim
  // tr 1, td 3z
  const nameAndNim =
    table.querySelector("tr:nth-child(1) td:nth-child(3)")?.textContent || "-";

  // Nama [NIM]
  const name = (nameAndNim.split(" [")[0] ?? "")
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");
  const nim = (nameAndNim.split(" [")[1] ?? "")
    .replace("]", "")
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Dosen Pembimbing
  // tr 2, td 3, td, ul, li
  const professors = Array.from(
    table.querySelector("tr:nth-child(2) td:nth-child(3) ul")?.children || []
  )
    .map((li) => li.textContent || "-")
    .map((professor) => professor.trim().replace(/(\r\n|\n|\r)/gm, ""));

  // Jenis
  // tr 3, td 3
  const type = (
    table.querySelector("tr:nth-child(3) td:nth-child(3)")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Program Studi
  // tr 4, td 3
  const major = (
    table.querySelector("tr:nth-child(4) td:nth-child(3)")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Fakultas
  // tr 5, td 3
  const faculty = (
    table.querySelector("tr:nth-child(5) td:nth-child(3)")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Subject
  // tr 6, td 3
  const subject = (
    table.querySelector("tr:nth-child(6) td:nth-child(3)")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Keywords
  // tr 7, td 3
  const keywords = (
    table.querySelector("tr:nth-child(7) td:nth-child(3)")?.textContent || "-"
  )
    .split(", ")
    .map((keyword) => keyword.trim().replace(/(\r\n|\n|\r)/gm, ""));

  // Sumber
  // tr 8, td 3
  const source = (
    table.querySelector("tr:nth-child(8) td:nth-child(3)")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Staff Input
  // tr 9, td 3
  const staffInput = (
    table.querySelector("tr:nth-child(9) td:nth-child(3)")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Tanggal Input
  // tr 11, td 3
  const dateInput = (
    table.querySelector("tr:nth-child(11) td:nth-child(3)")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Judul
  // class "entry-title"
  const title = (
    dom.window.document.querySelector(".entry-title")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Abstrak
  // id "pills1-tab2"
  const abstract = (
    dom.window.document.querySelector("#pills1-tab2")?.textContent || "-"
  )
    .trim()
    .replace(/(\r\n|\n|\r)/gm, "");

  // Link
  const link = url;

  const data: ScrapeData = {
    name,
    nim,
    professors,
    type: type as ScrapeData["type"],
    major,
    faculty,
    subject,
    keywords,
    source,
    staffInput,
    dateInput: dateInput,
    title,
    abstract,
    link,
    params: id,
  };

  console.log("finished", url);

  return data;
};

const printScrapeData = async (scrapeData: ScrapeData) => {
  console.log("Name:", scrapeData.name);
  console.log("NIM:", scrapeData.nim);
  console.log("Professors:", scrapeData.professors);
  console.log("Type:", scrapeData.type);
  console.log("Major:", scrapeData.major);
  console.log("Faculty:", scrapeData.faculty);
  console.log("Subject:", scrapeData.subject);
  console.log("Keywords:", scrapeData.keywords);
  console.log("Source:", scrapeData.source);
  console.log("Staff Input:", scrapeData.staffInput);
  console.log("Date Input:", scrapeData.dateInput);
  console.log("Title:", scrapeData.title);
  console.log("Abstract:", scrapeData.abstract);
  console.log("Link:", scrapeData.link);
};

const writeScrapeDataCSV = async (data: ScrapeData[]) => {
  let csv =
    "name;nim;professors;type;major;faculty;subject;keywords;source;staffInput;dateInput;title;abstract;link;params\n";

  for (const d of data) {
    csv += `"${d.name}";"${d.nim}";"${d.professors.join(", ")}";"${d.type}";"${
      d.major
    }";"${d.faculty}";"${d.subject}";"${d.keywords.join(", ")}";"${
      d.source
    }";"${d.staffInput}";"${d.dateInput}";"${d.title}";"${d.abstract}";"${
      d.link
    }";"${d.params}"\n`;
  }

  fs.writeFileSync("./db/seed/production/ta/scrape.csv", csv);
};

// const main = async () => {
//   // const minId = 78000;
//   // const maxId = 81138;

//   // PHASE 1
//   // const minId = 78000;
//   // const maxId = 80000;

//   // PHASE 2
//   const minId = 80001;
//   const maxId = 81138;

//   // Parallelize the scraping
//   const promises: Promise<ScrapeData>[] = [];
//   for (let i = minId; i <= maxId; i++) {
//     promises.push(
//       new Promise<ScrapeData>((resolve) =>
//         setTimeout(
//           () => resolve(getScrapeData(i.toString())),
//           (i - minId) * 250 // Prevent spam
//         )
//       )
//     );
//   }

//   // Wait for all the promises to resolve
//   const results = await Promise.all(promises);

//   // Write the results to a CSV file
//   await writeScrapeDataCSV(results);
// };

// main();
