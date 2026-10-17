export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  videoSrc: string;
  posterSrc: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  domain: string;
  tagline: string;
  items: {
    name: string;
    level: "Advanced" | "Specialist" | "Core";
    category: "Languages" | "AI & Vision" | "Frameworks" | "Systems & Cloud" | "Design & Creative";
  }[];
}

export interface ExperienceEntry {
  period: string;
  role: string;
  institution: string;
  location: string;
  type: "academic" | "engineering" | "leadership";
  description: string;
  highlights: string[];
  stack: string[];
}
