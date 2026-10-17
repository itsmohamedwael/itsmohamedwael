import { Project } from "../types";

export const projectsData: Project[] = [
  {
    slug: "clowdy-ai-assistant",
    title: "Clowdy",
    subtitle: "Autonomous Windows Desktop AI Companion",
    category: "AI Engineering & Systems Architecture",
    year: "2026 — 2027",
    role: "Lead AI Engineer & System Architect",
    summary:
      "A desktop-native multimodal intelligence engine built in Python. Features real-time screen OCR perception, local vector memory graph, conversational voice interaction, and autonomous OS task execution.",
    videoSrc: "/videos/logo-motion.mp4",
    posterSrc: "/videos/posters/poster-logo-motion.jpg",
    technologies: [
      "Python",
      "Gemini Multimodal API",
      "Computer Vision / OCR",
      "Speech Synthesis (TTS)",
      "Win32 API Automation",
      "Vector Memory Index",
      "Anomaly Detection Shield",
    ],
    metrics: [
      { label: "Memory Retention", value: "100% Local" },
      { label: "Execution Latency", value: "< 250ms" },
      { label: "Architecture", value: "Native Daemon" },
    ],
    overview:
      "Clowdy bridges multimodal foundation models directly with local operating system state. Unlike cloud chatbots locked inside browser tabs, Clowdy observes active application windows, parses visual buffers through OCR, and invokes native Windows API routines to execute desktop workflows automatically.",
    challenge:
      "Bridging heavy visual language models with real-time desktop responsiveness while preserving strict local user privacy without routing raw desktop buffers to third-party log servers.",
    solution:
      "Architected a lightweight Python daemon orchestrating win32 buffer captures, local vector embeddings, and an asynchronous pipeline linking Gemini multimodal endpoints with local defensive sanity checks.",
    impact: [
      "100% private local associative memory preventing sensitive desktop data leakage.",
      "Multi-step desktop workflows triggered via natural conversational speech.",
      "Proactive anomaly detection module monitoring background system processes.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
    githubUrl: "https://github.com/itsmohamedwael",
  },
  {
    slug: "oryveo-restaurant-suite",
    title: "ORYVEO",
    subtitle: "Intelligent Offline Kitchen & POS Suite",
    category: "Enterprise Systems & Offline Architecture",
    year: "2026",
    role: "Full-Stack Engineer & Systems Architect",
    summary:
      "An offline-first commercial kitchen coordination engine. Eliminates internet dependency through local peer-to-peer multicast sync, instant Kitchen Display routing, and ESC/POS thermal printing.",
    videoSrc: "/videos/oryveo-kitchen.mp4",
    posterSrc: "/videos/posters/poster-oryveo-kitchen.jpg",
    technologies: [
      "Offline-First Distributed Sync",
      "Local Multicast WebSockets",
      "Kitchen Display System (KDS)",
      "ESC/POS Thermal Protocol",
      "High-Throughput POS Interface",
      "React / Modern JavaScript",
    ],
    metrics: [
      { label: "WAN Dependency", value: "0% (Fully Offline)" },
      { label: "LAN Ticket Dispatch", value: "< 40ms" },
      { label: "Uptime In Outages", value: "100%" },
    ],
    overview:
      "ORYVEO was engineered to solve the most critical point of failure in commercial dining: internet outages causing point-of-sale freezes and ticket loss between prep stations.",
    challenge:
      "Maintaining atomic order consistency and station ticket state across multiple kitchen stations without a remote cloud coordinator or reliable external ISP.",
    solution:
      "Designed a fault-tolerant local mesh architecture where kitchen displays, ordering tablets, and thermal printers communicate over peer-to-peer local network sockets with automatic ticket conflict resolution.",
    impact: [
      "Zero downtime during commercial internet outages.",
      "High-contrast ergonomic UI designed specifically for extreme, high-stress kitchen environments.",
      "Instant multi-station ticket synchronization across prep lines.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
  {
    slug: "creator-affiliate-platform",
    title: "Creator Platform",
    subtitle: "Monetization & Multi-Rail Routing Engine",
    category: "Full-Stack Web Architecture & Fintech",
    year: "2026",
    role: "Full-Stack Architect & UI Designer",
    summary:
      "End-to-end creator monetization infrastructure with unique affiliate token tracking, multi-tier commission logic, and multi-rail automated payouts across PayPal, Wise, and ACH.",
    videoSrc: "/videos/creator-platform.mp4",
    posterSrc: "/videos/posters/poster-creator-platform.jpg",
    technologies: [
      "Next.js App Router",
      "TypeScript",
      "Multi-Rail Payout Routing",
      "Referral Token Cryptography",
      "Real-Time Conversion Analytics",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Payout Channels", value: "3 Global Rails" },
      { label: "Conversion Tracking", value: "Sub-second" },
      { label: "Onboarding Flow", value: "4-Step Adaptive" },
    ],
    overview:
      "A unified portal giving digital creators real-time transparency over their referral conversions, revenue analytics, and automated withdrawal schedules across international payment rails.",
    challenge:
      "Designing a frictionless multi-step creator onboarding experience while maintaining strict KYC compliance and zero-lag financial ledger updates.",
    solution:
      "Engineered an event-driven ledger with optimistic UI updates and automated webhook verification across PayPal, Wise, and bank rails.",
    impact: [
      "Streamlined affiliate creator onboarding to under 90 seconds.",
      "Automated multi-currency payout processing eliminating manual spreadsheets.",
      "Live conversion rate telemetry and fraud-resistant referral token verification.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
  {
    slug: "zen-brand-identity",
    title: "Zen Identity",
    subtitle: "Minimalist Brand Architecture & Visual System",
    category: "Brand Architecture & Editorial Design",
    year: "2025 — 2026",
    role: "Creative Director & Visual Designer",
    summary:
      "A comprehensive visual identity, typographic guideline, and motion design language rooted in Japanese minimalism and architectural restraint.",
    videoSrc: "/videos/brand-identity.mp4",
    posterSrc: "/videos/posters/poster-brand-identity.jpg",
    technologies: [
      "Typographic Hierarchy",
      "Editorial Grid Systems",
      "Motion Design & Micro-Interactions",
      "Vector Identity & Monogram",
      "Design Token Architecture",
    ],
    metrics: [
      { label: "Contrast Ratio", value: "AAA WCAG" },
      { label: "Visual Restraint", value: "Strict Minimalist" },
      { label: "Artifacts", value: "Complete Identity Manual" },
    ],
    overview:
      "Zen Identity explores how extreme reduction and deliberate negative space create authority in digital and printed branding.",
    challenge:
      "Stripping away unnecessary visual ornamentation while maintaining immediate memorability and distinct brand character.",
    solution:
      "Constructed a high-contrast black-and-white grid system paired with subtle brass accents and kinetic easing curves.",
    impact: [
      "Unified brand voice across digital touchpoints, typography, and motion.",
      "Standardized design token architecture implemented across web interfaces.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
  {
    slug: "arduino-obstacle-navigator",
    title: "Obstacle Navigator",
    subtitle: "Autonomous Ultrasonic Robotics Guidance",
    category: "Embedded Systems & Hardware Kinematics",
    year: "2024 — 2025",
    role: "Embedded Hardware & Firmware Engineer",
    summary:
      "An autonomous two-wheel robotics platform featuring real-time ultrasonic spatial sonar scanning, dynamic obstacle avoidance algorithms, and dual H-bridge motor kinematics.",
    videoSrc: "/videos/arduino-navigator.mp4",
    posterSrc: "/videos/posters/poster-arduino-navigator.jpg",
    technologies: [
      "C++ / Embedded C",
      "Arduino Microcontroller",
      "Ultrasonic Sensor Sonar",
      "Servo Spatial Sweeper",
      "L298N H-Bridge Motor Driver",
      "Real-Time Proximity Loops",
    ],
    metrics: [
      { label: "Sonar Scan Sweep", value: "180° Panoramic" },
      { label: "Obstacle Margin", value: "25cm Safe Radius" },
      { label: "Evasion Latency", value: "< 15ms" },
    ],
    overview:
      "An autonomous mobile robotics unit engineered to navigate unknown spatial environments without external control signals or pre-mapped GPS pathways.",
    challenge:
      "Executing rapid obstacle identification, angle calculation, and motor PWM adjustment within memory-constrained 8-bit AVR microcontrollers.",
    solution:
      "Programmed a high-efficiency scanning algorithm that sweeps a servo-mounted ultrasonic sensor to identify the widest open clearance corridor before adjusting differential motor drive.",
    impact: [
      "Continuous autonomous locomotion in densely cluttered spaces.",
      "Hardware-level motor braking preventing physical collisions at maximum speed.",
    ],
    liveUrl: "https://itsmohamedwael.info/",
  },
];
