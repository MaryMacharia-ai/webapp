// src/components/sections/Testimonials.jsx
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Julia Anderson",
    role: "Student & Author",
    text:
      "Nilawriters transformed my ideas into powerful academic content. Everything was clear, well-structured, and delivered on time.",
    img: "/test_one.jpg",
    room: "/room1.jpg",
  },
  {
    name: "Sophia Lane",
    role: "Business Consultant",
    text:
      "Their business content and branding services helped my company scale faster than expected. Highly professional!",
    img: "/test_two.jpg",
    room: "/room2.jpg",
  },
  {
    name: "Michael Roberts",
    role: "Content Strategist",
    text:
      "Fast delivery, high quality, and excellent communication. Nilawriters is my go-to writing team.",
    img: "/test_three.jpg",
    room: "/room3.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const t = testimonials[current];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT TEXT CONTENT */}
      <div>
        <h2 className="text-4xl font-bold mb-10">
          What People Are Saying About Us
        </h2>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={t.img}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
          “{t.text}”
        </p>

        {/* ARROWS */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#0B9AA6] text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE*/}
      <div className="w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
        <img
          src={t.room}
          alt="Testimonial display"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonials;

