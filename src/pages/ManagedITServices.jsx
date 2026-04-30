import React from 'react';
import {
  ShieldCheck,
  Monitor,
  Headphones,
  Briefcase,
  Store,
  Network,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ManagedITServices = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Managed IT Services for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides managed IT services for small businesses that need dependable support, cleaner technology management, stronger network performance, and fewer day-to-day issues."
      eyebrow="OZONY TECH · MANAGED IT SERVICES"
      title="Managed IT Services for Small Businesses"
      description="Ozony Tech provides managed IT services for small businesses that need dependable support, cleaner technology management, stronger network performance, and practical help keeping business systems running smoothly."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Managed IT services for small businesses"
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle="What’s Included"
      includeDescription="Practical managed IT support for businesses that want fewer technology headaches, more reliable systems, and a cleaner day-to-day support experience."
      serviceIncludes={[
        'Ongoing small business IT support',
        'Device and workstation management help',
        'Basic network and Wi-Fi issue resolution',
        'Printer and shared device troubleshooting',
        'User onboarding and device setup support',
        'Practical help with everyday business technology issues',
      ]}
      outcomes={[
        {
          icon: ShieldCheck,
          title: 'More Reliable Operations',
          text: 'Reduce recurring technology problems and keep your business running with fewer interruptions and less day-to-day friction.',
        },
        {
          icon: Monitor,
          title: 'Cleaner Technology Management',
          text: 'Keep devices, shared tools, connectivity, and business systems better organized, easier to manage, and more dependable.',
        },
        {
          icon: Headphones,
          title: 'Dependable Ongoing Support',
          text: 'Get practical IT help for the real-world technology issues small businesses deal with most often across offices and customer-facing spaces.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Managed IT services for teams that rely on workstations, shared devices, printers, connectivity, and smooth daily operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical support for POS systems, staff devices, guest Wi-Fi, and the technology issues that disrupt customer-facing environments.',
          icon: Store,
        },
        {
          title: 'Growing Small Businesses',
          description:
            'A strong fit for businesses that need more consistent IT support, cleaner organization, and a better long-term technology foundation.',
          icon: Network,
        },
      ]}
      midCtaEyebrow="Need Ongoing IT Support?"
      midCtaTitle="Get Managed IT Services Without the Usual Headaches"
      midCtaDescription="From device support and connectivity issues to day-to-day troubleshooting and cleaner system management, Ozony Tech helps small businesses stay productive with practical managed IT support."
      seoTitle="Why Choose Ozony Tech for Managed IT Services"
      seoParagraphs={[
        'Ozony Tech provides managed IT services for small businesses that need dependable support with devices, connectivity, troubleshooting, and everyday business technology issues. The focus is on helping businesses reduce friction, stay organized, and keep technology from getting in the way of daily operations.',
        'Managed IT services can include ongoing support for workstations, printers, shared devices, Wi-Fi and connectivity issues, user setup, and general business technology troubleshooting. The goal is to make your environment easier to manage, more reliable to use, and less disruptive for your team.',
        'Businesses choose Ozony Tech because the support is practical, straightforward, and built around real small business environments. That means fewer recurring problems, less confusion, and a stronger foundation for long-term day-to-day support.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide managed IT services for small businesses?',
          answer:
            'Yes. Ozony Tech provides managed IT services for small businesses that need practical ongoing support with devices, connectivity, troubleshooting, and day-to-day business technology issues.',
        },
        {
          question: 'What do managed IT services include?',
          answer:
            'Managed IT services can include ongoing device support, workstation help, printer troubleshooting, Wi-Fi and connectivity issue resolution, user setup assistance, and general support for everyday business technology problems.',
        },
        {
          question: 'Are managed IT services only for larger companies?',
          answer:
            'No. Small businesses can benefit from managed IT services when they need more consistent support, better organization, and fewer recurring technology issues.',
        },
        {
          question: 'Can managed IT services help improve an existing setup?',
          answer:
            'Yes. Managed IT services can help improve an existing business environment through better device organization, more reliable connectivity, practical troubleshooting, and cleaner day-to-day technology management.',
        },
      ]}
      finalTitle="Need Managed IT Services for Your Business?"
      finalDescription="Get dependable ongoing support for devices, connectivity, troubleshooting, and the everyday technology issues that slow work down."
    />
  );
};

export default ManagedITServices;