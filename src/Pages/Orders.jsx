import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 px-4 sm:px-8 lg:px-16">
      <div className="text-2xl sm:text-3xl mb-8">
        <Title text1="MY " text2="ORDERS" />
      </div>
      
      <div className="flex flex-col gap-8">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border border-gray-200 
                       transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Product Info */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20 rounded-lg shadow-md"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div>
                  <p className="sm:text-lg font-semibold text-gray-900">{item.name}</p>
                  <div className="flex flex-wrap gap-4 items-center mt-2 text-gray-700">
                    <p className="text-lg font-medium">{currency}{item.price}</p>
                    <p className="text-sm">Quantity: 1</p>
                    <p className="text-sm">Size: M</p>
                  </div>
                  <p className="mt-2 text-gray-500 text-sm">
                    Date: <span className="text-gray-400">28, August, 2024</span>
                  </p>
                </div>
              </div>

              {/* Order Status and Track Button */}
              <div className="flex items-center justify-between w-full md:w-1/2 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <span className="min-w-3 h-3 rounded-full bg-green-500"></span>
                  <p className="text-sm md:text-base text-gray-700">Ready to ship</p>
                </div>
                <button
                  className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 
                             rounded-md hover:bg-gray-100 transition-all duration-200"
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
