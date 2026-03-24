import React from "react";

const App = () => {
    const addToCart = () => {
        const product = {
            id: Date.now(),
            name: "Laptop",
        };

        window.dispatchEvent(
            new CustomEvent("add-to-cart", { detail: product })
        );
    };

    return (
        <div>
            <h2>Electronics Microfrontend</h2>
            <button onClick={addToCart}>Add Laptop to Cart</button>
        </div>
    );
};

export default App;