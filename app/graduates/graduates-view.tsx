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

const useSize = () => {
  const [size, setSize] = React.useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const fn = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", fn);
    fn();
    return () => window.removeEventListener("resize", fn);
  }, []);

  return size;
};

interface GraduateViewProps {
  graduates: UserPublic[];
}

export function GraduateView({ graduates }: GraduateViewProps) {
  // Router
  const router = useRouter();

  // Get window size
  const size = useSize();
  const preferredWidth = size.width > 700 ? 350 : 250;
  const columnCount = Math.min(
    Math.max(Math.floor(size.width / preferredWidth), 1),
    3
  );

  // Get filter state from search params (READ ONLY, to mutate use router.push()
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty"); // Faculty filter
  const major = searchParams.get("major"); // Major filter
  const search = searchParams.get("search"); // Search filter
  const page = searchParams.get("page"); // Pagination state

  // Pagination
  const total = graduates.length;
  const totalPerPage = columnCount * 3;
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
    <section className="flex w-full max-w-6xl flex-col gap-6 py-7">
      <div className="z-10 flex flex-col gap-4 lg:gap-6">
        {/* Search Input */}
        <GraduatesSearch />

        {/* Dropdowns */}
        <div className="flex flex-row flex-wrap gap-4 lg:gap-6">
          {/* Faculty */}
          <DropdownFaculty />

          {/* Major */}
          <DropdownMajor />
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
