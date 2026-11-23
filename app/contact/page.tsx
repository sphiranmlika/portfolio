import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Saphira Nur Malika",
  description:
    "Hubungi Saphira Nur Malika untuk peluang kerja sama, diskusi teknis proyek, atau kolaborasi rekayasa perangkat lunak.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#f5ebe0]">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
