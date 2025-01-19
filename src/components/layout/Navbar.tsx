import { Mail, Phone, SearchIcon } from "lucide-react";
import logo from "../../assets/nav/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4 sm:px-12">
        <div className="container mx-auto flex justify-between sm:justify-end items-center text-sm gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:www.registerkaro.in">www.registerkaro.in</a>
            </div>
            <div className="w-[2px] h-4 bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0)_0%,_#D0D0D0_50%,_rgba(0,_0,_0,_0)_100%)]"></div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+918447746183">+918447746183</a>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-200">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaPinterest className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto py-4 px-4 sm:px-12">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="RegisterKaro" className="h-8" />
          </a>

          {/* Hamburger Menu */}
          <button
            className="sm:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="block w-full h-[2px] bg-gray-800"></span>
              <span className="block w-full h-[2px] bg-gray-800"></span>
              <span className="block w-full h-[2px] bg-gray-800"></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-8">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a href="/services" className="hover:text-blue-600">
              Our Services
            </a>
            <a href="/blog" className="hover:text-blue-600">
              Blog
            </a>
            <a href="/contact" className="hover:text-blue-600">
              Contact Us
            </a>
            <a href="/about" className="hover:text-blue-600">
              About us
            </a>
            <a href="/" className="hover:text-blue-600">
              <SearchIcon className="w-5 h-5" />
            </a>
            <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
              Talk An Expert
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-4 flex flex-col gap-4">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a href="/services" className="hover:text-blue-600">
              Our Services
            </a>
            <a href="/blog" className="hover:text-blue-600">
              Blog
            </a>
            <a href="/contact" className="hover:text-blue-600">
              Contact Us
            </a>
            <a href="/about" className="hover:text-blue-600">
              About us
            </a>
            <a href="/" className="hover:text-blue-600">
              <SearchIcon className="w-5 h-5" />
            </a>
            <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
              Talk An Expert
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
