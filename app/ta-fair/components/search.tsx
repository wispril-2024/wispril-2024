import { Search } from "lucide-react";

export function SearchTA({
  setSearchName,
  searchName,
}: {
  setSearchName: (e: string | null) => void;
  searchName: string | null;
}) {
  return (
    <div className="flex h-20 flex-row items-center justify-between rounded-[1rem] border-4 border-[#F4D38E] bg-[#82080A] px-12 font-westmeath text-3xl text-[#F4D38E]">
      <input
        className="bg-transparent placeholder-[#F4D38E] outline-none"
        placeholder="Search"
        value={searchName || ""}
        onChange={(e) => setSearchName(e.currentTarget.value)}
        spellCheck={false}
      />
      <Search size={32} />
    </div>
  );
}
