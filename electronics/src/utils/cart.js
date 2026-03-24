export const addToCart = (product) => {
    window.dispatchEvent(
        new CustomEvent("add-to-cart", {
            detail: { id: Date.now(), name: product.name },
        })
    );
};
