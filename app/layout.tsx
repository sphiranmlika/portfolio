import type { Metadata } from "next";
import { Cormorant, Monsieur_La_Doulaise, Tenor_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-monsieur",
  display: "swap",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saphira Nur Malika — Software Engineer",
  description:
    "Saphira Nur Malika is a Software Engineer specializing in Mobile Development (Flutter), Modern Frontend, and AI Solutions.",
  keywords: [
    "Saphira Nur Malika",
    "Software Engineer",
    "Mobile Developer",
    "Flutter",
    "React",
    "Next.js",
    "TypeScript",
    "Computer Vision",
    "Portfolio",
  ],
  authors: [{ name: "Saphira Nur Malika" }],
  openGraph: {
    title: "Saphira Nur Malika — Software Engineer",
    description:
      "Explore Saphira Nur Malika's portfolio of software engineering, mobile development, and innovative applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${monsieur.variable} ${tenorSans.variable} scroll-smooth`}
    >
      <head />
      <body className="bg-[#050505] text-[#f5ebe0] font-sans antialiased min-h-screen selection:bg-[#7a0c12] selection:text-[#ffffff] relative overflow-x-hidden">
        {/* Subtle moving ambient glow background */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        >
          <div className="ambient-glow ambient-glow-1" />
          <div className="ambient-glow ambient-glow-2" />
          <div className="noise-overlay" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
