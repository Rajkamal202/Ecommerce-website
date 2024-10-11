/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";

import { ShopContext } from "../Context/ShopContext";
import Productsitem from "./Productsitem";
import Title from "./Title";


// eslint-disable-next-line react/prop-types
const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {

        if (products.length > 0) {

            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0, 5));
        }
    }, [products]);

    return (
        <div className="my-24">
            <div className=" text-center text-3xl py-2">
                <Title text1={"RELATED "} text2={"PRODUCTS"} />
            </div>

            <div className="relative p-3 bg-pink-50 rounded-lg flex gap-5 border border-solid border-pink-300 shadow-lg hover:shadow-lg transition-shadow duration-300">
                {related.map((item, index) => (
                    <Productsitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
