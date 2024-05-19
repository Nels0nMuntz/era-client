interface Props extends React.PropsWithChildren {}

export function List({ children }: Props) {
  return <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-4'>{children}</section>;
}
