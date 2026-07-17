import LatestProducts from "../components/home/LatestProducts";

const Products = () => {

    return (

        <section className="max-w-7xl mx-auto px-6 py-10">

            <div className="mb-10">

                <h1 className="text-4xl font-bold text-gray-800">
                    All Products
                </h1>

                <p className="text-gray-500 mt-2">
                    Browse our complete collection of products.
                </p>

            </div>

            <LatestProducts />

        </section>

    );

};

export default Products;