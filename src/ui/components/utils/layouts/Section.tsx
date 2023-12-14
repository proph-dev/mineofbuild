import { ReactNode } from "react";

type LayoutComponentProps = {
  children: ReactNode;
  className?: string;
};

export const Section = ({ children, className }: LayoutComponentProps) => {
  const classes = className ? `${className}` : undefined;

  return (
    <section className={ classes }>
      {children}
    </section>
  );
};