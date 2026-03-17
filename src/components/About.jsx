import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, ShieldCheck } from 'lucide-react';

const About = () => {
  const aboutItems = [
    {
      title: 'Built for Small Business',
      subtitle: 'Practical IT support with a modern approach',
      icon: Building2,
      description:
        'Ozony Tech is focused on helping small businesses get reliable, straightforward IT and network support without unnecessary complexity. The goal is to deliver solutions that are clean, practical, and built around real day-to-day business needs.',
      points: [
        'Small-business friendly support and recommendations',
        'Clear communication without overly technical jargon',
        'Solutions tailored to real operational needs',
        'Modern tools and clean, professional setups',
      ],
    },
    {
      title: 'How We Work',
      subtitle: 'Troubleshoot first, then build smarter',
      icon: Wrench,
      description:
        'We approach every project by understanding the problem first, then designing a solution that improves reliability, usability, and long-term manageability. Whether it is Wi-Fi, networking, workstations, or shared access, the focus is on solving root issues instead of patching symptoms.',
      points: [
        'Assess the environment and identify the real problem',
        'Recommend practical next steps based on budget and need',
        'Implement clean setups with usability in mind',
        'Support follow-through, testing, and post-fix validation',
      ],
    },
    {
      title: 'What We Prioritize',
      subtitle: 'Reliable, secure, and easy to manage',
      icon: ShieldCheck,
      description:
        'Ozony Tech emphasizes dependable business connectivity, sensible security, and systems that are easier for owners and teams to live with every day. The aim is not just to install technology, but to make it work better for the business behind it.',
      points: [
        'Reliable Wi-Fi and stable network performance',
        'Cleaner segmentation for staff, guests, and devices',
        'Security-minded setup and account protection basics',
        'Support that values clarity, responsiveness, and trust',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Ozony Tech
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A modern IT solutions business focused on helping small businesses stay connected,
            secure, and supported with practical technology that works in the real world.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {aboutItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Content card */}
                  <div className="md:w-1/2 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-blue-400 font-semibold">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{item.description}</p>

                    <div className="space-y-2">
                      {item.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                          <p className="text-gray-300 text-sm">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;