export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}