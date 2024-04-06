export const programs: Record<string, string[]> = {
  FITB: [
    "Meteorologi",
    "Oseanografi",
    "Teknik Geodesi dan Geomatika",
    "Teknik Geologi",
  ],
  FMIPA: ["Aktuaria", "Astronomi", "Fisika", "Kimia", "Matematika"],
  FSRD: [
    "Desain Interior",
    "Desain Komunikasi Visual",
    "Desain Produk",
    "Kriya",
    "Seni Rupa",
  ],
  FTMD: ["Teknik Dirgantara", "Teknik Material", "Teknik Mesin"],
  FTTM: [
    "Teknik Geofisika",
    "Teknik Metalurgi",
    "Teknik Perminyakan",
    "Teknik Pertambangan",
  ],
  FTSL: [
    "Rekayasa Infrastruktur Lingkungan",
    "Teknik dan Pengelolaan Sumber Daya Air",
    "Teknik Kelautan",
    "Teknik Lingkungan",
    "Teknik Sipil",
  ],
  FTI: [
    "Manajemen Rekayasa Industri",
    "Teknik Bioenergi dan Kemurgi",
    "Teknik Fisika",
    "Teknik Industri",
    "Teknik Kimia",
    "Teknik Pangan",
  ],
  SAPPK: ["Arsitektur", "Perencanaan Wilayah dan Kota"],
  SBM: ["Kewirausahaan", "Manajemen"],
  SF: ["Farmasi Klinik dan Komunitas", "Sains dan Teknologi Farmasi"],
  SITH: [
    "Biologi",
    "Mikrobiologi",
    "Rekayasa Hayati",
    "Rekayasa Pertanian",
    "Rekayasa Kehutanan",
    "Teknologi Pascapanen",
  ],
  STEI: [
    "Sistem dan Teknologi Informasi",
    "Teknik Biomedis",
    "Teknik Elektro",
    "Informatika",
    "Teknik Telekomunikasi",
    "Teknik Tenaga Listrik",
  ],
};

export const faculties = Object.keys(programs);
