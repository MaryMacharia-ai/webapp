import React from "react";
import { Plus } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Tutoring Services",
      img: "/tutoring.jpg",
      price: "$75.00",
      oldPrice: "$92.00",
    },
    {
      title: "Storytelling",
      img: "/storytell.jpg",
      price: "$50.00",
      oldPrice: "$70.00",
    },
    {
      title: "Blog Writing",
      img: "/blog.jpg",
      price: "$105.00",
      oldPrice: "$120.00",
    },
    {
      title: "Ghostwriting",
      img: "/ghostwriting.jpg",
      price: "$82.00",
      oldPrice: "$100.00",
    },
    {
      title: "Content Writing",
      img: "/cont.jpg",
      price: "$100.00",
      oldPrice: "$110.00",
    },
    {
      title: "Academic Writing",
      img: "/academic.jpg",
      price: "$45.00",
      oldPrice: "$60.00",
    },
  ];

  return (
    <section className="py-24">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-900">All Services</h2>
        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          We provide only the best writing and tutoring services tailored for
          students, professionals, and brands worldwide.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((item, index) => (
          <div key={index} className="group">
            {/* Image Card */}
            <div className="relative bg-white rounded-2xl border overflow-hidden h-[260px] flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Plus Button */}
              <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition">
                <Plus size={16} />
              </button>
            </div>

            {/* Title */}
            <h3 className="mt-4 font-semibold text-gray-900 text-base">
              {item.title}
            </h3>

            {/* Price Row */}
            <div className="flex items-center gap-2 mt-1 text-sm">
              <span className="font-semibold text-gray-900">
                {item.price}
              </span>
              <span className="text-gray-400 line-through">
                {item.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-3 mt-16">
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-900"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
      </div>
    </section>
  );
};

export default Products;
