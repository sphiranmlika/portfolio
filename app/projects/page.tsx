"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, FolderGit2, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";

const categories = [
  "Semua",
  "Mobile Development",
  "Full-Stack Development",
  "Web & IT Systems",
  "Data & AI",
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "Semua" || project.category === selectedCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#f5ebe0]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Editorial Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-heading text-xs sm:text-sm tracking-[3px] uppercase text-[#f5ebe0]/60 block mb-2">
            Katalog Karya & Rekayasa
          </span>
          <h1 className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-3 sm:gap-5 justify-center flex-wrap">
            <span>all</span>
            <span className="cursive-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5ebe0] lowercase">
              projects
            </span>
          </h1>
          <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Katalog lengkap aplikasi siap produksi, purwarupa sistem, dan implementasi teknis di domain mobile, web modern, serta kecerdasan buatan.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="mb-12 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
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

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f5ebe0]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan teknologi atau kata kunci..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[#f5ebe0] placeholder:text-[#f5ebe0]/40 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
              />
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-xs text-[#f5ebe0]/50 font-sans tracking-[1px]">
            Menampilkan {filteredProjects.length} dari {projects.length} proyek
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] overflow-hidden hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500"
              >
                <div>
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-black/40 border-b border-white/[0.06]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                    {project.status && (
                      <div className="absolute top-4 left-4 z-10">
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
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <span className="text-[11px] font-sans tracking-[1.5px] uppercase text-[#f5ebe0]/50 block">
                      {project.category}
                    </span>

                    <h3 className="font-heading font-light text-2xl text-[#f5ebe0] leading-snug group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <hr className="border-white/[0.08] my-4" />

                    <div>
                      <p className="text-[10px] font-sans tracking-[2px] uppercase text-[#f5ebe0]/40 mb-3">
                        TECHNOLOGIES USED
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-sans tracking-[0.5px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-[#f5ebe0]/80 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/[0.04] mt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[1.5px] uppercase text-[#f5ebe0] hover:text-white group/btn"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7a0c12] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/[0.03] text-[#f5ebe0]/60 hover:text-white hover:bg-white/[0.08] transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/[0.03] text-[#f5ebe0]/60 hover:text-white hover:bg-white/[0.08] transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-12 text-center max-w-md mx-auto space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-[#f5ebe0] mx-auto border border-white/[0.08]">
              <FolderGit2 className="w-6 h-6 text-[#7a0c12]" />
            </div>
            <h3 className="heading text-xl text-[#f5ebe0] font-light">
              Tidak ada proyek yang sesuai
            </h3>
            <p className="normal-text text-xs text-[#f5ebe0]/60">
              Coba sesuaikan kata kunci pencarian atau reset filter kategori.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Semua");
                setSearchQuery("");
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/20 text-[#f5ebe0] text-xs font-sans tracking-[1px] uppercase hover:bg-white/[0.12] transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
