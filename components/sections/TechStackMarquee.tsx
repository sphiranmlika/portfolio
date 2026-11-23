"use client";

import React from "react";
import Image from "next/image";
import { marqueeTechnologies } from "@/data/marquee";

export function TechStackMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const doubleList = [...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <div className="w-full py-6 sm:py-8 border-y border-white/[0.08] bg-[#050505]/60 overflow-hidden relative">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-8">
        {doubleList.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/25 transition-all duration-300 flex-shrink-0 cursor-default"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex items-center justify-center flex-shrink-0">
              <Image
                src={item.icon}
                alt={`${item.name} logo`}
                width={28}
                height={28}
                className="w-full h-full object-contain filter group-hover:scale-110 transition-transform"
                unoptimized
              />
            </div>
            <span className="font-sans text-xs sm:text-sm font-light tracking-[1px] text-[#f5ebe0]/85 group-hover:text-white transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
