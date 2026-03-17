import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Go to homepage"
          >
            <span className="oz-logo-wrap" aria-hidden="true">
              <span className="oz-logo" />
            </span>

            <div className="flex flex-col">
              <span className="font-medium text-white">Ozony Tech</span>
              <span className="text-sm text-gray-500">
                IT &amp; Network Solutions for Small Businesses
              </span>
            </div>
          </a>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Ozony Tech. All rights reserved.
          </p>

          {/* Service Area / Descriptor */}
          <p className="text-gray-500 text-sm">
            Serving New York, NY and surrounding businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;