// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/nilawriters-logo.jpg"
            alt="NilaWriters Logo"
            className="w-11 h-11 object-contain"
          />
          <h1 className="text-xl font-bold text-gray-900">
            NilaWriters
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 hover:text-[#0B9AA6] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0B9AA6] after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* AUTH BUTTONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-[#0B9AA6] transition font-medium"
          >
            Log In
          </Link>

          <Link
            to="/signup"
            className="bg-[#0B9AA6] text-white px-5 py-2.5 rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-md px-6`}
      >
        <div className="py-6 space-y-5">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-[#0B9AA6] transition"
            >
              {item}
            </a>
          ))}

          {/* MOBILE AUTH */}
          <div className="pt-4 border-t space-y-4">
            <Link
              to="/login"
              className="block text-gray-700 hover:text-[#0B9AA6] font-medium"
              onClick={() => setOpen(false)}
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="block text-center bg-[#0B9AA6] text-white py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
