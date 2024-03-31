import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function TAFairPagination(props: {
  size: number;
  current: number;
  onChange?: (v: number) => void;
}) {
  if (props.size == 0) return null;
  const dispatch = props.onChange || (() => {});
  return (
    <Pagination>
      <PaginationContent className="z-10 select-none">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => dispatch(Math.max(props.current - 1, 1))}
          />
        </PaginationItem>
        {new Array(props.size).fill(null).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => dispatch(i + 1)}
              className={
                props.current == i + 1
                  ? "border-[#B87D12] bg-[#F4D38E] text-[#B87D12]"
                  : ""
              }
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => dispatch(Math.min(props.current + 1, props.size))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
