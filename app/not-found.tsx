import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#f5ebe0]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="text-center max-w-xl mx-auto space-y-6">
          <div className="space-y-3">
            <span className="heading text-8xl sm:text-9xl font-light text-[#7a0c12] block">
              404
            </span>
            <h1 className="heading text-3xl sm:text-4xl text-[#f5ebe0] font-light">
              Halaman Tidak Ditemukan
            </h1>
            <p className="normal-text text-sm sm:text-base text-[#f5ebe0]/60 max-w-md mx-auto leading-relaxed">
              Halaman yang Anda tuju tidak tersedia atau tautan mungkin telah berpindah.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] border border-white/20 text-[#f5ebe0] hover:bg-white/[0.12] hover:border-white/40 text-xs sm:text-sm font-sans tracking-[1.5px] uppercase transition-colors"
            >
              <Home className="w-4 h-4 text-[#7a0c12]" />
              <span>Kembali ke Beranda</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-[#f5ebe0]/80 hover:text-white border border-white/10 hover:border-white/30 text-xs sm:text-sm font-sans tracking-[1.5px] uppercase transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#7a0c12]" />
              <span>Jelajahi Proyek</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
