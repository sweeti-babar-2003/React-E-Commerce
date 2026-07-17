import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../components/product/ProductCard";
import { getProductsByCategory } from "../api/productApi";

const CategoryProducts = () => {

    const { categoryName } = useParams();

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadProducts();

    }, [categoryName]);

    const loadProducts = async () => {

        try {

            const response = await getProductsByCategory(categoryName);

            setProducts(response.data.products);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <h1 className="text-center text-2xl py-10">
                Loading...
            </h1>
        );

    }

    return (

        <section className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold mb-8 capitalize">

                {categoryName.replaceAll("-", " ")}

            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

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

export default CategoryProducts;