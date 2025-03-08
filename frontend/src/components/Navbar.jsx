import { ShoppingCart, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import motorLogo from "../assets/images/motoLogo.png";
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <nav className="bg-transparent absolute inset-x-0 top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://bikebaazar.com"
            className="flex items-center space-x-3"
          >
            <img src={motorLogo} className="h-8 bg-white" alt="Motor Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900">
              Bike Baazar
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            {/* <div className="relative h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full">
            <span className="absolute -top-3 right-1">0</span>
          </div> */}

            <div
              className="relative h-8 w-8 flex items-center justify-center"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-6 h-6  text-white" />
              <span className="absolute -top-3 right-1 text-xs bg-red-500 text-white rounded-full px-1">
                0
              </span>{" "}
            </div>
            <div className="flex items-center space-x-3 ml-3 md:space-x-3">
              <button className="hidden md:block">
                <Link
                  to="/login"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Login
                </Link>
              </button>
              <button className="hidden md:block">
                <Link
                  to="/register"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Register
                </Link>
              </button>
            </div>
            {/* <Link
              to="/login"
              className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Login
            </Link>
          </button> */}

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0  ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 hover:text-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Cart Sidebar */}
      <div
        className={`fixed z-50 inset-y-0 right-0 w-[30%] bg-white shadow-lg transform transition-transform duration-1700 
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-red-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4">
          {/* Example Cart Item */}
          <div className="flex items-center justify-between border p-3 rounded-lg">
            <div>
              <p className="text-sm font-semibold">Bike Helmet</p>
              <p className="text-gray-600 text-xs">Price: $49.99</p>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <Trash2 />
            </button>
          </div>
          {/* Add more cart items dynamically */}
        </div>

        <div className="p-4 border-t">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
