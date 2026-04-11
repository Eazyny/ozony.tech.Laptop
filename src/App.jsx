import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import CertificationsPage from '@/components/CertificationsPage';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import PackagesPage from '@/components/PackagesPage';
import NetworkSetupNYC from '@/pages/NetworkSetupNYC';
import BusinessWifiNYC from '@/pages/BusinessWifiNYC';
import FirewallSetupNYC from '@/pages/FirewallSetupNYC';
import ITSupportNYC from '@/pages/ITSupportNYC';
import NetworkTroubleshootingNYC from '@/pages/NetworkTroubleshootingNYC';
import SmallBusinessNetworkNYC from '@/pages/SmallBusinessNetworkNYC';
import NetworkSetupNJ from '@/pages/NetworkSetupNJ';
import ITSupportNJ from '@/pages/ITSupportNJ';
import NetworkSetupConnecticut from '@/pages/NetworkSetupConnecticut';
import ITSupportConnecticut from '@/pages/ITSupportConnecticut';
import FirewallSetupConnecticut from '@/pages/FirewallSetupConnecticut';
import BusinessWifiConnecticut from '@/pages/BusinessWifiConnecticut';
import ITServicesNearMe from '@/pages/ITServicesNearMe';
import NetworkServicesNearMe from '@/pages/NetworkServicesNearMe';
import ManagedITServices from './pages/ManagedITServices';
import ITSupport from './pages/ITSupport';
import NotFound from '@/pages/not-found';

const HomePage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <Credentials />
          <About />
          <Contact />
          <CallToAction />
        </main>

        <Footer />

        <AnimatePresence>
          {showBackToTop && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-slate-900/90 text-blue-400 shadow-lg shadow-blue-500/20 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 hover:text-white"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
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
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/network-setup-nyc" element={<NetworkSetupNYC />} />
        <Route path="/business-wifi-nyc" element={<BusinessWifiNYC />} />
        <Route path="/firewall-setup-nyc" element={<FirewallSetupNYC />} />
        <Route path="/it-support-nyc" element={<ITSupportNYC />} />
        <Route path="/network-troubleshooting-nyc" element={<NetworkTroubleshootingNYC />} />
        <Route path="/small-business-network-nyc" element={<SmallBusinessNetworkNYC />} />
        <Route path="/network-setup-nj" element={<NetworkSetupNJ />} />
        <Route path="/it-support-nj" element={<ITSupportNJ />} />
        <Route path="/network-setup-connecticut" element={<NetworkSetupConnecticut />} />
        <Route path="/it-support-connecticut" element={<ITSupportConnecticut />} />
        <Route path="/firewall-setup-connecticut" element={<FirewallSetupConnecticut />} />
        <Route path="/business-wifi-connecticut" element={<BusinessWifiConnecticut />} />
        <Route path="/it-services-near-me" element={<ITServicesNearMe />} />
        <Route path="/network-services-near-me" element={<NetworkServicesNearMe />} />
        <Route path="/managed-it-services" element={<ManagedITServices />} />
        <Route path="/it-support" element={<ITSupport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;