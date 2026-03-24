import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const ElectronicsApp = React.lazy(() => import("electronics/App"));
const GroceriesApp = React.lazy(() => import("groceries/App"));

const Home = () => <h2>Home Page</h2>;

const App = () => {
    const [cart, setCart] = useState([]);

    // Listen for add-to-cart events
    useEffect(() => {
        const handler = (event) => {
            const product = event.detail;

            setCart((prev) => {
                const updated = [...prev, product];
                localStorage.setItem("cart", JSON.stringify(updated));
                return updated;
            });
        };

        window.addEventListener("add-to-cart", handler);

        // Load from localStorage
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);

        return () => window.removeEventListener("add-to-cart", handler);
    }, []);

    return (
        <BrowserRouter>
            <h1>Host App</h1>

            <Header cart={cart} />

            <React.Suspense fallback="Loading...">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/electronics" element={<ProtectedRoute><ElectronicsApp /></ProtectedRoute>} />
                    <Route path="/groceries" element={<ProtectedRoute><GroceriesApp /></ProtectedRoute>} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);