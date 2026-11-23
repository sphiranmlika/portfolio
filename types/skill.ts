export interface SkillItem {
  name: string;
  iconName?: string;
  iconUrl?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: SkillItem[];
}
