import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import style from './buttons.module.scss';

type MainCtaProps = {
  children: ReactNode;
  url: string;
  className?: string;
  extern?: boolean;
};

export const MainCta: React.FC<MainCtaProps> = ({ children, url, className, extern }) => {
  const linkClassName = `${style.mainCta} ${className ? className : ''}`;

  return (
    extern ? (
      <a href={url} className={linkClassName} target="_blank" rel="noopener noreferrer">
        {children}
        <FaArrowDown />
      </a>
    ) : (
      <Link to={url} className={linkClassName}>
        {children}
        <FaArrowDown />
      </Link>
    )
  );
};