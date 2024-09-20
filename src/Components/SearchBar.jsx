import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
    // Destructure necessary state and context values
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // Effect to determine visibility of the search bar based on the current route
    useEffect(() => {
        setIsVisible(location.pathname.includes('collection'));
    }, [location]);

    // Conditionally render the search bar if it's visible and search is enabled
    if (!showSearch || !isVisible) return null;

    return (
        <div className="text-center">
            <div className="inline-flex items-center justify-center border bg-pink-100 hover:bg-pink-50 hover:shadow-2xl border-pink-400 shadow-2xl px-10 h-10 mx-3 p-6 rounded-full w-3/4 sm:w-1/2">
                {/* Input field for search functionality */}
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none rounded-xl bg-inherit p-2 m-2 text-sm"
                    type="text"
                    placeholder="Search"
                />
                {/* Search icon */}
                <img className="w-4 cursor-pointer" src={assets.search_icon} alt="Search" />
            </div>
            {/* Close button to hide the search bar */}
            <img
                onClick={() => setShowSearch(false)}
                className="inline w-3 cursor-pointer"
                src={assets.cross_icon}
                alt="Close"
            />
        </div>
    );
};

export default SearchBar;
