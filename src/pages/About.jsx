import {
    ShieldCheck,
    Truck,
    BadgeCheck,
    Users,
} from "lucide-react";

const About = () => {

    return (

        <section className="max-w-7xl mx-auto px-6 py-14">

            <div className="text-center">

                <h1 className="text-5xl font-bold text-gray-800">

                    About ShopNest

                </h1>

                <p className="text-gray-500 mt-5 max-w-3xl mx-auto">

                    ShopNest is your trusted online shopping destination
                    where you can buy Electronics, Fashion, Beauty,
                    Grocery, Home & Kitchen products at affordable prices.

                </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                <div className="bg-white shadow rounded-xl p-6 text-center">

                    <Truck
                        size={40}
                        className="mx-auto text-red-500"
                    />

                    <h2 className="font-bold text-xl mt-4">

                        Fast Delivery

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Delivery all over India.

                    </p>

                </div>

                <div className="bg-white shadow rounded-xl p-6 text-center">

                    <ShieldCheck
                        size={40}
                        className="mx-auto text-green-500"
                    />

                    <h2 className="font-bold text-xl mt-4">

                        Secure Payment

                    </h2>

                    <p className="text-gray-500 mt-2">

                        100% Safe & Secure Payments.

                    </p>

                </div>

                <div className="bg-white shadow rounded-xl p-6 text-center">

                    <BadgeCheck
                        size={40}
                        className="mx-auto text-blue-500"
                    />

                    <h2 className="font-bold text-xl mt-4">

                        Genuine Products

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Only Original Products.

                    </p>

                </div>

                <div className="bg-white shadow rounded-xl p-6 text-center">

                    <Users
                        size={40}
                        className="mx-auto text-purple-500"
                    />

                    <h2 className="font-bold text-xl mt-4">

                        Customer Support

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Support available 24x7.

                    </p>

                </div>

            </div>

        </section>

    );

};

export default About;