import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
        return;
      }

      const el = document.querySelector(hash);
      if (!el) return;

      setTimeout(() => {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300);
    };

    scrollToHash();

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

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
        <Toaster />
      </div>
    </>
  );
}

export default App;