import React from 'react';
import { Shield, Lock, Network } from 'lucide-react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const FirewallSetupNYC = () => {
  return (
    <ServiceLandingTemplate
      pageTitle="Firewall Setup in NYC | Ozony Tech"
      pageDescription="Business firewall setup in NYC for small businesses that want stronger protection, cleaner network control, and better security foundations."
      eyebrow="OZONY TECH · FIREWALL SETUP NYC"
      title="Firewall Setup in NYC for Small Businesses"
      description="Security-focused firewall setup for small businesses that want stronger protection, better network control, and a cleaner foundation for growth."
      heroImage="/images/services/firewall-setup-nyc.webp"
      heroImageAlt="Business firewall setup in NYC"
      includeTitle="What’s Included"
      includeDescription="Practical firewall setup and network protection built around the needs of small businesses."
      serviceIncludes={[
        'Firewall device setup and configuration',
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
          text: 'Create a stronger first line of defense for your business network with more intentional traffic control.',
        },
        {
          icon: Lock,
          title: 'Better Network Control',
          text: 'Improve visibility, segmentation, and policy structure so your network is easier to manage safely.',
        },
        {
          icon: Network,
          title: 'Cleaner Security Foundation',
          text: 'Build a more professional security baseline for growth, troubleshooting, and future improvements.',
        },
      ]}
      seoTitle="Professional Firewall Setup in NYC"
      seoParagraphs={[
        'Ozony Tech provides firewall setup in NYC for small businesses that want stronger security, cleaner network organization, and better control over how business traffic flows. A properly configured firewall helps protect business devices, improve segmentation, and create a more stable foundation for future network growth.',
        'Our firewall setup services can include initial configuration, basic rule creation, staff and guest separation, and practical security hardening for small business environments. We focus on setups that are realistic, useful, and built around daily operations.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas."
      relatedServices={[
        { label: 'Network Setup NYC', to: '/network-setup-nyc' },
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'IT Support NYC', to: '/it-support-nyc' },
      ]}
    />
  );
};

export default FirewallSetupNYC;