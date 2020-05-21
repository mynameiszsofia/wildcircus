import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Button from "../Buttons/button";

function Header() {
    const [activePage, setActivePage] = React.useState("About Us");
    const [menuOpen, setMenuOpen] = React.useState(false);
    const links = [
        "aboutus",
        "circus",
        "gallery",
        "ticket"
    ];

    return (
        <header className="header">
            <Link className="header-logo-container" to="/aboutus">
                <div>Wildcode Circus</div>
            </Link>
            <div className={menuOpen ? "open header-link" : "header-link"}>
                {links.map((link) => {
                    return (
                        <Link to={`/${link}`}>
                            <li
                                className={
                                    activePage === link
                                        ? "active header-link-item"
                                        : "header-link-item"
                                }
                                onClick={() => setActivePage(link)}
                            >
                                {" "}
                                {link}{" "}
                            </li>
                        </Link>
                    );
                })}
            </div>
            <label
                className="hamburger-menu"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                {!menuOpen ? "☰" : "x"}
            </label>
        </header>
    );
}

export default Header;