import React from 'react';
import { motion } from 'framer-motion';
import { Server, HardDrive, Shield, Wifi, Terminal, Share2 } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Share2,
      title: 'Shared Files & Office Access',
      stack: ['Shared Folders', 'Access Control', 'User Permissions'],
      description:
        'Set up and organize shared access for office files, team folders, and common resources so staff can work more efficiently without constant access issues.',
      takeaways: [
        'Shared folder setup and organization',
        'User access planning and permission control',
        'Troubleshooting common access problems',
      ],
    },
    {
      icon: Terminal,
      title: 'Remote Access & Admin Workflows',
      stack: ['Remote Access', 'CLI', 'System Admin'],
      description:
        'Support secure remote management and practical admin workflows for maintenance, troubleshooting, and day-to-day IT operations.',
      takeaways: [
        'Remote support and management workflows',
        'Practical admin access methods',
        'Efficient troubleshooting and maintenance',
      ],
    },
    {
      icon: Wifi,
      title: 'Business Wi-Fi Optimization',
      stack: ['Wi-Fi', 'Coverage', 'Performance'],
      description:
        'Improve wireless coverage, reduce dead zones, and help create a more stable experience for staff, guests, and connected business devices.',
      takeaways: [
        'Coverage and signal improvement',
        'Performance tuning and troubleshooting',
        'Wired vs wireless baseline comparisons',
      ],
    },
    {
      icon: Server,
      title: 'Network Segmentation & Layout',
      stack: ['TCP/IP', 'DNS', 'DHCP', 'Segmentation'],
      description:
        'Plan cleaner small-business network layouts with separated traffic for staff, guests, and devices to improve reliability and security.',
      takeaways: [
        'Guest and staff network separation',
        'Better device organization and planning',
        'Improved reliability through segmentation',
      ],
    },
    {
      icon: HardDrive,
      title: 'Device Deployment & Setup',
      stack: ['Windows', 'Deployment', 'Configuration'],
      description:
        'Prepare and configure workstations and business devices with a consistent setup process that helps teams get running faster.',
      takeaways: [
        'New device setup and readiness',
        'Standardized configuration approach',
        'Validation and post-setup checks',
      ],
    },
    {
      icon: Shield,
      title: 'Security Basics for Small Business',
      stack: ['MFA', 'Updates', 'Account Security'],
      description:
        'Strengthen everyday business security with practical protections like multi-factor authentication, update hygiene, and safer user practices.',
      takeaways: [
        'MFA and account protection basics',
        'Patch and update best practices',
        'User awareness and phishing prevention',
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Practical IT and network solutions built around the common problems small businesses face,
            from Wi-Fi issues and device setup to shared access and basic security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {solution.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-800/80 text-gray-300 rounded-full text-sm border border-slate-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs font-semibold text-gray-300 mb-2">
                    What it includes
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1 list-disc pl-5">
                    {solution.takeaways.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;