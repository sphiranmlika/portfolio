# Personal Portfolio Website — Software Engineer

A modern, responsive, and visually polished personal portfolio website designed for a **Software Engineer** specializing in **Frontend Development**, **Mobile Engineering (Flutter)**, and **Full-Stack Web Development**.

Built with Next.js (App Router), TypeScript, Tailwind CSS, Base UI, Motion, and Google Fonts (`Plus Jakarta Sans` & `Playfair Display`).

---

## 🎨 Brand Identity & Color Palette

| Color | Hex Code | Purpose |
|---|---|---|
| **Burgundy** | `#810B38` | Primary brand color, buttons, links, accents |
| **Warm Cream** | `#F1E2D1` | Main website background |
| **Soft Beige** | `#DCC3AA` | Secondary backgrounds, cards, subtle borders |
| **Dark Maroon** | `#541A1A` | Headings, primary typography, dark accents |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components & Dynamic Prefetching)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **UI Primitives**: Base UI (`@base-ui/react`) & shadcn/ui Nova preset
- **Animation**: [Motion](https://motion.dev/) (`motion/react`)
- **Typography**: `Plus Jakarta Sans` (Primary UI) and `Playfair Display` (Headings & Editorial) via `next/font/google`
- **Icons**: Lucide React & custom vector brand icons

---

## 📁 Project Architecture

```text
portfolio-Saphira Nur Malika/
├── app/
│   ├── layout.tsx              # Root layout with Google Fonts & metadata
│   ├── globals.css             # Tailwind CSS tokens & color variables
│   ├── page.tsx                # Homepage assembling all sections
│   ├── not-found.tsx           # Custom 404 page
│   ├── about/
│   │   └── page.tsx            # Dedicated About Me page
│   ├── projects/
│   │   ├── page.tsx            # All Projects page with search & category filtering
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic Project Case Study Detail page
│   ├── certifications/
│   │   └── page.tsx            # Dedicated Certifications page with category filters
│   └── contact/
│       └── page.tsx            # Dedicated Contact page with interactive form
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky responsive navigation with mobile drawer
│   │   ├── Footer.tsx          # Footer with social links, navigation & back-to-top
│   │   └── Container.tsx       # Standardized responsive container wrapper
│   ├── sections/
│   │   ├── Hero.tsx            # Impactful hero with photo frame & CTAs
│   │   ├── About.tsx           # Professional summary & principles
│   │   ├── Skills.tsx          # Structured technical skills catalog
│   │   ├── FeaturedProjects.tsx# Showcase cards of selected work
│   │   ├── Experience.tsx      # Professional timeline & leadership roles
│   │   ├── Education.tsx       # Degree & academic background
│   │   ├── Certifications.tsx  # Featured professional credentials
│   │   └── Contact.tsx         # Direct contact details & interactive form
│   └── shared/
│       ├── SectionHeading.tsx  # Reusable editorial section heading
│       ├── SocialLinks.tsx     # Reusable social media pill buttons
│       ├── ProjectCard.tsx     # Reusable project card with tags & links
│       ├── SkillCard.tsx       # Skill category card with icons
│       ├── CertificateCard.tsx # Credential card with verification links
│       └── Icons.tsx           # Vector SVG icons
│
├── data/
│   ├── personal.ts             # Name, bio, tagline, socials, CV link
│   ├── projects.ts             # Detailed project catalog & case study data
│   ├── skills.ts               # Categorized technical skills
│   ├── experience.ts           # Work experience & organizational leadership
│   ├── education.ts            # Academic degrees & GPA
│   ├── certificates.ts         # Professional credentials & verification links
│   └── navigation.ts           # Navbar & footer link definitions
│
├── types/
│   ├── project.ts              # Project interface
│   ├── skill.ts                # Skill & category interfaces
│   ├── experience.ts           # Experience & organization interfaces
│   ├── education.ts            # Education interface
│   └── certificate.ts          # Certificate interface
│
├── public/
│   ├── images/
│   │   ├── profile/            # Portrait image
│   │   └── projects/           # Project preview graphics
│   └── documents/
│       └── cv.pdf              # Downloadable resume
│
├── postcss.config.js           # PostCSS configuration for Tailwind CSS v4
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript strict configuration
└── package.json
```

---

## ✏️ How to Customize Content

All website content is strictly decoupled from UI presentation and resides in `data/`:

1. **Personal Information & Bio**:
   - Edit `data/personal.ts` to update your name, email, bio paragraphs, social media links, and resume path.
2. **Projects & Case Studies**:
   - Edit `data/projects.ts` to add or modify projects. Each project automatically gets a dedicated detail page at `/projects/[slug]`.
3. **Skills & Tech Stack**:
   - Edit `data/skills.ts` to adjust programming languages, frameworks, and developer tools.
4. **Work Experience**:
   - Edit `data/experience.ts` to update job titles, companies, employment dates, and contributions.
5. **Education**:
   - Edit `data/education.ts` to update university degrees, GPA, and academic milestones.
6. **Certificates**:
   - Edit `data/certificates.ts` to add genuine credentials, credential IDs, and issuer verification URLs.
7. **Resume / CV**:
   - Replace `public/documents/cv.pdf` with your actual PDF resume.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Quality Assurance Checks

```bash
# Type check TypeScript
npx tsc --noEmit

# Lint code quality
npm run lint

# Production build
npm run build
```

---

## 🌐 Deploying to Vercel

1. Push this repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**.
