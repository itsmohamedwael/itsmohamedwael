export interface Profile {
  name: string;
  brandName: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  cvPdfPath: string;
  avatarPath: string;
  logoPath: string;
  socials: {
    linkedin: string;
    instagram: string;
    github: string;
    website: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface SkillCategory {
  title: string;
  tag: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Specialized", "Core"
    highlight?: boolean;
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Engineering" | "Design" | "Hardware" | "Education";
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  videoSrc: string;
  posterSrc: string;
  aspectRatio: "video" | "portrait" | "square";
  featured: boolean;
  technologies: string[];
  challenge: string;
  solution: string;
  impact: string[];
  liveUrl?: string;
  githubUrl?: string;
}
