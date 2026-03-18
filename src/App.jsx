import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Credentials from '@/components/Credentials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import PackagesPage from '@/components/PackagesPage';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ozony Tech | IT &amp; Network Solutions for Small Businesses</title>
        <meta
          name="description"
          content="Ozony Tech provides practical IT and network solutions for small businesses, including Wi-Fi setup, networking, device support, troubleshooting, and business IT services."
        />
      </Helmet>

      <div className="min-h-screen app-bg">
        <Header />

        <main>
          <Hero />
          <Services />
          <Solutions />
          <Credentials />
          <About />
          <Contact />
          <CallToAction />
        </main>

        <Footer />
      </div>
    </>
  );
};

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const timer = setTimeout(() => {
      const hash = location.hash;

      if (hash) {
        const el = document.querySelector(hash);

        if (el) {
          el.scrollIntoView({
            behavior: location.pathname === '/' ? 'smooth' : 'auto',
            block: 'start',
          });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 150);

    return () => {
      clearTimeout(timer);

      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [location.pathname, location.hash]);

  return null;
};

function App() {
  return (
    <>
      <ScrollManager />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;