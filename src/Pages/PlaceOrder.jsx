import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';
import { assets } from '../assets/assets';


const Placeorder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-8 sm:pt-16 min-h-[80vh] border-t border-gray-200">
      {/* Left side (Delivery Information) */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[500px]">
        <div className="text-2xl sm:text-3xl mb-4">
          <Title text1="DELIVERY " text2="INFORMATION" />
        </div>
        {/* Form fields */}
        <div className="flex gap-4">
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
          type="text"
          placeholder="Address"
          required
        />
        <div className="flex gap-4">
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="flex gap-4">
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
            type="number"
            placeholder="Zipcode"
            required
          />
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded-lg py-2 px-4 w-full transition-all focus:outline-none focus:border-black focus:shadow-lg hover:shadow-md mt-2"
          type="number"
          placeholder="Phone"
          required
        />
      </div>

      {/* Right side (Cart Total & Payment) */}
      <div className="flex flex-col items-end w-full sm:max-w-[500px]">
        <div className="min-w-[80%] mt-6">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="PAYMENT " text2="METHOD" />
          {/* Payment methods */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-4 p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                method === 'stripe' ? 'border-green-400 bg-gray-50' : 'border-gray-300'
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-full flex-shrink-0 ${
                  method === 'stripe' ? 'bg-green-400' : ''
                }`}
              />
              <img className="h-6" src={assets.stripe_logo} alt="Mastercard" />
            </div>

            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-4 p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                method === 'razorpay' ? 'border-green-400 bg-gray-50' : 'border-gray-300'
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-full flex-shrink-0 ${
                  method === 'razorpay' ? 'bg-green-400' : ''
                }`}
              />
              <img className="h-6" src={assets.razorpay_logo} alt="Visa" />
            </div>

            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-4 p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                method === 'cod' ? 'border-green-400 bg-gray-50' : 'border-gray-300'
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-full flex-shrink-0 ${
                  method === 'cod' ? 'bg-green-400' : ''
                }`}
              />
              <p className="text-gray-600 text-sm font-medium">Cash on Delivery</p>
            </div>
          </div>

          {/* Place Order button */}
          <div className="w-full text-right mt-10">
            <button
              onClick={() => navigate('/orders')}
              className="bg-black text-white px-8 py-3 text-lg rounded-lg transition-all hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-600"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
