// src/components/Card.jsx

import Navigation from './components/layout/Navigation.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/layout/Stats.jsx';
import WritingServicesIntro from './components/sections/WritingServicesIntro.jsx';
import WritingServicesShowcase from './components/sections/WritingServicesShowcase.jsx'; 
import WritingPromoSection from './components/sections/WritingPromoSection.jsx'; 
import Features from './components/sections/Features.jsx';
function Card() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-50 py-10 px-6 flex justify-center">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100">
        {/* Navigation at top */}
        <Navigation />

        {/* Hero section with headline, subtext, and image */}
        <Hero />

        {/* Stats section below hero */}
        <Stats />

        {/* Writing Services Intro stats */}
        <WritingServicesIntro />

        {/* Writing Services Showcase */}
        <WritingServicesShowcase/>

          {/* Writing Promo Section */}
        <WritingPromoSection/>
           {/* Features Section */}
        <Features/>

      </div>
    </section>
  );
}

export default Card;