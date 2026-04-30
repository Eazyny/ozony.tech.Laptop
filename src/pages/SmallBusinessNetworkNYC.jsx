import React from 'react';
import {
  Network,
  Shield,
  Briefcase,
  Store,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const SmallBusinessNetworkNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business Network Setup in NYC | Ozony Tech"
      pageDescription="Ozony Tech provides small business network setup in NYC for companies that need reliable Wi-Fi, organized connectivity, secure network structure, and a setup built for daily operations."
      eyebrow="OZONY TECH · SMALL BUSINESS NETWORK NYC"
      title="Small Business Network Setup in NYC"
      description="Ozony Tech provides small business network setup in NYC for offices, retail stores, restaurants, and growing teams that need reliable connectivity, stronger organization, and a network built to support daily business operations."
      heroImage="/images/services/small-business-network-nyc.webp"
      heroImageAlt="Small business network setup in NYC"
      ogImage="/images/services/small-business-network-nyc.webp"
      twitterImage="/images/services/small-business-network-nyc.webp"
      includeTitle="What’s Included"
      includeDescription="Everything needed to build a reliable, organized, and business-ready network for small businesses that need their internet, Wi-Fi, and devices to work without constant issues."
      serviceIncludes={[
        'Small business network setup and configuration',
        'Router and firewall setup',
        'Wi-Fi deployment and optimization',
        'Guest and staff network separation',
        'Printer, POS, and workstation connectivity',
        'Structured network planning for future growth',
      ]}
      outcomes={[
        {
          icon: Network,
          title: 'Cleaner Connectivity',
          text: 'Build a more organized network environment with better structure, more dependable connectivity, and fewer day-to-day issues.',
        },
        {
          icon: Shield,
          title: 'Stronger Foundation',
          text: 'Create a better setup for business devices, internet access, wireless coverage, and long-term network reliability.',
        },
        {
          icon: CheckCircle2,
          title: 'Built for Daily Business Use',
          text: 'Get a practical network setup designed around the real needs of small businesses instead of unnecessary complexity.',
        },
      ]}
      industriesTitle="Built for Small Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable small business network setup for teams, workstations, printers, phones, and shared office operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Clean connectivity for POS systems, staff devices, guest Wi-Fi, and back-office workflows.',
          icon: Store,
        },
        {
          title: 'Restaurants & Service Businesses',
          description:
            'Practical network setup for restaurants, cafés, studios, and other customer-facing spaces that need stable connectivity.',
          icon: Building2,
        },
      ]}
      midCtaEyebrow="Need a Better Business Network?"
      midCtaTitle="Get a Small Business Network That Works the Way It Should"
      midCtaDescription="From Wi-Fi and device connectivity to cleaner structure and better reliability, Ozony Tech helps small businesses build networks that support real-world daily operations."
      seoTitle="Why Choose Ozony Tech for Small Business Network Setup in NYC"
      seoParagraphs={[
        'Ozony Tech provides small business network setup in NYC for companies that need dependable internet, organized internal connectivity, and a cleaner overall network structure. We help small businesses build practical setups that support day-to-day work without overcomplicating the environment.',
        'Small business network setup can include router and firewall configuration, Wi-Fi deployment, device connectivity, guest and staff separation, and structured planning for future growth. The goal is to create a setup that feels reliable, organized, and easier to manage.',
        'Businesses choose Ozony Tech because the focus is on practical network solutions for real small business environments across NYC. That means cleaner connectivity, less confusion, and a stronger foundation for day-to-day operations.',
      ]}
      areasServed="Serving small businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas in NYC."
      faqItems={[
        {
          question: 'Do you provide small business network setup in NYC?',
          answer:
            'Yes. Ozony Tech provides small business network setup in NYC for offices, retail stores, restaurants, and other business environments that need reliable and organized connectivity.',
        },
        {
          question: 'What does a small business network setup include?',
          answer:
            'A small business network setup can include router and firewall configuration, Wi-Fi setup, printer and workstation connectivity, network segmentation, and a cleaner overall structure for everyday business use.',
        },
        {
          question: 'Can you improve an existing small business network?',
          answer:
            'Yes. Existing business networks can often be cleaned up, reorganized, and optimized to improve performance, coverage, reliability, and day-to-day usability.',
        },
        {
          question: 'Can you separate guest, staff, and business devices on the network?',
          answer:
            'Yes. Networks can be segmented to better separate guest access, staff use, and business-critical devices for stronger organization and security.',
        },
      ]}
      finalTitle="Need Small Business Network Setup in NYC?"
      finalDescription="Get a clean, reliable network setup built around your business, your devices, and the way your team works every day."
    />
  );
};

export default SmallBusinessNetworkNYC;