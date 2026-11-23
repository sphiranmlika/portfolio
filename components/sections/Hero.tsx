"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { personalInfo } from "@/data/personal";

const positions = [
  "( Software Engineer )",
  "( Mobile Developer )",
  "( Full Stack Developer )",
  "( Frontend Developer )",
  "( AI Solutions Engineer )",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % positions.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-[#f5ebe0] px-6 sm:px-8 pt-24 pb-16 overflow-hidden"
    >
      {/* Central Hero Heading */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10 space-y-3 sm:space-y-4">
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

          {/* Expressive Cursive Text */}
          <div className="relative inline-flex items-center justify-center">
            <span className="cursive-text text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.75] py-2 text-[#f5ebe0]">
              portfolio
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: CV Download & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:pt-6"
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

        {/* Rotating Job Titles positioned below buttons matching judiemosinabre.dev */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="pt-6 sm:pt-8 min-h-[52px] flex items-center justify-center"
        >
          <span
            key={titleIndex}
            className="fade normal-text text-lg sm:text-xl md:text-2xl text-[#f5ebe0]/90 tracking-[2px] select-none inline-block"
          >
            {positions[titleIndex]}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
