"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { personalInfo } from "@/data/personal";
import { footerQuickLinks } from "@/data/navigation";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="w-full bg-[#050505] border-t border-white/[0.08] mt-auto py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
            {/* Brand Logo & Title */}
            <div className="space-y-2 text-center md:text-left">
              <Link href="/" className="inline-block group">
                <span className="font-heading font-light text-2xl tracking-[3px] lowercase text-[#f5ebe0] group-hover:text-white transition-colors">
                  saphiranurmalika
                </span>
              </Link>
              <p className="normal-text text-xs text-[#f5ebe0]/60 tracking-[0.5px]">
                {personalInfo.title} · Parepare, Indonesia
              </p>
            </div>

            {/* Quick Links */}
            <ul className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans tracking-[1.5px] uppercase text-[#f5ebe0]/70">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#f5ebe0]/80 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#f5ebe0]/80 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#f5ebe0]/80 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5ebe0]/50 font-sans tracking-[1px]">
            <p>© 2026 {personalInfo.name}. All rights reserved.</p>
            <p className="text-[11px] text-[#f5ebe0]/40">
              Editorial Developer Portfolio · Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button matching reference (#scroll-to-top) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-[#050505]/80 backdrop-blur-md text-[#f5ebe0] hover:text-white hover:border-white/40 hover:bg-white/[0.1] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#f5ebe0]" />
        </button>
      )}
    </>
  );
}
