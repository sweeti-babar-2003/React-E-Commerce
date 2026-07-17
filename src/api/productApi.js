import api from "./api";

// Get All Products
export const getProducts = () => {
    return api.get("/products");
};

// Get Categories
export const getCategories = () => {
    return api.get("/products/category-list");
};

// Get Products By Category
export const getProductsByCategory = (categoryName) => {
    return api.get(`/products/category/${categoryName}`);
};

// Get Single Product
export const getProductById = (id) => {
    return api.get(`/products/${id}`);
};