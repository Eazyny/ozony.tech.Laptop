import React from 'react';
import { Shield, Lock, Network } from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const FirewallSetupConnecticut = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Business Firewall Setup in Connecticut for Small Businesses | Ozony Tech"
      pageDescription="Ozony Tech provides business firewall setup in Connecticut for small businesses that want stronger protection, cleaner network control, and a better security foundation."
      eyebrow="OZONY TECH · FIREWALL SETUP CONNECTICUT"
      title="Business Firewall Setup in Connecticut for Small Businesses"
      description="Ozony Tech provides business firewall setup in Connecticut for small businesses that want stronger protection, better network control, cleaner traffic separation, and a more secure foundation for daily operations."
      heroImage="/images/services/firewall-setup-nyc.webp"
      heroImageAlt="Business firewall setup in Connecticut for small businesses"
      includeTitle="What’s Included"
      includeDescription="Practical firewall setup and network protection built around the day-to-day needs of small businesses that want stronger security without unnecessary complexity."
      serviceIncludes={[
        'Business firewall setup and configuration',
        'Basic security rule creation',
        'Guest and staff traffic separation',
        'Network segmentation support',
        'Remote access preparation where needed',
        'Basic policy hardening and cleanup',
      ]}
      outcomes={[
        {
          icon: Shield,
          title: 'Stronger Protection',
          text: 'Create a stronger first line of defense for your business network with more intentional traffic control and cleaner security boundaries.',
        },
        {
          icon: Lock,
          title: 'Better Network Control',
          text: 'Improve visibility, segmentation, and policy structure so your network is easier to manage safely and with more confidence.',
        },
        {
          icon: Network,
          title: 'Cleaner Security Foundation',
          text: 'Build a more professional security baseline for future growth, troubleshooting, remote access, and long-term reliability.',
        },
      ]}
      midCtaEyebrow="Need Better Protection?"
      midCtaTitle="Get a Firewall Setup That Helps Protect Your Business"
      midCtaDescription="From cleaner traffic control to stronger segmentation and a better security baseline, Ozony Tech helps small businesses build firewall setups that support both protection and daily operations."
      seoTitle="Why Choose Ozony Tech for Firewall Setup in Connecticut"
      seoParagraphs={[
        'Ozony Tech provides business firewall setup in Connecticut for small businesses that want stronger security, cleaner network organization, and better control over how business traffic flows. A properly configured firewall helps protect business devices, improve segmentation, and create a more stable foundation for future network growth.',
        'Firewall setup can include initial configuration, basic rule creation, guest and staff separation, network segmentation support, remote access preparation where needed, and practical security hardening for small business environments. The goal is to build security that is useful, understandable, and aligned with daily operations.',
        'Businesses choose Ozony Tech because the focus is on practical security for real small business environments, not unnecessary complexity. The result is a cleaner, more controlled network setup that supports both protection and growth.',
      ]}
      areasServed="Serving businesses across Connecticut, including Stamford, Greenwich, Norwalk, and nearby areas."
      faqItems={[
        {
          question: 'Do you provide business firewall setup for small businesses in Connecticut?',
          answer:
            'Yes. Ozony Tech provides business firewall setup in Connecticut for offices, retail stores, restaurants, and other small business environments that want stronger network protection and cleaner traffic control.',
        },
        {
          question: 'What does business firewall setup include?',
          answer:
            'Business firewall setup can include firewall configuration, basic security rules, guest and staff separation, network segmentation support, remote access preparation where needed, and practical policy hardening based on your business environment.',
        },
        {
          question: 'Can a firewall improve an existing business network?',
          answer:
            'Yes. A properly configured firewall can improve security, support cleaner segmentation, and create better control over how devices and traffic move across the network.',
        },
        {
          question: 'Can you separate guest, staff, and business-critical traffic?',
          answer:
            'Yes. Firewall and segmentation policies can help better separate guest traffic, staff access, and important business systems to improve both security and organization.',
        },
      ]}
      relatedServices={[
        { label: 'Business Wi-Fi Connecticut', to: '/business-wifi-connecticut' },
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        { label: 'IT Services Near Me', to: '/it-services-near-me' },
        { label: 'IT Support', to: '/it-support' },
        { label: 'IT Support Connecticut', to: '/it-support-connecticut' },
        { label: 'IT Support NJ', to: '/it-support-nj' },
        { label: 'IT Support NYC', to: '/it-support-nyc' },
        { label: 'Managed IT Services', to: '/managed-it-services' },
        { label: 'Network Services Near Me', to: '/network-services-near-me' },
        { label: 'Network Setup Connecticut', to: '/network-setup-connecticut' },
        { label: 'Network Setup NJ', to: '/network-setup-nj' },
        { label: 'Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Network Troubleshooting NYC', to: '/network-troubleshooting-nyc' },
      ]}
      finalTitle="Need Business Firewall Setup in Connecticut?"
      finalDescription="Get stronger protection, cleaner traffic control, and a better security foundation built around the way your business actually operates."
    />
  );
};

export default FirewallSetupConnecticut;