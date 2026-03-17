import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Network, Wrench, Shield, Cloud, Headphones } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Network,
      title: 'Business Networking',
      skills: [
        'Router & Switch Setup',
        'Wired Network Deployment',
        'Guest / Staff Segmentation',
        'Small Office Network Design',
        'Basic VLAN Planning',
      ],
    },
    {
      icon: Monitor,
      title: 'Workstation & Device Setup',
      skills: [
        'PC Setup & Configuration',
        'Printer & Peripheral Setup',
        'Office Device Installs',
        'Shared Workspace Setup',
        'Basic macOS & Windows Support',
      ],
    },
    {
      icon: Cloud,
      title: 'Productivity & Cloud Tools',
      skills: [
        'Microsoft 365 Setup',
        'Google Workspace Support',
        'User Account Setup',
        'Remote Desktop Access',
        'Email & Collaboration Tools',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Protection',
      skills: [
        'Firewall Setup',
        'MFA & Account Security',
        'Password Best Practices',
        'Secure Guest Wi-Fi',
        'Device Update Hygiene',
      ],
    },
    {
      icon: Wrench,
      title: 'Troubleshooting & Repairs',
      skills: [
        'Connectivity Issues',
        'Wi-Fi Troubleshooting',
        'Device Performance Issues',
        'Printer Troubleshooting',
        'Root Cause Investigation',
      ],
    },
    {
      icon: Headphones,
      title: 'Remote & On-Site Support',
      skills: [
        'Remote Assistance',
        'Issue Triage',
        'User Support',
        'Follow-Ups & Updates',
        'Practical Ongoing IT Help',
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
            Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical IT and network services designed to help small businesses stay connected,
            secure, and running smoothly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800/80 text-gray-300 rounded-full text-sm border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
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