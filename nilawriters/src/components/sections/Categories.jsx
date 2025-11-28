import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "Humanizing AI work",
      img: "/humanize.jpg",
    },
    {
      title: "Online Tutoring",
      img: "/onlinetut.jpg",
    },
    {
      title: "Branding",
      img: "/branding.jpg",
    },
    {
      title: "SEO Writing", // ✅ EXTRA IMAGE ADDED
      img: "/seo.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_3fr] gap-12 items-center">

      {/* ✅ LEFT INFO COLUMN (LIKE FIGMA) */}
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900">
          New Services <br />  Now
        </h2>

        <p className="mt-4 text-gray-600 max-w-sm leading-relaxed">
          Get the latest writing services at discounted prices.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-gray-900 hover:opacity-70 transition"
        >
          Check All →
        </a>
      </div>

      {/* ✅ RIGHT HORIZONTAL IMAGE STRIP */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group h-[260px]"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* ✅ DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* ✅ CATEGORY LABEL */}
            <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">
              {cat.title}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Categories;

