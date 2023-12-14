import { Link } from 'react-router-dom';
import { Tab } from './Tab';
import style from './navbar.module.scss';

import MobLogo from '../../../assets/img/mob-logo.svg';
import { FaArrowDown } from "react-icons/fa";

export const Navbar = () => {
    return (
        <nav>
            <Link to="/" className={ style.logo }>
                <img src={ MobLogo } alt="Icône de Mine Of Build" />
                Mine Of Build
            </Link>

            <ul>
                <Tab url="/">Accueil</Tab>
                <Tab url="/solutions">Nos solutions</Tab>
                <Tab url="/about">Nous découvrir</Tab>
                <Tab url="/about">Nous rejoindre</Tab>
            </ul>

            <a href="https://discord.gg/9UyBxAYUYT" rel='noopener noreferrer' className={ style.discordCta }>
                Rejoindre notre Discord
                <FaArrowDown />
            </a>
        </nav>
    )
}