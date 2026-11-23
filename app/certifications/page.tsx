"use client";

import React, { useState, useMemo } from "react";
import { Award, ShieldAlert, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { certificates } from "@/data/certificates";
import { CertificateCategory } from "@/types/certificate";

const categories: ("Semua" | CertificateCategory)[] = [
  "Semua",
  "Programming & Software Development",
  "Data Science & Artificial Intelligence",
  "UI/UX Design",
  "Cloud Computing & DevOps",
  "Professional Development",
  "Other Certifications",
];

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filteredCerts = useMemo(() => {
    if (selectedCategory === "Semua") return certificates;
    return certificates.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#f5ebe0]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Editorial Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-heading text-xs sm:text-sm tracking-[3px] uppercase text-[#f5ebe0]/60 block mb-2">
            Kredensial & Pengembangan Diri
          </span>
          <h1 className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-3 sm:gap-5 justify-center flex-wrap">
            <span>all</span>
            <span className="cursive-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5ebe0] lowercase">
              certifications
            </span>
          </h1>
          <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Rekam jejak kualifikasi teknis, kelulusan program sertifikasi, dan pembelajaran berkelanjutan di bidang rekayasa perangkat lunak serta AI.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-12 flex flex-wrap items-center gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-[1px] uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#f5ebe0] text-[#050505] font-semibold shadow-md"
                  : "bg-white/[0.03] text-[#f5ebe0]/60 border border-white/[0.08] hover:text-[#f5ebe0] hover:bg-white/[0.06]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificate Grid */}
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] hover:border-white/25 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#f5ebe0]/50 tracking-[1.5px] uppercase font-sans mb-3">
                    <span className="text-[#f5ebe0]/75 font-medium">{cert.issuer}</span>
                    <span>{cert.issueDate}</span>
                  </div>

                  <h3 className="font-heading font-light text-2xl text-[#f5ebe0] leading-snug mb-3">
                    {cert.title}
                  </h3>

                  <span className="inline-block text-[11px] font-sans tracking-[1px] uppercase text-[#7a0c12] bg-[#7a0c12]/15 border border-[#7a0c12]/30 px-3 py-1 rounded-full mb-4">
                    {cert.category}
                  </span>

                  <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#f5ebe0]/40">
                    {cert.credentialId}
                  </span>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[1.5px] uppercase text-[#f5ebe0] hover:text-white group transition-colors"
                    >
                      <span>Lihat Sertifikat</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#7a0c12] group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-12 text-center max-w-md mx-auto space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-[#f5ebe0] mx-auto border border-white/[0.08]">
              <ShieldAlert className="w-6 h-6 text-[#7a0c12]" />
            </div>
            <h3 className="heading text-xl text-[#f5ebe0] font-light">
              Belum ada sertifikat dalam kategori ini
            </h3>
            <p className="normal-text text-xs text-[#f5ebe0]/60">
              Kredensial dalam domain ini sedang berlangsung atau akan ditambahkan segera.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("Semua")}
              className="mt-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/20 text-[#f5ebe0] text-xs font-sans tracking-[1px] uppercase hover:bg-white/[0.12] transition-colors cursor-pointer"
            >
              Lihat Semua Kategori
            </button>
          </div>
        )}

        {/* Verification Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] max-w-3xl mx-auto flex items-start gap-4 text-xs text-[#f5ebe0]/70 leading-relaxed normal-text">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <Award className="w-4 h-4 text-[#7a0c12]" />
          </div>
          <div>
            <p className="font-sans font-medium text-sm text-[#f5ebe0] mb-1">
              Kebijakan Verifikasi Kredensial
            </p>
            <p>
              Seluruh sertifikat mencerminkan kelulusan kursus, lokakarya, atau akreditasi profesional resmi. Tautan verifikasi langsung mengarah ke penerbit kredensial terkait.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
