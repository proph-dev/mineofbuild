import { ReactNode } from "react";
import style from './typos.module.scss';

type CaptionProps = {
  children: ReactNode;
  className?: string;
};

export const Caption: React.FC<CaptionProps> = ({ children, className }) => {
  return (
    <span className={`${className ? className + ' ' + style.caption : style.caption}`}>
      { children }
    </span>
  );
};