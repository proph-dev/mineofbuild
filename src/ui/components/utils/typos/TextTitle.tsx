import { ReactNode } from "react";
import style from './typos.module.scss';

type TitleProps = {
  children: ReactNode;
  className?: string;
  gray?: boolean;
};

export const TextTitle = ({ children, className, gray }: TitleProps) => {
  const grayClass = gray ? "gray" : "";
  
  const classTitle = `${className || ""} ${style.title} ${grayClass}`.trim();

  return (
    <h3 className={classTitle}>
      { children }
    </h3>
  );
};