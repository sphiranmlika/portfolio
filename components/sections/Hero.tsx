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
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-1.5 sm:gap-3 md:gap-4 w-full"
        >
          {/* Editorial Display Heading - diperkecil sedikit */}
          <h1 className="heading text-[2.6rem] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.6rem] xl:text-[6.8rem] tracking-[2.5px] sm:tracking-[3.5px] font-light text-[#f5ebe0] lowercase leading-none select-none">
            welcome to my
          </h1>

          {/* Expressive Cursive Text - diperkecil sedikit */}
          <div className="relative inline-flex items-center justify-center max-w-full">
            <span className="cursive-text text-[3.6rem] sm:text-[4.8rem] md:text-[6.2rem] lg:text-[7.4rem] xl:text-[8.5rem] leading-[0.75] py-1 text-[#f5ebe0] break-words select-none">
              portfolio
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: CV Download & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-12 md:mt-14"
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

        {/* Rotating Job Titles - persis ukuran font & jarak judiemosinabre */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="mt-8 sm:mt-12 md:mt-14 min-h-[48px] py-1 flex items-center justify-center relative w-full px-2"
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
              className="normal-text text-[1.25rem] sm:text-[1.5rem] md:text-[1.8rem] xl:text-[1.9rem] text-[#f5ebe0]/90 tracking-[2px] select-none inline-block text-center leading-normal pb-1 max-w-full"
            >
              {positions[titleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
