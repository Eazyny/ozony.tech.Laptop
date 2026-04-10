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

  const highlightTags = [
    'Small Business IT',
    'Business Wi-Fi',
    'Firewall Setup',
    'Network Support',
    'Managed Services',
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
    <footer className="border-t border-slate-800 bg-slate-900/50 px-4 py-14">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-10">
          <div className="grid gap-10 xl:grid-cols-[1.45fr_auto] xl:items-start xl:justify-between">
            <div className="max-w-2xl">
              <button
                type="button"
                onClick={handleBrandClick}
                className="flex items-start gap-4 text-left text-gray-400 transition-colors hover:text-gray-200"
                aria-label="Go to homepage"
              >
                <span
                  className="oz-logo-wrap mt-1 scale-[1.12] transform"
                  aria-hidden="true"
                >
                  <span className="oz-logo" />
                </span>

                <div className="flex flex-col">
                  <span className="text-[1.45rem] font-semibold leading-none tracking-tight text-white">
                    Ozony Tech
                  </span>
                  <span className="mt-2 text-base text-gray-400">
                    IT &amp; Network Solutions for Small Businesses
                  </span>
                </div>
              </button>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-gray-500">
                Practical networking, Wi-Fi, firewall, small business IT support,
                and managed services built to keep local teams connected, secure,
                and ready to grow.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 xl:gap-12">
              <div className="min-w-[180px]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">
                  Navigate
                </h3>
                <div className="flex flex-col gap-3">
                  {footerLinks.map((link) =>
                    link.to ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="text-[15px] text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => goToSection(link.href)}
                        className="text-left text-[15px] text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="min-w-[220px]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-300">
                  Service Pages
                </h3>
                <div className="flex flex-col gap-3">
                  {servicePageLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-[15px] text-gray-400 transition-colors hover:text-white"
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