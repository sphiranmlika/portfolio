"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/personal";

export function AboutPortraitCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`card-flip-wrapper w-64 sm:w-80 lg:w-full max-w-sm aspect-[4/5] cursor-pointer ${
        isFlipped ? "is-flipped" : ""
      }`}
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      aria-label="Kartu profil interaktif, klik untuk membalik"
    >
      <div className="card-flip-inner relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/[0.08]">
        {/* Front Face: Flip Pertama (Portrait Selfie HD) */}
        <div className="card-face absolute inset-0 bg-[#0a0a0a] flex flex-col justify-end p-6 select-none">
          <Image
            src="/images/profile/portrait.webp"
            alt={`Potret ${personalInfo.name}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 300px, 380px"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-90 pointer-events-none" />

          <div className="relative z-10 text-left pointer-events-none">
            <p className="font-heading font-light text-xl text-[#f5ebe0] tracking-[1px]">
              {personalInfo.name}
            </p>
            <p className="font-sans text-xs text-[#f5ebe0]/70 tracking-[1.5px] uppercase mt-0.5">
              {personalInfo.title}
            </p>
          </div>
        </div>

        {/* Back Face: Flip Kedua (Sunset Outdoor HD) */}
        <div className="card-face card-back absolute inset-0 bg-[#0a0a0a] flex flex-col justify-end p-6 border border-white/[0.12] text-left overflow-hidden select-none">
          <Image
            src="/images/profile/portrait-sunset.webp"
            alt={`${personalInfo.name} Golden Hour`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 300px, 380px"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent/20 pointer-events-none" />

          <div className="relative z-10 space-y-3 pointer-events-none">
            <div>
              <span className="font-cursive text-3xl sm:text-4xl text-[#f5ebe0]">
                passion & code
              </span>
              <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/90 mt-1.5 leading-relaxed">
                &quot;Membangun perangkat lunak yang andal, indah, dan bermanfaat melalui rekayasa yang disiplin.&quot;
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.15] text-xs text-[#f5ebe0]/80 space-y-1">
              <p>
                <strong className="text-[#f5ebe0]">Pendidikan:</strong> Teknik Informatika (IPK 3.73)
              </p>
              <p>
                <strong className="text-[#f5ebe0]">Fokus:</strong> Flutter, Next.js, AI & Computer Vision
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
