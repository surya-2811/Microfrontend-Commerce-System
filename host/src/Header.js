import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const linkStyle = (active) => ({
        marginRight: "10px",
        fontWeight: active ? "bold" : "normal",
        color: active ? "blue" : "black",
    });

    return (
        <div style={{ marginBottom: "20px" }}>
            <Link to="/" style={linkStyle(isActive("/"))}>
                Home
            </Link>

            <Link
                to="/electronics"
                style={linkStyle(isActive("/electronics"))}
            >
                Electronics
            </Link>

            <Link
                to="/groceries"
                style={linkStyle(isActive("/groceries"))}
            >
                Groceries
            </Link>
        </div>
    );
};

export default Header;