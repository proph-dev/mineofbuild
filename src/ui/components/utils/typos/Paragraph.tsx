import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  const classes = `${className || ""}`.trim();

  return (
    <p {...(classes ? { className: classes } : {})}>
      { children }
    </p>
  );
};