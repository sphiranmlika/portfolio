import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkillCategoryCard } from "@/components/shared/SkillCard";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          badge="Keahlian Teknis"
          title="Teknologi, Bahasa Pemrograman & Tools"
          description="Gambaran terstruktur mengenai bahasa pemrograman, framework, dan developer tools yang aktif digunakan dalam domain web, mobile, dan pengolahan data."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
