"use client";

import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { currentExperiences, completedExperiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
      {/* Section Heading */}
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-2 sm:gap-4 justify-center flex-wrap">
          <span>my</span>
          <span className="cursive-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5ebe0] lowercase">
            experience
          </span>
        </h2>
      </div>

      <div className="space-y-16">
        {/* Category 1: CURRENT */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans tracking-[2px] uppercase bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
              Current Position
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="space-y-6">
            {currentExperiences.map((exp) => (
              <div
                key={exp.id}
                className="group flex flex-row items-stretch relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Timeline Dot & Line */}
                <div className="flex flex-col items-center mr-6 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#22c55e] border-2 border-[#050505] shadow-[0_0_14px_rgba(34,197,94,0.6)] mt-1" />
                  <div className="flex-1 w-[2px] bg-gradient-to-b from-[#22c55e]/40 to-transparent my-2" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading font-light text-2xl sm:text-3xl text-[#f5ebe0] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-sans tracking-[1.5px] uppercase text-[#22c55e] bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/25">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#f5ebe0]/90 font-medium">
                    {exp.organization}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#f5ebe0]/60 font-sans">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#7a0c12]" />
                      {exp.employmentType}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#7a0c12]" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/75 pt-2 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-[#f5ebe0]/70 list-disc list-inside">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Tags */}
                  {exp.technologies && (
                    <div className="flex flex-wrap items-center gap-2 pt-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-sans tracking-[1px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-[#f5ebe0]/80 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: COMPLETED */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans tracking-[2px] uppercase bg-white/[0.05] text-[#f5ebe0]/80 border border-white/10">
              Completed Positions
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="space-y-6">
            {completedExperiences.map((exp) => (
              <div
                key={exp.id}
                className="group flex flex-row items-stretch relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Timeline Dot & Line */}
                <div className="flex flex-col items-center mr-6 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#7a0c12] border-2 border-[#050505] shadow-[0_0_10px_rgba(122,12,18,0.5)] mt-1" />
                  <div className="flex-1 w-[2px] bg-gradient-to-b from-[#7a0c12]/40 to-transparent my-2" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading font-light text-2xl sm:text-3xl text-[#f5ebe0] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-sans tracking-[1.5px] uppercase text-[#f5ebe0]/60 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3 h-3 inline mr-1 text-[#7a0c12]" />
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#f5ebe0]/90 font-medium">
                    {exp.organization}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#f5ebe0]/60 font-sans">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#7a0c12]" />
                      {exp.employmentType}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#7a0c12]" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/75 pt-2 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-[#f5ebe0]/70 list-disc list-inside">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Tags */}
                  {exp.technologies && (
                    <div className="flex flex-wrap items-center gap-2 pt-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-sans tracking-[1px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-[#f5ebe0]/80 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
