import { createSlice } from "@reduxjs/toolkit";

// ==========================
// Load Cart From LocalStorage
// ==========================

const loadCart = () => {
    const data = localStorage.getItem("cart");

    if (data) {
        return JSON.parse(data);
    }

    return [];
};

// ==========================
// Save Cart
// ==========================

const saveCart = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
};

// ==========================
// Calculate Total Items & Price
// ==========================

const calculateTotals = (cartItems) => {

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return {
        totalItems,
        totalPrice,
    };
};

// ==========================
// Initial State
// ==========================

const cart = loadCart();

const initialState = {
    cartItems: cart,
    totalItems: calculateTotals(cart).totalItems,
    totalPrice: calculateTotals(cart).totalPrice,
};

// ==========================
// Slice
// ==========================

const cartSlice = createSlice({

    name: "cart",

    initialState,

    reducers: {

        // ==========================
        // Add To Cart
        // ==========================

        addToCart: (state, action) => {

            const item = state.cartItems.find(
                product => product.id === action.payload.id
            );

            if (item) {

                item.quantity += 1;

            } else {

                state.cartItems.push({

                    ...action.payload,

                    quantity: 1,

                });

            }

            const totals = calculateTotals(state.cartItems);

            state.totalItems = totals.totalItems;
            state.totalPrice = totals.totalPrice;

            saveCart(state.cartItems);

        },

        // ==========================
        // Increase Quantity
        // ==========================

        increaseQuantity: (state, action) => {

            const item = state.cartItems.find(
                product => product.id === action.payload
            );

            if (item) {

                item.quantity += 1;

            }

            const totals = calculateTotals(state.cartItems);

            state.totalItems = totals.totalItems;
            state.totalPrice = totals.totalPrice;

            saveCart(state.cartItems);

        },

        // ==========================
        // Decrease Quantity
        // ==========================

        decreaseQuantity: (state, action) => {

            const item = state.cartItems.find(
                product => product.id === action.payload
            );

            if (item && item.quantity > 1) {

                item.quantity -= 1;

            }

            const totals = calculateTotals(state.cartItems);

            state.totalItems = totals.totalItems;
            state.totalPrice = totals.totalPrice;

            saveCart(state.cartItems);

        },

        // ==========================
        // Remove Item
        // ==========================

        removeFromCart: (state, action) => {

            state.cartItems = state.cartItems.filter(
                product => product.id !== action.payload
            );

            const totals = calculateTotals(state.cartItems);

            state.totalItems = totals.totalItems;
            state.totalPrice = totals.totalPrice;

            saveCart(state.cartItems);

        },

        // ==========================
        // Clear Cart
        // ==========================

        clearCart: (state) => {

            state.cartItems = [];
            state.totalItems = 0;
            state.totalPrice = 0;

            localStorage.removeItem("cart");

        },

    },

});

export const {

    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,

} = cartSlice.actions;

export default cartSlice.reducer;