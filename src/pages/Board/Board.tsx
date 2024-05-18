import { BoardList, BoardPagination, FullscreenView, Layout, Typography } from "@/components";

export function Board() {
  return (
    <Layout>
      <FullscreenView>
        <Typography element='h1' type='heading_2'>
          Events
        </Typography>
        <BoardList />
        <BoardPagination />
      </FullscreenView>
    </Layout>
  );
}
