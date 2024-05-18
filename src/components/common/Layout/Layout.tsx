interface Props extends React.PropsWithChildren {}

export function Layout({ children }: Props) {
  return <div className='container'>{children}</div>;
}
