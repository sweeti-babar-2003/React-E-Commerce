import {
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

const Contact = () => {

    return (

        <section className="max-w-6xl mx-auto px-6 py-14">

            <h1 className="text-5xl font-bold text-center">

                Contact Us

            </h1>

            <p className="text-center text-gray-500 mt-4">

                We'd love to hear from you.

            </p>

            <div className="grid lg:grid-cols-2 gap-10 mt-12">

                <div className="space-y-6">

                    <div className="flex gap-4 items-center">

                        <MapPin
                            size={28}
                            className="text-red-500"
                        />

                        <div>

                            <h2 className="font-bold">

                                Address

                            </h2>

                            <p className="text-gray-500">

                                Pune, Maharashtra, India

                            </p>

                        </div>

                    </div>

                    <div className="flex gap-4 items-center">

                        <Phone
                            size={28}
                            className="text-green-500"
                        />

                        <div>

                            <h2 className="font-bold">

                                Phone

                            </h2>

                            <p className="text-gray-500">

                                +91 9876543210

                            </p>

                        </div>

                    </div>

                    <div className="flex gap-4 items-center">

                        <Mail
                            size={28}
                            className="text-blue-500"
                        />

                        <div>

                            <h2 className="font-bold">

                                Email

                            </h2>

                            <p className="text-gray-500">

                                support@shopnest.com

                            </p>

                        </div>

                    </div>

                </div>

                <form className="bg-white shadow-xl rounded-xl p-8">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg p-3 mb-4 outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg p-3 mb-4 outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border rounded-lg p-3 mb-4 outline-none"
                    />

                    <textarea
                        rows="5"
                        placeholder="Message"
                        className="w-full border rounded-lg p-3 mb-4 outline-none"
                    />

                    <button
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </section>

    );

};

export default Contact;