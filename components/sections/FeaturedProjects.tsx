import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-[#DCC3AA]/50 bg-[#E8D5C2]/20">
      <Container>
        <SectionHeading
          badge="Karya Pilihan"
          title="Proyek Rekayasa Unggulan"
          description="Menampilkan aplikasi digital pilihan mencakup validasi presensi mobile multi-faktor, portal layanan publik pemerintahan, dan pipeline analitik data."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy hover:bg-[#69082D] text-cream-light font-medium text-sm shadow-xs hover:shadow-md transition-all active:translate-y-px"
          >
            <span>Lihat Semua Proyek</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
