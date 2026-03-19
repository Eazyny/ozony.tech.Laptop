import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Share2, Wifi } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'New Office & Team Setup',
      stack: ['Workstations', 'Printers', 'Wi-Fi', 'Accounts'],
      description:
        'Get new teams, offices, and shared workspaces up and running with a cleaner setup process for devices, connectivity, and day-to-day operations.',
      takeaways: [
        'New workstation and device readiness',
        'Printer, shared workspace, and connectivity setup',
        'Consistent setup flow for smoother onboarding',
      ],
    },
    {
      icon: Wifi,
      title: 'Guest & Staff Network Separation',
      stack: ['Guest Wi-Fi', 'Staff Devices', 'Segmentation'],
      description:
        'Create cleaner network separation for guests, staff, and business devices so daily operations feel more reliable, organized, and secure.',
      takeaways: [
        'Guest and staff Wi-Fi separation planning',
        'Cleaner network layout for business devices',
        'More stable day-to-day connectivity',
      ],
    },
    {
      icon: Share2,
      title: 'Shared Access & Team Collaboration',
      stack: ['Shared Files', 'Permissions', 'Cloud Access'],
      description:
        'Help teams work more efficiently with cleaner shared access to files, folders, cloud tools, and common business resources.',
      takeaways: [
        'Shared folder and access organization',
        'User permission planning and cleanup',
        'Fewer common access and collaboration issues',
      ],
    },
    {
      icon: Shield,
      title: 'Practical Security for Small Business',
      stack: ['MFA', 'Updates', 'Accounts', 'Safer Wi-Fi'],
      description:
        'Strengthen everyday business security with practical protections that reduce risk without overcomplicating the environment.',
      takeaways: [
        'MFA and account protection basics',
        'Patch/update hygiene and safer user practices',
        'Cleaner guest Wi-Fi and access security habits',
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
            Built for Real Small Business Needs
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ozony Tech helps small businesses solve common day-to-day IT problems,
            from getting new teams set up to improving Wi-Fi, shared access, and
            practical security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
                    What it helps with
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