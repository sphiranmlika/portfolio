export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Works", href: "/#works" },
  { label: "Contact", href: "/#contact" },
];

export const quickNavItems = [
  { label: "About Me", targetId: "about-bio" },
  { label: "Skills", targetId: "about-skills" },
  { label: "Certifications", targetId: "about-cert" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Works", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];
