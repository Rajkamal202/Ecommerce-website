import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Components/Title";
import Productsitem from "../Components/Productsitem"; 






const Collection = () => {
    // Get products, search term, and search visibility from ShopContext
    const { products, search, showSearch } = useContext(ShopContext);

    // Local state to manage filter visibility, filtered products, selected categories, and sort type
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState("relevant");

    // Function to toggle category selection for filtering
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            // Remove category if already selected
            setCategory((categoryList) =>
                categoryList.filter((item) => item !== e.target.value)
            );
        } else {
            // Add category if not already selected
            setCategory((categoryList) => [...categoryList, e.target.value]);
        }
    };

    // Function to toggle subcategory selection for filtering
    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            // Remove subcategory if already selected
            setSubCategory((subCategoryList) =>
                subCategoryList.filter((item) => item !== e.target.value)
            );
        } else {
            // Add subcategory if not already selected
            setSubCategory((subCategoryList) => [
                ...subCategoryList,
                e.target.value,
            ]);
        }
    };

    // Function to apply selected filters to the product list
    const applyFilter = () => {
        let productsCopy = products.slice(); // Create a copy of the products array

        // Filter by search term if search is active
        if (showSearch && search) {
            productsCopy = productsCopy.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filter by selected categories
        if (category.length > 0) {
            productsCopy = productsCopy.filter((product) =>
                category.includes(product.category)
            );
        }

        // Filter by selected subcategories
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((product) =>
                subCategory.includes(product.subCategory)
            );
        }

        // Update the filtered products state
        setFilterProducts(productsCopy);
    };

    // Function to sort the filtered products based on the selected sort type
    const sortProduct = () => {
        let fpCopy = filterProducts.slice(); // Create a copy of the filtered products array

        // Sort products based on the selected sort type
        switch (sortType) {
            case "low-high":
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                break;

            case "high-low":
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;

            default:
                applyFilter(); // Reapply filters if sort type is "relevant"
                break;
        }
    };

    // Apply filters whenever category, subcategory, search term, or search visibility changes
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch]);

    // Sort products whenever the sort type changes
    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t">
            {/* Toggle Button for Filters on Mobile */}
            <button
                onClick={() => setShowFilter(!showFilter)}
                className="block sm:hidden bg-pink-600 text-pink-100 py-2 px-4 rounded-md hover:shadow-md mx-auto mb-4"
            >
                {showFilter ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Filter Options */}
            <div className={`min-w-60 ${showFilter ? 'block' : 'hidden'} sm:block`}>
                <p className="my-2 text-xl flex items-center gap-2">
                    FILTERS
                    <img
                        src={assets.dropdown_icon}
                        className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
                        alt="Dropdown Icon"
                    />
                </p>

                {/* Category Filter */}
                <div className="border border-pink-300 shadow-lg hover:shadow-xl bg-pink-100 pl-5 py-3 mt-6">
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox cursor-pointer h-4 w-4 text-pink-600"
                                value={"Men"}
                                onChange={toggleCategory}
                            />
                            Men
                        </label>
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 cursor-pointer text-pink-600"
                                value={"Women"}
                                onChange={toggleCategory}
                            />
                            Women
                        </label>
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox cursor-pointer h-4 w-4 text-pink-600"
                                value={"Kids"}
                                onChange={toggleCategory}
                            />
                            Kids
                        </label>
                    </div>
                </div>

                {/* SubCategory Filter */}
                <div className="border border-pink-300 shadow-lg hover:shadow-xl bg-pink-100 pl-5 py-3 my-5">
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox cursor-pointer h-4 w-4 text-pink-600"
                                value={"Topwear"}
                                onChange={toggleSubCategory}
                            />
                            Topwear
                        </label>
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox cursor-pointer h-4 w-4 text-pink-600"
                                value={"Bottomwear"}
                                onChange={toggleSubCategory}
                            />
                            Bottomwear
                        </label>
                        <label className="flex gap-2 items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox cursor-pointer h-4 w-4 text-pink-600"
                                value={"Winterwear"}
                                onChange={toggleSubCategory}
                            />
                            Winterwear
                        </label>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
                    <Title text1={"ALL "} text2={"COLLECTIONS"} />
                    {/* Product Sort */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-pink-300 bg-pink-100 text-sm px-2 py-1 rounded-md hover:bg-pink-100 shadow-xl transition-colors duration-300"
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filterProducts.map((product, index) => (
                        <div
                            key={index} // Use a unique key for each product item
                            className="relative p-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <Productsitem
                                id={product._id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;

