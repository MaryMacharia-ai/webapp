import React from "react";

// Layout
import SectionWrapper from "../components/common/SectionWrapper.jsx";

// Sections
import Hero from "../components/sections/Hero.jsx";
import FeaturedRoom from "../components/sections/FeaturedRoom.jsx";
import Categories from "../components/sections/Categories.jsx";
import QualityWriting from "../components/sections/QualityWriting.jsx";
import Products from "../components/sections/Products.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Newsletter from "../components/sections/Newsletter.jsx";

const Home = () => {
  return (
    <>
      {/* Hero with floating stats */}
      <Hero />

      {/* Spacing to allow stats overlap */}
      <SectionWrapper className="pt-32">
        <FeaturedRoom />
      </SectionWrapper>

      <SectionWrapper>
        <Categories />
      </SectionWrapper>

      <SectionWrapper>
        <QualityWriting />
      </SectionWrapper>

      <SectionWrapper>
        <Products />
      </SectionWrapper>

      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      {/* CTA section */}
      <Newsletter />
    </>
  );
};

export default Home;
