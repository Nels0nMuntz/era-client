import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { eventsApi } from "@/api";
import { BoardList, BoardPagination, FullscreenView, Layout, Typography } from "@/components";

export function Board() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery(
    ["events", currentPage],
    () => eventsApi.fetchEvents(currentPage),
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
      queryClient.prefetchQuery(["events", nextPage, () => eventsApi.fetchEvents(nextPage)]);
    }
  }, [currentPage, totalPages, queryClient]);

  const isLoadingData = isLoading || !data;
  const events = data?.events || [];

  const setPage = (page: number) => setCurrentPage(page);

  if (isError) {
    return (
      <Typography element='h1' type='heading_2'>
        An error occured
      </Typography>
    );
  }
  return (
    <Layout isLoading={isLoadingData}>
      <FullscreenView>
        <Typography element='h1' type='heading_2'>
          Events
        </Typography>
        <BoardList data={events} />
        <BoardPagination page={currentPage} total={totalPages} onPageChange={setPage} />
      </FullscreenView>
    </Layout>
  );
}
