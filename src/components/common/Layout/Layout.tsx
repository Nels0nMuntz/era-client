import { FullscreenView } from "../FullscreenView/FullscreenView";
import { Loader } from "../Loader/Loader";

interface Props extends React.PropsWithChildren {
  isLoading?: boolean;
}

export function Layout({ isLoading, children }: Props) {
  if (isLoading) {
    return (
      <FullscreenView className='items-center justify-center'>
        <Loader />
      </FullscreenView>
    );
  }
  return <div className='container'>{children}</div>;
}
