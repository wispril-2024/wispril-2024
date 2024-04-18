"use client";

import { TaFairCard } from "./ta-fair-card";
import { ClientPagination } from "@/components/filter/client-pagination";
import { DropdownFaculty } from "@/components/filter/dropdown-faculty";
import { DropdownMajor } from "@/components/filter/dropdown-major";
import { SearchInput } from "@/components/filter/search";
import {
  isFacultyValid,
  isMajorValid,
  isPageValid,
} from "@/components/filter/validate-filter";
import { type TugasAkhir } from "@/types/ta";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

interface TaFairViewProps {
  taFairData: TugasAkhir[];
}

export default function TaFairView({ taFairData }: TaFairViewProps) {
  // Router
  const router = useRouter();

  // Get filter state from search params (READ ONLY, to mutate use router.push()
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty"); // Faculty filter
  const major = searchParams.get("major"); // Major filter
  const search = searchParams.get("search"); // Search filter
  const page = searchParams.get("page"); // Pagination state

  // Filtered taFairData
  const totalPerPage = 6;
  const startIdx = (parseInt(page ?? "1") - 1) * totalPerPage; // Include start index
  const endIdx = startIdx + totalPerPage; // Exclude end index
  const filteredTaFair = taFairData.filter((ta) => {
    return (
      (!faculty || faculty == ta.user.faculty) && // Faculty filter
      (!major || major == ta.user.major) && // Major filter
      (!search ||
        ta.user.name.toLowerCase().includes(search.toLowerCase()) || // Author name search
        ta.title.toLowerCase().includes(search.toLowerCase())) // Title search
    );
  });
  const total = filteredTaFair.length; // Total ta fair after filtering

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
    router.replace(`/ta-fair?${newSearchParams.toString()}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faculty, major, search, page]);

  return (
    <section className="flex w-full flex-col gap-5 lg:gap-7">
      <div className="z-10 flex flex-col gap-4 lg:gap-6">
        {/* Search Input */}
        <SearchInput data-aos="fade-up" data-aos-delay="150" />

        {/* Dropdowns */}
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:gap-6">
          {/* Faculty */}
          <DropdownFaculty
            className="w-full sm:w-40"
            data-aos="fade-up"
            data-aos-delay="200"
          />

          {/* Major */}
          <DropdownMajor
            data-aos="fade-up"
            data-aos-delay="150"
            className="w-full sm:w-56"
          />
        </div>
      </div>

      {/* Cards Grid */}
      {filteredTaFair.length === 0 ? (
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex h-52 flex-col items-center justify-center gap-2 text-center text-[#F4D38E] lg:gap-4"
        >
          <p className="font-westmeath text-xl lg:text-3xl">
            Tugas Akhir tidak ditemukan
          </p>
          <p className="font-cgp text-base font-semibold lg:text-xl">
            Pastikan kata kunci pencarian benar atau coba dengan kata kunci
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          {filteredTaFair.slice(startIdx, endIdx).map((d, idx) => (
            <TaFairCard
              taFairData={d}
              key={d.id}
              data-aos="fade-up"
              data-aos-delay={idx == 0 ? "200" : "0"}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <ClientPagination
        total={total}
        totalPerPage={totalPerPage}
        data-aos="fade-up"
      />
    </section>
  );
}
