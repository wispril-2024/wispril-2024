"use client";

import { DropdownFaculty } from "./dropdown-faculty";
import { DropdownMajor } from "./dropdown-major";
import { GraduateCard } from "./graduates-card";
import { GraduatuesPagination } from "./graduates-pagination";
import { GraduatesSearch } from "./graduates-search";
import { faculties, facultiesMajorsMap } from "@/lib/faculty-major";
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

  // Pagination
  const total = graduates.length;
  const totalPerPage = 6;
  const startIdx = (parseInt(page ?? "1") - 1) * totalPerPage;
  const endIdx = startIdx + totalPerPage;

  // Validate filter search params everytime the data changes
  // For each params, if valid push to the array
  // After all params validated, router.push() with the new search params
  React.useEffect(() => {
    // New search params
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Validate faculty
    if (faculty && !(faculties as unknown as string[]).includes(faculty))
      newSearchParams.delete("faculty");

    // Validate major
    if (
      !faculty || // Faculty doesnt exist OR
      (faculty && // Faculty exists
        !(faculties as unknown as string[]).includes(faculty) && // Faculty is not in the list
        major && // Major exists
        !(facultiesMajorsMap as unknown as Record<string, string>)[
          faculty
        ].includes(major)) // Major is not in the list
    )
      newSearchParams.delete("major");

    // Validate page
    if (
      page && // Page exists
      (isNaN(parseInt(page)) || // Check if page is a number
        parseInt(page) <= 0 || // Check if page is greater than 0
        parseInt(page) > Math.ceil(total / totalPerPage)) // Check if page is less than or equal to the last page
    )
      newSearchParams.set("page", "1");

    // Push new search params to router
    router.push(`/graduates?${newSearchParams.toString()}`);
  }, [faculty, major, page, total, totalPerPage, router, searchParams]);

  // Filtered graduates
  const filteredGraduates = graduates.slice(startIdx, endIdx).filter((g) => {
    return (
      (!faculty || faculty == g.faculty) && // Faculty filter
      (!major || major == g.major) && // Major filter
      (!search || g.name.toLowerCase().includes(search.toLowerCase())) // Search filter
    );
  });

  return (
    <section className="flex w-full flex-col gap-5 lg:gap-7">
      <div className="z-10 flex flex-col gap-4 lg:gap-6">
        {/* Search Input */}
        <GraduatesSearch />

        {/* Dropdowns */}
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:gap-6">
          {/* Faculty */}
          <DropdownFaculty className="w-full sm:w-36" />

          {/* Major */}
          <DropdownMajor className="w-full sm:w-56" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {filteredGraduates.map((d) => (
          <GraduateCard graduate={d} key={d.id} />
        ))}
      </div>

      {/* Pagination */}
      <GraduatuesPagination total={total} totalPerPage={totalPerPage} />
    </section>
  );
}
