"use client";

import { DropdownFaculty } from "./dropdown-faculty";
import { DropdownMajor } from "./dropdown-major";
import { GraduateCard } from "./graduates-card";
import { GraduatuesPagination } from "./graduates-pagination";
import { GraduatesSearch } from "./graduates-search";
import { isFacultyValid, isMajorValid, isPageValid } from "./validate-filter";
import { UserPublic } from "@/types/user";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

interface GraduateViewProps {
  graduates: UserPublic[];
}

export function GraduateView({ graduates }: GraduateViewProps) {
  // Router
  const router = useRouter();

  // Get filter state from search params (READ ONLY, to mutate use router.push()
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty"); // Faculty filter
  const major = searchParams.get("major"); // Major filter
  const search = searchParams.get("search"); // Search filter
  const page = searchParams.get("page"); // Pagination state

  // Filtered graduates
  const total = graduates.length; // Total graduates from DB
  const totalPerPage = 6;
  const startIdx = (parseInt(page ?? "1") - 1) * totalPerPage; // Include start index
  const endIdx = startIdx + totalPerPage; // Exclude end index
  const filteredGraduates = graduates.filter((g) => {
    return (
      (!faculty || faculty == g.faculty) && // Faculty filter
      (!major || major == g.major) && // Major filter
      (!search || g.name.toLowerCase().includes(search.toLowerCase())) // Search filter
    );
  });
  const totalFiltered = filteredGraduates.length; // Total graduates after filtering

  // Validate filter search params everytime the data changes
  // For each params, if valid push to the array
  // After all params validated, router.push() with the new search params
  React.useEffect(() => {
    // New search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Validate faculty
    if (!isFacultyValid(faculty)) newSearchParams.delete("faculty");

    // Validate major
    if (!isMajorValid(faculty, major)) newSearchParams.delete("major");

    // Validate search
    if (!search) newSearchParams.delete("search");

    // Validate page
    if (!isPageValid(page, total, totalPerPage))
      newSearchParams.set("page", "1");

    // Push new search params to router
    router.replace(`/graduates?${newSearchParams.toString()}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faculty, major, search, page]);

  return (
    <section className="flex w-full flex-col gap-5 lg:gap-7">
      <div className="z-10 flex flex-col gap-4 lg:gap-6">
        {/* Search Input */}
        <GraduatesSearch />

        {/* Dropdowns */}
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:gap-6">
          {/* Faculty */}
          <DropdownFaculty className="w-full sm:w-40" />

          {/* Major */}
          <DropdownMajor className="w-full sm:w-56" />
        </div>
      </div>

      {/* Cards Grid */}
      {filteredGraduates.length === 0 ? (
        <div className="flex h-52 flex-col items-center justify-center gap-2 text-center text-[#F4D38E] lg:gap-4">
          <p className="font-westmeath text-xl lg:text-3xl">
            Wisudawan tidak ditemukan
          </p>
          <p className="font-cgp text-base font-semibold lg:text-xl">
            Pastikan kata kunci pencarian benar atau coba dengan kata kunci
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {filteredGraduates.slice(startIdx, endIdx).map((d) => (
            <GraduateCard graduate={d} key={d.id} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <GraduatuesPagination total={totalFiltered} totalPerPage={totalPerPage} />
    </section>
  );
}
