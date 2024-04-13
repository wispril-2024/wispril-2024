"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { faculties } from "@/lib/faculty-major";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

interface DropdownFacultyProps {
  className?: string;
}

// FOR /graduates AND /ta-fair PAGE
export function DropdownFaculty({ className }: DropdownFacultyProps) {
  // Pathname
  const pathname = usePathname();

  // Router
  const router = useRouter();

  // Open / close state
  const [open, setOpen] = React.useState(false);

  // Options
  const options = ["Semua", ...faculties] as const;

  // Get faculty from search params
  const searchParams = useSearchParams();
  const faculty = searchParams.get("faculty");
  const selected = faculty || "Fakultas";

  // On select
  const onSelect = (faculty: (typeof options)[number]) => {
    // New search params
    const newSearchParams = new URLSearchParams(searchParams);

    // Set faculty
    if (faculty == "Semua") {
      newSearchParams.delete("faculty");
    } else {
      newSearchParams.set("faculty", faculty);
    }
    newSearchParams.delete("major"); // Remove major if faculty changed

    // Push new search params
    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <DropdownMenu modal={false} onOpenChange={(o) => setOpen(o)}>
      <DropdownMenuTrigger className="outline-none">
        <div
          className={cn(
            "flex h-12 w-40 select-none flex-row items-center justify-center gap-2 overflow-hidden rounded-t-xl border-4 border-[#F4D38E] bg-[#82080A] p-1 font-cgp text-base font-semibold leading-none text-[#F4D38E] transition-all",
            open ? undefined : "rounded-b-xl",
            className
          )}
        >
          <span>{selected}</span>
          <ChevronDown
            className={cn(
              "size-5 transition-all duration-200 ease-in-out",
              open ? "rotate-0" : "rotate-180"
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={-4}
        avoidCollisions={false}
        className="z-[60] w-[var(--radix-dropdown-menu-trigger-width)] rounded-none rounded-b-xl border-4 border-t-4 border-[#F4D38E] bg-[#82080A] font-cgp font-semibold text-[#F4D38E]"
      >
        {options.map((option) => (
          <DropdownMenuItem key={option} onClick={() => onSelect(option)}>
            <div
              className={cn(
                "h-full w-full cursor-pointer p-2 text-center transition-all duration-200 ease-in-out hover:bg-[#F4D38E] hover:text-[#82080A]",
                option == selected
                  ? "bg-[#F4D38E] text-[#82080A]"
                  : "bg-[#82080A] text-[#F4D38E]"
              )}
            >
              {option}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
