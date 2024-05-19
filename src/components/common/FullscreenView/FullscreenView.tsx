interface Props extends React.PropsWithChildren {
  className?: string;
}

export function FullscreenView({ className, children }: Props) {
  return <div className={['flex min-h-[100dvh] flex-col gap-y-8 py-8', className].join(" ")}>{children}</div>;
}
