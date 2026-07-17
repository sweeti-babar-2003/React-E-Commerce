import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import ProductGrid from "../components/product/ProductGrid";
import LatestProducts from "../components/home/LatestProducts";

const Home = () => {

    return (

        <>
            <Hero />

            <Categories />

            <ProductGrid />
            <LatestProducts />

        </>

    );

};

export default Home;