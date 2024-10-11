import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-white to-pink-50 relative">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-20 h-20 rounded-full bg-[#E91E63] blur-lg"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#E91E63] blur-2xl"
      />

      {/* Hero left side */}
      <div className="w-full flex flex-col sm:flex-row items-center p-10 justify-between py-10 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#E91E63] space-y-6 sm:space-y-8 max-w-lg sm:max-w-xl"
        >
          {/* Title Section */}
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "2rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[2px] bg-[#E91E63]"
            />
            <p className="font-semibold text-sm md:text-base uppercase tracking-wide">
              Our Bestsellers
            </p>
          </div>

          {/* Heading */}
          <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            Latest Arrivals
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Discover the freshest trends and must-have items, curated just for you.
            Elevate your style with our latest collection.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
          <Link to='Collection'>
            <p className="font-semibold text-sm md:text-base uppercase tracking-wide transition duration-300 group-hover:text-gray-800">
              Shop Now
            </p>
            </Link>
            <motion.div
              initial={{ width: "2rem" }}
              whileHover={{ width: "3rem" }}
              className="h-[2px] bg-[#E91E63] group-hover:bg-gray-800 transition duration-300"
            />
            <ArrowRight className="w-5 h-5 text-[#E91E63] group-hover:text-gray-800 transition duration-300" />
          </motion.div>

          {/* New Additions */}
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {/* New Arrival Badge */}
            <div className="flex items-center gap-2">
              <Link to='/about'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#E91E63] hover:bg-pink-700 text-white text-xs px-4 py-2 cursor-pointer rounded-full flex items-center gap-2 shadow-md transition duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  About Us
                </motion.button>
              </Link>
              <Link to='/latestcollection'>
                <p className="text-gray-800 cursor-pointer text-xs sm:text-sm hover:underline">
                  Updated Weekly
                </p>
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-xs sm:text-sm">
              Shop now to stay ahead of the trend. Our newest arrivals are here to keep you stylish and ready for any occasion.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero image side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative w-full sm:w-1/2 overflow-hidden"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={assets.hero_img}
          className="w-full h-full object-cover"
          alt="Latest Arrivals"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

