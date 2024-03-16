import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Dropdown(props: { options: string[]; placeholder: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  return (
    <DropdownMenu onOpenChange={(o) => setOpen(o)}>
      <DropdownMenuTrigger>
        <div
          className={`${
            open ? "border-b-0" : "rounded-b-[1rem]"
          } flex w-40 select-none flex-row justify-center gap-2 overflow-hidden rounded-t-[1rem] border-4 border-[#F4D38E] bg-[#82080A] p-1 align-middle font-westmeath text-[#F4D38E] transition-all`}
        >
          {selected == "" ? props.placeholder : selected}
          <ChevronDown
            className={`transition-all ${open ? "" : "rotate-180"}`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 rounded-b-[1rem] border-4 border-t-0 border-[#F4D38E]  bg-[#82080A]  font-cgp-extra-bold text-[#F4D38E]">
        {props.options.map((option) => (
          <DropdownMenuItem onClick={() => setSelected(option)}>
            <div
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
