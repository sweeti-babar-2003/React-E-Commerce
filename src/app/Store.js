import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../redux/cartSlice";
import wishlistReducer from "../redux/wishlistSlice";
import productReducer from "../redux/productSlice";
import categoryReducer from "../redux/categorySlice";

export const store = configureStore({

    
    reducer: {
        Cart: cartReducer,
        wishlist: wishlistReducer,
        product: productReducer,
        category: categoryReducer,
    },
});