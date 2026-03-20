import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';
import StarfieldBackground from '@/components/ui/starfield-background';

const Hero = () => {
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-12 md:pt-28 md:pb-16 lg:min-h-[780px] lg:flex lg:items-center">
      <StarfieldBackground />

      <div className="relative container mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-5 max-w-[760px]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400 md:text-base">
                Serving NYC | Small Business IT Solutions
              </p>

              <div className="space-y-4">
                <p className="text-3xl font-bold uppercase tracking-[0.08em] text-white/90 md:text-4xl xl:text-5xl">
                  Ozony Tech
                </p>

                <h1 className="text-[clamp(3.5rem,5vw,4.85rem)] font-bold leading-[0.94] tracking-[-0.03em] text-white">
                  <span className="block whitespace-nowrap">
                    IT &amp; Networking.
                  </span>
                  <span className="block whitespace-nowrap text-white/95">
                    Built for Small Business.
                  </span>
                </h1>
              </div>

              <p className="max-w-[38rem] text-base leading-relaxed text-gray-300 md:text-lg">
                Reliable Wi-Fi, secure networking, support, and practical IT
                solutions that help your business stay connected and productive.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full"
          >
            <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div className="absolute -inset-8 rounded-[2.75rem] bg-blue-500/10 blur-3xl" />
              <div className="absolute inset-0 rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/20" />

              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/65 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/25 via-transparent to-blue-500/5" />

                <div className="pointer-events-none relative z-0 h-full w-full">
                  <spline-viewer url="https://prod.spline.design/c91fD0sLX7xbGC9j/scene.splinecode"></spline-viewer>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;