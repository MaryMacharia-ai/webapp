// src/components/sections/Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full bg-[#0B9AA6] overflow-hidden mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT IMAGE*/}
        <div className="w-full h-[320px] lg:h-[380px]">
          <img
            src="/lamp.jpg"
            alt="Newsletter discount"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-10 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Get more discount <br /> off your order
          </h2>

          <p className="mt-4 text-white/90">
            Get the Latest Writing Tips
          </p>

          {/* FORM */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 max-w-xl">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 px-5 py-3 rounded-lg text-gray-800 focus:outline-none"
            />

            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:opacity-90 transition">
              Subscribe Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
