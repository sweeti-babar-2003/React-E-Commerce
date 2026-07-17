import { useSelector } from "react-redux";

const CartSummary = () => {

    const totalItems = useSelector(
        (state) => state.Cart.totalItems
    );

    const totalPrice = useSelector(
        (state) => state.Cart.totalPrice
    );

    return (

        <div className="bg-white shadow-md rounded-xl p-6">

            <h2 className="text-2xl font-bold mb-6">

                Order Summary

            </h2>

            <div className="flex justify-between mb-4">

                <span>Total Items</span>

                <span>{totalItems}</span>

            </div>

            <div className="flex justify-between mb-6">

                <span>Total Price</span>

                <span className="font-bold text-red-500">

                    ₹ {totalPrice}

                </span>

            </div>

            <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
            >
                Checkout
            </button>

        </div>

    );

};

export default CartSummary;