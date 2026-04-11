import React from 'react';
import { Wrench, Monitor, Headphones } from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITSupportNJ = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Small Business IT Support in NJ | Ozony Tech"
      pageDescription="Ozony Tech provides small business IT support in NJ for companies that need dependable help with devices, connectivity, troubleshooting, and everyday technology issues."
      eyebrow="OZONY TECH · IT SUPPORT NJ"
      title="Small Business IT Support in NJ"
      description="Ozony Tech provides small business IT support in NJ for teams that need reliable help with devices, connectivity, troubleshooting, and the day-to-day tech issues that slow business down."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="Small business IT support in New Jersey"
      includeTitle="What’s Included"
      includeDescription="Straightforward support for the business tech issues that disrupt daily operations, waste time, and create unnecessary frustration."
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
      midCtaEyebrow="Need Reliable IT Help?"
      midCtaTitle="Get Small Business IT Support Without the Headaches"
      midCtaDescription="From device issues to connectivity problems, Ozony Tech helps keep your business running with practical support that makes day-to-day tech easier to manage."
      seoTitle="Why Choose Ozony Tech for Small Business IT Support in NJ"
      seoParagraphs={[
        'Ozony Tech provides small business IT support in NJ for teams that need practical help with devices, connectivity, shared access, and everyday troubleshooting. We focus on the problems that actually get in the way of business, from workstation setup and printer issues to unreliable Wi-Fi and general tech headaches.',
        'Support can include device setup, workstation help, troubleshooting, printer and shared device issues, Wi-Fi and connectivity support, and general cleanup of business technology environments. The goal is simple: make your setup easier to manage, more reliable to use, and less frustrating for your team.',
        'Businesses choose Ozony Tech because the focus is on straightforward support that fits real small business environments. That means less confusion, less downtime, and dependable help that keeps your business moving.',
      ]}
      areasServed="Serving businesses across New Jersey, including Jersey City, Hoboken, Newark, Fort Lee, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide small business IT support in NJ?',
          answer:
            'Yes. Ozony Tech provides small business IT support in NJ for offices, retail shops, restaurants, and other business environments that need practical day-to-day technology help.',
        },
        {
          question: 'What does small business IT support include?',
          answer:
            'Small business IT support can include device setup, workstation support, printer troubleshooting, Wi-Fi and connectivity issue resolution, shared access help, and general troubleshooting for everyday business technology problems.',
        },
        {
          question: 'Can you help improve an existing business tech setup?',
          answer:
            'Yes. Existing business environments can often be improved through better device organization, clearer setup, more reliable connectivity, and practical troubleshooting that helps everything run more smoothly.',
        },
        {
          question: 'Do you only help with major IT problems?',
          answer:
            'No. Small business IT support also covers the everyday issues that waste time and interrupt work, including device setup problems, access issues, printer trouble, and inconsistent connectivity.',
        },
      ]}
      relatedServices={[
        { label: 'Business Wi-Fi Connecticut', to: '/business-wifi-connecticut' },
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'Firewall Setup Connecticut', to: '/firewall-setup-connecticut' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        { label: 'IT Services Near Me', to: '/it-services-near-me' },
        { label: 'IT Support', to: '/it-support' },
        { label: 'IT Support Connecticut', to: '/it-support-connecticut' },
        { label: 'IT Support NYC', to: '/it-support-nyc' },
        { label: 'Managed IT Services', to: '/managed-it-services' },
        { label: 'Network Services Near Me', to: '/network-services-near-me' },
        { label: 'Network Setup Connecticut', to: '/network-setup-connecticut' },
        { label: 'Network Setup NJ', to: '/network-setup-nj' },
        { label: 'Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Network Troubleshooting NYC', to: '/network-troubleshooting-nyc' },
      ]}
      finalTitle="Need Small Business IT Support in NJ?"
      finalDescription="Get dependable help with devices, connectivity, troubleshooting, and the everyday tech issues that slow your business down."
    />
  );
};

export default ITSupportNJ;