# FarmEasy - Agricultural IoT Platform

## Overview
This is a professional website for FarmEasy, an agricultural IoT company providing solar-powered farm monitoring and automation systems. Originally based on the Carrington law firm template, it has been customized for agricultural technology.

**Framework**: Astro v5.15.9
**Styling**: Tailwind CSS v4
**Type**: Static Site Generator (SSG) with content collections
**Company**: FarmEasy (agricultural IoT solutions)

## Current State
- ✅ Fully configured for Replit environment
- ✅ Dev server running on port 5000
- ✅ Deployment configured for static hosting
- ✅ Dependencies installed and working
- ✅ Custom FarmEasy branding (logo, products section)
- ✅ Products component matching design system

## Project Structure
```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections (blog, team, practice areas, etc.)
│   ├── images/          # Image assets
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   └── styles/          # Global CSS
├── astro.config.mjs     # Astro configuration
└── package.json         # Dependencies
```

## Content Collections
The site uses Astro's content collections for:
- Blog posts (`posts`)
- Team members (`team`)
- Practice areas (`practice`)
- Case results (`cases`)
- Press releases (`pressReleases`)
- Career opportunities (`careers`)
- Info pages (`infopages`)

## Development
**Dev Server**: `npm run dev` (configured to run on 0.0.0.0:5000)
**Build**: `npm run build` (outputs to `dist/`)
**Preview**: `npm run preview`

## Replit Configuration
- **Server**: Configured to use 0.0.0.0:5000 for Replit's proxy environment
- **Allowed Hosts**: Set to `true` in Vite config to allow Replit's proxy hosts
- **Workflow**: "Astro Dev Server" runs the development server
- **Deployment**: Static site deployment with build output in `dist/`

### Important Configuration Details
The Astro config includes critical settings for Replit:
- `server.host: '0.0.0.0'` - Binds to all network interfaces
- `server.port: 5000` - Uses port 5000 for the webview
- `vite.server.allowedHosts: ['.replit.dev', '.repl.co', ...]` - Explicit domain patterns for Replit's proxy hosts
  - **Note**: Uses explicit patterns instead of `true` due to a bug in Vite 6.0.9+ where `allowedHosts: true` doesn't work
  - The `.` prefix allows all subdomains (e.g., `*.replit.dev`, `*.repl.co`)
- `vite.server.hmr.clientPort: 5000` - Ensures HMR works through the proxy

## Features
- Responsive design with Tailwind CSS v4
- SEO optimization with @astrolib/seo
- Automatic sitemap generation
- RSS feed for blog posts
- Markdown support with syntax highlighting
- Content drafts support
- Dark mode support

## Notes
- The site uses Tailwind CSS v4 via Vite plugin
- Navigation supports transparent mode (opt-in per page)
- Reusable components: Text, Button, and Wrapper
- The template is from Lexington Themes

## Customizations for FarmEasy
- **Logo**: Custom SVG logo with green circular design and layered opacity (src/components/assets/Logo.astro)
- **Products Section**: Redesigned Products component (src/components/landing/Products.astro) featuring:
  - Three products: Smart Sensor Monitoring, Off-grid Solar IoT Nodes, Secure Dashboards
  - Minimalist card design with category labels, stats, spacer area, title/description
  - Right-aligned "Learn More" buttons
  - AI-generated background videos for each product card (20% opacity)
    - sensor-monitoring.mp4 - IoT sensors in greenhouse
    - solar-nodes.mp4 - Solar panels powering farm IoT
    - dashboard.mp4 - Analytics dashboard interface
  - Videos auto-play, loop, and are muted for seamless UX
  - Matches existing design system (white backgrounds, consistent typography)
- **Homepage**: Added Products component between Philosophy and Approach sections
- **Product Pages**: Created three dedicated product pages:
  - `/products/smart-sensor-monitoring` - Comprehensive IoT sensor monitoring solution (green theme)
  - `/products/off-grid-solar-nodes` - Solar-powered autonomous power systems (amber theme)
  - `/products/secure-dashboards` - Analytics platform with enterprise security (blue theme)
  - Each page includes: hero section, key features grid, technical specifications, benefits, use cases, and CTAs
  - Products component updated to link "Learn More" buttons to respective product pages

