"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { personalInfo } from "@/data/personal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto link with encoded parameters
    const subject = encodeURIComponent(`Pesan dari Portofolio: ${formData.name}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Big Editorial Headline matching reference */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[2px] font-light text-[#f5ebe0] uppercase leading-none">
          want to turn ideas into
        </h2>
        <div className="py-2">
          <span className="cursive-text text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-[#ffffff] lowercase">
            reality?
          </span>
        </div>

        <p className="normal-text text-base sm:text-lg text-[#f5ebe0]/80 mt-6 tracking-[1px]">
          Punya ide proyek, diskusi teknis, atau peluang kerja sama? Mari terhubung!
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 text-sm sm:text-base text-[#f5ebe0]/90 hover:text-white mt-3 font-sans border-b border-[#7a0c12] pb-0.5 transition-colors"
        >
          <Mail className="w-4 h-4 text-[#7a0c12]" />
          <span>Email: {personalInfo.email}</span>
        </a>
      </div>

      {/* Form Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0a0a]/90 border border-white/[0.08] shadow-2xl relative">
        <div className="text-center mb-8">
          <h3 className="heading text-3xl sm:text-4xl md:text-5xl text-[#f5ebe0] uppercase font-light inline-flex items-center gap-2 justify-center flex-wrap">
            <span>send a</span>
            <span className="cursive-text-form text-4xl sm:text-5xl md:text-6xl lowercase">
              message
            </span>
          </h3>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/30 text-center space-y-3 animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-[#22c55e] mx-auto" />
            <h4 className="font-heading text-xl text-[#f5ebe0]">
              Email client Anda telah dibuka
            </h4>
            <p className="normal-text text-xs sm:text-sm text-[#f5ebe0]/70 max-w-md mx-auto">
              Terima kasih telah menghubungi! Anda dapat mengirimkan draf email yang telah disiapkan ke {personalInfo.email}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="text-xs uppercase tracking-[1.5px] text-[#f5ebe0]/60 hover:text-white pt-2 cursor-pointer"
            >
              Kirim pesan lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Nama Lengkap
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-[#f5ebe0] placeholder-[#f5ebe0]/40 font-sans text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Alamat Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Alamat Email Anda"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-[#f5ebe0] placeholder-[#f5ebe0]/40 font-sans text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Pesan
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tuliskan pesan atau kebutuhan proyek Anda di sini..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-[#f5ebe0] placeholder-[#f5ebe0]/40 font-sans text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/25 bg-transparent text-[#f5ebe0] hover:bg-white/[0.08] hover:border-white/50 hover:text-white transition-all text-xs sm:text-sm font-sans tracking-[3px] uppercase cursor-pointer group"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5 text-[#7a0c12] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        )}

        {/* Social Icons at the bottom of contact */}
        <div className="flex items-center justify-center gap-4 pt-10 mt-10 border-t border-white/[0.06]">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#f5ebe0]/80 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#f5ebe0]/80 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
