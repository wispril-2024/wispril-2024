// Dibutuhkan mekanisme agar mudah untuk update data ke database
// 1. Ambil semua data dari sheets inkam (utk data wisudawan)
// 2. Ambil data dari scrape-ta utk data taFair
// 3. Ambil semua data di DB (user & taFair)
// 4.  Bandingkan dengan data yang ada di database. Jika ada data yang baru, update database.
// Setiap kali data dbaru ditambahkan, bikin juga log csv data2 apa saja yang ditambahkan
// Validasi data dengan ZOD agar data yang diinput sesuai dengan yang diinginkan
import { facultiesMajorsMap } from "@/lib/faculty-major";
import fs from "fs";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

const spreadSheetZonaBaratDaya = "1o3fms5hFi1_KQ32oAY68fDpLeYz6Ki276luET7dyVCs";
const sheetIdHimafi = "0";
const sheetIdImtSignum = "1864188376";
const sheetIdHms = "1088680715";
const sheetIDKMKL = "1863738183";
const sheetIDHMM = "1008251394";
const sheetIDKMPN = "281242492";
const sheetIDMTI = "3378731";

const spreadSheetZonaBaratLaut = "1ixoOzXRMd1L_kcC3yfG0Hk4LsAwzzApXS9PMdgBJ7xo";
const sheetIdHimabio = "0";
const sheetIdMtm = "1668353029";
const sheetIdHMME = "471048781";
const sheetIdHmo = "204142471";
const sheetIdHimatek = "1611871743";
const sheetIdKmsr = "172164163";
const sheetIdKmm = "265059410";
const sheetIdHimamikro = "1251586271";

const spreadSheetZonaTimur = "1hlbfQ0xTqXZPQNUa_S5453AKSHMtcF9h7fjdWbBbzW0";
const sheetIdHimatika = "0";
const sheetIdHimastron = "669762581";
const sheetIdAmisca = "444378802";
const sheetIdHmtg = "1900083134";
const sheetIdPatra = "249225571";
const sheetIdHmt = "1204375697";
const sheetIdHimaTG = "2046722016";
const sheetIdIMGG = "1292360537";
const sheetIdHMFT = "438199349";

const spreadSheetZonaTenggara = "1SGsVxbVZftPpilMwjJFQ_xmP5yuDd_e6A9_-CIOX8GM";
const sheetIdIMG = "0";
const sheetIdHmtl = "238716285";
const sheetIdHMF = "1631213171";
const sheetIdHME = "1214042382";
const sheetIdIMAG = "965759478";
const sheetIdHMIF = "1493116291";
const sheetIdHMP = "600069044";

const spreadSheetJatinangor = "1G000d7ffp339Cnj4z6pNyBgazC9stZM8NPT6Np67JXA";
const sheetIdJgHMH = "0";
const sheetIdJgKMIL = "1947352539";
const sheetIdJgHmpg = "257634219";
const sheetIdJgHmpp = "929762628";
const sheetIdJgHmtb = "1561437720";
const sheetIdJgHimasda = "720760738";
const sheetIdJgHmrh = "252251758";
const sheetIdJgHimarekta = "1606647747";
const sheetIdJgIMK = "327587308";

const spreadSheetCirebon = "1_iu-h1Jp8n_XAAj_lSpnS3K4Fk5VndKNKBxkSGZQc3c";
const sheetIdCrbMTI = "0";
const sheetIdCrbHMPPL = "1572430639";
const sheetIdCrbTerikat = "1257505238";
const sheetIdCrbHimaTG = "1437556913";

const spreadSheets: string[] = [
  spreadSheetZonaBaratDaya,
  spreadSheetZonaBaratLaut,
  spreadSheetZonaTimur,
  spreadSheetZonaTenggara,
  spreadSheetJatinangor,
  spreadSheetCirebon,
];

const spreadSheetMap: Record<string, string[]> = {
  [spreadSheetZonaBaratDaya]: [
    sheetIdHimafi,
    sheetIdImtSignum,
    sheetIdHms,
    sheetIDKMKL,
    sheetIDHMM,
    sheetIDKMPN,
    sheetIDMTI,
  ],
  [spreadSheetZonaBaratLaut]: [
    sheetIdHimabio,
    sheetIdMtm,
    sheetIdHMME,
    sheetIdHmo,
    sheetIdHimatek,
    sheetIdKmsr,
    sheetIdKmm,
    sheetIdHimamikro,
  ],
  [spreadSheetZonaTimur]: [
    sheetIdHimatika,
    sheetIdHimastron,
    sheetIdAmisca,
    sheetIdHmtg,
    sheetIdPatra,
    sheetIdHmt,
    sheetIdHimaTG,
    sheetIdIMGG,
    sheetIdHMFT,
  ],
  [spreadSheetZonaTenggara]: [
    sheetIdIMG,
    sheetIdHmtl,
    sheetIdHMF,
    sheetIdHME,
    sheetIdIMAG,
    sheetIdHMIF,
    sheetIdHMP,
  ],
  [spreadSheetJatinangor]: [
    sheetIdJgHMH,
    sheetIdJgKMIL,
    sheetIdJgHmpg,
    sheetIdJgHmpp,
    sheetIdJgHmtb,
    sheetIdJgHimasda,
    sheetIdJgHmrh,
    sheetIdJgHimarekta,
    sheetIdJgIMK,
  ],
  [spreadSheetCirebon]: [
    sheetIdCrbMTI,
    sheetIdCrbHMPPL,
    sheetIdCrbTerikat,
    sheetIdCrbHimaTG,
  ],
};

