interface Props extends React.PropsWithChildren {}

export function List({ children }: Props) {
  return <section className='grid grid-cols-4 gap-x-4 gap-y-4'>{children}</section>;
}
