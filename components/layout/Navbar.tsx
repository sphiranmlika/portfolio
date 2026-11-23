"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (pathname === "/") {
        const sectionIds = ["home", "about", "experience", "works", "contact"];
        let currentSection = "home";

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // 150px threshold from top of viewport
            if (rect.top <= 160) {
              currentSection = id;
            }
          }
        }
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      setActiveSection(targetId);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "/#home")}
          className="group inline-flex items-center gap-2"
        >
          <span className="font-heading font-light text-2xl sm:text-3xl tracking-[3px] lowercase text-[#f5ebe0] opacity-90 group-hover:opacity-100 transition-opacity">
            saphiranurmalika
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex items-center gap-7 lg:gap-9 text-sm font-sans tracking-[1.5px] uppercase">
            {navItems.map((item) => {
              const targetId = item.href.replace("/#", "");
              const isActive = pathname === "/" && activeSection === targetId;

              return (
                <li
                  key={item.label}
                  className={`underline-hover ${isActive ? "active" : ""}`}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`transition-colors duration-300 py-1 ${
                      isActive
                        ? "text-[#ffffff] font-medium"
                        : "text-[#f5ebe0]/70 hover:text-[#ffffff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger Button (Mobile only) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-[1.5px] bg-[#f5ebe0] transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-[#f5ebe0] transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-[#f5ebe0] transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#050505]/98 backdrop-blur-xl border-b border-white/[0.08] px-8 py-8 transition-all">
          <ul className="flex flex-col gap-6 text-base font-sans tracking-[2px] uppercase">
            {navItems.map((item) => {
              const targetId = item.href.replace("/#", "");
              const isActive = pathname === "/" && activeSection === targetId;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-1 transition-colors ${
                      isActive
                        ? "text-[#ffffff] font-medium pl-2 border-l border-[#7a0c12]"
                        : "text-[#f5ebe0]/70 hover:text-[#ffffff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
