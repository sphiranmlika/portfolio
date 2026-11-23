import { Experience, OrganizationRole } from "@/types/experience";

export const currentExperiences: Experience[] = [
  {
    id: "exp-ogitech",
    organization: "OgiTech",
    role: "Junior Mobile Developer",
    employmentType: "Professional / Developer",
    startDate: "2024",
    endDate: "Sekarang",
    isCurrent: true,
    location: "Indonesia",
    description:
      "Mengembangkan dan memelihara aplikasi mobile berbasis Flutter dengan penekanan pada performa tinggi, arsitektur modular, integrasi layanan cloud Firebase, dan antarmuka pengguna yang ramah dan intuitif.",
    responsibilities: [
      "Mengembangkan modul aplikasi mobile lintas platform (Android & iOS) menggunakan Flutter dan Dart.",
      "Mengimplementasikan manajemen state reaktif (Provider/Bloc) dan integrasi aman dengan REST API & Firebase backend.",
      "Membangun fitur perekaman data aktivitas, visualisasi analitik, dan sinkronisasi data offline ke online.",
      "Melakukan optimasi performa widget rendering, caching lokal, serta pengujian antarmuka pengguna.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Clean Architecture", "Git"],
  },
];

export const completedExperiences: Experience[] = [
  {
    id: "exp-bulog",
    organization: "Kantor Cabang Bulog Kota Parepare",
    role: "Data Analyst",
    employmentType: "Analis Data Lapangan",
    startDate: "2023",
    endDate: "2023",
    isCurrent: false,
    location: "Kota Parepare, Indonesia",
    description:
      "Mengaudit, memvalidasi, dan menormalisasi dataset demografis skala besar untuk program penyaluran bantuan pangan pemerintah agar distribusi logistik tepat sasaran.",
    responsibilities: [
      "Mengolah dan memverifikasi silang ribuan data penerima bantuan terhadap basis data kependudukan wilayah.",
      "Mengidentifikasi dan menghapus data ganda (duplikasi), ketidakkonsistenan format, dan nomor identitas yang tidak valid.",
      "Mengotomatisasi alur kerja rekonsiliasi data tabular menggunakan skrip Python untuk mempercepat verifikasi bantuan.",
      "Menyusun laporan analisis rekapitulasi penyaluran yang komprehensif bagi koordinator logistik regional.",
    ],
    technologies: ["Python", "Pandas", "Data Cleaning", "Excel Automation", "Quality Assurance"],
  },
  {
    id: "exp-pn",
    organization: "Pengadilan Negeri Kota Parepare",
    role: "Full Stack Developer / IT Support",
    employmentType: "Kontrak / Technical Support",
    startDate: "2023",
    endDate: "2024",
    isCurrent: false,
    location: "Kota Parepare, Indonesia",
    description:
      "Memelihara sistem IT internal instansi, mendukung kelancaran aplikasi administrasi persidangan, serta menyelesaikan kendala infrastruktur jaringan dan hardware.",
    responsibilities: [
      "Mendukung dan memelihara aplikasi manajemen perkara internal pengadilan serta sistem arsip berkas perkara digital.",
      "Mendampingi staf kepaniteraan dalam pengoperasian alur kerja digital dan verifikasi data administrasi perkara.",
      "Melakukan troubleshooting jaringan, sistem audio visual ruang sidang, dan perangkat keras untuk menjaga keandalan persidangan.",
      "Menyusun dokumentasi alur kerja teknis dan panduan operasional standar penggunaan fasilitas teknologi informasi.",
    ],
    technologies: ["Web Systems", "MySQL", "Network Administration", "IT Hardware Support"],
  },
  {
    id: "exp-diskominfo",
    organization: "Dinas Komunikasi dan Informatika Kota Parepare",
    role: "Full Stack Developer",
    employmentType: "Magang / Kontrak",
    startDate: "2024",
    endDate: "2024",
    isCurrent: false,
    location: "Kota Parepare, Indonesia",
    description:
      "Berkontribusi dalam pengembangan aplikasi layanan publik pemerintah daerah, modernisasi antarmuka pengguna, dan integrasi API untuk digitalisasi layanan kota.",
    responsibilities: [
      "Merancang dan membangun antarmuka pengguna yang responsif untuk sistem informasi publik daerah menggunakan standar modern frontend.",
      "Mengintegrasikan endpoint REST API untuk permohonan layanan warga dan publikasi informasi kota.",
      "Berkolaborasi dengan pranata komputer pemerintah dalam menganalisis kebutuhan fungsional dan memastikan kepatuhan aksesibilitas web.",
      "Melakukan pengujian lintas peramban (cross-browser) serta optimasi performa pada perangkat desktop dan mobile.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST API"],
  },
];

export const experiences: Experience[] = [
  ...currentExperiences,
  ...completedExperiences,
];

export const organizationRoles: OrganizationRole[] = [
  {
    id: "org-1",
    organization: "Habibie Engineering Robotic Organization (HERO)",
    role: "Divisi Hubungan Masyarakat (Public Relations)",
    period: "2022 — Sekarang",
    location: "Institut Teknologi Bacharuddin Jusuf Habibie",
    description:
      "Memimpin komunikasi eksternal, representasi organisasi, dan penyelenggaraan acara kolaboratif untuk komunitas robotika universitas.",
    highlights: [
      "Mewakili organisasi dalam kompetisi robotika regional dan pameran inovasi teknologi perguruan tinggi.",
      "Mengoordinasikan workshop teknis, pelatihan dasar robotika, dan kegiatan pengenalan sains kepada mahasiswa baru.",
      "Mengelola kanal publikasi resmi dan media organisasi untuk meningkatkan visibilitas karya inovasi mahasiswa.",
    ],
  },
];
