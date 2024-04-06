"use client"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  interface MenfessPaginationProps {
    length: number;
    onChangeIdx: (i:number) => void;
    itr: number;
  }
const MenfessPagination: React.FC<MenfessPaginationProps> = ({length, onChangeIdx,itr}) => {
    if (length == 0) return null;
    return (
      <Pagination>
        <PaginationContent className="z-10 select-none">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onChangeIdx(Math.max(0,itr-1)) }
            />
          </PaginationItem>
          {new Array(Math.ceil(length/5)).fill(null).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink 
                onClick={() => onChangeIdx(i)}
                className={
                  itr === i
                    ? "border-[#B87D12] bg-[#F4D38E] text-[#B87D12]"
                    : ""
                }
              > {i+1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => onChangeIdx(Math.min(Math.ceil(length/5) - 1,itr + 1))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }

export default MenfessPagination