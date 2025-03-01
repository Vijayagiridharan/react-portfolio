import React, { useState, useEffect, useRef } from "react";
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
    const sidebarRef = useRef(null); // Create a reference for the sidebar

    const closeMenu = () => {
        showMenu(false);
    };

    // Close menu when clicking outside the sidebar in mobile view
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (toggle && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggle]);

    return (
        <>
            {/* Sidebar Wrapper */}
            <aside ref={sidebarRef} className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link" onClick={closeMenu}>
                                    <RiHomeLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link" onClick={closeMenu}>
                                    <RiUserLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#education" className="nav__link" onClick={closeMenu}>
                                    <RiSchoolLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#technologies" className="nav__link" onClick={closeMenu}>
                                    <RiCodeBoxLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#experience" className="nav__link" onClick={closeMenu}>
                                    <RiBriefcaseLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#projects" className="nav__link" onClick={closeMenu}>
                                    <RiFolderLine />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link" onClick={closeMenu}>
                                    <RiMailLine />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button
                        onClick={() => {
                            props.switchTheme();
                        }}
                        className="nav__link footer__button"
                    >
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            {/* Menu Toggle Button */}
            <div
                className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
                onClick={() => showMenu(!toggle)}
            >
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
