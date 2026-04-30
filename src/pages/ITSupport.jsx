import React from 'react';
import { Wrench, Monitor, Headphones, Briefcase, Store, Network } from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITSupport = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="IT Support for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides IT support for small businesses that need dependable help with devices, connectivity, troubleshooting, Wi-Fi issues, and everyday technology problems."
      eyebrow="OZONY TECH · IT SUPPORT"
      title="IT Support for Small Businesses"
      description="Ozony Tech provides practical IT support for small businesses that need reliable help with devices, connectivity, troubleshooting, Wi-Fi issues, and the everyday technology problems that slow work down."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="IT support for small businesses"
      ogImage="/images/services/it-support-nyc.webp"
      twitterImage="/images/services/it-support-nyc.webp"
      includeTitle="What’s Included"
      includeDescription="Straightforward support for the business tech issues that interrupt operations, waste time, and create unnecessary frustration."
      serviceIncludes={[
        'Device and workstation setup and support',
        'Printer and shared device troubleshooting',
        'Basic network and Wi-Fi issue resolution',
        'New user onboarding and device setup help',
        'Shared access and permissions support',
        'General small business IT troubleshooting',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Faster Issue Resolution',
          text: 'Resolve common technology problems before they turn into bigger disruptions for your team, your customers, or your daily workflow.',
        },
        {
          icon: Monitor,
          title: 'More Reliable Equipment',
          text: 'Keep workstations, printers, and shared business devices better organized, easier to use, and more dependable throughout the day.',
        },
        {
          icon: Headphones,
          title: 'Practical Ongoing Support',
          text: 'Get clear, dependable help with the real IT issues small businesses run into most often across offices, retail spaces, and customer-facing environments.',
        },
      ]}
      industriesTitle="Built for Small Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable IT support for teams, workstations, printers, phones, connectivity, and smooth daily operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical help for POS systems, staff devices, customer Wi-Fi, and the technology issues that disrupt service.',
          icon: Store,
        },
        {
          title: 'Growing Small Businesses',
          description:
            'A strong fit for businesses that need cleaner organization, more reliable systems, and practical support they can count on.',
          icon: Network,
        },
      ]}
      midCtaEyebrow="Need Reliable IT Help?"
      midCtaTitle="Get IT Support Without the Headaches"
      midCtaDescription="From device issues and connectivity problems to troubleshooting and day-to-day tech support, Ozony Tech helps small businesses keep work moving with practical IT help."
      seoTitle="Why Choose Ozony Tech for IT Support"
      seoParagraphs={[
        'Ozony Tech provides IT support for small businesses that need practical help with devices, connectivity, shared access, troubleshooting, and everyday business technology issues. We focus on the real problems that interrupt work and create frustration during daily operations.',
        'IT support can include device setup, workstation help, printer troubleshooting, Wi-Fi and connectivity support, shared access assistance, and general cleanup of business technology environments. The goal is simple: make your setup easier to manage, more reliable to use, and less frustrating for your team.',
        'Businesses choose Ozony Tech because the focus is on straightforward support that fits real small business environments. That means less confusion, less downtime, and dependable help where it matters most.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide IT support for small businesses?',
          answer:
            'Yes. Ozony Tech provides IT support for small businesses that need practical help with devices, troubleshooting, connectivity, Wi-Fi issues, and everyday business technology problems.',
        },
        {
          question: 'What does IT support include?',
          answer:
            'IT support can include device setup, workstation support, printer troubleshooting, Wi-Fi and connectivity issue resolution, shared access help, and general troubleshooting for day-to-day business technology problems.',
        },
        {
          question: 'Can you help improve an existing business tech setup?',
          answer:
            'Yes. Existing business environments can often be improved through better device organization, clearer setup, more reliable connectivity, and practical troubleshooting that helps everything run more smoothly.',
        },
        {
          question: 'Do you only help with major IT problems?',
          answer:
            'No. IT support also covers the everyday issues that waste time and interrupt work, including device setup problems, access issues, printer trouble, and inconsistent connectivity.',
        },
      ]}
      finalTitle="Need IT Support for Your Business?"
      finalDescription="Get practical help with devices, connectivity, troubleshooting, and the everyday tech issues that slow work down."
    />
  );
};

export default ITSupport;