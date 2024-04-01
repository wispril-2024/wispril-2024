import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Dropdown({
  options,
  placeholder,
  value,
  className,
  onChange,
}: {
  options: string[];
  placeholder: string;
  value: string | null;
  className?: string;
  onChange?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = value;

  return (
    <DropdownMenu modal={false} onOpenChange={(o) => setOpen(o)}>
      <DropdownMenuTrigger>
        <div
          className={cn(
            `${
              open ? "border-b-0" : "rounded-b-[13px] lg:rounded-b-[1rem]"
            } flex h-8 select-none flex-row items-center justify-between gap-1 overflow-hidden rounded-t-[13px] border-2 border-[#F4D38E] bg-[#82080A] px-5 align-middle font-westmeath text-sm text-[#F4D38E] transition-all sm:gap-2 sm:rounded-t-[1rem] lg:h-20 lg:border-4 lg:px-12 lg:text-3xl`,
            className
          )}
        >
          {selected ? selected : placeholder}
          <ChevronDown
            className={`transition-all ${open ? "" : "rotate-180"}`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        sideOffset={-4}
        avoidCollisions={false}
        className={cn(
          "z-[60] rounded-b-[13px] border-2 border-t-0 border-[#F4D38E] bg-[#82080A] font-westmeath text-[#F4D38E] lg:rounded-b-[1rem] lg:border-4",
          className
        )}
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => {
              if (onChange) onChange(option);
            }}
          >
            <div
              className={`${
                option == selected ? "text-white" : ""
              } h-full w-full cursor-pointer text-center text-[12px] hover:bg-[#F4D38E] hover:text-[#82080A] sm:p-2 lg:text-2xl`}
            >
              {option}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
