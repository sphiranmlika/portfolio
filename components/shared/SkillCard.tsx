"use client";

import React from "react";
import { SkillCategory } from "@/types/skill";
import { Code2, Layout, Smartphone, Server, Wrench, Brain } from "lucide-react";
import { motion } from "motion/react";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const getCategoryIcon = (title: string) => {
    if (title.includes("Programming")) return <Code2 className="w-5 h-5 text-burgundy" />;
    if (title.includes("Frontend")) return <Layout className="w-5 h-5 text-burgundy" />;
    if (title.includes("Mobile")) return <Smartphone className="w-5 h-5 text-burgundy" />;
    if (title.includes("Backend")) return <Server className="w-5 h-5 text-burgundy" />;
    if (title.includes("Tools")) return <Wrench className="w-5 h-5 text-burgundy" />;
    return <Brain className="w-5 h-5 text-burgundy" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      className="rounded-2xl bg-[#FAF4ED] border border-[#CEB49A]/60 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-burgundy/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8D5C2]/60 border border-[#DCC3AA]/60">
          {getCategoryIcon(category.title)}
        </div>
        <div>
          <h3 className="font-serif font-bold text-base sm:text-lg text-maroon">
            {category.title}
          </h3>
          {category.description && (
            <p className="text-[11px] text-maroon-muted line-clamp-1">
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2.5 pt-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col p-2.5 rounded-lg bg-[#F1E2D1]/40 border border-[#CEB49A]/30 hover:border-[#CEB49A] transition-colors"
          >
            <span className="font-medium text-xs sm:text-sm text-maroon">
              {skill.name}
            </span>
            {skill.description && (
              <span className="text-[11px] text-maroon-muted leading-tight mt-0.5">
                {skill.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
