import {
    getProducts,
    getCategories,
    getProductsByCategory,
    getProductById,
} from "../api/productApi";

// Get All Products

export const fetchProducts = async () => {

    try {

        const response = await getProducts();

        return response.data.products;

    } catch (error) {

        throw error;

    }

};

// Get Categories

export const fetchCategories = async () => {

    try {

        const response = await getCategories();

        return response.data;

    } catch (error) {

        throw error;

    }

};

// Get Products By Category

export const fetchProductsByCategory = async (categoryName) => {

    try {

        const response = await getProductsByCategory(categoryName);

        return response.data.products;

    } catch (error) {

        throw error;

    }

};

// Get Single Product

export const fetchProductById = async (id) => {

    try {

        const response = await getProductById(id);

        return response.data;

    } catch (error) {

        throw error;

    }

};