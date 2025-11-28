import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <section className={`w-full py-10 md:py-14 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
