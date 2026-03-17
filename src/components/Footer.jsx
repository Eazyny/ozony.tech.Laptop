import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Brand */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-3 text-left text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Go to top"
            >
              <span className="oz-logo-wrap" aria-hidden="true">
                <span className="oz-logo" />
              </span>

              <div className="flex flex-col">
                <span className="font-medium text-white text-lg">Ozony Tech</span>
                <span className="text-sm text-gray-500">
                  IT &amp; Network Solutions for Small Businesses
                </span>
              </div>
            </button>

            {/* Footer Nav */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-gray-500">
            <p>© {currentYear} Ozony Tech. All rights reserved.</p>
            <p>Serving New York, NY and surrounding businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;