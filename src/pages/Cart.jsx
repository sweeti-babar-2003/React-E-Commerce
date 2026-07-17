import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {

    const cartItems = useSelector(
        (state) => state.Cart.cartItems
    );

    if (cartItems.length === 0) {

        return (

            <div className="text-center py-24">

                <h1 className="text-4xl font-bold">

                    🛒 Your Cart Is Empty

                </h1>

                <p className="text-gray-500 mt-3">

                    Looks like you haven't added anything yet.

                </p>

                <Link
                    to="/products"
                    className="inline-block mt-8 bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600"
                >
                    Continue Shopping
                </Link>

            </div>

        );

    }

    return (

        <section className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold mb-8">

                Shopping Cart

            </h1>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left */}

                <div className="lg:col-span-2 space-y-5">

                    {

                        cartItems.map((item) => (

                            <CartItem

                                key={item.id}

                                item={item}

                            />

                        ))

                    }

                </div>

                {/* Right */}

                <CartSummary />

            </div>

        </section>

    );

};

export default Cart;