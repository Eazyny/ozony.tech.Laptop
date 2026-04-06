import React from 'react';
import { Wrench, Monitor, Headphones } from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITSupportNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business IT Support in NYC for Growing Teams | Ozony Tech"
      pageDescription="Ozony Tech provides small business IT support in NYC for companies that need practical help with devices, connectivity, troubleshooting, and day-to-day tech issues."
      eyebrow="OZONY TECH · IT SUPPORT NYC"
      title="Small Business IT Support in NYC"
      description="If you need small business IT support in NYC, Ozony Tech provides practical, dependable help with devices, connectivity, troubleshooting, and everyday business technology issues."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Small business IT support in NYC for growing teams"
      includeTitle="What’s Included"
      includeDescription="Hands-on support for common business technology needs without unnecessary complexity."
      serviceIncludes={[
        'Device and workstation support',
        'Printer and shared device troubleshooting',
        'Basic network and Wi-Fi issue resolution',
        'New user and device setup help',
        'Shared access and permissions support',
        'General small business IT troubleshooting',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Practical Troubleshooting',
          text: 'Resolve common business tech issues faster so day-to-day operations stay moving with less disruption.',
        },
        {
          icon: Monitor,
          title: 'Better Device Readiness',
          text: 'Keep workstations, printers, and shared tools better organized, easier to manage, and more reliable for daily use.',
        },
        {
          icon: Headphones,
          title: 'Dependable Support',
          text: 'Get straightforward help with the kinds of IT issues small businesses run into most often across offices and customer-facing spaces.',
        },
      ]}
      seoTitle="Why Choose Ozony Tech for Small Business IT Support in NYC"
      seoParagraphs={[
        'Ozony Tech provides small business IT support in NYC for teams that need practical help with devices, connectivity, shared access, and day-to-day troubleshooting. We focus on the real support issues that slow small businesses down, from workstation setup to printer problems and general network headaches.',
        'Our IT support services can include device setup help, troubleshooting, Wi-Fi and connectivity support, shared access assistance, and general business tech cleanup. The goal is simple: make your environment work better and feel easier to manage.',
        'Businesses choose Ozony Tech because the focus is on practical support that fits real small business environments. That means less confusion, cleaner day-to-day operations, and dependable help where it matters most.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas in NYC."
      faqItems={[
        {
          question: 'Do you provide small business IT support in NYC?',
          answer:
            'Yes. Ozony Tech provides small business IT support in NYC for offices, retail shops, restaurants, and other business environments that need practical day-to-day technology help.',
        },
        {
          question: 'What does small business IT support include?',
          answer:
            'Small business IT support can include device setup, workstation support, printer troubleshooting, Wi-Fi and connectivity issue resolution, shared access help, and general technology troubleshooting.',
        },
        {
          question: 'Can you help improve an existing business tech setup?',
          answer:
            'Yes. Existing business environments can often be cleaned up and improved through better organization, clearer device setup, more reliable connectivity, and practical troubleshooting support.',
        },
      ]}
      relatedServices={[
        { label: 'Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
      ]}
    />
  );
};

export default ITSupportNYC;