import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";

import SearchBar from "./SearchBar";

const Navbar = () => {

    // Redux Cart Data
    const cartItems = useSelector((state) => state.Cart.cartItems);

    // Total Cart Count
    const totalCartItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (

        <header className="sticky top-0 z-50 bg-white shadow-md">

            {/* Top Navbar */}

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">

                {/* Logo */}

                <Link
                    to="/"
                    className="text-3xl font-bold flex items-center gap-2"
                >
                    <span className="text-red-500 text-4xl">
                        🛍
                    </span>

                    <span className="text-gray-800">
                        Shop
                    </span>

                    <span className="text-red-500">
                        Nest
                    </span>
                </Link>

                {/* Search */}

                <SearchBar />

                {/* Right Side */}

                <div className="flex items-center gap-6">

                    {/* Wishlist */}

                    <Link
                        to="/wishlist"
                        className="relative"
                    >
                        <Heart
                            size={26}
                            className="hover:text-red-500 duration-300"
                        />
                    </Link>

                    {/* Cart */}

                    <Link
                        to="/cart"
                        className="relative"
                    >

                        <ShoppingCart
                            size={26}
                            className="hover:text-red-500 duration-300"
                        />

                        {

                            totalCartItems > 0 && (

                                <span
                                    className="
                                    absolute
                                    -top-2
                                    -right-2
                                    bg-red-500
                                    text-white
                                    rounded-full
                                    w-5
                                    h-5
                                    text-xs
                                    flex
                                    items-center
                                    justify-center
                                    "
                                >
                                    {totalCartItems}
                                </span>

                            )

                        }

                    </Link>

                    {/* Login */}

                    <Link
                        to="/login"
                        className="flex items-center gap-2 hover:text-red-500 duration-300"
                    >

                        <User size={24} />

                        <span className="hidden lg:block">
                            Login
                        </span>

                    </Link>

                </div>

            </div>

            {/* Bottom Navbar */}

            <div className="border-t">

                <nav className="max-w-7xl mx-auto px-6 py-4 flex gap-10 font-semibold">

                    <Link
                        to="/"
                        className="hover:text-red-500 duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="hover:text-red-500 duration-300"
                    >
                        Products
                    </Link>

                    <Link
                        to="/about"
                        className="hover:text-red-500 duration-300"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-red-500 duration-300"
                    >
                        Contact
                    </Link>

                </nav>

            </div>

        </header>

    );

};

export default Navbar;