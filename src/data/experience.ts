import { ExperienceItem } from "@/types/portfolio";

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "clowdy-ai",
    role: "AI Software Engineer (Independent Project)",
    organization: "Clowdy Autonomous Systems",
    location: "Remote · Egypt",
    period: "Mar 2026 — Sep 2027",
    type: "Engineering",
    summary:
      "Architected and implemented Clowdy, a sophisticated Python-based desktop AI assistant for Windows delivering real-time multimodal intelligence, autonomous system workflows, and custom interactive interface.",
    achievements: [
      "Integrated Gemini multimodal APIs for simultaneous audio-visual comprehension and zero-latency context retrieval.",
      "Engineered real-time desktop screen analysis and autonomous application, file, reminder, calendar, and task execution engines.",
      "Built resilient local memory graph and proactive notification daemon keeping personal workflows seamlessly synchronized.",
      "Conceived ongoing defensive security layer for Clowdy to detect OS vulnerabilities and proactively isolate malicious threats.",
    ],
    technologies: ["Python", "Gemini API", "OpenCV", "Windows Win32 API", "Voice Synthesis", "Vector Memory", "Tk/Modern GUI"],
  },
  {
    id: "bue-scholar",
    role: "Computer Engineering Scholar & Student Leader",
    organization: "The British University In Egypt (BUE)",
    location: "El Sherouk City, Suez Desert Road, Cairo, Egypt",
    period: "Sep 2025 — Jun 2028",
    type: "Education",
    summary:
      "Pursuing Bachelor of Science in Computer Engineering with academic concentrations in electronic materials, electric circuits, digital logic design, algorithms, and technical computing.",
    achievements: [
      "Mastered low-level circuit analysis, logic gates synthesis, and electronic properties across rigorous lab coursework.",
      "Spearheaded multi-student engineering capstones, presentations, and technical documentation earning high mentor recognition.",
      "Cultivated deep mathematical and algorithmic foundations applied directly to AI and hardware-software systems.",
    ],
    technologies: ["C++", "Circuit Theory", "Digital Logic", "Data Structures", "Engineering Mathematics", "Physics"],
  },
  {
    id: "house-burger",
    role: "Digital Art & UI/UX Designer",
    organization: "House Burger",
    location: "Ismailia, Egypt",
    period: "Jan 2025 — Aug 2025",
    type: "Design",
    summary:
      "Led digital visual identity transformation, customer-facing touchpoint design, and commercial promotional assets across retail and digital channels.",
    achievements: [
      "Engineered cohesive visual art design language that fueled a documented 25% surge in retail sales.",
      "Designed frictionless digital ordering interfaces and interactive displays, significantly elevating consumer engagement.",
      "Standardized multi-channel brand assets across outdoor billboards, social campaigns, and on-premise collateral.",
    ],
    technologies: ["Digital Art Design", "UI/UX Prototyping", "Visual Identity", "Typography", "Commercial Advertising"],
  },
  {
    id: "zen-local",
    role: "Creative Director & Apparel Designer",
    organization: "Zen Local Brand",
    location: "Egypt",
    period: "2025 — 2026",
    type: "Design",
    summary:
      "Conceptualized and directed streetwear apparel collection, combining bespoke distressed embroidery illustrations with high-fashion kinetic campaigns.",
    achievements: [
      "Directed seasonal launch campaigns and motion promotional materials spotlighting the Comino and Winter collections.",
      "Authored custom equine and mythical digital artworks adapted for premium heavy-weight streetwear garments.",
      "Coordinated production prototyping, textile graphics, and dynamic visual narrative across social media.",
    ],
    technologies: ["Creative Direction", "Apparel Design", "Digital Illustration", "Motion Graphics", "Video Production"],
  },
  {
    id: "arduino-assistive",
    role: "Assistive Device Hardware Developer",
    organization: "Self-Initiated Assistive Tech Initiative",
    location: "Ismailia, Egypt",
    period: "May 2019 — May 2021",
    type: "Hardware",
    summary:
      "Engineered an Arduino Uno-based smart obstacle avoidance and spatial navigation system for visually impaired individuals.",
    achievements: [
      "Integrated ultrasonic distance transducers with microsecond response loops to detect walls, drop-offs, and dynamic obstacles.",
      "Designed custom printed/breadboard circuits with acoustic tone modulation mapping directly to obstacle proximity.",
      "Conducted real-world navigational trials demonstrating improved user confidence and collision avoidance.",
    ],
    technologies: ["Arduino Uno", "C/C++ Embedded", "Ultrasonic Sensors", "Electronic Circuits", "Haptic/Audio Feedback"],
  },
  {
    id: "liverpool-school",
    role: "Preparatory High School Scholar (Honors)",
    organization: "Liverpool Language School",
    location: "Badr City, Cairo, Egypt",
    period: "2023 — 2025",
    type: "Education",
    summary:
      "Completed rigorous pre-engineering secondary curriculum with distinguished honors.",
    achievements: [
      "Graduated with Honors achieving cumulative GPA of 3.8 / 4.0.",
      "Recipient of C++ Programming Training Certification and Digital Design Diploma.",
    ],
    technologies: ["Advanced Mathematics", "Physics", "Computer Science", "English Language Proficiency"],
  },
];
