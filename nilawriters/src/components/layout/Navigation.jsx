import { useState } from "react";

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-neutral-50 px-20 py-8 shadow-md">
      {/* Logo - Left Aligned */}
      <div className="text-xl font-bold text-primary">
        <a href="#home">WordCraft</a>
      </div>

      {/* Navigation + Auth - Right Aligned */}
      <div className="flex items-center gap-[64px]">
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#home" className="font-medium text-neutral-800 hover:text-accent transition">
            Home
          </a>
          <a href="#about" className="font-medium text-neutral-800 hover:text-accent transition">
            About
          </a>
          <a href="#contact" className="font-medium text-neutral-800 hover:text-accent transition">
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded transition">
            Sign Up
          </button>
          <button className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded transition">
            Sign In
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
