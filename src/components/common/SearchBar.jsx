import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const handleSearch = () => {

        const category = search.trim().toLowerCase();

        if (category === "") return;

        navigate(`/products/category/${category}`);

        setSearch("");

    };

    return (

        <div className="hidden lg:flex items-center w-full max-w-xl border rounded-lg overflow-hidden shadow-sm">

            <input
                type="text"
                placeholder="Search category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {

                    if (e.key === "Enter") {

                        handleSearch();

                    }

                }}
                className="w-full px-4 py-3 outline-none"
            />

            <button
                onClick={handleSearch}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-3"
            >

                <Search size={20} />

            </button>

        </div>

    );

};

export default SearchBar;