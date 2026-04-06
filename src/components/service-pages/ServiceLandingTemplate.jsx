import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Network,
  Shield,
  Server,
  Briefcase,
  Wifi,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StarfieldBackground from '@/components/ui/starfield-background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const defaultIncludes = [
  'Router and firewall configuration',
  'Business Wi-Fi setup and optimization',
  'Guest and staff network separation',
  'Printer, POS, and workstation connectivity',
  'Structured network planning for growth',
  'Basic security and performance hardening',
];

const defaultIdealFor = [
  {
    title: 'Offices',
    description:
      'Reliable wired and wireless connectivity for teams, printers, phones, and daily operations.',
    icon: Briefcase,
  },
  {
    title: 'Retail Stores',
    description:
      'Dependable networking for POS systems, guest Wi-Fi, back-office devices, and business operations.',
    icon: Building2,
  },
  {
    title: 'Restaurants & Cafés',
    description:
      'Stable connectivity for registers, kitchen devices, staff systems, and customer internet access.',
    icon: Wifi,
  },
];

const defaultFaqItems = [
  {
    question: 'Do you provide network setup for small businesses in NYC?',
    answer:
      'Yes. Ozony Tech helps small businesses in NYC with network setup, Wi-Fi deployment, firewall configuration, and overall connectivity planning.',
  },
  {
    question: 'Can you separate guest and staff Wi-Fi?',
    answer:
      'Yes. We can configure separate networks for staff, guests, and specific business devices to improve security and organization.',
  },
  {
    question: 'Do you help with existing networks or only new installs?',
    answer:
      'Both. We can build a new network from scratch or improve and troubleshoot an existing business setup.',
  },
];

const sectionClass =
  'border-t border-white/5 px-4 py-20 md:px-6 lg:px-8';

