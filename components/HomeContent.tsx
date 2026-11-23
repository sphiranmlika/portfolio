"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Works } from "@/components/sections/Works";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { Contact } from "@/components/sections/Contact";

export function HomeContent() {
  const [aboutTab, setAboutTab] = useState<"about" | "skills" | "cert">("about");

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#f5ebe0]">
      <Navbar />
      <main className="flex-1">
        <Hero onSelectTab={(tab) => setAboutTab(tab)} />
        <TechStackMarquee />
        <About activeTab={aboutTab} onTabChange={(tab) => setAboutTab(tab)} />
        <Experience />
        <Works />
        <SkillsSection />
        <CertificationsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
