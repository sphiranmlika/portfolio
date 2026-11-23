import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon } from "@/components/shared/Icons";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} — Saphira Nur Malika`,
    description: project.tagline || project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#f5ebe0]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans tracking-[1px] uppercase text-[#f5ebe0]/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-[#7a0c12] group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Semua Proyek</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-5 max-w-4xl pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-sans tracking-[1.5px] uppercase bg-white/[0.04] text-[#f5ebe0]/80 border border-white/10">
              {project.category}
            </span>
            {project.status && (
              <span
                className={`inline-block text-[11px] font-sans font-medium uppercase tracking-[1px] px-3 py-1 rounded-full border ${
                  project.status === "Ongoing"
                    ? "bg-[#fb923c]/15 text-[#fb923c] border-[#fb923c]/30"
                    : project.status === "Featured"
                    ? "bg-[#7a0c12]/40 text-[#ffffff] border-[#7a0c12]"
                    : "bg-white/[0.08] text-[#f5ebe0] border-white/20"
                }`}
              >
                {project.status}
              </span>
            )}
            {project.completedAt && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans text-[#f5ebe0]/60 bg-white/[0.02] border border-white/[0.06]">
                <Calendar className="w-3.5 h-3.5 text-[#7a0c12]" />
                {project.completedAt}
              </span>
            )}
          </div>

          <h1 className="heading text-3xl sm:text-5xl lg:text-6xl font-light text-[#f5ebe0] leading-tight">
            {project.title}
          </h1>

          <p className="normal-text text-base sm:text-lg text-[#f5ebe0]/75 leading-relaxed">
            {project.tagline || project.description}
          </p>

          {/* Action buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/20 text-[#f5ebe0] hover:bg-white/[0.1] hover:border-white/40 text-xs sm:text-sm font-sans tracking-[1.5px] uppercase transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Lihat Repositori</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-[#f5ebe0]/80 hover:text-white border border-white/10 hover:border-white/30 text-xs sm:text-sm font-sans tracking-[1.5px] uppercase transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#7a0c12]" />
                <span>Demo Langsung</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="my-10 sm:my-14">
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/[0.08] shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="heading text-2xl sm:text-3xl text-[#f5ebe0] font-light">
                Ikhtisar Proyek
              </h2>
              <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <div className="rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 sm:p-8 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-[#7a0c12]">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="heading text-xl sm:text-2xl text-[#f5ebe0] font-light">
                    Latar Belakang & Masalah
                  </h3>
                </div>
                <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/75 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div className="space-y-4">
                <h3 className="heading text-2xl text-[#f5ebe0] font-light">
                  Tujuan Utama
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.objectives.map((obj, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#7a0c12] shrink-0 mt-0.5" />
                      <span className="normal-text text-xs sm:text-sm text-[#f5ebe0]/80 leading-relaxed">
                        {obj}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features & Functionality */}
            <div className="space-y-4">
              <h3 className="heading text-2xl text-[#f5ebe0] font-light">
                Fitur & Fungsionalitas
              </h3>
              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7a0c12]/20 text-[#f5ebe0] font-heading font-light text-xs mt-0.5">
                      {i + 1}
                    </span>
                    <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/80 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Implementation */}
            {project.architecture && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#7a0c12]">
                  <Layers className="w-5 h-5" />
                  <h3 className="heading text-2xl text-[#f5ebe0] font-light">
                    Arsitektur & Implementasi
                  </h3>
                </div>
                <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/80 leading-relaxed p-5 rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08]">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#7a0c12]">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="heading text-2xl text-[#f5ebe0] font-light">
                    Tantangan Teknis & Solusi
                  </h3>
                </div>
                <div className="space-y-4">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 space-y-2"
                    >
                      <h4 className="font-sans text-xs sm:text-sm font-medium text-[#f5ebe0]">
                        Tantangan: {item.challenge}
                      </h4>
                      <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 leading-relaxed">
                        <strong className="text-white">Solusi:</strong> {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column: Tech Stack & Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 sm:p-7 space-y-6 sticky top-28">
              <h3 className="heading text-xl text-[#f5ebe0] font-light border-b border-white/[0.08] pb-3">
                Stack Teknologi
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-sans tracking-[0.5px] bg-white/[0.04] text-[#f5ebe0]/85 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-3 text-xs font-sans">
                <div>
                  <span className="text-[#f5ebe0]/40 uppercase tracking-[1px] block">
                    Kategori
                  </span>
                  <span className="text-[#f5ebe0] font-medium">{project.category}</span>
                </div>
                {project.completedAt && (
                  <div>
                    <span className="text-[#f5ebe0]/40 uppercase tracking-[1px] block">
                      Tahun
                    </span>
                    <span className="text-[#f5ebe0] font-medium">{project.completedAt}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href={`mailto:${personalInfo.email}?subject=Diskusi%20Proyek%20${encodeURIComponent(project.title)}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/[0.06] border border-white/20 text-[#f5ebe0] hover:bg-white/[0.12] hover:border-white/40 text-xs font-sans tracking-[1.5px] uppercase transition-all"
                >
                  <span>Diskusikan Proyek Ini</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="mt-24 pt-14 border-t border-white/[0.08]">
            <h3 className="heading text-3xl text-[#f5ebe0] mb-8 text-center sm:text-left font-light">
              Proyek Rekayasa Lainnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <div
                  key={rel.id}
                  className="p-6 rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] hover:border-white/20 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-sans tracking-[1.5px] uppercase text-[#f5ebe0]/40 block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-heading font-light text-2xl text-[#f5ebe0] leading-snug mb-2">
                      {rel.title}
                    </h4>
                    <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <div className="pt-5 mt-4 border-t border-white/[0.06]">
                    <Link
                      href={`/projects/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[1.5px] uppercase text-[#f5ebe0] hover:text-white group"
                    >
                      <span>Lihat Detail</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#7a0c12] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