const nimMajorMap: Record<string, string> = {
  // FMIPA
  "101": "Matematika",
  "102": "Fisika",
  "103": "Astronomi",
  "105": "Kimia",
  "108": "Aktuaria",
  // SITH
  "104": "Mikrobiologi",
  "106": "Biologi",
  "112": "Rekayasa Hayati",
  "114": "Rekayasa Pertanian",
  "115": "Rekayasa Kehutanan",
  "119": "Teknologi Pasca Panen",
  // SF
  "107": "Sains dan Teknologi Farmasi",
  "116": "Farmasi Klinik dan Komunitas",
  // FTTM
  "121": "Teknik Pertambangan",
  "122": "Teknik Perminyakan",
  "123": "Teknik Geofisika",
  "125": "Teknik Metalurgi",
  // FITB
  "120": "Teknik Geologi",
  "128": "Meteorologi",
  "129": "Oseanografi",
  "151": "Teknik Geodesi dan Geomatika",
  // FTI
  "130": "Teknik Kimia",
  "133": "Teknik Fisika",
  "134": "Teknik Industri",
  "143": "Teknik Pangan",
  "144": "Manajemen Rekayasa Industri",
  "145": "Teknik Bioenergi dan Kemurgi",
  // STEI
  "132": "Teknik Elektro",
  "135": "Teknik Informatika",
  "180": "Teknik Tenaga Listrik",
  "181": "Teknik Telekomunikasi",
  "182": "Sistem dan Teknologi Informasi",
  "183": "Teknik Biomedis",
  // FTMD
  "131": "Teknik Mesin",
  "136": "Teknik Dirgantara",
  "137": "Teknik Material",
  // FTSL
  "150": "Teknik Sipil",
  "153": "Teknik Lingkungan",
  "155": "Teknik Kelautan",
  "157": "Rekayasa Infrastruktur Lingkungan",
  "158": "Teknik dan Pengelolaan Sumber Daya Air",
  // SAPPK
  "152": "Arsitektur",
  "154": "Perencanaan Wilayah dan Kota",
  // FSRD
  "170": "Seni Rupa",
  "172": "Kriya",
  "173": "Desain Interior",
  "174": "Desain Komunikasi Visual",
  "175": "Desain Produk",
  // SBM
  "190": "Manajemen",
  "192": "Kewirausahaan",
};

// Dapatkan fakultas dari NIM (karena banyak yang kosong & tidak sesuai format Enum kita)
const getMajorFromNIM = (nim: string) => {
  const first3Digit = nim.slice(0, 3);
  return nimMajorMap[first3Digit];
};

// Dapatkan fakultas dari nim (karena banyak yang kosong & tidak sesuai format Enum kita)
const getFacultyFromNIM = (nim: string) => {
  const major = getMajorFromNIM(nim);

  // Find major in facultiesMajorsMap
  for (const faculty in facultiesMajorsMap) {
    if (facultiesMajorsMap[faculty].includes(major)) {
      return faculty;
    }
  }

  console.log("FACULTY NOT FOUND (MAJOR, NIM) = ", major, nim); // Ada data yg gk sesuai sama enum
  return "";
};

interface DataWisudaInkam {
  // Intrested data
  name: string;
  nim: string;
  faculty: string;
  major: string;
}

// Still updated continously
export const getDataWisudaInkam = async (): Promise<DataWisudaInkam[]> => {
  const promiseInkamParser: Promise<any[]>[] = [];

  // Loop through all spreadSheets
  for (const spreadSheet of spreadSheets) {
    const sheetIds = spreadSheetMap[spreadSheet];
    for (const sheetId of sheetIds) {
      // Parser
      const parser = new PublicGoogleSheetsParser(spreadSheet, {
        sheetId: sheetId,
      });

      // Get data
      const promise = parser.parse();

      // Push to promise
      promiseInkamParser.push(promise);
    }
  }

  // Get all data
  const allData = await Promise.all(promiseInkamParser);

  const dataWisudaInkam: DataWisudaInkam[] = [];

  // Olah data
  for (const data of allData) {
    for (const row of data) {
      const namaLengkap = String(row["NAMA LENGKAP"] || "");
      const nim = String(row["NIM"] || "");

      // Skip if nim or fullname is empty
      if (!nim || !namaLengkap) {
        console.log("NO DATA", row);
        break;
      }

      // Get fakultas from nim
      const faculty = getFacultyFromNIM(nim);
      const major = getMajorFromNIM(nim);

      // Push to dataWisudaInkam
      dataWisudaInkam.push({
        name: namaLengkap,
        nim: nim,
        faculty: faculty,
        major: major,
      });
    }
  }

  return dataWisudaInkam;
};

// LANGSUNG DI COMBINED!
// const writeDataWisudaInkamToCSV = (dataWisudaInkam: DataWisudaInkam[]) => {
//   const csvData = dataWisudaInkam.map((data) => {
//     return `${data.name},${data.nim},${data.faculty},${data.major}`;
//   });
//   const csvString = csvData.join("\n");

//   const date = new Date().getTime();
//   const filePath = `db/seed/production/inkam/inkam-${date}.csv`;

//   fs.writeFileSync(filePath, csvString);
// };

// const writeDataWisudawanInkamToJSON = (dataWisudaInkam: DataWisudaInkam[]) => {
//   const date = new Date().getTime();
//   const filePath = `db/seed/production/inkam/inkam-${date}.json`;
//   fs.writeFileSync(filePath, JSON.stringify(dataWisudaInkam, null, 2));
// };

// const main = async () => {
//   const data = await getDataWisudaInkam();
//   writeDataWisudaInkamToCSV(data);
//   writeDataWisudawanInkamToJSON(data);
// };

// main();
