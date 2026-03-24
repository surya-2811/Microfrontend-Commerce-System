import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "./auth/auth";
import { useNavigate } from "react-router-dom";

const Header = ({ cart, setCart }) => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const linkStyle = (active) => ({
        marginRight: "10px",
        fontWeight: active ? "bold" : "normal",
        color: active ? "blue" : "black",
    });
    const navigate = useNavigate();

    const handleLogout = () => {
        if (setCart) setCart([]);
        localStorage.clear();
        logout();
        navigate("/login");
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <span style={{ marginLeft: "20px" }}>
                🛒 Cart: {cart.length}
            </span>
            <button onClick={handleLogout}>Logout</button>
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