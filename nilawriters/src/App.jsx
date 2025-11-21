import './App.css';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import { API_BASE } from "./config.js";

import Navigation from './components/layout/Navigation.jsx';
import Hero from './components/sections/Hero.jsx';
import Stats from './components/layout/Stats.jsx';
import WritingServiceIntro from './components/sections/WritingServiceIntro.jsx';
import WritingServicesShowcase from './components/sections/WritingServicesShowcase.jsx';
import WritingPromoSection from './components/sections/WritingPromoSection.jsx';
import Features from './components/sections/Features.jsx';
import Testimonials from './components/layout/Testimonials.jsx';
import AuthButtons from './components/common/AuthButtons.jsx';
import Footer from './components/layout/Footer.jsx';
import SignUpForm from './components/forms/SignUpForm.jsx';
import LoginForm from './components/forms/LoginForm.jsx';

// ✅ Protected routing imports
import Dashboard from './components/common/Dashboard.jsx';   
import ProtectedRoute from './components/common/ProtectedRoute.jsx'; 

function App() {
  const loginRef = useRef();
  const signupRef = useRef();

  const handleLoginClick = () => {
    loginRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSignUpClick = () => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        {/* Public route: Home page */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Hero />
              <Stats />
              <WritingServiceIntro />
              <WritingServicesShowcase />
              <WritingPromoSection />
              <Features />
              <Testimonials />

              <section className="auth-section my-8 px-4 bg-gray-900 p-6 rounded">
                <h2 className="text-xl font-bold text-white mb-4">Authentication</h2>

                <p className="text-gray-300 mb-6 max-w-xl">
                  Elevate Your Writing With NilaWriters.
                </p>

                <AuthButtons
                  onLoginClick={handleLoginClick}
                  onSignUpClick={handleSignUpClick}
                />

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div ref={signupRef}>
                    <SignUpForm />
                  </div>
                  <div ref={loginRef}>
                    <LoginForm />
                  </div>
                </div>
              </section>

              <Footer />
            </>
          }
        />

        {/* Protected route: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

