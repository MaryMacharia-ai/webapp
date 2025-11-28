import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full pt-24 pb-24 md:pt-32 md:pb-28 overflow-visible flex items-center justify-center">
      
      {/* ✅ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/front_image.jpg')" }}
      />

      {/* ✅ DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ✅ HERO CONTENT */}
      <div className="relative z-30 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-[38px] md:text-[52px] xl:text-[64px] leading-tight">
          We Write Content <br /> That Works
        </h1>

        <p className="mt-6 text-[16px] md:text-[18px] text-gray-100 max-w-2xl leading-relaxed">
          Academic writing, business content, blogs, SEO and brand storytelling —
          crafted by real experts to elevate your brand
        </p>

        <button className="mt-10 bg-white text-[#0B9AA6] font-bold px-12 py-4 rounded-xl shadow-lg hover:opacity-90 transition">
          Order Now
        </button>
      </div>

      {/* ✅ FLOATING STATS — BALANCED OFFSET */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 w-full max-w-5xl px-6 z-50">
        <div className="bg-[#2F6F6C] rounded-2xl py-8 px-6 grid grid-cols-2 md:grid-cols-4 text-white text-center shadow-2xl">
          <div className="border-r border-white/40">
            <h3 className="text-3xl font-extrabold">300+</h3>
            <p className="text-sm mt-1 text-gray-100">Expert Writers</p>
          </div>

          <div className="border-r border-white/40">
            <h3 className="text-3xl font-extrabold">10k+</h3>
            <p className="text-sm mt-1 text-gray-100">Orders Completed</p>
          </div>

          <div className="border-r border-white/40">
            <h3 className="text-3xl font-extrabold">98%</h3>
            <p className="text-sm mt-1 text-gray-100">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold">24/7</h3>
            <p className="text-sm mt-1 text-gray-100">Support Available</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
