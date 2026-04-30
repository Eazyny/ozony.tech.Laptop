import React from 'react';
import {
  Wrench,
  Monitor,
  Network,
  Shield,
  Briefcase,
  Store,
} from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const ITSolutions = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="IT Solutions for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides practical IT solutions for small businesses, including IT support, network setup, business Wi-Fi, firewall setup, troubleshooting, and managed IT services."
      eyebrow="OZONY TECH · IT SOLUTIONS"
      title="IT Solutions for Small Businesses"
      description="Ozony Tech provides practical IT solutions for small businesses that need reliable technology, stronger connectivity, cleaner network structure, and dependable support for day-to-day operations."
      heroImage="/images/services/it-support-nyc.webp"
      heroImageAlt="IT solutions for small businesses"
      ogImage="/service_area_map.png"
      twitterImage="/service_area_map.png"
      includeTitle="What’s Included"
      includeDescription="Practical technology solutions built around the real issues small businesses deal with every day, from unreliable Wi-Fi to device problems and network headaches."
      serviceIncludes={[
        'Small business IT support',
        'Business network setup and configuration',
        'Business Wi-Fi setup and optimization',
        'Firewall setup and traffic separation',
        'Network troubleshooting and issue resolution',
        'Managed IT services and ongoing support',
      ]}
      outcomes={[
        {
          icon: Wrench,
          title: 'Practical IT Support',
          text: 'Get help with the everyday technology issues that slow down your team, interrupt work, and create unnecessary frustration.',
        },
        {
          icon: Network,
          title: 'Cleaner Network Structure',
          text: 'Build a stronger foundation for internet access, Wi-Fi, business devices, traffic separation, and future growth.',
        },
        {
          icon: Shield,
          title: 'Better Security Foundation',
          text: 'Support stronger network control, cleaner separation, and better protection for business devices and daily operations.',
        },
      ]}
      industriesTitle="Built for Small Business Environments"
      idealFor={[
        {
          title: 'Offices',
          description:
            'IT solutions for teams that rely on workstations, printers, shared devices, stable Wi-Fi, and smooth daily operations.',
          icon: Briefcase,
        },
        {
          title: 'Retail Stores',
          description:
            'Practical technology support for POS systems, staff devices, guest Wi-Fi, and customer-facing workflows.',
          icon: Store,
        },
        {
          title: 'Growing Small Businesses',
          description:
            'A strong fit for businesses that need cleaner systems, better connectivity, stronger support, and a more reliable technology foundation.',
          icon: Monitor,
        },
      ]}
      midCtaEyebrow="Need Better IT Support?"
      midCtaTitle="Get IT Solutions That Actually Support Your Business"
      midCtaDescription="From network setup and Wi-Fi to troubleshooting, firewall setup, and ongoing support, Ozony Tech helps small businesses build technology environments that work better."
      seoTitle="Why Choose Ozony Tech for IT Solutions"
      seoParagraphs={[
        'Ozony Tech provides IT solutions for small businesses that need practical help with support, connectivity, Wi-Fi, network setup, firewall configuration, troubleshooting, and managed technology services. The focus is on solving the real technology problems that interrupt daily operations.',
        'IT solutions can include device support, workstation help, printer troubleshooting, business Wi-Fi improvements, network setup, firewall setup, network troubleshooting, and ongoing managed IT support. The goal is to make your technology environment cleaner, more reliable, and easier to manage.',
        'Businesses choose Ozony Tech because the approach is practical, straightforward, and built around real small business needs. That means less confusion, less downtime, and better technology support where it matters most.',
      ]}
      areasServed="Serving small businesses across NYC, New Jersey, Connecticut, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide IT solutions for small businesses?',
          answer:
            'Yes. Ozony Tech provides IT solutions for small businesses that need practical help with IT support, network setup, Wi-Fi, firewall setup, troubleshooting, and managed services.',
        },
        {
          question: 'What types of IT solutions do you offer?',
          answer:
            'IT solutions can include device support, workstation help, printer troubleshooting, business Wi-Fi setup, network setup, firewall setup, troubleshooting, and ongoing managed IT services.',
        },
        {
          question: 'Can you help improve an existing business technology setup?',
          answer:
            'Yes. Existing business environments can often be improved through better organization, stronger connectivity, cleaner network structure, and practical troubleshooting.',
        },
        {
          question: 'Are these IT solutions only for larger companies?',
          answer:
            'No. Ozony Tech focuses on practical IT solutions for small businesses that need reliable support without unnecessary complexity.',
        },
      ]}
      finalTitle="Need IT Solutions for Your Business?"
      finalDescription="Get practical help with support, connectivity, Wi-Fi, firewall setup, troubleshooting, and the technology issues that slow business down."
    />
  );
};

export default ITSolutions;