import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Core Engineering",
    tag: "ENGINEERING",
    description:
      "Low-level algorithmic thinking, systems programming, and high-level application development.",
    skills: [
      { name: "C++", level: "Advanced", highlight: true, tags: ["OOP", "Data Structures", "Systems"] },
      { name: "Python", level: "Advanced", highlight: true, tags: ["AI Agents", "Automation", "OpenCV"] },
      { name: "Java", level: "Proficient", tags: ["OOP", "Enterprise Architecture"] },
      { name: "TypeScript / JS", level: "Proficient", highlight: true, tags: ["Modern Web", "React", "Next.js"] },
      { name: "C / Embedded C", level: "Proficient", tags: ["Microcontrollers", "Firmware"] },
      { name: "Data Structures & Algorithms", level: "Core", tags: ["BUE Computer Engineering"] },
    ],
  },
  {
    title: "Artificial Intelligence & Automation",
    tag: "AI & INTELLIGENCE",
    description:
      "Autonomous agent execution, multimodal APIs, desktop automation, and conversational voice engines.",
    skills: [
      { name: "Gemini Multimodal APIs", level: "Advanced", highlight: true, tags: ["Vision", "LLM", "Prompt Ops"] },
      { name: "Desktop Automation Daemon", level: "Specialized", highlight: true, tags: ["Windows API", "Clowdy Core"] },
      { name: "Real-Time Voice Interaction", level: "Specialized", tags: ["Speech-to-Text", "TTS Pipeline"] },
      { name: "Computer Vision & Screen Analysis", level: "Specialized", tags: ["Screen OCR", "Context Perception"] },
      { name: "Local Memory & Vector Retrieval", level: "Proficient", tags: ["Persistent State", "Context Windows"] },
      { name: "Autonomous Task Execution", level: "Specialized", highlight: true, tags: ["File Ops", "System Control"] },
    ],
  },
  {
    title: "Web Architecture & Interface Motion",
    tag: "WEB & MOTION",
    description:
      "Modern server-driven web ecosystems, micro-interactions, and 60fps kinetic design systems.",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", highlight: true, tags: ["RSC", "SSR", "SEO"] },
      { name: "React", level: "Advanced", highlight: true, tags: ["Hooks", "State Architecture"] },
      { name: "Motion for React", level: "Advanced", highlight: true, tags: ["Spring Kinetics", "useScroll", "Transforms"] },
      { name: "Tailwind CSS", level: "Advanced", tags: ["Design Systems", "Fluid Clamps"] },
      { name: "Responsive Engineering", level: "Advanced", tags: ["Mobile-First", "Container Queries"] },
      { name: "Web Accessibility (WCAG 2.1)", level: "Core", tags: ["Keyboard Nav", "ARIA", "Reduced Motion"] },
    ],
  },
  {
    title: "Hardware, Circuits & Embedded Systems",
    tag: "PHYSICAL COMPUTING",
    description:
      "Hardware-software bridging, assistive sensor networks, and circuit board prototyping.",
    skills: [
      { name: "Arduino Uno", level: "Specialized", highlight: true, tags: ["Assistive Devices", "Real-Time I/O"] },
      { name: "Electronic Materials & Circuits", level: "Core", tags: ["BUE Engineering Coursework"] },
      { name: "Digital Systems & Logic Gates", level: "Certified", tags: ["Digital Design Diploma"] },
      { name: "Ultrasonic & IoT Sensors", level: "Specialized", tags: ["Distance Feedback", "Obstacle Detection"] },
      { name: "Circuit Prototyping & Testing", level: "Proficient", tags: ["Breadboarding", "Oscilloscopes"] },
    ],
  },
  {
    title: "Digital Art & Creative Direction",
    tag: "VISUAL ARTS",
    description:
      "Brand identity systems, motion graphics, commercial advertising, and multidisciplinary arts.",
    skills: [
      { name: "Digital Art Design", level: "3+ Years", highlight: true, tags: ["Creative Direction", "House Burger"] },
      { name: "Brand & Logo Identity", level: "3+ Years", highlight: true, tags: ["MWAEL", "Typography", "Geometry"] },
      { name: "Motion Graphic Design", level: "Proficient", tags: ["Kinetic Brand Reveals", "Video Production"] },
      { name: "Apparel & Textile Graphics", level: "Specialized", tags: ["Zen Local Brand", "Streetwear Capsule"] },
      { name: "Audio Production & Synthesis", level: "Creative", tags: ["Sound Design", "Audio Production"] },
      { name: "Piano Performance", level: "Artistic", tags: ["Classical & Contemporary Harmony"] },
    ],
  },
  {
    title: "Upcoming: Proactive Cybersecurity",
    tag: "DEFENSIVE SECURITY",
    description:
      "Next-generation defensive mechanisms integrated into intelligent desktop environments.",
    skills: [
      { name: "Defensive Security Systems", level: "In Development", highlight: true, tags: ["Clowdy Shield"] },
      { name: "Vulnerability Identification", level: "Active Focus", tags: ["Threat Modeling", "Audit"] },
      { name: "Proactive Threat Detection", level: "Active Focus", tags: ["Host Monitoring", "Safe Operations"] },
      { name: "Secure Desktop Operations", level: "Active Focus", tags: ["Process Sandboxing", "Access Control"] },
    ],
  },
  {
    title: "Analytical & Professional Disciplines",
    tag: "ANALYTICS & LEADERSHIP",
    description:
      "Methodical research, data interpretation, technical authorship, and team orchestration.",
    skills: [
      { name: "Academic Research & Methodology", level: "Core", tags: ["Peer Collaboration", "BUE"] },
      { name: "Technical Report Writing", level: "Proficient", tags: ["Engineering Specifications"] },
      { name: "Data Analysis & Synthesis", level: "Proficient", tags: ["Telemetry", "Metrics Interpretation"] },
      { name: "Team Leadership & Presentations", level: "Demonstrated", tags: ["Peer Reviews", "Mentorship"] },
      { name: "Critical Thinking & Problem-Solving", level: "Core", tags: ["First-Principles Reasoning"] },
    ],
  },
];
