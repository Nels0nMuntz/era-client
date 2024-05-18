import "./style.css";

export const TYPOGRAPHY_TYPES = {
  heading_1: "heading_1",
  heading_2: "heading_2",
  body_1: "body_1",
  body_2: "body_2",
};

export interface Props extends React.PropsWithChildren, React.HTMLAttributes<HTMLOrSVGElement> {
  type: keyof typeof TYPOGRAPHY_TYPES;
  element: keyof JSX.IntrinsicElements;
  className?: string;
}

export function Typography(props: Props) {
  const { type, element, className, children, ...attributes } = props;
  const Component = element || "div";
  return (
    <Component className={[type, className].join(" ")} {...attributes}>
      {children}
    </Component>
  );
}
