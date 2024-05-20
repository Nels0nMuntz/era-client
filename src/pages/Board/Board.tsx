import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { eventsApi } from "@/api";
import {
  BoardList,
  BoardPagination,
  FullscreenView,
  Layout,
  SortMenu,
  Typography,
} from "@/components";

export function Board() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery(
    ["events", currentPage, sortBy, orderBy],
    () =>
      eventsApi.fetchEvents({
        page: currentPage,
        sortBy,
        orderBy,
      }),
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages);
    }
  }, [data]);
  useEffect(() => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["events", nextPage], () =>
        eventsApi.fetchEvents({
          page: currentPage,
          sortBy,
          orderBy,
        }),
      );
    }
  }, [currentPage, totalPages, queryClient]);

  const isLoadingData = isLoading || !data;
  const events = data?.events || [];

  const setPage = (page: number) => setCurrentPage(page);
  const onSertChange = ({ sortBy, orderBy }: { sortBy: string; orderBy: string }) => {
    setSortBy(sortBy);
    setOrderBy(orderBy);
  };

  return (
    <Layout isLoading={isLoadingData} isError={isError}>
      <FullscreenView>
        <Typography element='h1' type='heading_2'>
          Events
        </Typography>
        <SortMenu onChange={onSertChange} />
        <BoardList data={events} />
        <BoardPagination page={currentPage} total={totalPages} onPageChange={setPage} />
      </FullscreenView>
    </Layout>
  );
}
