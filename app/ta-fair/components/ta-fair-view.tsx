"use client";

import { programs, faculties } from "../lib/data";
import { DummyData } from "../lib/data";
import { Dropdown } from "./dropdown";
import { TAFairPagination } from "./pagination";
import { SearchTA } from "./search";
import { TACard } from "./ta-card";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function TAFairView() {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchName, setSearchName] = useState<string | null>(null);

  const itemNumber = 4;
  const programOptions = selectedFaculty ? programs[selectedFaculty] : [];
  const selectedTAs = DummyData.filter((g) => {
    return (
      (selectedFaculty == null || selectedFaculty == g.faculty) &&
      (selectedProgram == null || selectedProgram == g.program) &&
      (searchName == null ||
        g.name.toLowerCase().includes(searchName.toLowerCase()) ||
        g.title.toLowerCase().includes(searchName.toLowerCase()))
    );
  });

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
    <div className="flex w-full max-w-6xl flex-col gap-6 py-6 lg:py-12">
      {/* Search and Filter */}
      <div className="z-10 flex flex-col gap-2 md:gap-4 lg:gap-5">
        {/* Search */}
        <SearchTA setSearchName={setSearchName} searchName={searchName} />
        {/* Filter */}
        <div className="flex flex-row flex-wrap gap-4 lg:gap-6">
          <Dropdown
            onChange={(f) => {
              if (f == "All") setSelectedFaculty(null);
              else setSelectedFaculty(f);
              setPageNumber(1);
            }}
            options={["All", ...faculties]}
            value={selectedFaculty}
            placeholder="Fakultas"
            className="w-40"
          />
          {selectedFaculty && (
            <Dropdown
              onChange={(f) => {
                if (f == "All") setSelectedProgram(null);
                else setSelectedProgram(f);
                setPageNumber(1);
              }}
              className={cn(
                "w-48 sm:w-52",
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
              <TACard taData={d} />
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
