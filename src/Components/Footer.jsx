import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-14 text-sm">
          {/* Company Logo and Description */}
          <div className="flex-1">
            <img src={assets.logo} className="mb-5 w-32" alt="Everywhere Ecommerce Logo" />
            <p className="text-gray-600 mb-5">
              © 2024 Everywhere Ecommerce. All rights reserved. Empowering you with a seamless shopping experience anytime, anywhere.
              Follow us on social media for the latest updates and exclusive offers.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Social Media Icons */}
              <a href="#" aria-label="Facebook">
                <img src={assets.facebook} alt="Facebook" className="w-6 h-6 hover:opacity-75 transition-opacity duration-300" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={assets.twitter} alt="Twitter" className="w-6 h-6 hover:opacity-75 transition-opacity duration-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={assets.instagram} alt="Instagram" className="w-6 h-6 hover:opacity-75 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex-1">
            <p className="text-xl font-semibold mb-5 text-gray-800">Company</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#E91E63] transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E91E63] transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E91E63] transition-colors duration-300">Delivery</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E91E63] transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E91E63] transition-colors duration-300">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E91E63] transition-colors duration-300">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <p className="text-xl font-semibold mb-5 text-gray-800">Get in Touch</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a href="tel:+1-222-456-789" className="hover:text-[#E91E63] transition-colors duration-300">+1-222-456-789</a>
              </li>
              <li>
                <a href="mailto:contact@everywhere.com" className="hover:text-[#E91E63] transition-colors duration-300">contact@everywhere.com</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E91E63] transition-colors duration-300">Live Chat </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-600">
          <p className="text-xs md:text-sm">
            &copy; 2024 Everywhere Ecommerce. All Rights Reserved.
          </p>
          <p className="text-xs md:text-sm">
            Designed with <span className="text-[#E91E63]">&hearts;</span> by Rajkamal Rao.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


