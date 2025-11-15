import { useState } from "react";
import academicImg from "../../assets/images/academic.jpg";
import blogImg from "../../assets/images/blog.jpg";
import ghostwritingImg from "../../assets/images/ghostwriting.jpg";
import editingImg from "../../assets/images/editing.jpg";
import tutoringImg from "../../assets/images/tutoring.jpg";
import brandingImg from "../../assets/images/branding.jpg";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active dot

  const services = [
    {
      title: "Academic Writing",
      desc: "Essays, research papers, and dissertations tailored to your field.",
      price: "$45.00 ~$60.00~",
      image: academicImg,
    },
    {
      title: "Blog & Article Writing",
      desc: "SEO-friendly, engaging content for digital platforms.",
      price: "$35.00 ~$50.00~",
      image: blogImg,
    },
    {
      title: "Ghostwriting",
      desc: "Confidential storytelling for books, speeches, and more.",
      price: "$120.00 ~$150.00~",
      image: ghostwritingImg,
    },
    {
      title: "Editing & Proofreading",
      desc: "Grammar, clarity, and tone refinement for professional polish.",
      price: "$25.00 ~$40.00~",
      image: editingImg,
    },
    {
      title: "Online Tutoring",
      desc: "One-on-one writing guidance and academic support.",
      price: "$60.00 ~$75.00~",
      image: tutoringImg,
    },
    {
      title: "Brand Storytelling",
      desc: "Narratives that connect emotionally and build trust.",
      price: "$85.00 ~$100.00~",
      image: brandingImg,
    },
  ];

  const maxIndex = 4; // Number of dots - 1

  const handleLeft = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleRight = () => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            All Services
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            The services we provide are selected for quality, impact, and clarity — tailored to your goals.
          </p>

          {/* Grid Layout: 3 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                desc={service.desc}
                price={service.price}
                image={service.image}
              />
            ))}
          </div>

          {/* Navigation Arrows + Dots */}
          <div className="flex justify-center items-center gap-4 mt-12">
            {/* Left Arrow */}
            <button
              onClick={handleLeft}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <span className="text-xl text-gray-600">←</span>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((dot, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition ${
                    index === activeIndex ? "bg-black" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleRight}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <span className="text-xl text-gray-600">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, price, image }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
      {/* Image with Bottom-Left Plus Button */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-md"
          loading="lazy"
        />
        <button className="absolute bottom-2 left-2 w-8 h-8 bg-blue-600 text-white text-xl font-bold rounded-full flex items-center justify-center hover:bg-blue-700 transition">
          +
        </button>
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2 text-sm">{desc}</p>
        <p className="text-green-600 font-semibold text-lg">{price}</p>
      </div>
    </div>
  );
}
