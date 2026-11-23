import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    description: "Pengembangan aplikasi mobile lintas platform dengan performa native dan UI responsif.",
    skills: [
      {
        name: "Flutter",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        description: "Aplikasi cross-platform Android & iOS dengan arsitektur reaktif dan animasi mulus.",
      },
      {
        name: "Dart",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        description: "Pemrograman berorientasi objek modern, asinkronus, dan sound null safety.",
      },
    ],
  },
  {
    title: "Frontend Development",
    description: "Membangun antarmuka web modern yang cepat, terstruktur, dan ramah aksesibilitas.",
    skills: [
      {
        name: "React.js",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Arsitektur komponen modular, custom hooks, dan render virtual DOM efisien.",
      },
      {
        name: "JavaScript",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Standar modern ES6+, manipulasi DOM, promises, dan async/await.",
      },
      {
        name: "TypeScript",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "Pengetikan ketat statis, generics, type contracts, dan skalabilitas kode.",
      },
      {
        name: "HTML",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        description: "Markup semantik standar, struktur ramah SEO, dan kepatuhan aksesibilitas.",
      },
      {
        name: "CSS",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        description: "Layouting Flexbox & Grid, animasi transisi, dan responsivitas layar.",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Logika sisi server, perancangan API handal, dan pengolahan data.",
    skills: [
      {
        name: "PHP",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        description: "Bahasa pemrograman server-side untuk web dinamis dan aplikasi enterprise.",
      },
      {
        name: "Laravel",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        description: "Framework PHP dengan arsitektur MVC, Eloquent ORM, dan routing aman.",
      },
      {
        name: "Node.js",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "Runtime lingkungan JavaScript berbasis event-driven non-blocking I/O.",
      },
      {
        name: "REST API",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        description: "Perancangan endpoint standar RESTful, otentikasi JWT, dan format JSON.",
      },
    ],
  },
  {
    title: "Artificial Intelligence & Computer Vision",
    description: "Rekayasa sistem cerdas, pemrosesan citra digital, dan pemodelan data.",
    skills: [
      {
        name: "Python",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "Komputasi saintifik, manipulasi dataset, dan pipeline machine learning.",
      },
      {
        name: "OpenCV",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
        description: "Pemrosesan citra digital, ekstraksi fitur visual, dan deteksi objek real-time.",
      },
      {
        name: "Machine Learning",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
        description: "Algoritma klasifikasi, regresi, dan validasi model terawasi (supervised).",
      },
      {
        name: "Deep Learning",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        description: "Jaringan saraf tiruan (neural networks) untuk pengenalan pola kompleks.",
      },
      {
        name: "Computer Vision",
        iconUrl: "https://cdn.simpleicons.org/nvidia/76B900",
        description: "Pipeline analisis citra wajah, deteksi landmark, dan segmentasi visual.",
      },
      {
        name: "Natural Language Processing",
        iconUrl: "https://www.svgrepo.com/show/306500/openai.svg",
        description: "Pengolahan bahasa alami, transliterasi aksara, dan pencocokan teks linguistik.",
      },
    ],
  },
  {
    title: "Database & Cloud",
    description: "Penyimpanan data persisten dan infrastruktur backend cloud.",
    skills: [
      {
        name: "MySQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        description: "Manajemen basis data relasional (RDBMS), optimasi kueri SQL, dan integritas data.",
      },
      {
        name: "Firebase",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        description: "Cloud Firestore real-time database, Authentication, dan Cloud Storage.",
      },
      {
        name: "Supabase",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        description: "Backend-as-a-Service berbasis PostgreSQL dengan otentikasi dan edge functions.",
      },
    ],
  },
  {
    title: "Tools & Design",
    description: "Perangkat lunak kolaborasi tim, lingkungan pengembangan, dan desain antarmuka.",
    skills: [
      {
        name: "Git",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        description: "Distributed version control, branching strategy, dan histori commit aman.",
      },
      {
        name: "GitHub",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "Hosting repositori, pull request reviews, dan integrasi CI/CD workflows.",
      },
      {
        name: "Figma",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        description: "UI/UX wireframing, interactive prototyping, dan atomic design system.",
      },
      {
        name: "AutoCAD",
        iconUrl: "https://cdn.simpleicons.org/autodesk/E5173F",
        description: "Pemodelan teknis 2D dan perancangan gambar presisi tinggi.",
      },
      {
        name: "Android Studio",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        description: "IDE resmi pengembangan Android, profiling memori, dan emulasi perangkat.",
      },
      {
        name: "Visual Studio Code",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        description: "Editor kode utama dengan manajemen ekstensi terkonfigurasi dan debugging terintegrasi.",
      },
    ],
  },
];
