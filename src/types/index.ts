export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Generative AI' | 'Full-Stack & AI' | 'Machine Learning' | 'Web & E-Commerce' | 'Computer Vision & Tools';
  technologies: string[];
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  architectureOverview: string;
  architectureSteps?: {
    step: string;
    description: string;
    tech: string;
  }[];
  githubUrl: string;
  liveDemoUrl?: string;
  highlightBadge?: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Practical Experience"
    icon?: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  type: 'experience' | 'education';
  organization: string;
  location: string;
  role: string;
  duration: string;
  cgpaOrScore?: string;
  responsibilities: string[];
  technologies: string[];
  keyOutcome: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  category: 'frontend' | 'gateway' | 'processor' | 'retrieval' | 'llm' | 'output';
  details: string[];
  codeSnippet?: string;
}
