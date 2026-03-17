import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import DecodedText from '@/components/ui/decode-text';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdawpzqp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          data?.errors?.[0]?.message ||
          'Something went wrong sending your message. Please try again.';
        throw new Error(msg);
      }

      toast({
        title: 'Inquiry sent successfully!',
        description: "Thanks for reaching out to Ozony Tech. I'll get back to you soon.",
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-300" />,
      });

      setFormData({
        name: '',
        businessName: '',
        email: '',
        service: '',
        message: '',
      });
    } catch (err) {
      toast({
        title: 'Message failed to send',
        description: err?.message || 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@ozony.tech',
      href: 'mailto:contact@ozony.tech',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(347) 653-7655',
      href: 'tel:+13476537655',
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: 'New York, NY',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Eazyny' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ozony-elsevif/' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/BlockchainEazy' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Ozony Tech
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Need help with Wi-Fi, networking, device setup, troubleshooting, or general IT support?
            Send over a few details and let’s talk through your business needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col gap-8"
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Business Contact</h3>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white font-medium hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <p className="text-gray-400 text-sm mb-4">Connect online</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800/80 hover:bg-blue-500/10 rounded-lg transition-all duration-200 hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative flex-1 min-h-[22rem] lg:min-h-0 rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700/50 p-2">
              <img
                src="/ozony-elsevif-1-t.webp"
                alt="Ozony Tech network setup"
                className="w-full h-full object-cover object-center"
                decoding="async"
                fetchpriority="high"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <form
              onSubmit={handleSubmit}
              className="h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 flex flex-col"
            >
              <div className="space-y-6 flex-1">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-white font-medium mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your business or organization"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Needed
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Wi-Fi, networking, setup, troubleshooting, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your setup, the issue you’re having, or the kind of help you need."
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <DecodedText speed={12}>Send Inquiry</DecodedText>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;