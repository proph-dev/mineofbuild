import { ReactNode } from "react";
import style from './buttons.module.scss';

type ParagraphProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const SecondaryButton: React.FC<ParagraphProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className ? style.secondaryButton + ' ' + className : style.secondaryButton}`}
      onClick={onClick}
    >
        {children}
    </button>
  );
};