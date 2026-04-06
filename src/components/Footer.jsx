import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Packages', to: '/packages' },
  ];

  const servicePageLinks = [
    { label: 'Network Setup NYC', to: '/network-setup-nyc' },
    { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
    { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
    { label: 'IT Support NYC', to: '/it-support-nyc' },
  ];

  const goToSection = (href) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    navigate(`/${href}`);
  };

  const handleBrandClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 px-4 py-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <button
              type="button"
              onClick={handleBrandClick}
              className="flex items-center gap-3 text-left text-gray-400 transition-colors hover:text-gray-200"
              aria-label="Go to homepage"
            >
              <span className="oz-logo-wrap" aria-hidden="true">
                <span className="oz-logo" />
              </span>

              <div className="flex flex-col">
                <span className="text-lg font-medium text-white">Ozony Tech</span>
                <span className="text-sm text-gray-500">
                  IT &amp; Network Solutions for Small Businesses
                </span>
              </div>
            </button>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">
                  Navigate
                </h3>
                <div className="flex flex-col gap-2">
                  {footerLinks.map((link) =>
                    link.to ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => goToSection(link.href)}
                        className="text-left text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">
                  Service Pages
                </h3>
                <div className="flex flex-col gap-2">
                  {servicePageLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Ozony Tech. All rights reserved.</p>
            <p>Serving CT, PA, NJ, and NY/NYC businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;