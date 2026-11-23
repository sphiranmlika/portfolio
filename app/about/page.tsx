import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Target,
  Sparkles,
  ArrowRight,
  Code2,
  Smartphone,
  Eye,
  Database,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { personalInfo } from "@/data/personal";
import { educations } from "@/data/education";

export const metadata: Metadata = {
  title: "About — Saphira Nur Malika",
  description:
    "Pelajari latar belakang saya di bidang Ilmu Komputer, filosofi software engineering, fokus teknis, serta tujuan karier profesional.",
};

export default function AboutPage() {
  const technicalInterests = [
    {
      icon: <Smartphone className="w-5 h-5 text-[#7a0c12]" />,
      title: "Mobile Development",
      description:
        "Membangun aplikasi mobile cross-platform yang reaktif dan berkinerja tinggi menggunakan Flutter, integrasi hardware, dan geofencing.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#7a0c12]" />,
      title: "Modern Web Engineering",
      description:
        "Mengembangkan antarmuka web yang terukur, mudah diakses, dan modern dengan Next.js, React, TypeScript, dan Tailwind CSS.",
    },
    {
      icon: <Eye className="w-5 h-5 text-[#7a0c12]" />,
      title: "Computer Vision & Biometrik",
      description:
        "Mengeksplorasi deteksi keberadaan wajah, pemrosesan citra digital dengan OpenCV, serta pipeline validasi multi-faktor.",
    },
    {
      icon: <Database className="w-5 h-5 text-[#7a0c12]" />,
      title: "Data Processing & Analitik",
      description:
        "Otomatisasi pembersihan data, normalisasi dataset tabular, dan deteksi anomali menggunakan Python dan pustaka analitis data.",
    },
    {
      icon: <Palette className="w-5 h-5 text-[#7a0c12]" />,
      title: "Sistem Desain UI/UX",
      description:
        "Merancang wireframe terstruktur, sistem komponen modular, dan purwarupa interaktif di Figma untuk meningkatkan fungsionalitas digital.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#f5ebe0]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-heading text-xs sm:text-sm tracking-[3px] uppercase text-[#f5ebe0]/60 block mb-2">
            Biografi & Filosofi Rekayasa
          </span>
          <h1 className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-3 sm:gap-5 justify-center flex-wrap">
            <span>about</span>
            <span className="cursive-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5ebe0] lowercase">
              me
            </span>
          </h1>
          <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Gambaran komprehensif mengenai latar belakang pendidikan, perjalanan teknis, prinsip pengembangan, serta visi rekayasa perangkat lunak saya.
          </p>
        </div>

        {/* Narrative & Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-white/[0.08]">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-80 lg:w-full max-w-sm aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/[0.08] p-3 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile/portrait.webp"
                  alt={`Potret ${personalInfo.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 380px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="heading text-3xl sm:text-4xl text-[#f5ebe0] font-light">
              Halo, saya {personalInfo.name}.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#f5ebe0]/80 leading-relaxed normal-text">
              {personalInfo.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/20 text-[#f5ebe0] hover:bg-white/[0.1] hover:border-white/40 text-xs sm:text-sm font-sans tracking-[1.5px] uppercase transition-colors"
              >
                <span>Jelajahi Proyek Saya</span>
                <ArrowRight className="w-4 h-4 text-[#7a0c12]" />
              </Link>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/10 text-[#f5ebe0]/80 hover:text-white hover:border-white/25 text-xs sm:text-sm font-sans tracking-[1.5px] uppercase transition-colors"
              >
                <span>Hubungi via Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Academic Background Section */}
        <div className="py-20 border-b border-white/[0.08]">
          <h3 className="heading text-3xl sm:text-4xl text-[#f5ebe0] mb-10 text-center sm:text-left font-light">
            Latar Belakang Akademik
          </h3>

          <div className="space-y-6">
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 sm:p-8 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7a0c12]/15 text-[#f5ebe0] border border-[#7a0c12]/30">
                      <GraduationCap className="w-6 h-6 text-[#7a0c12]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-sans tracking-[1.5px] uppercase text-[#7a0c12]">
                        {edu.fieldOfStudy}
                      </span>
                      <h4 className="font-heading font-light text-2xl sm:text-3xl text-[#f5ebe0]">
                        {edu.degree}
                      </h4>
                      <p className="text-sm sm:text-base font-sans text-[#f5ebe0]/80">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#f5ebe0]/60 shrink-0 font-sans">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                      {edu.startYear} — {edu.endYear}
                    </span>
                    {edu.gpa && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7a0c12]/20 border border-[#7a0c12]/40 text-[#f5ebe0]">
                        IPK: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/75 leading-relaxed">
                  {edu.description}
                </p>

                {edu.activities && (
                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    <span className="text-xs font-sans uppercase tracking-[2px] text-[#f5ebe0]/60 block">
                      Aktivitas & Kepemimpinan Akademik:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {edu.activities.map((act, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-[#f5ebe0]/75 flex items-start gap-2.5 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7a0c12] shrink-0 mt-2" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Interests */}
        <div className="py-20 border-b border-white/[0.08]">
          <h3 className="heading text-3xl sm:text-4xl text-[#f5ebe0] mb-2 text-center sm:text-left font-light">
            Fokus & Spesialisasi Teknis
          </h3>
          <p className="normal-text text-sm text-[#f5ebe0]/60 mb-10 text-center sm:text-left max-w-2xl">
            Bidang rekayasa perangkat lunak di mana saya aktif mendedikasikan waktu belajar, membangun purwarupa aplikasi, dan mendalami arsitektur sistem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalInterests.map((interest) => (
              <div
                key={interest.title}
                className="rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 hover:border-white/20 transition-all duration-300 space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  {interest.icon}
                </div>
                <h4 className="font-heading font-light text-xl text-[#f5ebe0]">
                  {interest.title}
                </h4>
                <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy & Goals */}
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Development Philosophy */}
          <div className="rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-[#7a0c12]">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-heading font-light text-2xl text-[#f5ebe0]">
                Filosofi Pengembangan
              </h3>
            </div>
            <div className="space-y-4 pt-2">
              {personalInfo.developmentPhilosophy.map((item) => (
                <div key={item.title} className="space-y-1">
                  <h4 className="font-sans text-sm font-medium text-[#f5ebe0]">
                    {item.title}
                  </h4>
                  <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Goals */}
          <div className="rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-[#7a0c12]">
              <Target className="w-5 h-5" />
              <h3 className="font-heading font-light text-2xl text-[#f5ebe0]">
                Tujuan Profesional
              </h3>
            </div>
            <div className="space-y-4 pt-2">
              {personalInfo.goals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7a0c12] shrink-0 mt-1" />
                  <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/75 leading-relaxed">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
