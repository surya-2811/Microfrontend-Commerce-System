import React, { useEffect, useState } from "react";

const App = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadCart = () => {
            const saved = JSON.parse(localStorage.getItem("cart")) || [];
            setCart(saved);
        };

        loadCart();

        window.addEventListener("add-to-cart", loadCart);

        return () =>
            window.removeEventListener("add-to-cart", loadCart);
    }, []);

    return (
        <div>
            <h2>Groceries Microfrontend</h2>

            <h3>Cart Items:</h3>
            {cart.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default App;