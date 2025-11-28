import React from "react";

const BestFurniture = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT TEXT CONTENT */}
      <div className="max-w-xl">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight">
          The Best Writing <br />
          Solutions for Your Success
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          We provide professional academic, business, and creative writing services
          designed to help students, entrepreneurs, and brands communicate with
          clarity, authority, and impact. Every project is handled by experienced
          writers dedicated to quality and originality.
        </p>
      </div>

      {/* RIGHT SINGLE IMAGE ONLY */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl h-[360px]">
        <img
          src="/writing-team.jpg"
          alt="Professional Writing Team"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default BestFurniture;
