import { useContext, useState } from 'react';
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';


const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount} = useContext(ShopContext);
  return (

    <div className="flex items-center justify-between py-5 p-3 m-3 font-medium rounded-lg bg-red-50 shadow-sm">
        <Link to='/' ><img src={assets.logo} className='w-36' alt="" /> </Link>

        <ul className="hidden sm:flex gap-8 text-sm text-[#E91E63] tracking-widest">
        <NavLink to='/' className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-black transition duration-300">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E91E63] hidden group-hover:block transition duration-300" />
        </NavLink>
        <NavLink to='/collection' className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-black transition duration-300">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E91E63] hidden group-hover:block transition duration-300" />
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-black transition duration-300">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E91E63] hidden group-hover:block transition duration-300" />
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-black transition duration-300">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#E91E63] hidden group-hover:block transition duration-300" />
        </NavLink>
      </ul>


      <div className='flex items-center gap-6'>
      <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt=''/>
      <div className="group relative">
        <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile Icon" />
         {/* Dropdown Menu */}
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded shadow-lg">
          <p className="cursor-pointer hover:text-black">My Profile</p>
          <p className="cursor-pointer hover:text-black">Order</p>
          <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
      </div>
     </div>

      <Link to='/cart' className=' relative'>
      <img src={assets.cart_icon} className='w-5 min-w-5' alt=''/>
      <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full z-aut text-[8px]'>{getCartCount()}</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
      </div>
      {/* Sidebar menu for smaller screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-pink-100 transition-all ${visible ? 'w-full' : 'w-0' }`}>
      <div className='flex flex-col text-gray-600 '>
      <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 border border-solid border-gray-500 cursor-pointer'>
      <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='dropdown menu'/>
      <p>Back</p>
      </div>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-solid border-gray-400 bg-pink-100 shadow-lg z-50 hover:bg-gray-300'  to='/'>HOME</NavLink>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-solid border-gray-400 bg-pink-100 shadow-lg z-50 hover:bg-gray-300'  to='/collection'>COLLECTION</NavLink>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-solid border-gray-400 bg-pink-100 shadow-lg z-50 hover:bg-gray-300'  to='/about'>ABOUT</NavLink>
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-solid border-gray-400 bg-pink-100 shadow-lg z-50 hover:bg-gray-300'  to='/contact'>CONTACT</NavLink>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
