import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",

    initialState,

    reducers: {

    },
});

export default wishlistSlice.reducer;