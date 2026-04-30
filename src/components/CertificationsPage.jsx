import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/ui/starfield-background';

const Credentials = () => {
  const credentials = [
    {
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      date: 'November 2025',
      credentialId: 'GOOG-IT-001',
      shortDescription:
        'Foundational IT support, troubleshooting, and customer service training.',
      verificationUrl: 'https://www.coursera.org/verify/EYCM6K2LYK10',
      image: '/images/credentials/TechnicalSupportFundamentalCert.webp',
      category: 'Support Foundations',
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: 'December 2025',
      credentialId: 'GOOG-IT-003',
      shortDescription:
        'Networking fundamentals covering TCP/IP, DNS, DHCP, and connectivity troubleshooting.',
      verificationUrl: 'https://www.coursera.org/verify/GXACQZY45CW7',
      image: '/images/credentials/TheBitsandBytesCert.webp',
      category: 'Networking',
    },
    {
      title: 'Operating Systems and You: Becoming a Power User',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-002',
      shortDescription:
        'Windows, Linux, software configuration, file systems, and user admin basics.',
      verificationUrl: 'https://www.coursera.org/verify/9QNIGDEBM1MT',
      image: '/images/credentials/OperatingSystemsandYou.webp',
      category: 'Operating Systems',
    },
    {
      title: 'System Administration and IT Infrastructure Services',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-004',
      shortDescription:
        'System administration, infrastructure services, and operational best practices.',
      verificationUrl: 'https://www.coursera.org/verify/IBZO8E1TFB3U',
      image: '/images/credentials/SystemAdministrator.webp',
      category: 'System Administration',
    },
    {
      title: 'IT Security: Defense against the Digital Dark Arts',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-005',
      shortDescription:
        'Authentication, encryption, phishing awareness, and incident response basics.',
      verificationUrl: 'https://coursera.org/verify/YS67E8K4K2V4',
      image: '/images/credentials/ITSecurity.webp',
      category: 'Security',
    },
    {
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-PRO',
      shortDescription:
        'Full professional certificate covering support, networking, systems, and security.',
      verificationUrl: 'https://coursera.org/verify/professional-cert/2FLTPOHX1URJ',
      image: '/images/credentials/GoogleITSupportCert.webp',
      category: 'Professional Certificate',
      featured: true,
    },
  ];

  const featuredCert =
    credentials.find((cert) => cert.featured) || credentials[credentials.length - 1];

  const supportAreas = [
    'IT Support',
    'Networking',
    'Operating Systems',
    'System Administration',
    'Security',
    'Verified Google Training',
  ];

  const canonicalUrl = 'https://ozony.tech/certifications';
  const ogImage = 'https://ozony.tech/images/credentials/GoogleITSupportCert.webp';

  return (
    <>
      <Helmet>
        <title>Ozony Tech Certifications | Verified IT Training & Credentials</title>
        <meta
          name="description"
          content="Explore Ozony Tech certifications and verified Google IT training in IT support, networking, operating systems, system administration, and security."
        />
        <meta
          name="robots"
          content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content="Ozony Tech Certifications | Verified IT Training & Credentials" />
        <meta
          property="og:description"
          content="View Ozony Tech’s verified Google IT training credentials across support, networking, systems, and security."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozony Tech" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Google IT Support Professional Certificate credential preview" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ozony Tech Certifications | Verified IT Training & Credentials" />
        <meta
          name="twitter:description"
          content="Explore verified Google IT credentials behind Ozony Tech’s support, networking, systems, and security services."
        />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOccupationalCredential',
            name: 'Google IT Support Professional Certificate',
            credentialCategory: 'Professional Certificate',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Google',
            },
            url: 'https://coursera.org/verify/professional-cert/2FLTPOHX1URJ',
            description:
              'Professional certificate covering IT support, networking, operating systems, system administration, and security.',
          })}
        </script>
      </Helmet>

      <div className="min-h-screen app-bg">
        <Header />

        <main>
          <section className="px-4 pt-24 pb-2 md:pt-28">
            <div className="container mx-auto max-w-7xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </section>

          {/* Hero */}
          <section className="relative overflow-hidden px-4 py-14 md:py-20">
            <StarfieldBackground />

            <div className="relative container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-5xl text-center"
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                  Ozony Tech Certifications
                </p>

                <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
                  Verified Training That Supports Real-World IT &amp; Network Work
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                  Google-backed coursework across support, networking, systems, and security —
                  aligned with the practical small-business services Ozony Tech provides.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
                  {supportAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured certification block */}
          <section className="px-4 pb-12">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/85 to-slate-800/70 shadow-lg shadow-blue-500/10"
              >
                <div className="grid gap-6 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
                  <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950/50">
                    <div className="absolute inset-0">
                      <img
                        src={featuredCert.image}
                        alt={`${featuredCert.title} certificate preview`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/12 via-slate-950/32 to-slate-950/88" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/16 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%)]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3 backdrop-blur-sm">
                          <Award className="h-7 w-7 text-blue-400" />
                        </div>

                        <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3" />
                          <span>Featured</span>
                        </div>
                      </div>

                      <div className="max-w-lg">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                          Featured Certification
                        </p>
                        <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                          {featuredCert.title}
                        </h2>
                        <p className="mt-3 text-sm font-medium text-blue-300">
                          {featuredCert.issuer} · Issued {featuredCert.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="w-fit rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-blue-300">
                        {featuredCert.category}
                      </p>

                      <p className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg">
                        {featuredCert.shortDescription}
                      </p>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-slate-700/50 bg-slate-900/45 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                            Coverage
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            Support, networking, operating systems, systems, and security.
                          </p>
                        </div>

                        <div className="rounded-xl border border-slate-700/50 bg-slate-900/45 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                            Verified
                          </p>
                          <p className="mt-2 text-sm text-gray-300">
                            Google coursework and professional certificate track completion.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button
                        asChild
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        <a
                          href={featuredCert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Verify Featured Certificate
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* All certifications */}
          <section className="px-4 pb-20">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="mb-3 text-3xl font-bold text-white md:text-5xl">
                    All Certifications
                  </h2>
                  <p className="max-w-3xl text-lg text-gray-400">
                    Explore the full credential set behind Ozony Tech’s support, networking,
                    systems, and security foundation.
                  </p>
                </div>

                <div className="hidden rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm text-gray-300 lg:inline-flex">
                  Hover cards to expand
                </div>
              </div>

              {/* Mobile / Tablet */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
                {credentials.map((cert, index) => (
                  <motion.a
                    key={cert.credentialId}
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/70 shadow-lg shadow-blue-500/5"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate preview`}
                        className="h-full w-full object-cover object-top opacity-30"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/45 to-slate-950/92" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/12 to-slate-950/30" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%)]" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3">
                          <Award className="h-6 w-6 text-blue-400" />
                        </div>

                        <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3" />
                          <span>Verified</span>
                        </div>
                      </div>

                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                          {cert.category}
                        </p>
                        <h3 className="text-xl font-bold leading-tight text-white">
                          {cert.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-blue-300">{cert.issuer}</p>
                        <p className="mt-3 text-sm leading-relaxed text-gray-200">
                          {cert.shortDescription}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-400">
                          <span>{cert.date}</span>
                          <span className="inline-flex items-center gap-1 text-blue-400">
                            Verify
                            <ExternalLink className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Desktop expandable strip */}
              <div className="hidden rounded-2xl border border-slate-700/50 bg-slate-900/35 p-2 shadow-lg shadow-blue-500/5 lg:block">
                <div className="flex h-[430px] overflow-hidden rounded-xl">
                  {credentials.map((cert, index) => (
                    <motion.a
                      key={cert.credentialId}
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="group relative min-w-0 flex-1 overflow-hidden border-r border-slate-700/40 bg-slate-900/70 transition-all duration-500 ease-out last:border-r-0 hover:flex-[2.25]"
                    >
                      <div className="absolute inset-0">
                        <img
                          src={cert.image}
                          alt={`${cert.title} certificate preview`}
                          className="h-full w-full object-cover object-top grayscale opacity-45 transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-72"
                          loading="lazy"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/45 to-slate-950/94 transition-opacity duration-300 group-hover:from-slate-950/8 group-hover:via-slate-950/28 group-hover:to-slate-950/88" />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/12 to-slate-950/34" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%)]" />

                      <div className="absolute left-4 right-4 top-4 z-20 flex items-start justify-between gap-3">
                        <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3 backdrop-blur-sm">
                          <Award className="h-6 w-6 text-blue-400" />
                        </div>

                        <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <CheckCircle className="h-3 w-3" />
                          <span>Verified</span>
                        </div>
                      </div>

                      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 transition-all duration-500 group-hover:items-end group-hover:justify-start group-hover:px-6 group-hover:pb-24">
                        <div className="max-w-[260px] text-center transition-all duration-500 group-hover:text-left">
                          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {cert.category}
                          </p>
                          <h3 className="text-xl font-bold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]">
                            {cert.title}
                          </h3>
                          <p className="mt-2 text-sm font-medium text-blue-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-gradient-to-t from-slate-950/96 via-slate-950/88 to-transparent px-5 pb-5 pt-12 transition-transform duration-300 ease-out group-hover:translate-y-0">
                        <p className="text-sm leading-relaxed text-gray-200">
                          {cert.shortDescription}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-400">
                          <span>{cert.date}</span>
                          <span className="inline-flex items-center gap-1 text-blue-400">
                            Verify
                            <ExternalLink className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Credentials;