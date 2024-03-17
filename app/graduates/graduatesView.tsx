"use client";

import { Dropdown } from "./dropdown";
import { GraduateCard } from "./graduateCard";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const jurusan: Record<string, string[]> = {
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

const fakultas = Object.keys(jurusan);

export function GraduateView() {
  const [selectedFakultas, setSelectedFakultas] = useState<string | null>(null);
  const [selectedJurusan, setSelectedJurusan] = useState<string | null>(null);
  const [searchName, setSearchName] = useState<string | null>(null);

  const jurusanOption = selectedFakultas ? jurusan[selectedFakultas] : [];

  useEffect(() => {
    if (
      selectedFakultas &&
      selectedJurusan &&
      !(selectedJurusan in jurusan[selectedFakultas])
    )
      setSelectedJurusan(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFakultas]);

  useEffect(() => {
    console.log(searchName);
  }, [searchName]);

  return (
    <div className="py-10http://localhost:3000/graduates flex w-full flex-col gap-6 py-7">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row rounded-[1rem] border-4 border-[#F4D38E] bg-[#82080A] p-1 font-westmeath text-lg text-[#F4D38E]">
          <input
            className="ml-2 flex-grow bg-transparent placeholder-[#F4D38E] outline-none"
            placeholder="Search"
            value={searchName || ""}
            onChange={(v) => setSearchName(v.currentTarget.value)}
            spellCheck={false}
          />
          <Search className="mr-2" />
        </div>

        <div className="flex flex-row gap-5">
          <Dropdown
            onChange={(f) => setSelectedFakultas(f)}
            options={fakultas}
            value={selectedFakultas}
            placeholder={"Fakultas"}
          />
          <Dropdown
            onChange={(j) => setSelectedJurusan(j)}
            className="w-64"
            options={jurusanOption}
            value={selectedJurusan}
            placeholder={"Jurusan"}
          />
        </div>
      </div>
      <div className="flex items-start gap-6">
        <GraduateCard />
        <GraduateCard />
        <GraduateCard />
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
