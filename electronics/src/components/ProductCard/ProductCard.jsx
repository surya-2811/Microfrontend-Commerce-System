import React from "react";
import { addToCart } from "../../utils/cart";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>{product.name}</div>
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
