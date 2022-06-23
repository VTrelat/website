import React from "react";
import { useState } from "react";

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
            <div className="navbar__logo">Logo</div>
            <ul className="navbar__links">
                <li className="navbar__item">
                    <a href="/cv/" className="navbar__link">
                        Option 1
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/cv/" className="navbar__link">
                        Option 2
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/cv/" className="navbar__link">
                        Option 3
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="/cv/" className="navbar__link">
                        Home
                    </a>
                </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
};

export default Nav;
