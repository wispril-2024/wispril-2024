"use client";

import { programs, faculties } from "../lib/data";
import { TA } from "../lib/model";
import { generateTA } from "../lib/util";
import { Dropdown } from "./dropdown";
import { TAFairPagination } from "./pagination";
import { SearchTA } from "./search";
import { TACard } from "./ta-card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function TAFairView() {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [listTA, setListTA] = useState<TA[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchName, setSearchName] = useState<string | null>(null);

  const router = useRouter();

  const itemNumber = 4;
  const programOptions = selectedFaculty ? programs[selectedFaculty] : [];
  const selectedTAs = listTA.filter((g) => {
    return (
      (selectedFaculty == null || selectedFaculty == g.faculty) &&
      (selectedProgram == null || selectedProgram == g.program) &&
      (searchName == null ||
        g.name.toLowerCase().includes(searchName.toLowerCase()) ||
        g.title.toLowerCase().includes(searchName.toLowerCase()))
    );
  });

  useEffect(() => {
    const ta = generateTA();
    setListTA(ta);
  }, []);

  useEffect(() => {
    if (
      selectedFaculty &&
      selectedProgram &&
      !(selectedProgram in programs[selectedFaculty])
    )
      setSelectedProgram(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFaculty]);

  return (
    <div className="flex w-full max-w-6xl flex-col gap-6 py-12">
      {/* Search and Filter */}
      <div className="z-10 flex flex-col gap-4 lg:gap-5">
        {/* Search */}
        <SearchTA setSearchName={setSearchName} searchName={searchName} />
        {/* Filter */}
        <div className="flex flex-row gap-3">
          <Dropdown
            onChange={(f) => {
              if (f == "All") setSelectedFaculty(null);
              else setSelectedFaculty(f);
              setPageNumber(1);
            }}
            options={["All", ...faculties]}
            value={selectedFaculty}
            placeholder="Fakultas"
            className="w-72"
          />
          {selectedFaculty && (
            <Dropdown
              onChange={(f) => {
                if (f == "All") setSelectedProgram(null);
                else setSelectedProgram(f);
                setPageNumber(1);
              }}
              className={cn(
                "w-96",
                selectedFaculty ? "animate-in fade-in" : "animate-out fade-out"
              )}
              options={["All", ...programOptions]}
              value={selectedProgram}
              placeholder={"Jurusan"}
            />
          )}
        </div>
      </div>

      {/* TA Fair Cards */}
      <div className="flex flex-col items-center">
        {selectedTAs
          .slice((pageNumber - 1) * itemNumber, pageNumber * itemNumber)
          .map((d) => (
            <div key={d.id}>
              <TACard
                taData={d}
                onClick={() => router.push(`ta-fair/${d.id}`)}
              />
            </div>
          ))}
      </div>

      {/* Pagination */}
      <TAFairPagination
        size={Math.ceil(selectedTAs.length / itemNumber)}
        current={pageNumber}
        onChange={(p) => setPageNumber(p)}
      />
    </div>
  );
}
