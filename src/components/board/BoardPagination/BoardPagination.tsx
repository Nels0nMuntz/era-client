import { Pagination } from "@/components/common/Pagination/Pagination";

interface Props {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
}

export function BoardPagination({ page, total, onPageChange }: Props) {
  return (
    <div className='flex-shrink-0'>
      <Pagination page={page} total={total} onPageChange={onPageChange} />
    </div>
  );
}
