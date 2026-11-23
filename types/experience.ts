export interface Experience {
  id: string;
  organization: string;
  role: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  location: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface OrganizationRole {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
}
