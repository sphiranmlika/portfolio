"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";
import { Project } from "@/types/project";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/40 border-b border-white/[0.06]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-wide uppercase bg-[#0a0a0a]/80 text-[#f5ebe0] backdrop-blur-md border border-white/20">
            {project.category}
          </span>
          {project.status && (
            <span
              className={`inline-block text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                project.status === "Ongoing"
                  ? "bg-[#fb923c]/20 text-[#fb923c] border-[#fb923c]/30"
                  : project.status === "Featured"
                  ? "bg-[#7a0c12]/40 text-white border-[#7a0c12]"
                  : "bg-white/[0.08] text-[#f5ebe0] border-white/20"
              }`}
            >
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-heading font-light text-2xl text-[#f5ebe0] group-hover:text-white transition-colors line-clamp-1">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[11px] font-sans bg-white/[0.04] text-[#f5ebe0]/80 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 rounded-md text-[11px] text-[#f5ebe0]/40 font-mono">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Card Actions */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/[0.06] text-xs">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-[#f5ebe0] hover:text-white font-sans uppercase tracking-[1.5px] transition-colors group/link"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7a0c12] transition-transform group-hover/link:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-[#f5ebe0]/60 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label={`Repositori GitHub untuk ${project.title}`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-[#f5ebe0]/60 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label={`Demo langsung untuk ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
