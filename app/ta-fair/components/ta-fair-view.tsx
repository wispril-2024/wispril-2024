"use client";

import { programs, faculties } from "../lib/data";
import { TA } from "../lib/model";
import { GenerateTA } from "../lib/util";
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
import { useState, useEffect } from "react";

export function TAFairPagination(props: {
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

export default function TAFairView() {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [selectedPrograms, setSelectedPrograms] = useState<string | null>(null);
  const [listTA, setListTA] = useState<TA[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const itemNumber = 4;
  const programOptions = selectedFaculty ? programs[selectedFaculty] : [];
  const selectedTAs = listTA.filter((g) => {
    return (
      (selectedFaculty == null || selectedFaculty == g.faculty) &&
      selectedFaculty
    );
  });
}
