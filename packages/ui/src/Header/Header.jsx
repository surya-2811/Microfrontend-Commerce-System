import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ cart = [], setCart, logout }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    const handleLogout = () => {
        if (setCart) setCart([]);
        localStorage.clear();
        if (logout) logout();
        navigate("/login");
    };

    const token = localStorage.getItem("token");

    return (
        <header className={styles.headerContainer}>
            <div className={styles.leftSection}>
                <nav className={styles.navLinks}>
                    <Link to="/" className={isActive("/") ? styles.activeLink : styles.link}>
                        Home
                    </Link>
                    <Link
                        to="/electronics"
                        className={isActive("/electronics") ? styles.activeLink : styles.link}
                    >
                        Electronics
                    </Link>
                    <Link
                        to="/groceries"
                        className={isActive("/groceries") ? styles.activeLink : styles.link}
                    >
                        Groceries
                    </Link>
                </nav>
            </div>

            <div className={styles.rightSection}>
                <span className={styles.cartInfo}>
                    <span>🛒</span> Cart: {cart.length}
                </span>
                {token && (
                    <button className={styles.logoutButton} onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
