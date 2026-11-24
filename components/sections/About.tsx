"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Award } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { certificates } from "@/data/certificates";

interface AboutProps {
  activeTab?: "about" | "skills" | "cert";
  onTabChange?: (tab: "about" | "skills" | "cert") => void;
}

export function About({ activeTab: controlledTab, onTabChange }: AboutProps) {
  const [internalTab, setInternalTab] = useState<"about" | "skills" | "cert">("about");
  const currentTab = controlledTab ?? internalTab;
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleTabClick = (tab: "about" | "skills" | "cert") => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      setInternalTab(tab);
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Editorial Section Heading */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-3 sm:gap-5 justify-center flex-wrap">
          <span>about</span>
          <span className="cursive-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5ebe0] lowercase">
            me
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: 3D Flip Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className={`card-flip-wrapper w-full max-w-xs sm:max-w-sm aspect-[4/5] cursor-pointer ${
              isFlipped ? "is-flipped" : ""
            }`}
            onClick={() => setIsFlipped((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsFlipped((prev) => !prev);
              }
            }}
            aria-label="Kartu profil interaktif, klik untuk membalik"
          >
            <div className="card-flip-inner relative w-full h-full">
              {/* Front Face: Flip Pertama (Foto 1 - Portrait Selfie HD) */}
              <div className="card-face absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] select-none shadow-2xl">
                <Image
                  src="/images/profile/portrait.webp"
                  alt={`Potret ${personalInfo.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  unoptimized
                />
              </div>

              {/* Back Face: Flip Kedua (Foto 2 - Sunset Outdoor HD) */}
              <div className="card-face card-back absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0a0a0a] select-none shadow-2xl">
                <Image
                  src="/images/profile/portrait-sunset.webp"
                  alt={`${personalInfo.name} Sunset`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Content Container */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Enhanced Nav Buttons Container */}
          <div className="about-nav-container inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-8 w-fit">
            <button
              type="button"
              onClick={() => handleTabClick("about")}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${currentTab === "about"
                ? "bg-white/[0.09] text-white font-medium shadow-sm"
                : "text-[#f5ebe0]/50 hover:text-[#f5ebe0] hover:bg-white/[0.04]"
                }`}
            >
              about me
            </button>
            <button
              type="button"
              onClick={() => handleTabClick("skills")}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${currentTab === "skills"
                ? "bg-white/[0.09] text-white font-medium shadow-sm"
                : "text-[#f5ebe0]/50 hover:text-[#f5ebe0] hover:bg-white/[0.04]"
                }`}
            >
              skills
            </button>
            <button
              type="button"
              onClick={() => handleTabClick("cert")}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${currentTab === "cert"
                ? "bg-white/[0.09] text-white font-medium shadow-sm"
                : "text-[#f5ebe0]/50 hover:text-[#f5ebe0] hover:bg-white/[0.04]"
                }`}
            >
              certifications
            </button>
          </div>

          {/* Tab 1: About Me Paragraphs */}
          {currentTab === "about" && (
            <div className="space-y-6 text-[#f5ebe0]/80 normal-text text-sm sm:text-base leading-relaxed animate-fadeIn">
              <p>
                Saya adalah seorang <strong>Software Engineer</strong> dengan spesialisasi
                dalam rekayasa aplikasi mobile (Flutter) dan solusi web modern. Saya memiliki
                rekam jejak dalam membangun sistem digital fungsional — mulai dari aplikasi
                pertanian cerdas (FarmTech), pelestarian bahasa daerah, sistem presensi dengan
                validasi multi-faktor geofencing, hingga platform e-commerce berbasis computer vision.
              </p>
              <p>
                Pendekatan rekayasa saya berakar pada pertimbangan praktis: latensi rendah,
                keamanan data, keandalan offline, serta pengalaman pengguna yang intuitif — bukan
                sekadar fungsionalitas di atas kertas.
              </p>
              <p>
                Bagi saya, setiap baris kode adalah jembatan antara kebutuhan nyata manusia
                dan efisiensi teknologi. Saya tidak hanya menunggu peluang; saya merancang dan
                membangunnya.
              </p>
            </div>
          )}

          {/* Tab 2: Skills Grid */}
          {currentTab === "skills" && (
            <div className="animate-fadeIn space-y-6">
              <p className="text-xs tracking-[1.5px] uppercase text-[#f5ebe0]/60 font-sans">
                Teknologi & Alat Rekayasa Utama
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                {skillCategories.flatMap((cat) => cat.skills).map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/25 hover:-translate-y-1 transition-all duration-300 text-center cursor-default group"
                    title={skill.description}
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex items-center justify-center">
                      {skill.iconUrl ? (
                        <Image
                          src={skill.iconUrl}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain filter group-hover:scale-110 transition-transform"
                          unoptimized
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-[#7a0c12]/30 flex items-center justify-center text-xs text-[#f5ebe0]">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="font-sans text-[11px] sm:text-xs text-[#f5ebe0]/80 group-hover:text-white transition-colors truncate max-w-full">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Certifications Highlights */}
          {currentTab === "cert" && (
            <div className="animate-fadeIn space-y-4">
              <p className="text-xs tracking-[1.5px] uppercase text-[#f5ebe0]/60 font-sans mb-4">
                Sertifikat & Kredensial Pilihan
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.slice(0, 4).map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#f5ebe0]/50 tracking-[1px] uppercase mb-2">
                        <span>{cert.issuer}</span>
                        <span>{cert.issueDate}</span>
                      </div>
                      <h4 className="font-heading text-lg font-light text-[#f5ebe0] leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#f5ebe0]/60 line-clamp-2 mt-2 font-sans">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[10px] text-[#f5ebe0]/40 font-mono">
                        {cert.credentialId ?? "Verified"}
                      </span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#f5ebe0] hover:text-white transition-colors"
                        >
                          <span>Kredensial</span>
                          <ExternalLink className="w-3 h-3 text-[#7a0c12]" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[2px] font-sans text-[#f5ebe0] hover:text-white group border-b border-[#7a0c12] pb-1"
                >
                  <Award className="w-4 h-4 text-[#7a0c12]" />
                  <span>Lihat Semua Sertifikasi ({certificates.length})</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#7a0c12]" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
