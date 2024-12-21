import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import Logo from "../assets/react.svg";

const Navbar = () => {
  const [ mobileDrawerOpen, setMobileDrawerOpen ] = useState(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="sticky top-5 z-50 py-3 backdrop-blur-3xl ring-1 ring-gray-500 shadow-sm ml-10 mr-10 rounded-lg text-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img 
              src={Logo} 
              alt="logo" 
              className='h-10 w-10 mr-2'
            />
            <span className='text-xl tracking-tighter'>VRPLAY</span>
          </div>
          <ul className='hidden md:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className='py-2 px-3 border rounded-md'>
              Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Sign Up
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                { mobileDrawerOpen ? <X/> : <Menu/> }
              </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;