import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Credentials = () => {
  const credentials = [
    {
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      date: 'November 2025',
      credentialId: 'GOOG-IT-001',
      description:
        'Foundational training in IT support, troubleshooting, customer service, networking, operating systems, and security best practices.',
      pdfName: 'TechnicalSupportFundamentalCert.pdf',
      verificationUrl: 'https://www.coursera.org/verify/EYCM6K2LYK10',
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: 'December 2025',
      credentialId: 'GOOG-IT-003',
      description:
        'Training in networking concepts including TCP/IP, DNS, DHCP, and practical troubleshooting of connectivity issues.',
      pdfName: 'TheBitsandBytesCert.pdf',
      verificationUrl: 'https://www.coursera.org/verify/GXACQZY45CW7',
    },
    {
      title: 'Operating Systems and You: Becoming a Power User',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-002',
      description:
        'Coursework covering Windows and Linux operating systems, software configuration, file systems, and user administration.',
      pdfName: 'OperatingSystemsandYou.pdf',
      verificationUrl: 'https://www.coursera.org/verify/9QNIGDEBM1MT',
    },
    {
      title: 'System Administration and IT Infrastructure Services',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-004',
      description:
        'Training focused on system administration tasks, infrastructure services, user management, and operational best practices.',
      pdfName: 'SystemAdministrator.pdf',
      verificationUrl: 'https://www.coursera.org/verify/IBZO8E1TFB3U',
    },
    {
      title: 'IT Security: Defense against the Digital Dark Arts',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-005',
      description:
        'Security training covering authentication, encryption basics, network security, phishing awareness, and incident response fundamentals.',
      pdfName: 'ITSecurity.pdf',
      verificationUrl: 'https://coursera.org/verify/YS67E8K4K2V4',
    },
    {
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-PRO',
      description:
        'Completion of the full Google IT Support Professional Certificate, covering troubleshooting, networking, operating systems, system administration, and security.',
      pdfName: 'GoogleITSupportProfessionalCert.pdf',
      verificationUrl: 'https://coursera.org/verify/professional-cert/2FLTPOHX1URJ',
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Credentials
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Verified technical training and coursework that support the practical IT and
            network services offered by Ozony Tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>

                <div className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Issued: {cert.date}</span>

                  <a
                    href={cert.verificationUrl}
                    target={cert.verificationUrl.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                  >
                    Credential Verification
                  </a>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-200"
                >
                  <a href={`/${cert.pdfName}`} download>
                    <FileText className="w-4 h-4 mr-2 text-blue-400" />
                    Download PDF
                    <Download className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;