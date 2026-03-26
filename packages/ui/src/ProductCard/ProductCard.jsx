import React from "react";
import styles from "./ProductCard.module.css";
export const addToCart = (product) => {
    window.dispatchEvent(
        new CustomEvent("add-to-cart", {
            detail: { id: Date.now(), name: product.name, price: product.price },
        })
    );
};

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>{product.name}</div>
            <div className={styles.price}>${product.price}</div>
            <button
                className={styles.button}
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
