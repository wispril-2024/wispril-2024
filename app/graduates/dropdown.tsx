import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Dropdown(props: {
  options: string[];
  placeholder: string;
  value: string | null;
  className?: string;
  onChange?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = props.value;

  return (
    <DropdownMenu modal={false} onOpenChange={(o) => setOpen(o)}>
      <DropdownMenuTrigger>
        <div
          className={cn(
            `${
              open ? "border-b-0" : "rounded-b-[1rem]"
            } flex w-40 select-none flex-row justify-center gap-2 overflow-hidden rounded-t-[1rem] border-4 border-[#F4D38E] bg-[#82080A] p-1 align-middle font-westmeath text-[#F4D38E] transition-all`,
            props.className
          )}
        >
          {selected ? selected : props.placeholder}
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
          "z-30 w-40 rounded-b-[1rem] border-4 border-t-0 border-[#F4D38E]  bg-[#82080A]  font-cgp-extra-bold text-[#F4D38E]",
          props.className
        )}
      >
        {props.options.map((option) => (
          <DropdownMenuItem
            onClick={() => {
              if (props.onChange) props.onChange(option);
            }}
          >
            <div
              key={option}
              className={`${
                option == selected ? "text-white" : ""
              } h-full w-full cursor-pointer p-2 text-center hover:bg-[#F4D38E] hover:text-[#82080A]`}
            >
              {option}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
