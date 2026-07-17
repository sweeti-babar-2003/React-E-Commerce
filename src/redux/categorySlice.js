import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    selectedCategory: "",
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: "category",

    initialState,

    reducers: {

    },
});

export default categorySlice.reducer;