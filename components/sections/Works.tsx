"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";
import { projects } from "@/data/projects";

export function Works() {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "completed") return project.status === "Completed";
    if (filter === "ongoing") return project.status === "Ongoing";
    return true;
  });

  return (
    <section id="works" className="py-20 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-2 sm:gap-4 justify-center flex-wrap">
          <span>my</span>
          <span className="cursive-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5ebe0] lowercase">
            works
          </span>
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-16 flex-wrap">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`px-6 py-2 rounded-full font-sans text-xs sm:text-sm tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${
            filter === "all"
              ? "bg-[#f5ebe0] text-[#050505] font-semibold shadow-md"
              : "bg-white/[0.03] text-[#f5ebe0]/60 border border-white/[0.08] hover:text-[#f5ebe0] hover:bg-white/[0.06]"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setFilter("completed")}
          className={`px-6 py-2 rounded-full font-sans text-xs sm:text-sm tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${
            filter === "completed"
              ? "bg-[#f5ebe0] text-[#050505] font-semibold shadow-md"
              : "bg-white/[0.03] text-[#f5ebe0]/60 border border-white/[0.08] hover:text-[#f5ebe0] hover:bg-white/[0.06]"
          }`}
        >
          Completed
        </button>
        <button
          type="button"
          onClick={() => setFilter("ongoing")}
          className={`px-6 py-2 rounded-full font-sans text-xs sm:text-sm tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer ${
            filter === "ongoing"
              ? "bg-[#f5ebe0] text-[#050505] font-semibold shadow-md"
              : "bg-white/[0.03] text-[#f5ebe0]/60 border border-white/[0.08] hover:text-[#f5ebe0] hover:bg-white/[0.06]"
          }`}
        >
          Ongoing
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] overflow-hidden hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500"
          >
            {/* Top: Image & Status */}
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

                {/* Status Badge */}
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

              {/* Card Body */}
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

                {/* Technologies Used */}
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
                    {project.technologies.length > 5 && (
                      <span className="text-[10px] text-[#f5ebe0]/40 font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
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

      {/* View All Projects Action */}
      <div className="text-center pt-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/[0.04] text-[#f5ebe0] hover:bg-white/[0.1] hover:border-white/40 transition-all text-xs sm:text-sm font-sans tracking-[2px] uppercase group"
        >
          <span>Lihat Semua Proyek ({projects.length})</span>
          <ArrowRight className="w-4 h-4 text-[#7a0c12] group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
