import productsData from "../data/products";

export const fetchProductsApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData);
        }, 800);
    });
};
