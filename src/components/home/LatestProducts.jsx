import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductCard from "../product/ProductCard";

const LatestProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {

        try {

            const response = await getProducts();

            setProducts(response.data.products);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <section className="max-w-7xl mx-auto px-6 py-14">

            <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold">
                    Latest Products
                </h2>

                <button className="text-red-500 font-semibold hover:underline">
                    View All
                </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {
                    products.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))
                }

            </div>

        </section>

    );

};

export default LatestProducts;