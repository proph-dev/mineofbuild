import { ReactNode } from "react";
import style from './buttons.module.scss';

type ParagraphProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const MainButton: React.FC<ParagraphProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className ? style.mainButton + ' ' + className : style.mainButton}`}
      onClick={onClick}
    >
        {children}
    </button>
  );
};