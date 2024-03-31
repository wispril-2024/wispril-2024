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
              open ? "border-b-0" : "rounded-b-[1rem]"
            } flex h-20 select-none flex-row items-center justify-between gap-2 overflow-hidden rounded-t-[1rem] border-4 border-[#F4D38E] bg-[#82080A] px-12 align-middle font-westmeath text-3xl text-[#F4D38E] transition-all`,
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
          "z-[60] rounded-b-[1rem] border-4 border-t-0 border-[#F4D38E] bg-[#82080A] font-westmeath text-[#F4D38E]",
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
              } h-full w-full cursor-pointer p-2 text-center text-2xl hover:bg-[#F4D38E] hover:text-[#82080A]`}
            >
              {option}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
