import React from "react";

const FeaturedRoom = () => {
  return (
   <section className="w-full pt-32npm run dev pb-12 md:pt-36 md:pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ✅ LEFT IMAGE CARD */}
        <div className="bg-[#F2E2CC] rounded-[32px] p-10 flex items-center justify-center shadow-lg">
          <div className="rounded-2xl overflow-hidden w-full max-w-[420px] h-[320px]">
            <img
              src="/cont.jpg"
              alt="Featured Content"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ✅ RIGHT CONTENT */}
        <div>
          <h2 className="text-[34px] md:text-[40px] font-extrabold leading-tight text-gray-900 max-w-xl">
            We Create Your Content <br /> the Right Way
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
            At NilaWriters, we help individuals, students, and businesses bring
            their ideas to life through quality storytelling, brand messaging, and
            academic content creation.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-7 h-7 bg-[#0B9AA6] text-white rounded-full text-sm font-bold shrink-0">
                ✓
              </span>
              <span className="text-gray-700 leading-relaxed">
                Professional content created by experts.
              </span>
            </li>

            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-7 h-7 bg-[#0B9AA6] text-white rounded-full text-sm font-bold shrink-0">
                ✓
              </span>
              <span className="text-gray-700 leading-relaxed">
                Fast delivery without compromising quality.
              </span>
            </li>

            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-7 h-7 bg-[#0B9AA6] text-white rounded-full text-sm font-bold shrink-0">
                ✓
              </span>
              <span className="text-gray-700 leading-relaxed">
                Tailored writing solutions for individuals & brands.
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FeaturedRoom;
