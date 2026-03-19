import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Network, Shield, Wrench } from 'lucide-react';

const Services = () => {
  const serviceGroups = [
    {
      icon: Network,
      title: 'Networking & Wi-Fi',
      stack: ['Router & Switch Setup', 'Guest Wi-Fi', 'Segmentation'],
      description:
        'Build cleaner, more reliable connectivity for small businesses with practical network setup, Wi-Fi improvement, and better device organization.',
      takeaways: [
        'Small office network setup and layout',
        'Guest and staff network separation',
        'Coverage, performance, and connectivity troubleshooting',
      ],
    },
    {
      icon: Building2,
      title: 'Device & Office Setup',
      stack: ['Workstations', 'Printers', 'Shared Devices'],
      description:
        'Get offices, teams, and shared workspaces set up faster with consistent device configuration and practical day-to-day readiness.',
      takeaways: [
        'PC, printer, and office device setup',
        'Shared workspace and new-user readiness',
        'Basic Windows and macOS support',
      ],
    },
    {
      icon: Shield,
      title: 'Shared Access & Security',
      stack: ['Shared Files', 'Permissions', 'MFA', 'Accounts'],
      description:
        'Help teams work more efficiently and securely with cleaner shared access, better permissions, and simple business security essentials.',
      takeaways: [
        'Shared folder and access organization',
        'User account setup and permission planning',
        'MFA, update hygiene, and safer access practices',
      ],
    },
    {
      icon: Wrench,
      title: 'Support & Troubleshooting',
      stack: ['Remote Support', 'Issue Triage', 'Troubleshooting'],
      description:
        'Keep day-to-day operations running smoothly with practical remote and on-site support for recurring IT problems and common office issues.',
      takeaways: [
        'Wi-Fi, device, and printer troubleshooting',
        'Root-cause investigation and practical fixes',
        'Remote assistance, follow-ups, and ongoing help',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Small Business Needs
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ozony Tech provides practical IT and network help for the everyday needs
            small businesses face, from connectivity and device setup to shared
            access, security, and ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {group.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-800/80 text-gray-300 rounded-full text-sm border border-slate-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {group.description}
                </p>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs font-semibold text-gray-300 mb-2">
                    What it covers
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1 list-disc pl-5">
                    {group.takeaways.map((item) => (
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

export default Services;