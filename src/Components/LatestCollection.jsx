import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"

import { useEffect } from "react"
import Productsitem from "./Productsitem"
import Title from "./Title"



const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() =>{
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className="my-10">
    <div className="text-center py-8 text-3xl">
    <Title text1={'LATEST '} text2={'COLLECTIONS'}/>
    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
    Shop effortlessly at Everywhere Ecommerce, where the latest trends and essential items meet seamless, secure, and speedy service. Your one-stop destination for everything you need, anytime, anywhere!
    </p>
    </div>
    {/* Rendering Prdocuts */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-10">
    {
        latestProducts.map((item, index) => (
            <div key={index} className="relative p-3 bg-pink-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            
                <Productsitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

            </div>
        ))
    }
   </div>
   </div>
  )
}

export default LatestCollection