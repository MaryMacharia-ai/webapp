import './App.css';

import Navigation from './components/layout/Navigation.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/layout/Stats.jsx';
import WritingServiceIntro from './components/sections/WritingServiceIntro.jsx'
import WritingServicesShowcase from './components/sections/WritingServicesShowcase.jsx'
import WritingPromoSection from './components/sections/WritingPromoSection.jsx'
import Features from './components/sections/Features.jsx';
import Testimonials from './components/layout/Testimonials.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <WritingServiceIntro />
      <WritingServicesShowcase />
       <WritingPromoSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
