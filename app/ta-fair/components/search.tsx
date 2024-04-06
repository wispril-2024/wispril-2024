import { Search } from "lucide-react";

export function SearchTA({
  setSearchName,
  searchName,
}: {
  setSearchName: (e: string | null) => void;
  searchName: string | null;
}) {
  return (
    <div className="flex h-11 flex-row rounded-[1rem] border-4 border-[#F4D38E] bg-[#82080A] font-westmeath text-lg text-[#F4D38E]">
      <input
        className="ml-3 mr-2 flex-grow bg-transparent placeholder-[#F4D38E] outline-none"
        placeholder="Search"
        value={searchName || ""}
        onChange={(v) => setSearchName(v.currentTarget.value)}
        spellCheck={false}
      />
      <Search className="my-auto mr-2" />
    </div>
  );
}
