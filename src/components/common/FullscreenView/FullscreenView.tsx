interface Props extends React.PropsWithChildren {
  center?: boolean;
  className?: string;
}

export function FullscreenView({ center, className, children }: Props) {
  return (
    <div
      className={[
        "flex min-h-[100dvh] flex-col gap-y-8 py-8",
        center ? "items-center justify-center" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
