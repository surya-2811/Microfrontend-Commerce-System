import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../redux/actions/productActions";
import { ProductCard } from "@mfe/ui";

const ElectronicsPage = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    return (
        <div style={{ padding: "24px", fontFamily: "'Segoe UI', sans-serif" }}>
            <h2 style={{ marginBottom: "16px", color: "#1a1a2e" }}>
                Electronics
            </h2>

            {loading && <p>Loading products...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && (
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
            )}
        </div>
    );
};

export default ElectronicsPage;
