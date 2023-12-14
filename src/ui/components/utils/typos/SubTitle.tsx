import { ReactNode } from "react";
import style from './typos.module.scss';

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export const SubTitle = ({ children, className }: TitleProps) => {
  return (
    <h2 className={`${className ? className + ' ' + style.title : style.title}`}>
      { children }
    </h2>
  );
};