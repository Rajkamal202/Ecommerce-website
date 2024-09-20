import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-white to-pink-50 relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-[#E91E63] opacity-20 blur-lg"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#E91E63] opacity-20 blur-2xl"></div>

      {/* Hero left side */}
      <div className="w-full flex flex-col sm:flex-row items-center p-10 justify-between py-10 sm:py-0">
      <div className="text-[#E91E63] space-y-6 sm:space-y-8 max-w-lg sm:max-w-xl">
      {/* Title Section */}
      <div className="flex items-center gap-2">
      <p className="w-8 md:w-11 h-[2px] bg-[#E91E63]"></p>
      <p className="font-semibold text-sm md:text-base uppercase tracking-wide">
        Our Bestsellers
      </p>
      </div>

    {/* Heading */}
       <h1 className="prata-regular text-4xl sm:py-3 lg:text-5xl font-bold leading-tight text-gray-800">
        Latest Arrivals
       </h1>

    {/* Description */}
       <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Discover the freshest trends and must-have items, curated just for you.
      Elevate your style with our latest collection.
       </p>

    {/* CTA Button */}
    <div className="flex items-center gap-2 group">
      <p className="font-semibold text-sm md:text-base uppercase tracking-wide transition duration-300">
        Shop Now
      </p>
      <p className="w-8 md:w-11 h-[2px] bg-[#E91E63] group-hover:bg-gray-800 transition duration-300"></p>
    </div>

    {/* New Additions */}
    <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
      {/* New Arrival Badge */}
      <div className="flex items-center gap-2">
      <Link to='/collection'>
        <button className="bg-[#E91E63] hover:shadow-lg hover:bg-pink-700 text-white text-xs px-3 py-1 cursor-pointer rounded-full">
          New
        </button>
        </Link>
        <Link to='/latestcollection'>
        <p className="text-gray-800 cursor-pointer text-xs sm:text-sm">
          Updated Weekly
        </p>
        </Link>
      </div>

      {/* Tagline */}
      <p className="text-gray-500 text-xs sm:text-sm">
        Shop now to stay ahead of the trend. Our newest arrivals are here to keep you stylish and ready for any occasion.
      </p>
    </div>
  </div>


  
</div>


      {/* Hero image side */}
      <div className="relative w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-700 ease-in-out"
          alt="Latest Arrivals"
        />
      </div>
    </div>
  );
};

export default Hero;

