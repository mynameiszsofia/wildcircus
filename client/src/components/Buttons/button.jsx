import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";
function button({ variant, children, to }) {
    return (
        <>
            <Link to={to}>
                <button className={`${variant ? variant : ""}-button`}>
                    {children}
                </button>
            </Link>
        </>
    );
}
export default button;