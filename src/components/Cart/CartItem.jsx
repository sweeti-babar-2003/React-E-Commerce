import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../../redux/cartSlice";

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    return (

        <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-5 mb-5">

            {/* Image */}

            <div className="flex items-center gap-5">

                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-lg"
                />

                <div>

                    <h2 className="font-bold text-xl">

                        {item.title}

                    </h2>

                    <p className="text-gray-500">

                        {item.brand}

                    </p>

                    <p className="text-red-500 text-xl font-bold mt-2">

                        ₹ {item.price}

                    </p>

                </div>

            </div>

            {/* Quantity */}

            <div className="flex items-center gap-3">

                <button

                    onClick={() => dispatch(decreaseQuantity(item.id))}

                    className="bg-gray-200 p-2 rounded"

                >

                    <Minus size={18} />

                </button>

                <span className="font-bold text-lg">

                    {item.quantity}

                </span>

                <button

                    onClick={() => dispatch(increaseQuantity(item.id))}

                    className="bg-gray-200 p-2 rounded"

                >

                    <Plus size={18} />

                </button>

            </div>

            {/* Remove */}

            <button

                onClick={() => dispatch(removeFromCart(item.id))}

                className="text-red-500 hover:text-red-700"

            >

                <Trash2 />

            </button>

        </div>

    );

};

export default CartItem;