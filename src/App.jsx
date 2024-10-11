import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"
import About from "./Pages/About"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Orders from "./Pages/Orders"
import PlaceOrder from "./Pages/PlaceOrder"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LatestCollection from "./components/LatestCollection"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
     <div className="px-4 sm:px=[5vw] md:px-[7vw] lg:px-[9vw]">
     <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/latestcollection" element={<LatestCollection/>}/>
      </Routes>
      <Footer/>
      
     </div>
  )
}

export default App