import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import CategoryProducts from "../pages/CategoryProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />

            <Route
                path="/products/category/:categoryName"
                element={<CategoryProducts />}
            />

            <Route
                path="/product/:id"
                element={<ProductDetails />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

export default AppRoutes;