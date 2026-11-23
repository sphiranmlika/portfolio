"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Award } from "lucide-react";
import { certificates } from "@/data/certificates";

export function CertificationsSection() {
  const featuredCerts = certificates.slice(0, 4);

  return (
    <section id="certifications" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-white/[0.06]">
      {/* Section Heading */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-3 sm:gap-5 justify-center flex-wrap">
          <span>my</span>
          <span className="cursive-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5ebe0] lowercase">
            certifications
          </span>
        </h2>
      </div>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {featuredCerts.map((cert) => (
          <div
            key={cert.id}
            className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] hover:border-white/25 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#f5ebe0]/50 tracking-[1.5px] uppercase font-sans mb-3">
                <span className="text-[#f5ebe0]/70 font-medium">{cert.issuer}</span>
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

      {/* View All Certificates Action */}
      <div className="text-center pt-16">
        <Link
          href="/certifications"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/[0.04] text-[#f5ebe0] hover:bg-white/[0.1] hover:border-white/40 transition-all text-xs sm:text-sm font-sans tracking-[2px] uppercase group"
        >
          <Award className="w-4 h-4 text-[#7a0c12]" />
          <span>Lihat Semua Sertifikasi ({certificates.length})</span>
          <ArrowRight className="w-4 h-4 text-[#7a0c12] group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
