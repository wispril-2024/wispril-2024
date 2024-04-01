import { Search } from "lucide-react";

export function SearchTA({
  setSearchName,
  searchName,
}: {
  setSearchName: (e: string | null) => void;
  searchName: string | null;
}) {
  return (
    <div className="flex h-8 flex-row items-center justify-between rounded-[13px] border-2 border-[#F4D38E] bg-[#82080A] px-5 font-westmeath text-sm text-[#F4D38E] lg:h-20 lg:rounded-[1rem] lg:border-4 lg:px-12 lg:text-3xl">
      <input
        className="w-full bg-transparent placeholder-[#F4D38E] outline-none"
        placeholder="Search"
        value={searchName || ""}
        onChange={(e) => setSearchName(e.currentTarget.value)}
        spellCheck={false}
      />
      <Search />
    </div>
  );
}
