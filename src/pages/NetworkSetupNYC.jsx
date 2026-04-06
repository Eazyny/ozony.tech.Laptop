import React from 'react';
import ServiceLandingTemplate from '@/components/service-pages/ServiceLandingTemplate';

const NetworkSetupNYC = () => {
  return (
    <ServiceLandingTemplate
      eyebrow="Ozony Tech · Network Setup NYC"
      title="Network Setup Services in NYC for Small Businesses"
      description="Professional network setup for offices, retail spaces, restaurants, and growing teams that need reliable, secure, and scalable connectivity."
      heroImage="/images/services/network-setup-nyc.webp"
      heroImageAlt="Network setup services in NYC"
      seoTitle="Business Network Setup in NYC"
      seoParagraphs={[
        'Ozony Tech provides business network setup services in NYC for small businesses that need dependable internet, organized internal connectivity, and room to grow. We help design and configure networks that support daily business operations without overcomplicating the environment.',
        'From Wi-Fi deployment and router setup to guest and staff segmentation, our approach is focused on building practical, professional network systems for local businesses throughout New York City.',
      ]}
      areasServed="Serving businesses across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and nearby areas."
      relatedServices={[
        { label: 'Business Wi-Fi NYC', to: '/business-wifi-nyc' },
        { label: 'Firewall Setup NYC', to: '/firewall-setup-nyc' },
        { label: 'IT Support NYC', to: '/it-support-nyc' },
      ]}
    />
  );
};

export default NetworkSetupNYC;