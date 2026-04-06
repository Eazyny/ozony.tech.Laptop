import React from 'react';
import {
  Wifi,
  Radio,
  Gauge,
  Store,
  UtensilsCrossed,
  Briefcase,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const BusinessWifiNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Wi-Fi Installation in NYC for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides business Wi-Fi installation in NYC for small businesses that need stronger coverage, better wireless performance, and a more reliable setup."
      eyebrow="OZONY TECH · BUSINESS WI-FI NYC"
      title="Business Wi-Fi Installation in NYC for Small Businesses"
      description="If you need business Wi-Fi installation in NYC, Ozony Tech provides practical wireless solutions for small businesses that need stronger coverage, cleaner performance, and a better experience for staff and customers."
      heroImage="/images/services/business-wifi-nyc.webp"
      heroImageAlt="Business Wi-Fi installation in NYC for small businesses"
      includeTitle="What’s Included"
      includeDescription="Everything needed to create a stronger, more reliable wireless environment for your business."
      serviceIncludes={[
        'Business Wi-Fi design and installation',
        'Access point placement planning',
        'Coverage and dead zone improvement',
        'Guest and staff Wi-Fi separation',
        'Wireless performance optimization',
        'Basic wireless security and password hardening',
      ]}
      outcomes={[
        {
          icon: Radio,
          title: 'Better Coverage',
          text: 'Improve signal strength and reduce dead zones so staff and customers stay connected where it matters most.',
        },
        {
          icon: Gauge,
          title: 'Cleaner Performance',
          text: 'Support smoother browsing, wireless device use, and day-to-day business operations with a more reliable setup.',
        },
        {
          icon: Wifi,
          title: 'Smarter Wireless Setup',
          text: 'Get a practical Wi-Fi layout designed around your space, number of users, and future business growth.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Retail Stores',
          description:
            'Reliable business Wi-Fi for staff systems, customer access, POS workflows, and back-office devices.',
          icon: Store,
        },
        {
          title: 'Restaurants & Cafés',
          description:
            'Wireless coverage for registers, kitchen tools, staff devices, and guest internet access in busy customer-facing spaces.',
          icon: UtensilsCrossed,
        },
        {
          title: 'Offices',
          description:
            'Stable wireless connectivity for laptops, shared devices, printers, meetings, and everyday business operations.',
          icon: Briefcase,
        },
      ]}
      seoTitle="Why Choose Ozony Tech for Business Wi-Fi Installation in NYC"
      seoParagraphs={[
        'Ozony Tech provides business Wi-Fi installation in NYC for small businesses that need stronger wireless coverage, more dependable performance, and a cleaner setup overall. Whether you are upgrading a weak Wi-Fi environment or launching a new location, we help create wireless systems that feel reliable in real-world use.',
        'Our business Wi-Fi installation services can include access point planning, coverage improvements, guest and staff separation, performance tuning, and practical wireless organization. The goal is to deliver Wi-Fi that supports your business instead of slowing it down.',
        'Businesses choose Ozony Tech because the focus is on practical wireless setups that work well, feel organized, and are built around the real needs of small business spaces across NYC.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas in NYC."
      faqItems={[
        {
          question: 'Do you provide business Wi-Fi installation for small businesses in NYC?',
          answer:
            'Yes. Ozony Tech provides business Wi-Fi installation in NYC for offices, retail stores, restaurants, and other small business spaces that need stronger and more reliable wireless coverage.',
        },
        {
          question: 'What does business Wi-Fi installation include?',
          answer:
            'Business Wi-Fi installation can include access point placement planning, wireless setup, coverage improvements, guest and staff separation, performance tuning, and basic wireless security hardening.',
        },
        {
          question: 'Can you improve weak Wi-Fi in an existing business location?',
          answer:
            'Yes. Existing Wi-Fi setups can often be improved through better placement, cleaner wireless design, stronger segmentation, and practical performance optimization.',
        },
      ]}
      relatedServices={[
        { label: 'Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        { label: 'IT Support NYC', to: '/it-support-nyc' },
      ]}
    />
  );
};

export default BusinessWifiNYC;