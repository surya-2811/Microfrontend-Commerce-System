import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../redux/actions/productActions";
import { ProductCard } from "@mfe/ui";
import styles from "./ElectronicsPage.module.css";

const ElectronicsPage = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Electronics
            </h2>

            {loading && <p className={styles.loading}>Loading products...</p>}
            {error && <p className={styles.error}>Error: {error}</p>}

            {!loading && !error && (
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ElectronicsPage;
