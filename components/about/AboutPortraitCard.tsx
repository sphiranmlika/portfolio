"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/personal";

const photos = [
  {
    src: "/images/profile/portrait.webp",
    alt: `${personalInfo.name} Portrait`,
    label: "Portrait",
  },
  {
    src: "/images/profile/portrait-sunset.webp",
    alt: `${personalInfo.name} Golden Hour`,
    label: "Sunset",
  },
];

export function AboutPortraitCard() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="relative w-64 sm:w-80 lg:w-full max-w-sm aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/[0.08] p-3 shadow-2xl overflow-hidden group">
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <Image
          src={photos[activePhoto].src}
          alt={photos[activePhoto].alt}
          fill
          className="object-cover object-center transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 300px, 380px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

        {/* Photo Switcher Pill */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
          {photos.map((p, idx) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setActivePhoto(idx)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-sans tracking-[1px] uppercase transition-all duration-300 ${
                activePhoto === idx
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-[#f5ebe0]/60 hover:text-[#f5ebe0] hover:bg-white/[0.08]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
          <p className="font-heading font-light text-xl text-[#f5ebe0] tracking-[1px]">
            {personalInfo.name}
          </p>
          <p className="font-sans text-xs text-[#f5ebe0]/60 tracking-[1.5px] uppercase mt-0.5">
            {personalInfo.title}
          </p>
        </div>
      </div>
    </div>
  );
}
