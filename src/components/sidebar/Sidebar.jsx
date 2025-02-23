import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/vj-logo-dark-navy.svg";
import LightLogo from "../../assets/vj-logo-light.svg";

import {
    RiHomeLine,
    RiUserLine,
    RiSchoolLine,
    RiCodeBoxLine,
    RiBriefcaseLine,
    RiFolderLine,
    RiMailLine,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <RiHomeLine /> 
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <RiUserLine /> 
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link">
                                    <RiSchoolLine /> 
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#technologies" className="nav__link">
                                    <RiCodeBoxLine /> 
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#experience" className="nav__link">
                                    <RiBriefcaseLine /> 
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#projects" className="nav__link">
                                    <RiFolderLine /> 
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <RiMailLine /> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
