export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  contact: ContactInfo;
  careerObjective: string;
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  workExperience: Experience[];
  resumeUrl: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedIn: string;
  github: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  imageUrls?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    details: string[];
}