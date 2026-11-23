"use client";

import React from "react";
import Image from "next/image";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-white/[0.06]">
      {/* Section Heading */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none inline-flex items-center gap-3 sm:gap-5 justify-center flex-wrap">
          <span>tech</span>
          <span className="cursive-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f5ebe0] lowercase">
            skills
          </span>
        </h2>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a]/80 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-light text-xl sm:text-2xl text-[#f5ebe0] tracking-[1px] mb-2">
                {category.title}
              </h3>
              {category.description && (
                <p className="normal-text text-xs text-[#f5ebe0]/60 mb-6 leading-relaxed">
                  {category.description}
                </p>
              )}

              {/* Skills Grid within Category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/25 hover:-translate-y-1 transition-all duration-300 text-center group cursor-default"
                    title={skill.description}
                  >
                    <div className="w-7 h-7 relative flex items-center justify-center mb-2">
                      {skill.iconUrl ? (
                        <Image
                          src={skill.iconUrl}
                          alt={skill.name}
                          width={28}
                          height={28}
                          className="w-full h-full object-contain filter group-hover:scale-110 transition-transform"
                          unoptimized
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-[#7a0c12]/40 flex items-center justify-center text-xs text-[#f5ebe0]">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="font-sans text-[11px] text-[#f5ebe0]/80 group-hover:text-white transition-colors truncate max-w-full">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
