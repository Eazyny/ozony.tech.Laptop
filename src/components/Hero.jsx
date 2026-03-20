import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Monitor,
  Network,
  Shield,
  Wrench,
  Headphones,
  Cloud,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';
import StarfieldBackground from '@/components/ui/starfield-background';

const coreServices = [
  { label: 'Business Wi-Fi', icon: Network },
  { label: 'Network Setup', icon: Monitor },
  { label: 'Firewall Security', icon: Shield },
  { label: 'Remote Support', icon: Headphones },
  { label: 'Troubleshooting', icon: Wrench },
  { label: 'Microsoft 365', icon: Cloud },
];

const Hero = () => {
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pt-28 md:pb-20 lg:min-h-[820px]">
      <StarfieldBackground />

      <div className="relative container mx-auto max-w-7xl">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400 md:text-base">
                Serving NYC | Small Business IT Solutions
              </p>

              <div className="space-y-4">
                <p className="text-3xl font-bold uppercase tracking-[0.08em] text-white/90 md:text-5xl">
                  Ozony Tech
                </p>

                <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] text-white md:text-7xl">
                  IT &amp; Network Solutions for Small Businesses
                </h1>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
                Ozony Tech helps businesses stay connected, secure, and productive
                with reliable Wi-Fi, network setup, device support, troubleshooting,
                and practical IT solutions built for day-to-day operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-blue-600 px-6 py-6 text-base text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                <DecodedText speed={12}>Request a Quote</DecodedText>
              </Button>

              <Button
                onClick={() => scrollToSection('#services')}
                variant="outline"
                className="border-blue-400 px-6 py-6 text-base text-blue-400 hover:bg-blue-400/10"
              >
                <DecodedText speed={12}>View Services</DecodedText>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="pt-2"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-gray-500">
                Core Services
              </p>

              <div className="flex flex-wrap gap-2">
                {coreServices.map((item) => {
                  const Icon = item.icon;

                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-blue-500/50 hover:bg-blue-500/10"
                    >
                      <Icon className="h-4 w-4 text-blue-400" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />
              <div className="absolute inset-0 rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/20" />

              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/70 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/30 via-transparent to-blue-500/5 pointer-events-none" />

                <div className="relative z-0 h-full w-full pointer-events-none">
                  <spline-viewer
                    url="https://prod.spline.design/w60jKH7eTZbRjKKR/scene.splinecode"
                    loading="eager"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                  ></spline-viewer>
                </div>
              </div>

              <div className="absolute -bottom-5 left-1/2 z-20 w-[82%] -translate-x-1/2 rounded-2xl border border-slate-700/60 bg-slate-950/80 px-5 py-4 shadow-lg shadow-blue-500/10 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                  Small Business Focused
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Reliable Wi-Fi, networking, security, support, and practical IT help
                  built for real day-to-day business operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;