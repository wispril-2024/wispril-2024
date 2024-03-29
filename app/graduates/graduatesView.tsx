"use client";

import { CardDetails } from "./cardDetails";
import { programs, faculties } from "./data";
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
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export type Graduate = {
  id: string;
  name: string;
  program: string;
  faculty: string;
};

const generateGraduates = () =>
  new Array(20).fill(null).map((_, i) => {
    const faculties = Object.keys(programs);
    const facultyIdx = Math.floor(Math.random() * (faculties.length - 1));
    const programIdx = Math.floor(
      Math.random() * (programs[faculties[facultyIdx]].length - 1)
    );
    return {
      id: Math.random().toString(),
      name: `Test ${i}`,
      faculty: faculties[facultyIdx],
      program: programs[faculties[facultyIdx]][programIdx],
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
  if (props.size == 0) return null;
  const dispatch = props.onChange || (() => {});
  return (
    <Pagination>
      <PaginationContent className="z-10 select-none">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => dispatch(Math.max(props.current - 1, 1))}
          />
        </PaginationItem>
        {new Array(props.size).fill(null).map((_, i) => (
          <PaginationItem key={i}>
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
          <PaginationNext
            onClick={() => dispatch(Math.min(props.current + 1, props.size))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function GraduateView() {
  const size = useSize();
  const [detail, setDetail] = useState<Graduate | null>(null);
  const [selectedFaculty, setSelectedFaculties] = useState<string | null>(null);
  const [selectedProgram, setSelectedPrograms] = useState<string | null>(null);
  const [graduates, setGraduates] = useState<Graduate[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);

  const preferredWidth = size.width > 700 ? 350 : 250;
  const columnCount = Math.min(
    Math.max(Math.floor(size.width / preferredWidth), 1),
    3
  );
  const itemPerPage = columnCount * 3;

  const [page, setPage] = useState<number>(1);

  const programOptions = selectedFaculty ? programs[selectedFaculty] : [];
  const graduatesMatch = graduates.filter((g) => {
    return (
      (selectedFaculty == null || selectedFaculty == g.faculty) &&
      (selectedProgram == null || selectedProgram == g.program) &&
      (searchName == null ||
        g.name.toLowerCase().includes(searchName.toLowerCase()))
    );
  });

  useEffect(() => {
    const g = generateGraduates();
    setGraduates(g);
    // setDetail(g[0]);
  }, []);

  useEffect(() => {
    if (
      selectedFaculty &&
      selectedProgram &&
      !(selectedProgram in programs[selectedFaculty])
    )
      setSelectedPrograms(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFaculty]);

  useEffect(() => {
    if (detail != null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [detail]);

  return (
    <div className="flex w-full max-w-6xl flex-col gap-6 py-7">
      <CardDetails data={detail} onClose={() => setDetail(null)} />
      <div className="z-10 flex flex-col gap-3">
        <div className="flex h-11 flex-row rounded-[1rem] border-4 border-[#F4D38E] bg-[#82080A] font-westmeath text-lg text-[#F4D38E]">
          <input
            className="ml-2 flex-grow bg-transparent placeholder-[#F4D38E] outline-none"
            placeholder="Search"
            value={searchName || ""}
            onChange={(v) => setSearchName(v.currentTarget.value)}
            spellCheck={false}
          />
          <Search className="my-auto mr-2" />
        </div>

        <div className="flex flex-row flex-wrap gap-5">
          <Dropdown
            onChange={(f) => {
              if (f == "All") setSelectedFaculties(null);
              else setSelectedFaculties(f);
            }}
            options={["All", ...faculties]}
            value={selectedFaculty}
            placeholder={"Fakultas"}
          />
          {selectedFaculty != null ? (
            <Dropdown
              onChange={(f) => {
                if (f == "All") setSelectedPrograms(null);
                else setSelectedPrograms(f);
              }}
              className={cn(
                "w-64",
                selectedFaculty ? "animate-in fade-in" : "animate-out fade-out"
              )}
              options={["All", ...programOptions]}
              value={selectedProgram}
              placeholder={"Jurusan"}
            />
          ) : null}
        </div>
      </div>
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        }}
      >
        {graduatesMatch
          .slice((page - 1) * itemPerPage, page * itemPerPage)
          .map((d) => (
            <GraduateCard data={d} key={d.id} onClick={() => setDetail(d)} />
          ))}
      </div>
      <GraduatePagination
        size={Math.ceil(graduatesMatch.length / itemPerPage)}
        current={page}
        onChange={(p) => setPage(p)}
      />
    </div>
  );
}
