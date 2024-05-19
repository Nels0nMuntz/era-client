import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, total, onPageChange }: Props) {
  const paginationButtons = Array.from({ length: total }).map((_, index) => {
    const curr = index + 1;
    const variant = page === curr ? "default" : "outline";
    return (
      <PaginationItem>
        <Button variant={variant} onClick={() => onClickPage(curr)}>
          {curr}
        </Button>
      </PaginationItem>
    );
  });
  const onClickPage = (page: number) => onPageChange(page);
  const onPrevPage = () => {
    const prevPageNumber = page - 1 < 1 ? 1 : page - 1;
    onPageChange(prevPageNumber);
  };
  const onNextPage = () => {
    const prevPageNumber = page + 1 > total ? page : page + 1;
    onPageChange(prevPageNumber);
  };
  return (
    <div className='flex w-full justify-center'>
      <PaginationUI>
        <PaginationContent>
          <PaginationItem>
            <Button variant='ghost' size='icon' onClick={onPrevPage}>
              <span className='sr-only'>Go to previous page</span>
              <ChevronLeft className='h-4 w-4' />
            </Button>
          </PaginationItem>
          {paginationButtons}
          <PaginationItem>
            <Button variant='ghost' size='icon' onClick={onNextPage}>
              <span className='sr-only'>Go to next page</span>
              <ChevronRight className='h-4 w-4' />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </PaginationUI>
    </div>
  );
}
