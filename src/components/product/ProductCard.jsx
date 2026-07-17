import { Heart, ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (e) => {

        // Card click होऊ नये म्हणून
        e.stopPropagation();

        dispatch(addToCart(product));

        toast.success("Product Added Successfully 🛒");

    };

    return (

        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer overflow-hidden"
        >

            {/* Image */}

            <div className="relative">

                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-60 object-cover"
                />

                {/* Discount */}

                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">

                    {Math.round(product.discountPercentage)}% OFF

                </span>

                {/* Wishlist */}

                <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-red-500 hover:text-white duration-300"
                >

                    <Heart size={18} />

                </button>

            </div>

            {/* Content */}

            <div className="p-5">

                {/* Category */}

                <p className="text-sm text-gray-400 capitalize">

                    {product.category}

                </p>

                {/* Title */}

                <h2 className="text-lg font-bold mt-2 line-clamp-1">

                    {product.title}

                </h2>

                {/* Brand */}

                <p className="text-gray-500 mt-1">

                    Brand : {product.brand}

                </p>

                {/* Rating */}

                <div className="flex items-center gap-2 mt-3">

                    <Star
                        size={18}
                        className="text-yellow-500 fill-yellow-500"
                    />

                    <span className="font-medium">

                        {product.rating}

                    </span>

                </div>

                {/* Price */}

                <div className="mt-4 flex justify-between items-center">

                    <h2 className="text-2xl font-bold text-red-500">

                        ₹ {product.price}

                    </h2>

                </div>

                {/* Add To Cart */}

                <button

                    onClick={handleAddToCart}

                    className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"

                >

                    <ShoppingCart size={20} />

                    Add To Cart

                </button>

            </div>

        </div>

    );

};

export default ProductCard;