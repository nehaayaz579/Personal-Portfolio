"use client";
import { useState} from "react";
import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-purple-300 ">
      <div className="flex justify-between items-center px-4 sm:px-4 lg:px-10 h-[67px]">
        {/* Logo */}
        <div className="-pt-1 max-w-30%">
          <h2 className="text-purple-700 text-3xl font-bold pt-3">PORTFOLIO</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow pl-[400px] justify-center">
          <ul className="flex gap-20 text-[30px] pt-4 font-bold text-gray-700">
            {[
              "Home",
              "About",
              "Contact",  // Cardpage here can be renamed to Cart if that's the intended page.
              "Skills",
            ].map((item, index) => (
              <li key={index} className="hover:text-black text-[18px]">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
            <div className="-mt-5">
             <button className="inline-flex items-right bg-purple-700 text-white border-0 py-2 px-2 focus:outline-none hover:bg-purple-200 rounded text-base">
            Download CV
            <AiOutlineCloudDownload className="text-2xl gap-2 pt-1" />
          </button>
          </div>
          </ul>
         
        </nav>
        
      

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
        
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-600 text-base font-medium">
            {[
              "Home",
              
              "About",
             
              "Contact",
              "Skills",
            ].map((item, index) => (
              <li key={index} className="hover:text-black">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
              
            ))}
            <li className="flex items-center gap-2 cursor-pointer ">
              
            <button className="inline-flex items-center  bg-purple-700 text-white border-0 py-1 px-1 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-0 ">
            Download CV
            <AiOutlineCloudDownload />
          </button>
          
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;











{/*import React from "react";
import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-purple-300 w-full h-[60px]">
      <div className="flex w-full">
        <div className="-pt-2 ml-[20px] max-w-30%">
          <h2 className="text-purple-700 text-3xl font-bold pt-3">PORTFOLIO</h2>
        </div>
        <div className="flex pt-{40px} w-[70%] text-sans text-xl">
          <ul className="flex gap-20 ml-[30%] text-[20px] font-semibold text-black-500  p-3">
            <li className="hover:text-purple-400 ">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link href="/About">About</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link href="/Contact">Contact</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link href="/Skills">Skills</Link>
            </li>
          </ul>
        </div>
        <div className="pt-3 pl-16 w-80 h-15">
          <button className="inline-flex items-center  bg-purple-700 text-white border-0 py-1 px-1 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-0 ">
            Download CV
            <AiOutlineCloudDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;*/}
