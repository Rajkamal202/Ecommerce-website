import { useState, useContext, useEffect } from "react";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../Context/ShopContext";

import { assets } from "../assets/assets";
import Title from "./Components/Title";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 px-4 sm:px-8">
      {/* Left Section: Cart Items */}
      <div>
        <div className="text-2xl mb-3">
          <Title text1={"YOUR "} text2={"CART"} />
        </div>
        <div className="space-y-6">
          {cartData &&
            cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div
                  key={index}
                  className="py-4 px-4 sm:px-6 bg-white border-t border-b rounded-xl shadow-lg flex justify-between items-center"
                >
                  {/* Left Section: Product Image and Details */}
                  <div className="flex items-center gap-6">
                    <img
                      className="w-16 sm:w-24 rounded-lg object-cover"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div>
                      <p className="text-lg font-semibold mb-1">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <p className="text-gray-700">
                          {currency}
                          {productData.price}
                        </p>
                        <p className="px-2 py-1 bg-gray-100 rounded">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section: Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      className="border w-10 text-center py-1 rounded focus:outline-none"
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                      }
                    />
                    <button
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  {/* Right Section: Delete Button */}
                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <img
                      src={assets.bin_icon}
                      alt="Remove Item"
                      className="w-6"
                    />
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      {/* Right Section: Cart Total */}
      <div className="sticky top-20 bg-white p-6 shadow-lg rounded-xl w-full lg:w-[400px]">
        <CartTotal />
        <div className="mt-6">
          <button
            onClick={() => navigate("/placeorder")}
            className="w-full bg-black text-white text-lg py-3 rounded-md hover:bg-gray-800 transition-all"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;


