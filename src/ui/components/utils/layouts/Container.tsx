import { ReactNode } from "react";

type LayoutComponentProps = {
  children: ReactNode;
  flex?: boolean;
};

export const Container = ({ children, flex }: LayoutComponentProps) => {
  return (
    <div className={`container-page ${flex ? 'flex' : ''}`}>
      {children}
    </div>
  );
};