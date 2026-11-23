export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  tagline?: string;
  shortBio: string;
  fullBio: string[];
  developmentPhilosophy: {
    title: string;
    description: string;
  }[];
  goals: string[];
  email: string;
  phone: string;
  location: string;
  status: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  cvUrl: string;
  localCvUrl?: string;
}
