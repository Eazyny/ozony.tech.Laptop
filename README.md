# Ozony Tech

Modern IT & network solutions website for small businesses.

This project is the main business website for **Ozony Tech**, built to present services, solutions, credentials, and contact options in a clean, high-performance format.

## Overview

Ozony Tech is focused on practical IT support for small businesses, including:

- Wi-Fi and networking support
- Device setup and troubleshooting
- Small business IT solutions
- Secure, modern business contact flow
- Professional web presence for future growth

This site was originally based on a personal IT portfolio and was later converted into a business-facing website.

## Live Site

**Website:** [https://ozony.tech](https://ozony.tech)

## Features

- Business-focused homepage and messaging
- Services section
- Solutions section
- Credentials section
- About section
- Business contact form
- Contact email and phone display
- Social links
- Responsive design
- SEO-friendly metadata
- Sitemap and robots.txt support
- Fast performance and optimized Lighthouse scores

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **React Helmet**
- **Formspree** for contact form handling

## Contact Form Handling

The contact form is connected through **Formspree**.

Form submissions currently route through the configured Formspree endpoint in `Contact.jsx`.

Public business contact details:

- **Email:** `contact@ozony.tech`
- **Phone:** `(347) 653-7655`
- **Service Area:** `New York, NY`

## Project Structure

```bash
src/
  components/
    Header.jsx
    Hero.jsx
    Services.jsx
    Solutions.jsx
    Credentials.jsx
    About.jsx
    Contact.jsx
    CallToAction.jsx
    Footer.jsx
  ui/
  App.jsx
  main.jsx

public/
  favicon.ico
  robots.txt
  sitemap.xml
  images
  pdf assets
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment Notes

This project is deployed at the root domain:

```text
https://ozony.tech
```

Important public files include:

- `public/robots.txt`
- `public/sitemap.xml`

## SEO Notes

The site includes:

- Updated page title and meta description
- Sitemap support
- Robots.txt support
- Search Console indexing setup
- Performance-focused frontend structure

## Versioning

This repo uses Git tags for milestone tracking.

Example version flow:

- `v0.1.0` — Initial repo baseline
- `v0.2.0` — Converted from portfolio to business site
- Later patch tags for business, contact, and SEO polish

## Status

This project is actively evolving as Ozony Tech continues to refine branding, service offerings, and business readiness.

Planned future improvements may include:

- Stronger business imagery and visuals
- Expanded service pages
- Local SEO improvements
- Testimonials and case studies
- Google Business Profile integration when ready

## License

This project is currently private/internal to Ozony Tech unless otherwise stated.
