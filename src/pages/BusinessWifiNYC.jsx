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
      pageTitle="Business Wi-Fi Installation in NYC | Ozony Tech"
      pageDescription="Professional business Wi-Fi installation in NYC for small businesses that need stronger coverage, better reliability, and cleaner wireless performance."
      eyebrow="OZONY TECH · BUSINESS WI-FI NYC"
      title="Business Wi-Fi Installation in NYC for Small Businesses"
      description="Fast, reliable, and professionally planned Wi-Fi installation for small businesses that need better coverage, stronger performance, and a better experience for staff and customers."
      heroImage="/images/services/business-wifi-nyc.webp"
      heroImageAlt="Business Wi-Fi installation in NYC"
      includeTitle="What’s Included"
      includeDescription="Everything needed to create a stronger, more reliable wireless environment for your business."
      serviceIncludes={[
        'Business Wi-Fi design and setup',
        'Access point placement planning',
        'Coverage and dead zone improvement',
        'Guest and staff Wi-Fi separation',
        'Wireless performance optimization',
        'Basic security and password hardening',
      ]}
      outcomes={[
        {
          icon: Radio,
          title: 'Better Coverage',
          text: 'Improve signal strength and reduce dead zones so staff and customers stay connected where it matters.',
        },
        {
          icon: Gauge,
          title: 'Cleaner Performance',
          text: 'Support smoother browsing, wireless device use, and day-to-day operations with a more reliable setup.',
        },
        {
          icon: Wifi,
          title: 'Smarter Wireless Setup',
          text: 'Get a practical Wi-Fi layout designed around your space, business needs, and future growth.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Retail Stores',
          description:
            'Reliable Wi-Fi for staff systems, customer access, POS workflows, and back-office devices.',
          icon: Store,
        },
        {
          title: 'Restaurants & Cafés',
          description:
            'Wireless coverage for registers, kitchen tools, staff devices, and guest internet access.',
          icon: UtensilsCrossed,
        },
        {
          title: 'Offices',
          description:
            'Stable wireless connectivity for laptops, shared devices, printers, meetings, and day-to-day business operations.',
          icon: Briefcase,
        },
      ]}
      seoTitle="Professional Business Wi-Fi Installation in NYC"
      seoParagraphs={[
        'Ozony Tech provides business Wi-Fi installation in NYC for small businesses that need stronger wireless coverage, more dependable performance, and a cleaner setup overall. Whether you are upgrading a weak Wi-Fi environment or launching a new location, we help create wireless systems that feel reliable in real-world use.',
        'Our business Wi-Fi installation services can include access point planning, coverage improvements, guest and staff separation, performance tuning, and practical wireless organization. We focus on delivering Wi-Fi that supports your business instead of slowing it down.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas."
      relatedServices={[
        { label: 'Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        { label: 'IT Support NYC', to: '/it-support-nyc' },
      ]}
    />
  );
};

export default BusinessWifiNYC;