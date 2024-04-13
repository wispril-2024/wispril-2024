"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useDebouncedCallback } from "use-debounce";

const GraduatesSearch = () => {
  // Router
  const router = useRouter();

  // READONLY search params
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Debounce search input **ONCHANGE**
  const debounced = useDebouncedCallback((value) => {
    //  Get all search params
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Set search param
    if (value) {
      newSearchParams.set("search", value);
    } else {
      newSearchParams.delete("search");
    }

    // Push new search params
    router.replace(`/graduates?${newSearchParams.toString()}`);
  }, 500);

  return (
    <div className="flex h-12 flex-row rounded-xl border-4 border-[#F4D38E] bg-[#82080A] font-cgp text-base font-semibold text-[#F4D38E]">
      <input
        className="ml-4 mr-2 flex-grow bg-transparent placeholder-[#F4D38E] outline-none"
        placeholder="Cari wisudawan"
        defaultValue={search ?? ""}
        onChange={(v) => debounced(v.target.value)}
        spellCheck={false}
      />
      <Search className="my-auto mr-4" />
    </div>
  );
};

export { GraduatesSearch };
