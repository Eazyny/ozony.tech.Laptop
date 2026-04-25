import React from 'react';
import {
  Network,
  Shield,
  Wifi,
  MapPin,
  Store,
  Briefcase,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const NetworkServicesNearMe = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Network Services Near Me for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides network services for small businesses looking for reliable local help with Wi-Fi, connectivity, firewall setup, troubleshooting, and business network support."
      eyebrow="OZONY TECH · NETWORK SERVICES NEAR ME"
      title="Network Services Near Me for Small Businesses"
      description="Ozony Tech provides practical network services for small businesses looking for reliable local help with Wi-Fi, connectivity, firewall setup, troubleshooting, and the network issues that interrupt daily operations."
      heroImage="/images/services/network-setup-nyc.webp"
      heroImageAlt="Local network services for small businesses"
      includeTitle="What’s Included"
      includeDescription="Practical network services for businesses that need stronger connectivity, cleaner structure, better wireless performance, and more reliable day-to-day operation."
      serviceIncludes={[
        'Business network setup and configuration',
        'Wi-Fi deployment and optimization',
        'Firewall setup and traffic separation',
        'Network troubleshooting and issue diagnosis',
        'Printer, POS, and workstation connectivity',
        'Structured network planning for future growth',
      ]}
      outcomes={[
        {
          icon: Network,
          title: 'Cleaner Network Structure',
          text: 'Build a more organized business network with practical structure, dependable connectivity, and fewer day-to-day issues.',
        },
        {
          icon: Wifi,
          title: 'Stronger Connectivity',
          text: 'Improve Wi-Fi coverage, reduce instability, and support smoother business operations across your space.',
        },
        {
          icon: Shield,
          title: 'Better Network Control',
          text: 'Support stronger separation, cleaner traffic management, and a more reliable foundation for business devices and users.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable network services for teams, printers, phones, workstations, meetings, and shared office operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Clean connectivity for POS systems, staff devices, guest Wi-Fi, and back-office workflows that need to stay online.',
          icon: Store,
        },
        {
          title: 'Businesses Searching for Nearby Help',
          description:
            'A practical option for small businesses looking for local network services they can rely on when connectivity starts getting in the way.',
          icon: MapPin,
        },
      ]}
      midCtaEyebrow="Need Better Connectivity?"
      midCtaTitle="Get Network Services That Actually Help Your Business Run Better"
      midCtaDescription="From Wi-Fi and firewall setup to troubleshooting and connectivity cleanup, Ozony Tech helps small businesses get practical network support without unnecessary complexity."
      seoTitle="Why Choose Ozony Tech When Searching for Network Services Near Me"
      seoParagraphs={[
        'Ozony Tech provides network services for small businesses looking for dependable local help with Wi-Fi, connectivity, firewall setup, troubleshooting, and overall business network organization. We focus on the real issues that interrupt work, slow teams down, and create frustration during daily operations.',
        'Network services can include network setup, Wi-Fi improvements, firewall configuration, device connectivity, troubleshooting, and structured planning for better long-term performance. The goal is to create a network environment that feels cleaner, more reliable, and easier to manage.',
        'Businesses choose Ozony Tech because the focus is on practical support for real small business environments. That means less downtime, less confusion, and dependable local help that keeps your network working the way it should.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide local network services for small businesses?',
          answer:
            'Yes. Ozony Tech provides network services for small businesses that need practical help with Wi-Fi, connectivity, firewall setup, troubleshooting, and everyday network issues.',
        },
        {
          question: 'What kinds of network services do you help with?',
          answer:
            'Network services can include business network setup, Wi-Fi deployment, firewall setup, troubleshooting, device connectivity, and general network cleanup for small business environments.',
        },
        {
          question: 'Can you improve an existing business network?',
          answer:
            'Yes. Existing business networks can often be cleaned up, reorganized, and optimized to improve reliability, coverage, performance, and day-to-day usability.',
        },
        {
          question: 'Do you only help with full network installs?',
          answer:
            'No. Network services also cover troubleshooting, Wi-Fi issues, firewall improvements, and the day-to-day connectivity problems that waste time and interrupt operations.',
        },
      ]}
      finalTitle="Need Local Network Services for Your Business?"
      finalDescription="Get practical help with Wi-Fi, firewall setup, troubleshooting, and the connectivity issues that slow business down."
    />
  );
};

export default NetworkServicesNearMe;