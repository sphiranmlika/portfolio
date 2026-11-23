import React from "react";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  showResume?: boolean;
}

export function SocialLinks({ className, showResume = true }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={personalInfo.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF4ED] text-maroon hover:bg-burgundy hover:text-cream-light transition-all border border-[#DCC3AA] shadow-2xs hover:scale-105 active:scale-95"
        aria-label="GitHub Profile"
      >
        <GithubIcon className="w-4 h-4" />
      </a>
      <a
        href={personalInfo.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF4ED] text-maroon hover:bg-burgundy hover:text-cream-light transition-all border border-[#DCC3AA] shadow-2xs hover:scale-105 active:scale-95"
        aria-label="LinkedIn Profile"
      >
        <LinkedinIcon className="w-4 h-4" />
      </a>
      <a
        href={personalInfo.socials.email}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF4ED] text-maroon hover:bg-burgundy hover:text-cream-light transition-all border border-[#DCC3AA] shadow-2xs hover:scale-105 active:scale-95"
        aria-label="Send Email"
      >
        <Mail className="w-4 h-4" />
      </a>
      {showResume && (
        <a
          href={personalInfo.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 h-10 px-4 rounded-full bg-[#FAF4ED] text-maroon hover:bg-burgundy hover:text-cream-light transition-all border border-[#DCC3AA] shadow-2xs text-xs font-medium hover:scale-105 active:scale-95"
          aria-label="View Resume / CV"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>CV</span>
        </a>
      )}
    </div>
  );
}
