import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

const ElectronicsPage = () => {
    return (
        <div style={{ padding: "24px", fontFamily: "'Segoe UI', sans-serif" }}>
            <h2 style={{ marginBottom: "16px", color: "#1a1a2e" }}>
                Electronics
            </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "16px",
                }}
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ElectronicsPage;
