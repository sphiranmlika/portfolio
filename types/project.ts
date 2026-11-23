export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category:
    | "Mobile Development"
    | "Frontend Development"
    | "Full-Stack Development"
    | "Data & AI"
    | "Web & IT Systems";
  featured: boolean;
  status?: "Completed" | "Ongoing" | "Featured";
  image: string;
  gallery?: string[];
  technologies: string[];
  problemStatement?: string;
  objectives?: string[];
  features: string[];
  architecture?: string;
  challengesAndSolutions?: {
    challenge: string;
    solution: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  completedAt?: string;
}
