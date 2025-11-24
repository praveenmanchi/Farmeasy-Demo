# FarmEasy - Agricultural IoT Platform

## Overview
FarmEasy is an agricultural IoT company providing solar-powered farm monitoring and automation systems. This professional website, built with Astro and Tailwind CSS, serves as a static site generator (SSG) to showcase FarmEasy's innovative solutions. The project's ambition is to establish a strong online presence for FarmEasy, highlighting its capabilities in precision agriculture, water conservation, and yield optimization through IoT technology.

## User Preferences
- I want iterative development where we focus on one section or feature at a time.
- Ask me before making any major changes to the project structure or core functionalities.
- I prefer clear and concise explanations for any proposed changes or new implementations.
- Do not make changes to the `public/` folder unless absolutely necessary for core functionality and after explicit approval.
- Do not modify the existing content in `src/content/` collections (posts, team, practice, cases, pressReleases, careers, infopages) without discussing the new content strategy first.
- Prioritize clean, readable code with good comments, especially for Astro components and JavaScript.
- Ensure all new features are responsive and maintain the established design system.

## System Architecture
The FarmEasy website is built using **Astro v5.15.9** as a Static Site Generator (SSG), leveraging **Tailwind CSS v4** for styling. It uses **content collections** for managing various content types like blog posts, team members, and product information.

**UI/UX Decisions:**
- **Branding**: Custom FarmEasy branding with a green circular SVG logo and a design system focused on white backgrounds, consistent typography, and green accent colors.
- **Product Presentation**: Features minimalist card designs with AI-generated background videos (20% opacity, auto-play, loop, muted) for product showcases.
- **Interactive Elements**: Includes Apple-style product pages with real-time price calculators and Dropbox Enterprise-style analytics pages.
- **Navigation**: Simplified header navigation with direct links to key product pages and an "Explore" dropdown featuring agricultural IoT-focused content.
- **Animations**: Utilizes Intersection Observer for scroll-triggered animations (fade-in, slide-in, scale effects) and smooth scrolling.
- **Responsiveness**: Designed to be fully responsive across all screen sizes.

**Technical Implementations:**
- **Framework**: Astro for efficient static site generation and content management.
- **Styling**: Tailwind CSS for utility-first styling, ensuring responsive and consistent design.
- **Content Management**: Astro's content collections for structured data (posts, team, products, etc.).
- **SEO**: Integrated `@astrolib/seo` for search engine optimization, sitemap generation, and RSS feeds.
- **Deployment**: Configured for static hosting, with output to `dist/`.
- **Replit Compatibility**: Astro dev server configured to run on `0.0.0.0:5000` with explicit `vite.server.allowedHosts` patterns (`.replit.dev`, `.repl.co`) to ensure compatibility with Replit's proxy environment and Hot Module Replacement (HMR).

**Feature Specifications:**
- **Product Pages**: Dedicated, visually rich product pages (e.g., Smart Sensor Monitoring, Off-grid Solar IoT Nodes, Secure Dashboards) with detailed features, technical specifications, benefits, and CTAs.
- **Interactive Buying Page**: An Apple-style "Buy IoT Smart Hub" page with dynamic configuration options (model, sensors, storage, connectivity, accessories) and a real-time price calculator implemented with vanilla JavaScript.
- **Agricultural Content**: Comprehensive rebranding and content overhaul from a law firm template to agricultural IoT, including updated headlines, descriptions, stats, case studies, and contact forms tailored to farming operations.

## External Dependencies
- **Astro**: Primary framework for static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **@astrolib/seo**: For SEO optimization, sitemap, and RSS feed generation.
- **Vite**: Used by Astro for development server and build tooling, with specific configurations for Replit.
- **AI Video Generation (Veo 3.1)**: Used for generating background videos for product cards (e.g., `sensor-monitoring.mp4`, `solar-nodes.mp4`, `dashboard.mp4` located in `public/videos/`).