import productsData from "../data/products";


export const fetchProductsApi = () => {
    const token = localStorage.getItem("token");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token) {
                resolve(productsData);
            } else {
                reject("Unauthorized");
            }
        }, 800);
    });
};
