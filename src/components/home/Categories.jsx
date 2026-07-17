import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../service/productService";

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {

        try {

            const data = await fetchCategories();

            setCategories(data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <section className="max-w-7xl mx-auto px-6 py-12">

            <h2 className="text-3xl font-bold mb-8">

                Shop By Category

            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

                {

                    categories.map((category) => (

                        <div
                            key={category}

                            onClick={() =>
                                navigate(`/products/category/${category}`)
                            }

                            className="
                                bg-white
                                rounded-xl
                                shadow
                                p-6
                                text-center
                                hover:shadow-xl
                                hover:-translate-y-2
                                duration-300
                                cursor-pointer
                            "
                        >

                            <h3 className="font-semibold capitalize">

                                {category.replaceAll("-", " ")}

                            </h3>

                        </div>

                    ))

                }

            </div>

        </section>

    );

};

export default Categories;