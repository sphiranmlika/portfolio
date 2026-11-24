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
      <div className="card-flip-inner relative w-full h-full">
        {/* Front Face: Flip Pertama (Foto 1 - Portrait Selfie HD) */}
        <div className="card-face absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] select-none shadow-2xl">
          <Image
            src="/images/profile/portrait.webp"
            alt={`Potret ${personalInfo.name}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 300px, 380px"
            priority
            unoptimized
          />
        </div>

        {/* Back Face: Flip Kedua (Foto 2 - Sunset Outdoor HD) */}
        <div className="card-face card-back absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0a0a0a] select-none shadow-2xl">
          <Image
            src="/images/profile/portrait-sunset.webp"
            alt={`${personalInfo.name} Sunset`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 300px, 380px"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
