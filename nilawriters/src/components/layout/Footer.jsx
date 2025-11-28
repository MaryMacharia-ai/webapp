import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1724] text-gray-300">

      {/* ✅ TOP BAR: LOGO LEFT + SOCIALS RIGHT */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          NilaWriters
        </h3>

        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/mary.macharia.58" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0B9AA6] transition">
            <Facebook size={16} />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0B9AA6] transition">
            <Twitter size={16} />
          </a>
          <a href="https://www.instagram.com/machariamary/" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0B9AA6] transition">
            <Instagram size={16} />
          </a>
          <a href="https://www.linkedin.com/in/mary-macharia-62499a397/" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0B9AA6] transition">
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* ✅ DIVIDER LINE */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="border-t border-white/10" />
      </div>

      {/* ✅ LINK GRID (FIGMA STYLE) */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">

        {/* OUR PRODUCTS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Our Products</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>The Support Suite</li>
            <li>The Sales Suite</li>
            <li>Support</li>
            <li>Guide</li>
          </ul>
        </div>

        {/* TOP FEATURES */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Top Features</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Discounted Pricing</li>
            <li>Knowldge Base</li>
            <li>Writing Platforms</li>
            <li>Help Desk Services</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Resources</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Writing Support</li>
            <li>Request Demo</li>
            <li>Library</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>About Us</li>
            <li>Writing</li>
            <li>Writers</li>
            <li>Tasks</li>
          </ul>
        </div>

        {/* FAVOURITE THINGS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Favourite Things</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Quality Writing</li>
            <li>For Startups</li>
            <li>For Writers</li>
            <li>For New Clients</li>
          </ul>
        </div>

      </div>

      {/* ✅ COPYRIGHT */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NilaWriters. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
