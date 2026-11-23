import { Certificate } from "@/types/certificate";

/**
 * Data sertifikat dan kredensial profesional.
 * Catatan yang dapat diedit untuk menunjukkan pembelajaran berkelanjutan
 * dalam software development, AI, cloud computing, dan desain.
 */
export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Mobile Application Development with Flutter",
    issuer: "Dicoding Academy",
    category: "Programming & Software Development",
    issueDate: "2024",
    credentialId: "DICODING-FLUTTER-EXAMPLE-2024",
    description: "Pelatihan komprehensif mencakup arsitektur Flutter, manajemen state responsif, integrasi REST API, dan layanan perangkat mobile.",
    featured: true,
    credentialUrl: "https://www.dicoding.com",
  },
  {
    id: "cert-2",
    title: "Frontend Web Developer Professional Certificate",
    issuer: "Google / Coursera",
    category: "Programming & Software Development",
    issueDate: "2024",
    credentialId: "COURSERA-FE-EXAMPLE-2024",
    description: "Rekayasa front-end tingkat lanjut dengan React, JavaScript modern (ES6+), pedoman aksesibilitas (a11y), dan optimasi performa web.",
    featured: true,
    credentialUrl: "https://www.coursera.org",
  },
  {
    id: "cert-3",
    title: "Computer Vision & Image Processing with Python",
    issuer: "DeepLearning.AI",
    category: "Data Science & Artificial Intelligence",
    issueDate: "2023",
    credentialId: "DL-CV-EXAMPLE-2023",
    description: "Dasar-dasar pemrosesan citra digital, deteksi fitur visual, pipeline OpenCV, dan convolutional neural networks.",
    featured: true,
    credentialUrl: "https://www.deeplearning.ai",
  },
  {
    id: "cert-4",
    title: "UI/UX Design Foundations & Prototyping",
    issuer: "Interaction Design Foundation",
    category: "UI/UX Design",
    issueDate: "2023",
    credentialId: "IDF-UIUX-EXAMPLE-2023",
    description: "Perancangan design system, riset pengguna, wireframing, dan interactive high-fidelity prototyping menggunakan Figma.",
    featured: true,
    credentialUrl: "https://www.interaction-design.org",
  },
];
