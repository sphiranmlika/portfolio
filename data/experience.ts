import { Experience, OrganizationRole } from "@/types/experience";

export const currentExperiences: Experience[] = [
  {
    id: "exp-ogitech",
    organization: "OgiTech",
    role: "Junior Mobile Developer",
    employmentType: "Professional / Developer",
    startDate: "Oktober 2026",
    endDate: "Sekarang",
    isCurrent: true,
    location: "Parepare, Indonesia",
    description:
      "Terlibat dalam perancangan dan pengembangan produk teknologi berbasis mobile, termasuk aplikasi FarmTech, teknologi bahasa, dan solusi digital inovatif lainnya.",
    responsibilities: [
      "Berkontribusi dalam pengembangan OgiFarm, aplikasi FarmTech untuk mendukung digitalisasi operasional peternakan melalui fitur pencatatan aktivitas, pemantauan produksi, pengelolaan biaya, dan manajemen peternakan.",
      "Berkontribusi dalam pengembangan Ogi'E, aplikasi teknologi bahasa yang mendukung digitalisasi, pembelajaran, dan pelestarian bahasa serta aksara daerah.",
      "Mendukung pengembangan berbagai fitur aplikasi, termasuk aplikasi absensi dan solusi digital lainnya, dengan memperhatikan kebutuhan pengguna serta fungsionalitas sistem.",
      "Menggunakan AutoCAD untuk mendukung kebutuhan perancangan dan visualisasi desain teknis sesuai kebutuhan proyek.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "AutoCAD", "REST API", "Git"],
  },
];

export const completedExperiences: Experience[] = [
  {
    id: "exp-bulog",
    organization: "Kantor Cabang Bulog Kota Parepare",
    role: "Data Analyst",
    employmentType: "Analis Data",
    startDate: "April 2026",
    endDate: "September 2026",
    isCurrent: false,
    location: "Kota Parepare, Indonesia",
    description:
      "Mengelola dan mengolah data penerima bantuan pangan menggunakan Sistem Informasi Bantuan Pangan (Banpang) dan Microsoft Excel untuk mendukung administrasi serta pelaporan.",
    responsibilities: [
      "Mengelola dan mengolah data penerima bantuan pangan menggunakan Sistem Informasi Bantuan Pangan (Banpang) dan Microsoft Excel untuk mendukung administrasi serta pelaporan.",
      "Melakukan data cleaning, validasi, dan verifikasi data menggunakan formula Excel, sorting, dan filtering untuk mengidentifikasi data tidak lengkap, tidak konsisten, dan duplikat.",
      "Menganalisis hasil pengolahan data serta menyusun laporan administrasi sebagai bahan pendukung pengelolaan dan pembaruan data penerima bantuan pangan.",
    ],
    technologies: ["Microsoft Excel", "Data Cleaning", "Data Validation", "Banpang System", "Reporting"],
  },
  {
    id: "exp-pn-dev",
    organization: "Pengadilan Negeri Kota Parepare",
    role: "Full Stack Developer",
    employmentType: "Kontrak Pengembangan Sistem",
    startDate: "Oktober 2025",
    endDate: "Desember 2025",
    isCurrent: false,
    location: "Kota Parepare, Indonesia",
    description:
      "Merancang dan mengembangkan Sistem Informasi dan Pendaftaran Magang berbasis web menggunakan PHP, Laravel, React, dan MySQL untuk mendukung administrasi serta pelayanan internal instansi.",
    responsibilities: [
      "Menerapkan metode Agile dalam proses pengembangan sistem, mulai dari analisis kebutuhan, perancangan Use Case Diagram dan Entity Relationship Diagram (ERD), hingga implementasi aplikasi.",
      "Merancang mockup dan antarmuka pengguna menggunakan Figma, mengembangkan fitur frontend dan backend, serta mengelola struktur basis data sesuai kebutuhan pengguna dan alur proses bisnis.",
      "Melakukan pengujian, pemeliharaan, dan pengembangan fitur untuk memastikan fungsionalitas sistem serta mendukung efisiensi administrasi dan transparansi proses pendaftaran magang.",
    ],
    technologies: ["PHP", "Laravel", "React", "MySQL", "Figma", "Agile", "ERD"],
  },
  {
    id: "exp-pn-it",
    organization: "Pengadilan Negeri Kota Parepare",
    role: "IT Support",
    employmentType: "Dukungan Teknis",
    startDate: "Oktober 2025",
    endDate: "Desember 2025",
    isCurrent: false,
    location: "Kota Parepare, Indonesia",
    description:
      "Memberikan dukungan teknis terhadap operasional teknologi informasi melalui instalasi, konfigurasi, pemeliharaan, dan troubleshooting perangkat keras maupun perangkat lunak.",
    responsibilities: [
      "Menangani permasalahan perangkat komputer, printer, dan jaringan serta membantu memastikan ketersediaan infrastruktur teknologi untuk mendukung aktivitas operasional instansi.",
      "Membantu pemeliharaan sistem informasi dan memberikan dukungan teknis kepada pengguna dalam mengatasi kendala penggunaan teknologi informasi.",
    ],
    technologies: ["IT Hardware Support", "Network Troubleshooting", "System Maintenance", "Printer & OS Config"],
  },
  {
    id: "exp-diskominfo",
    organization: "Dinas Komunikasi dan Informatika Kota Parepare",
    role: "Full Stack Developer",
    employmentType: "Pengembang SPBE",
    startDate: "April 2025",
    endDate: "Mei 2025",
    isCurrent: false,
    location: "Kota Parepare, Indonesia",
    description:
      "Mengembangkan Sistem Pemerintahan Berbasis Elektronik (SPBE) Kota Parepare sebagai platform terintegrasi untuk mendukung pengelolaan informasi dan layanan pemerintahan daerah.",
    responsibilities: [
      "Merancang dan mengembangkan fitur serta modul aplikasi dari sisi frontend menggunakan React dan Tailwind CSS, serta backend menggunakan Laravel 12 dan Filament sebagai admin panel.",
      "Merancang struktur basis data MySQL beserta relasi antartabel, mengembangkan autentikasi dan hak akses pengguna, serta mengintegrasikan berbagai layanan dan komponen sistem.",
      "Melakukan pengujian aplikasi, debugging, perbaikan bug, dan pemeliharaan sistem untuk memastikan fungsionalitas aplikasi sesuai dengan kebutuhan dan alur kerja instansi pemerintah.",
    ],
    technologies: ["React", "Tailwind CSS", "Laravel 12", "Filament", "MySQL", "REST API", "SPBE"],
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
    role: "Anggota Divisi Hubungan Masyarakat",
    period: "September 2024 – Desember 2025",
    location: "Institut Teknologi Bacharuddin Jusuf Habibie",
    description:
      "Merancang dan mengeksekusi program kerja organisasi, seperti 'HERO Goes to School' dan seminar robotika, mengelola publikasi media sosial, memfasilitasi pelatihan robotika, dan berkolaborasi lintas divisi.",
    highlights: [
      "Merancang dan mengeksekusi program kerja organisasi, seperti 'HERO Goes to School' dan seminar robotika.",
      "Mengelola media sosial dan strategi publikasi untuk mendistribusikan informasi kegiatan secara profesional.",
      "Memfasilitasi program pelatihan robotika (materi fundamental hingga pendampingan teknis persiapan kompetisi).",
      "Berkolaborasi lintas divisi dalam memecahkan kendala teknis maupun operasional (problem solving).",
    ],
  },
];
