import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShopContext } from '../Context/ShopContext';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(location.pathname.includes('collection'));
    }, [location]);

    if (!showSearch || !isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg"
            >
                <div className="relative w-full max-w-2xl">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center bg-white border border-pink-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-pink-400 focus-within:border-pink-500"
                    >
                        <Search className="w-6 h-6 text-pink-400 ml-4" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 py-3 px-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                            type="text"
                            placeholder="Search for products..."
                            aria-label="Search for products"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="p-2 text-gray-400 hover:text-gray-600 transition ease-in-out duration-200"
                                aria-label="Clear search"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </motion.div>
                    <motion.button
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        onClick={() => setShowSearch(false)}
                        className="absolute right-3 top-1 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md text-pink-400 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 border border-pink-300 transition ease-in-out duration-200"
                        aria-label="Close search"
                    >
                        <X className="w-5 h-5" />
                    </motion.button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SearchBar;
