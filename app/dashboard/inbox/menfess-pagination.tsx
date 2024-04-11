import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface MenfessPaginationProps {
  length: number; // Length of data
  page: number; // Current page from search params (passed from parent)
}

const MenfessPagination = ({ length, page }: MenfessPaginationProps) => {
  if (length == 0) return <></>;

  const messagePerPage = 5;
  const previousPage = Math.max(1, page - 1);
  const nextPage = Math.min(Math.ceil(length / messagePerPage), page + 1);
  const isPreviousHidden = page === 1;
  const isNextHidden = page === Math.ceil(length / messagePerPage);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`/dashboard/inbox?page=${previousPage}`} />
        </PaginationItem>
        
        {new Array(Math.ceil(length / 5)).fill(null).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href={`/dashboard/inbox?page=${i + 1}`}
              className={
                page === i + 1
                  ? "border-[#B87D12] bg-[#F4D38E] text-[#B87D12]"
                  : ""
              }
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`/dashboard/inbox?page=${nextPage}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MenfessPagination;
