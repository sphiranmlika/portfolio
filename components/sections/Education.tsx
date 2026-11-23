"use client";

import React from "react";
import { GraduationCap, BookOpen, Calendar, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { educations } from "@/data/education";
import { motion } from "motion/react";

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-[#DCC3AA]/50 bg-[#E8D5C2]/20">
      <Container>
        <SectionHeading
          badge="Latar Belakang Akademik"
          title="Pendidikan & Studi Formal"
          description="Fondasi keilmuan Ilmu Komputer, metodologi software engineering, perancangan algoritma, dan inovasi teknologi terapan."
        />

        <div className="mt-10 max-w-4xl mx-auto">
          {educations.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-2xl bg-[#FAF4ED] border border-[#CEB49A]/60 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-burgundy/40 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-burgundy/10 text-burgundy border border-burgundy/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-burgundy">
                      {edu.fieldOfStudy}
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-maroon">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-maroon-dark">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-maroon-muted shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D5C2]/50 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-burgundy" />
                    {edu.startYear} — {edu.endYear}
                  </span>
                  {edu.gpa && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF4ED] border border-[#CEB49A] font-bold text-maroon">
                      <Star className="w-3.5 h-3.5 fill-burgundy text-burgundy" />
                      IPK: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>

              {edu.description && (
                <p className="text-sm text-maroon-muted leading-relaxed">
                  {edu.description}
                </p>
              )}

              {edu.activities && edu.activities.length > 0 && (
                <div className="pt-2 border-t border-[#DCC3AA]/50 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-maroon flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-burgundy" />
                    Aktivitas Akademik & Fokus Studi
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-maroon-muted flex items-start gap-2 bg-[#F1E2D1]/40 p-2.5 rounded-lg border border-[#CEB49A]/30"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-burgundy shrink-0 mt-2" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
