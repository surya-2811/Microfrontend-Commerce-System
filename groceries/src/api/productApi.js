import productsData from "../data/products";
import { getToken } from "../auth/auth";

export const fetchProductsApi = () => {
    const token = getToken();
    return new Promise((resolve) => {
        setTimeout(() => {
            if (token) {
                resolve(productsData);
            } else {
                reject("Unauthorized");
            }
        }, 800);
    });
};
