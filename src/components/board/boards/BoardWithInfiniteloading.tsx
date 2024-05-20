import { useEffect, useRef, useState } from "react";
import {
  keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { eventsApi } from "@/api";
import {
  BoardList,
  FullscreenView,
  Layout,
  SortMenu,
  Typography,
} from "@/components";
import { useIntersection } from "@/hooks";
import { Loader2 } from "lucide-react";

export function BoardWithInfiniteloading() {

  const lastPostRef = useRef<HTMLElement>();
  const { entry, ref } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });
  
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["infinite-query", sortBy, orderBy],
    queryFn: async ({ pageParam }) => {      
      return await eventsApi.fetchEvents({
        page: pageParam,
        sortBy,
        orderBy,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (res, allPages, lastPageParam) => {
      if(!res) {
        return lastPageParam + 1
      }
      const { currentPage, totalPages, events } = res;
      if (events.length === 0) {
        return undefined;
      }
      const nextPageParam = currentPage + 1 <= totalPages ? currentPage + 1 : undefined;
      return nextPageParam;
    },
    refetchOnMount: "always",
    initialData: {
      pages: [],
      pageParams: [1],
    },
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  const onSortChange = ({ sortBy, orderBy }: { sortBy: string; orderBy: string }) => {
    setSortBy(sortBy);
    setOrderBy(orderBy);
  };

  const events = data?.pages.map(({ events }) => events).flatMap((page) => page) || [];
  return (
    <Layout>
      <FullscreenView>
        <Typography element='h1' type='heading_2'>
          Events
        </Typography>
        <SortMenu onChange={onSortChange} />
        <BoardList data={events} refer={ref} />
        {isFetchingNextPage && (
          <div className='flex justify-center'>
            <Loader2 className='h-6 w-6 animate-spin text-zinc-500' />
          </div>
        )}
      </FullscreenView>
    </Layout>
  );
}
