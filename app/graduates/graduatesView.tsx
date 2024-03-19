"use client";

import { CardDetails } from "./cardDetails";
import { Dropdown } from "./dropdown";
import { GraduateCard } from "./graduateCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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

export type Graduate = {
  id: string;
  name: string;
  program: string;
  faculty: string;
};

const wisudawan: Graduate[] = new Array(20).fill(null).map((_, i) => {
  return {
    id: Math.random().toString(),
    name: `Test ${i}`,
    program: "Underwater Basket Weaving",
    faculty: "C",
  };
});

const useSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const fn = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", fn);
    fn();
    return () => window.removeEventListener("resize", fn);
  }, []);

  return size;
};

export function GraduatePagination(props: {
  size: number;
  current: number;
  onChange?: (v: number) => void;
}) {
  const dispatch = props.onChange || (() => {});
  return (
    <Pagination>
      <PaginationContent className="select-none">
        <PaginationItem>
          <PaginationPrevious onClick={() => dispatch(props.current - 1)} />
        </PaginationItem>
        {new Array(props.size).fill(null).map((_, i) => (
          <PaginationItem>
            <PaginationLink
              onClick={() => dispatch(i + 1)}
              className={
                props.current == i + 1
                  ? "border-[#B87D12] bg-[#F4D38E] text-[#B87D12]"
                  : ""
              }
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => dispatch(props.current + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function GraduateView() {
  const size = useSize();
  const [open, setOpen] = useState<Graduate | null>(null);
  const [selectedFakultas, setSelectedFakultas] = useState<string | null>(null);
  const [selectedJurusan, setSelectedJurusan] = useState<string | null>(null);
  const [searchName, setSearchName] = useState<string | null>(null);

  const itemPerPage = 9;
  const [page, setPage] = useState<number>(1);

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
    if (open != null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <div className="py-10http://localhost:3000/graduates flex w-full flex-col gap-6 py-7">
      {open
        ? createPortal(
            <CardDetails data={open} onClose={() => setOpen(null)} />,
            document.body
          )
        : null}
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
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(${Math.floor(size.width / 250)}, 1fr)`,
        }}
      >
        {wisudawan
          .slice((page - 1) * itemPerPage, page * itemPerPage)
          .map((d) => (
            <GraduateCard data={d} key={d.id} onClick={() => setOpen(d)} />
          ))}
      </div>
      <GraduatePagination
        size={Math.ceil(wisudawan.length / itemPerPage)}
        current={page}
        onChange={(p) => setPage(p)}
      />
    </div>
  );
}
