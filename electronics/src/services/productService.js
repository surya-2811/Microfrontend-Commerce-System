import { fetchProductsApi } from "../api/productApi";

export const getProducts = async () => {
    try {
        const response = await fetchProductsApi();
        return response;
    } catch (error) {
        throw error;
    }
};
