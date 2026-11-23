"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="hero relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center items-center text-[#f5ebe0] px-4 sm:px-8 pt-20 pb-12 overflow-hidden"
    >
      {/* Central Hero Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Editorial Display Heading - lowercase and refined smaller size */}
          <h1 className="heading text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[2px] sm:tracking-[4px] font-light text-[#f5ebe0] lowercase leading-none">
            welcome to my
          </h1>

          {/* Expressive Cursive Text - refined smaller size with responsive bounds */}
          <div className="relative inline-flex items-center justify-center mt-1 sm:mt-2 mb-2 sm:mb-3 max-w-full">
            <span className="cursive-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] py-2 text-[#f5ebe0] break-words">
              portfolio
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: CV Download & Social Links - space between portfolio & buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10"
        >
          {/* Download CV */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 bg-white/[0.04] text-[#f5ebe0] hover:bg-white/[0.09] hover:border-white/40 transition-all duration-300 text-[11px] sm:text-xs md:text-sm font-sans tracking-[1.5px] uppercase"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7a0c12]" />
            <span>Unduh CV</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#f5ebe0]/80 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#f5ebe0]/80 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Rotating Job Titles - lowered down as requested: mt-14 sm:mt-18 md:mt-24 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mt-14 sm:mt-18 md:mt-24 min-h-[48px] py-1 flex items-center justify-center relative w-full px-2"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="normal-text text-sm sm:text-base md:text-lg lg:text-xl text-[#f5ebe0]/90 tracking-[1.5px] sm:tracking-[2px] select-none inline-block text-center leading-normal pb-1 max-w-full"
            >
              {positions[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
