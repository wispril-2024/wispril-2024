"use client";

import { Dropdown } from "./dropdown";
import { GraduateCard } from "./graduateCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function GraduateView() {
  return (
    <div className="py-10http://localhost:3000/graduates flex w-full flex-col gap-6">
      <div className="flex flex-row gap-5">
        <Dropdown options={["FTI", "STEI"]} placeholder="Fakultas" />
        <Dropdown options={["A", "B"]} placeholder="Jurusan" />
      </div>
      <div className="flex items-start gap-6">
        <GraduateCard />
        <GraduateCard />
        <GraduateCard />
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
