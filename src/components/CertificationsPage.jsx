import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

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
    },
  ];

  return (
    <section id="credentials" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Credentials
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Verified training that supports the practical IT and network services offered by Ozony Tech.
          </p>
        </motion.div>

        {/* Mobile / Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
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
        <div className="hidden lg:flex h-[430px] overflow-hidden rounded-2xl border border-slate-700/50 shadow-lg shadow-blue-500/5">
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
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate preview`}
                  className="h-full w-full object-cover object-top grayscale opacity-45 transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-72"
                  loading="lazy"
                />
              </div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/45 to-slate-950/94 transition-opacity duration-300 group-hover:from-slate-950/8 group-hover:via-slate-950/28 group-hover:to-slate-950/88" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/12 to-slate-950/34" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%)]" />

              {/* Top badges */}
              <div className="absolute left-4 right-4 top-4 z-20 flex items-start justify-between gap-3">
                <div className="rounded-xl border border-blue-500/10 bg-blue-500/10 p-3 backdrop-blur-sm">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>

                <div className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-400 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CheckCircle className="h-3 w-3" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Centered title */}
              <div className="absolute inset-0 z-10 flex items-center justify-center px-4 transition-all duration-500 group-hover:items-end group-hover:justify-start group-hover:px-6 group-hover:pb-24">
                <div className="max-w-[260px] text-center transition-all duration-500 group-hover:text-left">
                  <h3 className="text-xl font-bold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-blue-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Reveal panel */}
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
    </section>
  );
};

export default Credentials;