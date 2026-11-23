"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, User, Cpu, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { personalInfo } from "@/data/personal";

interface HeroProps {
  onSelectTab?: (tab: "about" | "skills" | "cert") => void;
}

export function Hero({ onSelectTab }: HeroProps) {
  const handleQuickNav = (tab: "about" | "skills" | "cert", sectionId: string) => {
    if (onSelectTab) {
      onSelectTab(tab);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-[#f5ebe0] px-6 sm:px-8 pt-24 pb-16 overflow-hidden"
    >
      {/* Central Hero Heading */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10 space-y-2 sm:space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Editorial Display Heading */}
          <h1 className="heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[3px] font-light text-[#f5ebe0] uppercase leading-none">
            welcome to my
          </h1>

          {/* Expressive Cursive Text with Year Superscript */}
          <div className="relative inline-flex items-center justify-center">
            <span className="cursive-text text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.75] py-2 text-[#f5ebe0]">
              portfolio
            </span>
          </div>
        </motion.div>

        {/* Professional Title Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="pt-4"
        >
          <p className="normal-text text-lg sm:text-xl md:text-2xl text-[#f5ebe0]/90 tracking-[2px]">
            ( {personalInfo.title} )
          </p>
        </motion.div>

        {/* Action Buttons: CV Download & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 pt-6"
        >
          {/* Download CV */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] text-[#f5ebe0] hover:bg-white/[0.09] hover:border-white/40 transition-all duration-300 text-xs sm:text-sm font-sans tracking-[1.5px] uppercase"
          >
            <Download className="w-4 h-4 text-[#7a0c12]" />
            <span>Unduh CV</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#f5ebe0]/80 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#f5ebe0]/80 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* 3 Quick Navigation Actions: About Me, Skills, Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="pt-8"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <button
              type="button"
              onClick={() => handleQuickNav("about", "about")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm tracking-[1px] text-[#f5ebe0]/80 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#7a0c12]" />
              <span>About Me</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickNav("skills", "about")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm tracking-[1px] text-[#f5ebe0]/80 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 text-[#7a0c12]" />
              <span>Skills</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickNav("cert", "about")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm tracking-[1px] text-[#f5ebe0]/80 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-[#7a0c12]" />
              <span>Certifications</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors cursor-pointer"
        onClick={() => {
          const aboutEl = document.getElementById("about");
          if (aboutEl) aboutEl.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[11px] tracking-[2px] uppercase font-sans">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}
