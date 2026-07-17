import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import ProductCard from "./ProductCard";

const ProductGrid = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {

        try {

            const response = await getProducts();

            setProducts(response.data.products);

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <section className="max-w-7xl mx-auto px-6 py-12">

            <h2 className="text-3xl font-bold mb-8">

                Latest Products

            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {
                    products.map(product => (

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

export default ProductGrid;