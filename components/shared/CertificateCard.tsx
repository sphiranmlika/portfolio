"use client";

import React from "react";
import { Certificate } from "@/types/certificate";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col rounded-2xl bg-[#0a0a0a]/90 border border-white/[0.08] p-6 sm:p-7 shadow-lg hover:border-white/25 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 relative group justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-[#f5ebe0] border border-white/[0.08]">
            <Award className="w-5 h-5 text-[#7a0c12]" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] text-[#f5ebe0]/60 text-xs font-sans border border-white/[0.06]">
            <Calendar className="w-3 h-3 text-[#7a0c12]" />
            <span>{certificate.issueDate}</span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="inline-block text-[11px] font-sans tracking-[1px] uppercase text-[#7a0c12] bg-[#7a0c12]/15 border border-[#7a0c12]/30 px-2.5 py-0.5 rounded-full">
            {certificate.category}
          </span>
          <h3 className="font-heading font-light text-2xl text-[#f5ebe0] leading-snug group-hover:text-white transition-colors">
            {certificate.title}
          </h3>
          <p className="text-xs sm:text-sm font-sans text-[#f5ebe0]/80">
            {certificate.issuer}
          </p>
          {certificate.description && (
            <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 leading-relaxed pt-2">
              {certificate.description}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3">
        {certificate.credentialId && (
          <div className="flex items-center gap-1.5 text-xs text-[#f5ebe0]/40 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
            <span className="truncate">ID: {certificate.credentialId}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {certificate.credentialUrl ? (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[1.5px] text-[#f5ebe0] hover:text-white transition-colors group/btn"
            >
              <span>Lihat Sertifikat</span>
              <ExternalLink className="w-3 h-3 text-[#7a0c12] group-hover/btn:scale-110 transition-transform" />
            </a>
          ) : (
            <span className="text-xs text-[#f5ebe0]/40 italic">
              Verifikasi tersedia berdasarkan permintaan
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
