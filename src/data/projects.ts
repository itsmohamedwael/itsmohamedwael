import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    slug: "clowdy-ai-assistant",
    title: "Clowdy — Autonomous Desktop AI Assistant",
    tagline: "Multimodal Windows companion with real-time voice, screen perception, and autonomous task execution.",
    category: "AI Engineering & Systems",
    year: "2026 — 2027",
    role: "Lead AI Engineer & Architect",
    summary:
      "A groundbreaking Windows desktop AI companion engineered in Python. Clowdy merges Gemini multimodal APIs with real-time screen analysis, local associative memory, and autonomous system control to execute complex workflows from voice or textual commands.",
    videoSrc: "/videos/logo-motion.mp4",
    posterSrc: "/videos/posters/poster-logo-motion.jpg",
    aspectRatio: "square",
    featured: true,
    technologies: [
      "Python",
      "Gemini Multimodal API",
      "Computer Vision / Screen OCR",
      "Real-Time Speech Synthesis",
      "Windows Win32 Automation",
      "Local Vector Memory Graph",
      "Defensive Security Shield",
    ],
    challenge:
      "Modern AI assistants are typically confined to isolated browser chats without access to local operating system state, native applications, or real-time visual comprehension of what the user is working on.",
    solution:
      "Built a non-intrusive background daemon that captures display buffers, translates user intent via Gemini APIs, and orchestrates Windows native actions (app launch, file manipulation, smart reminders, system monitoring) while storing context in persistent local memory.",
    impact: [
      "Zero-cloud local memory retention guaranteeing complete user privacy.",
      "Instant multi-step automation reducing complex desktop tasks to conversational speech.",
      "Active development of proactive defensive security layer detecting OS anomalies.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
    githubUrl: "https://github.com/itsmohamedwael",
  },
  {
    slug: "oryveo-restaurant-suite",
    title: "ORYVEO — Intelligent Offline Kitchen & POS Suite",
    tagline: "High-throughput restaurant management ecosystem engineered for zero-latency kitchen coordination.",
    category: "Enterprise Systems & POS UX",
    year: "2026",
    role: "Full-Stack Engineer & UI Architect",
    summary:
      "A production-grade restaurant operating system built with an offline-first architecture. Coordinates order pipelines, kitchen displays (KDS), points of sale, and receipt dispatch across local area networks without external internet dependencies.",
    videoSrc: "/videos/oryveo-kitchen.mp4",
    posterSrc: "/videos/posters/poster-oryveo-kitchen.jpg",
    aspectRatio: "portrait",
    featured: true,
    technologies: [
      "Offline-First Architecture",
      "Local Network WebSocket Sync",
      "Kitchen Display System (KDS)",
      "Thermal Print Protocol",
      "Point-of-Sale (POS) Interface",
      "React / Modern JavaScript",
    ],
    challenge:
      "High-volume commercial kitchens suffer catastrophic operational loss when internet connectivity drops. Cloud-only POS systems freeze, losing order sync between prep lines, fryers, and front-of-house registers.",
    solution:
      "Architected a decentralized LAN-first synchronization engine. All terminals communicate over local multicast sockets, persisting tickets instantaneously and keeping screens in sync regardless of WAN status.",
    impact: [
      "100% operational uptime independent of commercial ISP outages.",
      "Sub-50ms ticket routing across kitchen prep stations.",
      "Ergonomic high-contrast UI tailored for frantic, high-heat kitchen environments.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
  {
    slug: "creator-affiliate-platform",
    title: "Creator & Affiliate Management Portal",
    tagline: "End-to-end creator monetization platform with automated multi-rail payouts and referral analytics.",
    category: "Full-Stack Web Architecture",
    year: "2026",
    role: "Full-Stack Architect & UI Designer",
    summary:
      "A complete creator monetization and referral infrastructure featuring multi-step onboarding, unique referral token management, multi-currency payout routing (PayPal, Wise, Bank Transfer), and real-time conversion dashboards.",
    videoSrc: "/videos/creator-platform.mp4",
    posterSrc: "/videos/posters/poster-creator-platform.jpg",
    aspectRatio: "video",
    featured: true,
    technologies: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Automated Payout Engine (PayPal / Wise)",
      "Dynamic Referral Attribution",
      "Interactive Step-by-Step UI",
    ],
    challenge:
      "Managing creator partnerships across diverse international payment rails with varying fee structures and currency requirements created friction in creator acquisition and payout reconciliation.",
    solution:
      "Designed a streamlined 5-step guided registration wizard that validates payment credentials in real-time, generates instantaneous trackable referral links, and surfaces transparent earnings analytics.",
    impact: [
      "Drop-off rates during creator onboarding lowered by over 40%.",
      "Automated payout calculations eliminating manual accounting discrepancies.",
      "Fully responsive, dark-mode-first aesthetic with micro-interaction feedback.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
  {
    slug: "zen-local-brand",
    title: "ZEN Local Brand — Apparel Identity & Creative Direction",
    tagline: "Distinctive streetwear capsule collection blending mythical illustration with kinetic brand cinema.",
    category: "Creative Direction & Fashion",
    year: "2025 — 2026",
    role: "Creative Director & Apparel Designer",
    summary:
      "Comprehensive creative direction for the ZEN Streetwear winter capsule. Designed original distressed equestrian embroidery illustrations, oversaw garment prototyping, and produced dynamic motion advertising campaigns.",
    videoSrc: "/videos/zen-brand.mp4",
    posterSrc: "/videos/posters/poster-zen-brand.jpg",
    aspectRatio: "portrait",
    featured: true,
    technologies: [
      "Creative Direction",
      "Digital Art & Textile Illustration",
      "Apparel Prototyping",
      "Motion Graphics & Video Editing",
      "Visual Storytelling",
    ],
    challenge:
      "Breaking through saturated streetwear markets demanded an unmistakable visual identity that merged raw underground graphics with high-production fashion editorial presentation.",
    solution:
      "Developed an organic, weathered illustration system applied across heavy-weight French terry hoodies, coupled with high-speed, rhythmically cut campaign films highlighting texture and silhouette.",
    impact: [
      "Sell-out seasonal drop driven by viral social video reach.",
      "Established iconic brand monogram and mythical equine illustration motifs.",
      "Praised for innovative balance between dark aesthetics and wearable form.",
    ],
    liveUrl: "https://instagram.com/zen.local.brand",
  },
  {
    slug: "house-burger-brand-system",
    title: "House Burger — Visual Identity & Digital UI",
    tagline: "Complete visual reinvention and digital customer touchpoints driving a verified 25% revenue surge.",
    category: "Brand Systems & UI Design",
    year: "2025",
    role: "Lead Digital Art Designer",
    summary:
      "Engineered an impactful visual art design language, customer ordering touchpoints, and commercial promotional collateral for House Burger, directly elevating brand equity and driving measurable financial returns.",
    videoSrc: "/videos/visual-campaign.mp4",
    posterSrc: "/videos/posters/poster-visual-campaign.jpg",
    aspectRatio: "portrait",
    featured: true,
    technologies: [
      "Digital Art Direction",
      "UI/UX Interface Prototyping",
      "Menu Architecture",
      "Commercial Advertising Systems",
      "Typography & Color Theory",
    ],
    challenge:
      "Legacy food-and-beverage visuals lacked appetite appeal and digital cohesion, resulting in slow ordering throughput and stagnant sales numbers.",
    solution:
      "Crafted vibrant, high-contrast digital art layouts, streamlined interactive digital menus for fast decision-making, and harmonized the visual presence across print and digital media.",
    impact: [
      "Documented 25% sales increase within the first two quarters of deployment.",
      "Customer checkout time reduced thanks to clean visual hierarchies.",
      "Consistent, recognizable brand language across the regional market.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
  {
    slug: "arduino-obstacle-navigation",
    title: "Assistive Haptic & Acoustic Obstacle Navigator",
    tagline: "Microcontroller-driven spatial awareness device engineered for visually impaired navigation.",
    category: "Embedded Hardware & Assistive Tech",
    year: "2019 — 2021",
    role: "Hardware & Firmware Engineer",
    summary:
      "An Arduino Uno-powered assistive obstacle detection device created to restore spatial confidence for visually impaired individuals. Integrates ultrasonic distance measurement with real-time acoustic tone frequency mapping.",
    videoSrc: "/videos/commercial-cinematic.mp4",
    posterSrc: "/videos/posters/poster-commercial-cinematic.jpg",
    aspectRatio: "portrait",
    featured: false,
    technologies: [
      "Arduino Uno",
      "C/C++ Embedded Firmware",
      "Ultrasonic Transducers",
      "Analog & Digital Circuitry",
      "Haptic & Acoustic Frequency Modulation",
    ],
    challenge:
      "Traditional mobility canes cannot detect suspended hazards (tree branches, awnings, open windows) or provide early distance warnings in crowded public thoroughfares.",
    solution:
      "Engineered a lightweight sensor module with a calibrated transducer array that translates real-time object proximity into variable acoustic tone frequencies and haptic pulses.",
    impact: [
      "Real-time obstacle detection up to 4 meters with under 20ms response time.",
      "Hands-on development of circuit schematics, sensor filtering, and firmware safety logic.",
      "Sparked lifelong passion for bridging hardware sensors with artificial intelligence.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
];
