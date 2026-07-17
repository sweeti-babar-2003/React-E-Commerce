const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-red-50 via-pink-50 to-white">

            <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">

                {/* Left */}

                <div>

                    <p className="text-red-500 font-semibold uppercase tracking-wider">
                        Biggest Deals Of The Season
                    </p>

                    <h1 className="text-6xl font-extrabold text-gray-900 mt-4">
                        50-80%
                        <span className="text-red-500">
                            {" "}OFF
                        </span>
                    </h1>

                    <h2 className="text-4xl font-bold mt-3 text-gray-700">
                        On Everything!
                    </h2>

                    <p className="mt-6 text-gray-500 text-lg leading-8">
                        Shop Electronics, Fashion, Beauty,
                        Jewellery, Groceries and much more
                        with exciting discounts.
                    </p>

                    <button
                        className="
                        mt-8
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-8
                        py-4
                        rounded-xl
                        font-semibold
                        transition
                        "
                    >
                        Shop Now
                    </button>

                </div>

                {/* Right */}

                <div>

                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                        alt="Shopping Banner"
                        className="rounded-3xl shadow-xl"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;