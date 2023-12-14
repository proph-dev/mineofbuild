import { ReactNode } from "react";
import style from './typos.module.scss';

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1 className={`${className ? className + ' ' + style.title : style.title}`}>
      { children }
    </h1>
  );
};