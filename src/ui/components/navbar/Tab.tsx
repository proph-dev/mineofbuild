import { NavLink } from 'react-router-dom';
import style from './navbar.module.scss';

type TabProps = {
    children: string;
    url: string;
    className?: string;
    soon?: boolean;
};

export const Tab = ({ children, url, className = "" }: TabProps) => {
  return (
    <li>
        <NavLink to={url} className={({ isActive }) => `${className} ${isActive ? style.active : ""}`}>
          { children }
        </NavLink>
    </li>
  );
};