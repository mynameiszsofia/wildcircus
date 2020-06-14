import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Button from "../Buttons/button";

function Header() {
  const [activePage, setActivePage] = React.useState("home");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = ["home", "talents", "team"];

  return (
    <header className="header">
      <Link className="header-logo-container" to="/home">
        <div>Wildcode Circus</div>
      </Link>
      <div className={menuOpen ? "open header-link" : "header-link"}>
        {links.map((link, index) => {
          return (
            <Link to={`/${link}`} key={index}>
              <li
                key={index}
                className={
                  activePage === link
                    ? "active header-link-item"
                    : "header-link-item"
                }
                onClick={() => (setActivePage(link), setMenuOpen(!menuOpen))}
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
