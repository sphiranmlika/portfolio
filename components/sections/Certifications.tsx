import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CertificateCard } from "@/components/shared/CertificateCard";
import { certificates } from "@/data/certificates";

export function Certifications() {
  const featuredCerts = certificates.filter((c) => c.featured).slice(0, 4);

  return (
    <section id="certifications" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          badge="Kredensial"
          title="Sertifikasi Profesional"
          description="Bukti pembelajaran berkelanjutan dan penguasaan keahlian terstruktur di bidang software development, artificial intelligence, dan desain digital."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {featuredCerts.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy hover:bg-[#69082D] text-cream-light font-medium text-sm shadow-xs hover:shadow-md transition-all active:translate-y-px"
          >
            <span>Lihat Semua Sertifikat</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
