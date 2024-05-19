import { FullscreenView } from "../FullscreenView/FullscreenView";
import { Loader } from "../Loader/Loader";
import { Typography } from "../Typography/Typography";

interface Props extends React.PropsWithChildren {
  isLoading?: boolean;
  isError?: boolean;
}

export function Layout({ isLoading, isError, children }: Props) {
  if (isError) {
    return (
      <Typography element='h1' type='heading_2'>
        An error occured
      </Typography>
    );
  }
  if (isLoading) {
    return (
      <FullscreenView center>
        <Loader />
      </FullscreenView>
    );
  }
  return <div className='container'>{children}</div>;
}