## Recent Changes
- 2025-11-19: Initial setup for Replit environment
  - Configured Astro dev server for port 5000
  - Set host to 0.0.0.0 for proxy compatibility
  - Fixed "Blocked request" error by using explicit `allowedHosts` patterns
    - Workaround for Vite 6.0.9+ bug where `allowedHosts: true` doesn't work
    - Uses domain patterns: `.replit.dev`, `.repl.co`, `localhost`, `.localhost`
  - Configured HMR for Replit
  - Set up workflow and deployment
  - Installed dependencies
  - Verified website loads correctly through Replit's proxy

- 2025-11-19: FarmEasy customization - Products Section
  - Created custom FarmEasy logo with green branding
  - Built Products component with three IoT product cards
  - Redesigned cards to match minimalist reference design
  - Integrated Products section into homepage
  - Updated all styling to match existing design system (bg-base-50)
  - Generated and integrated AI videos as card backgrounds
    - Videos created using Veo 3.1 (Google's video generation model)
    - Three product-specific videos in public/videos/
    - Video backgrounds set to 20% opacity for readability
    - All videos auto-play, loop, and are muted

- 2025-11-19: Complete FarmEasy Rebrand - Law Firm to Ag-Tech Transformation
  - **Hero Section**: Updated headline and messaging for agricultural innovation
  - **Stats Section**: Changed metrics to agricultural impact (farms served, sensors deployed, water saved, uptime, monitoring, battery life)
  - **Philosophy Section**: Rebranded company values from law firm to ag-tech (Sustainable Innovation, Precision Agriculture, Farmer Partnership)
  - **Approach Section**: Transformed from legal process to IoT implementation workflow (Farm Assessment, System Installation, Data Integration, Ongoing Support)
  - **Team Section**: Updated terminology from "attorneys" to agricultural technology experts
  - **Solutions (Practice Areas)**: Created agricultural solution content:
    - Soil Monitoring & Analytics
    - Irrigation Automation
    - Crop Health Analytics
    - Weather Station Network
  - **Success Stories (Cases)**: Created farm case studies:
    - Green Valley Orchards - 35% water reduction
    - Sunrise Dairy - 40% feed waste reduction
  - **Navigation**: Updated menu items (Solutions, Success Stories, Our Team, Get Started CTA)
  - **Footer**: Updated contact info, fixed typo (India), changed section titles to agricultural terminology
  - **Content Cleanup**: Removed all law firm practice and case markdown files
  - **Team Profiles**: Updated Sarah Chen and Michael Rodriguez to agricultural technology roles

- 2025-11-19: Product Pages Creation
  - Created three comprehensive product pages at `/products/` route
  - Smart Sensor Monitoring: Details soil moisture, temperature, nutrients monitoring with IoT sensors
  - Off-Grid Solar IoT Nodes: Showcases autonomous solar power systems for remote farm locations
  - Secure Dashboards: Features analytics platform with enterprise-grade security
  - Each page has unique color theming (green/amber/blue) matching product categories
  - Updated Products component to properly link to new product pages
  - All pages use consistent imports from `@/components/fundations/` for design system compliance
  - Includes hero sections, feature grids, technical specs, benefits lists, use cases, and CTAs

- 2025-11-24: How It Works Section Image Update
  - Replaced person/portrait images with agricultural IoT-themed stock images
  - Background image: Modern farm with IoT sensors and solar panels (farm-iot-field.jpg)
  - Testimonial image: Smart agriculture greenhouse with monitoring technology (greenhouse-tech.jpg)
  - Images now match the agricultural technology theme throughout the site

- 2025-11-24: Header Navigation Simplification
  - Hidden "Overview", "Results", and "Offices" from main navigation
  - Added product links directly in main navigation bar:
    - Smart Sensor → /products/smart-sensor-monitoring
    - Off-grid Nodes → /products/off-grid-solar-nodes
    - Analytics → /products/secure-dashboards
  - Main navigation now shows: Explore, Smart Sensor, Off-grid Nodes, Analytics, Contact
  - Updated "Explore" dropdown content with agricultural IoT links:
    - Added Products section with all three product pages
    - Includes "Our Team" and "Agricultural Solutions" links
    - Changed "Cases" to "Success Stories"
    - Changed "Journal" to "Blog"
    - Removed "Offices" link
  - Updated MegaMenu "About" section with FarmEasy description
  - Updated contact info in MegaMenu (info@farmeasy.ag, (800) 555-1234)
  - Updated sample blog posts to agricultural IoT topics
  - Updated featured case to Green Valley Orchards success story
  - Added agricultural IoT hero image to MegaMenu (megamenu-hero.jpg)
  - Removed HighlightsPractice (Solutions) section from homepage for cleaner layout

- 2025-11-24: Buy IoT Smart Hub Page Creation & Interactive Features
  - Changed header CTA button from "Get Started" to "Buy IoT Smart Hub"
  - Created Apple-style product buying page at /buy-iot-hub
  - Fully interactive configuration with real-time price calculation:
    - **Model selection** (Smart Hub $899 vs Smart Hub Pro $1099) - clickable with visual selection state
    - **Additional Sensors** with functional quantity controls (+/- buttons):
      - Temperature Sensor ($89 ea.)
      - Humidity Sensor ($79 ea.)
      - Solar Panel Sensor ($129 ea.)
      - Soil Moisture Sensor ($99 ea.)
    - **Storage options** (128GB included, 256GB +$150) - clickable selection
    - **Connectivity options** (Wi-Fi Only included, Wi-Fi + Cellular +$200) - clickable selection
    - **Accessories** with checkboxes (Solar Panel Kit +$249, Mounting Kit +$79, Sensor Pack +$399, Extended Warranty +$199)
  - Live price calculator in sticky sidebar:
    - Updates instantly based on all selections
    - Shows itemized price breakdown
    - Displays running total with proper formatting
    - Configuration summary updates in real-time (e.g., "128GB • Wi-Fi + Cellular")
  - JavaScript state management:
    - Vanilla JS implementation using Astro <script> tag
    - Central state object tracking all selections
    - Event listeners for all interactive elements
    - Visual feedback (border/background color changes on selection)
  - "Coming Soon in Q4 2026" message with "Notify Me When Available" CTA button
  - Updated both desktop and mobile navigation to include the new button

- 2025-11-24: IoT Smart Hub Product Page - Apple-Style Animation Overhaul
  - Completely redesigned /products/smart-sensor-monitoring as premium IoT Smart Hub product page
  - **Hero Section**:
    - Full-screen black background with video overlay
    - Animated text reveals with staggered delays
    - Gradient green text effect on "Farm Intelligence"
    - Dual CTA buttons (Buy Now / Learn More)
  - **Sticky Navigation Bar**:
    - Appears on scroll past hero section
    - Frosted glass effect with backdrop blur
    - Quick access to Buy Now button
  - **Animations & Interactions**:
    - Intersection Observer for scroll-triggered animations
    - Fade-in, slide-in, and scale effects on different sections
    - Smooth scrolling for anchor links
    - Hover effects on feature cards
  - **Feature Grid**:
    - Apple-style grid with 1px borders
    - Six sensor categories with emoji icons
    - Performance metrics displayed prominently
    - Hover state transitions
  - **Technical Specifications**:
    - Two-column layout (Performance & Durability)
    - Clean typography with proper hierarchy
    - Specification values highlighted in accent color
    - Progressive reveal on scroll
  - **ROI Section**:
    - Three metric cards with shadow effects
    - Large numbers for impact (30% water savings, 15% yield increase, 18mo ROI)
    - Gradient background from green to white
  - **Design Elements**:
    - Consistent with FarmEasy brand colors (green accent)
    - Premium typography using font-display classes
    - Responsive design for all screen sizes
    - Professional Apple-inspired aesthetic

## Still Pending (Secondary Pages)
- Careers content (job postings still reference law firm roles)
- Press releases (still have Carrington Law news)
- Blog posts (may contain law firm content)
- Remaining team member profiles (4 more team members need agricultural tech updates)
- Image assets (some images still show law firm scenes)
