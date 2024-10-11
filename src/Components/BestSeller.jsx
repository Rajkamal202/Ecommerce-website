/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Productsitem from "./Productsitem";
import Title from "./Title";


const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, []);


    return (
        <div className="my-10">
            <div className=" text-center text-3xl py-8">
                <Title text1={"BEST "} text2={"SELLERS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Shop everything you need, anywhere you are. Discover a world of products with unbeatable prices and convenience at Everywhere Ecommerce.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-10">
                {bestSeller.map((product, index) => (
                    <div key={index} className="relative p-3 bg-pink-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Productsitem key={index} id={product._id} name={product.name} image={product.image} price={product.price} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSeller;