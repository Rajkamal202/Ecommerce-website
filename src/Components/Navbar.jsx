import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'COLLECTION', path: '/collection' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="sticky m-1  top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to='/' className="flex-shrink-0">
            <img src={assets.logo} className='w-36' alt="Logo" />
          </Link>

          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#E91E63] transition-colors duration-300"
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E91E63]"
                          layoutId="underline"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <button onClick={() => setShowSearch(true)} className="text-gray-700 hover:text-[#E91E63] transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="text-gray-700 hover:text-[#E91E63] transition-colors duration-300"
              >
                <User className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {showProfileDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  >
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                    <Link to='/login'><button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login \ Sign In</button> </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to='/cart' className='relative text-gray-700 hover:text-[#E91E63] transition-colors duration-300'>
              <ShoppingBag className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className='absolute -top-2 -right-2 bg-[#E91E63] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button onClick={() => setVisible(true)} className="text-gray-700 hover:text-[#E91E63] transition-colors duration-300 sm:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-50 bg-white shadow-xl sm:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <img src={assets.logo} className='w-36' alt="Logo" />
              <button onClick={() => setVisible(false)} className="text-gray-700 hover:text-[#E91E63] transition-colors duration-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `block py-2.5 px-4 text-base font-medium transition duration-150 ease-in-out ${
                      isActive ? 'text-[#E91E63] bg-pink-50' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
