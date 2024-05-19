import { Link } from "react-router-dom";
import { FullscreenView, Layout, Typography } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { APP_PATHS } from "@/router";

export function NotFound() {
  return (
    <Layout>
      <FullscreenView center>
        <Typography element='h1' type='heading_1'>
          Not Found
        </Typography>
        <Link to={APP_PATHS.board.path} className={buttonVariants({ variant: "outline" })}>
          Go to homepage
        </Link>
      </FullscreenView>
    </Layout>
  );
}
