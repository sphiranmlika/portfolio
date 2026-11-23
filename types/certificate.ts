export type CertificateCategory =
  | "Programming & Software Development"
  | "Data Science & Artificial Intelligence"
  | "UI/UX Design"
  | "Cloud Computing & DevOps"
  | "Professional Development"
  | "Other Certifications";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  issueDate: string;
  credentialId?: string;
  image?: string;
  credentialUrl?: string;
  fileUrl?: string;
  description?: string;
  featured?: boolean;
}