const ServiceLandingTemplate = ({
  pageTitle = 'Network Setup Services in NYC | Ozony Tech',
  pageDescription = 'Professional network setup services in NYC for small businesses that need reliable, secure, and scalable connectivity.',
  eyebrow = 'OZONY TECH SERVICES',
  title = 'Network Setup Services in NYC for Small Businesses',
  description = 'Professional network setup for offices, retail spaces, restaurants, and growing teams that need reliable, secure, and scalable connectivity.',
  primaryCta = 'Request a Quote',
  secondaryCta = 'Contact Ozony Tech',
  primaryCtaTo = '/#contact',
  secondaryCtaTo = '/#contact',
  heroImage = '/images/services/network-setup-nyc.webp',
  heroImageAlt = 'Business network setup services in NYC',
  trustChips = [
    'NYC small business focused',
    'Secure, scalable setup',
    'Wi-Fi, firewall, and device support',
    'Built for growth and reliability',
  ],
  includeTitle = `What’s Included`,
  includeDescription = 'Everything needed to create a stable, organized, and business-ready network environment.',
  serviceIncludes = defaultIncludes,
  outcomes = [
    {
      icon: Network,
      title: 'Professional Setup',
      text: 'Clean, organized network deployment designed for reliability and daily business use.',
    },
    {
      icon: Shield,
      title: 'Security Minded',
      text: 'Better segmentation, stronger protection, and smarter structure for modern small businesses.',
    },
    {
      icon: MapPin,
      title: 'Local Service',
      text: 'Focused on supporting businesses across NYC and nearby areas with practical solutions.',
    },
  ],
  industriesTitle = 'Built for Local Businesses',
  idealFor = defaultIdealFor,
  seoTitle = 'Professional Network Setup in NYC',
  seoParagraphs = [
    'Ozony Tech provides professional network setup services in NYC for small businesses that need reliable, secure, and well-organized connectivity. Whether you are opening a new office, upgrading your current Wi-Fi, or improving the structure of your network, we help design solutions that support daily operations without unnecessary complexity.',
    'Our network setup services can include router and firewall configuration, business Wi-Fi deployment, device connectivity, guest and staff network separation, and performance optimization. We work with small business environments that need dependable service, clear communication, and a setup that can grow with the business.',
  ],
  areasServed = 'Serving businesses across NYC, including Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas.',
  faqItems = defaultFaqItems,
  relatedServices = [],
  finalTitle = 'Ready to Improve Your Business Network?',
  finalDescription = 'Whether you need a fresh install, stronger Wi-Fi, or a cleaner setup for your business, Ozony Tech can help you move forward with confidence.',
}) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="min-h-screen app-bg text-white">
        <Header />

        <main>
          <section className="relative overflow-hidden">
            <StarfieldBackground />

            <div className="relative z-10">
              <section className="px-4 pt-24 pb-8 md:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Link>
                </div>
              </section>

              <section className="px-4 pb-16 md:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-medium uppercase tracking-[0.24em] text-blue-400/90"
                  >
                    {eyebrow}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="mx-auto mt-6 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
                  >
                    {title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-xl"
                  >
                    {description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                  >
                    <Button asChild size="lg" className="group min-w-[190px]">
                      <Link to={primaryCtaTo}>
                        {primaryCta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                    >
                      <Link to={secondaryCtaTo}>{secondaryCta}</Link>
                    </Button>
                  </motion.div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {trustChips.map((chip) => (
                      <div
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur"
                      >
                        {chip}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="px-4 pb-20 md:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(37,99,235,0.12)] backdrop-blur">
                    <img
                      src={heroImage}
                      alt={heroImageAlt}
                      className="h-full max-h-[560px] w-full object-cover"
                    />
                  </div>
                </div>
              </section>
            </div>
          </section>

          <div className="bg-[#08152b]">
            <section className={sectionClass}>
              <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
                {outcomes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                    >
                      <Icon className="mb-5 h-6 w-6 text-blue-300" />
                      <h2 className="text-2xl font-semibold">{item.title}</h2>
                      <p className="mt-3 text-base leading-7 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className={sectionClass}>
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Services
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {includeTitle}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/65">
                    {includeDescription}
                  </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {serviceIncludes.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                      <Server className="mb-4 h-5 w-5 text-blue-300" />
                      <p className="text-base leading-7 text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className={sectionClass}>
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Who It’s For
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {industriesTitle}
                  </h2>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  {idealFor.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                      >
                        <Icon className="mb-5 h-6 w-6 text-blue-300" />
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-3 text-base leading-7 text-white/65">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className={sectionClass}>
              <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    Local SEO
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    {seoTitle}
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
                    {seoParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    <p className="text-white/90">{areasServed}</p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                    FAQ
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    Common Questions
                  </h2>

                  <div className="mt-8 space-y-6">
                    {faqItems.map((item) => (
                      <div key={item.question}>
                        <h3 className="text-lg font-semibold">{item.question}</h3>
                        <p className="mt-2 text-base leading-7 text-white/65">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {relatedServices.length > 0 && (
              <section className={sectionClass}>
                <div className="mx-auto max-w-7xl">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                      Related Services
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                      Explore More Solutions
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-white/65">
                      See other ways Ozony Tech can support your business with practical IT and network solutions.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.to}
                        to={service.to}
                        className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-blue-400/40 hover:bg-white/10"
                      >
                        <h3 className="text-xl font-semibold text-white">
                          {service.label}
                        </h3>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300">
                          <span>View service</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section className="border-t border-white/5 px-4 py-24 md:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur md:p-14">
                <p className="text-sm uppercase tracking-[0.22em] text-blue-400/85">
                  Get Started
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  {finalTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
                  {finalDescription}
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="min-w-[190px]">
                    <Link to={primaryCtaTo}>{primaryCta}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-w-[190px] border-blue-400/30 bg-transparent text-white hover:bg-blue-500/10"
                  >
                    <Link to={secondaryCtaTo}>{secondaryCta}</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServiceLandingTemplate;