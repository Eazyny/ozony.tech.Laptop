import React from 'react';
import { Wrench, Monitor, Headphones, MapPin, Store, Briefcase } from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITServicesNearMe = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="IT Services Near Me for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides IT services for small businesses looking for reliable local support with devices, connectivity, troubleshooting, Wi-Fi, and network issues."
      eyebrow="OZONY TECH · IT SERVICES NEAR ME"
      title="IT Services Near Me for Small Businesses"
      description="Ozony Tech provides practical IT services for small businesses looking for reliable local help with devices, connectivity, troubleshooting, Wi-Fi issues, and everyday technology problems that slow work down."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Local IT services for small businesses"
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle="What’s Included"
      includeDescription="Straightforward IT help for the day-to-day technology issues that interrupt operations, waste time, and create unnecessary frustration."
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
          title: 'Faster Problem Solving',
          text: 'Resolve everyday technology problems before they turn into bigger disruptions for your team, your customers, or your workflow.',
        },
        {
          icon: Monitor,
          title: 'More Reliable Equipment',
          text: 'Keep computers, printers, shared devices, and office technology better organized, easier to use, and more dependable throughout the day.',
        },
        {
          icon: Headphones,
          title: 'Practical Local Support',
          text: 'Get clear, dependable help with the kinds of IT issues small businesses run into most often across offices, retail spaces, and customer-facing environments.',
        },
      ]}
      industriesTitle="Built for Local Businesses"
      idealFor={[
        {
          title: 'Offices',
          description:
            'Reliable IT help for teams, workstations, printers, phones, connectivity, and shared office operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical support for POS systems, staff devices, customer Wi-Fi, and the everyday tech problems that disrupt service.',
          icon: Store,
        },
        {
          title: 'Businesses That Need Nearby Help',
          description:
            'A practical option for small businesses searching for local IT services they can rely on when technology starts getting in the way.',
          icon: MapPin,
        },
      ]}
      midCtaEyebrow="Need Reliable IT Help?"
      midCtaTitle="Get IT Services Without the Headaches"
      midCtaDescription="From device issues and connectivity problems to troubleshooting and network support, Ozony Tech helps small businesses get practical IT help that keeps work moving."
      seoTitle="Why Choose Ozony Tech When Searching for IT Services Near Me"
      seoParagraphs={[
        'Ozony Tech provides IT services for small businesses looking for practical, dependable support with devices, connectivity, troubleshooting, Wi-Fi issues, and general business technology problems. We focus on the real issues that interrupt work and create frustration during daily operations.',
        'IT services can include device setup, workstation help, printer troubleshooting, Wi-Fi and connectivity support, shared access assistance, and general cleanup of business technology environments. The goal is simple: make your setup easier to manage, more reliable to use, and less frustrating for your team.',
        'Businesses choose Ozony Tech because the focus is on practical support that fits real small business environments. That means less confusion, less downtime, and dependable local help where it matters most.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide local IT services for small businesses?',
          answer:
            'Yes. Ozony Tech provides IT services for small businesses that need practical help with devices, troubleshooting, connectivity, Wi-Fi issues, and everyday business technology problems.',
        },
        {
          question: 'What kinds of IT services do you help with?',
          answer:
            'IT services can include device setup, workstation support, printer troubleshooting, Wi-Fi and connectivity issue resolution, shared access help, and general troubleshooting for day-to-day business technology problems.',
        },
        {
          question: 'Can you help improve an existing business tech setup?',
          answer:
            'Yes. Existing business environments can often be improved through better device organization, clearer setup, more reliable connectivity, and practical troubleshooting that helps everything run more smoothly.',
        },
        {
          question: 'Do you only help with major IT problems?',
          answer:
            'No. Local IT services also cover the everyday issues that waste time and interrupt work, including device setup problems, access issues, printer trouble, and inconsistent connectivity.',
        },
      ]}
      finalTitle="Need Local IT Services for Your Business?"
      finalDescription="Get practical help with devices, connectivity, troubleshooting, and the everyday tech issues that slow business down."
    />
  );
};

export default ITServicesNearMe;