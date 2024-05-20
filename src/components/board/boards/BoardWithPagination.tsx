import { useEffect, useState } from "react";
import { BoardList, BoardPagination, FullscreenView, Layout, SortMenu, Typography } from "@/components";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { eventsApi } from "@/api";

export function BoardWithPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["events", currentPage, sortBy, orderBy],
    queryFn: () => {
      return eventsApi.fetchEvents({
        page: currentPage,
        sortBy,
        orderBy,
      });
    },
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages);
    }
  }, [data]);
  useEffect(() => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["events", nextPage],
        queryFn: () => {
          return eventsApi.fetchEvents({
            page: currentPage,
            sortBy,
            orderBy,
          });
        },
      });
    }
  }, [currentPage, totalPages, queryClient]);

  const isLoadingData = isLoading || !data;
  const events = data?.events || [];

  const setPage = (page: number) => setCurrentPage(page);
  const onSortChange = ({ sortBy, orderBy }: { sortBy: string; orderBy: string }) => {
    setSortBy(sortBy);
    setOrderBy(orderBy);
  };

  return (
    <Layout isLoading={isLoadingData} isError={isError}>
      <FullscreenView>
        <Typography element='h1' type='heading_2'>
          Events
        </Typography>
        <SortMenu onChange={onSortChange} />
        <BoardList data={events}/>
        <BoardPagination page={currentPage} total={totalPages} onPageChange={setPage} />
      </FullscreenView>
    </Layout>
  )
}
