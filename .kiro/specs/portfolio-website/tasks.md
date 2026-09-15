# Implementation Plan: Portfolio Website

## Overview

Membangun single-page portfolio website di atas stack yang sudah ada (React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Framer Motion). Implementasi dilakukan secara inkremental: data layer dan utilities terlebih dahulu, kemudian atomic UI components, lalu section components, dan terakhir perakitan di `App.tsx` beserta global styles.

---

## Tasks

- [x] 1. Setup struktur folder dan data layer
  - [x] 1.1 Buat direktori `src/data/`, `src/hooks/`, dan `src/components/sections/`
    - Pastikan semua folder target tersedia sebelum file ditulis
    - _Requirements: 1.1, 1.2_

  - [x] 1.2 Buat `src/data/portfolio.ts` dengan static data
    - Export `NAV_ITEMS`, `SOCIAL_ITEMS`, `SKILLS`, `PROJECTS`, `HERO`, `ABOUT`
    - Definisikan interface/type `DockItem`, `SocialItem`, `Project` di file ini
    - _Requirements: 2.2, 2.3, 3.2, 3.3, 4.3, 5.2_

- [x] 2. Utility files
  - [x] 2.1 Buat `src/lib/animations.ts` dengan shared animation variants
    - Export `fadeInUp`, `staggerContainer`, `fadeInUpVariant`
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 2.2 Buat `src/hooks/useScrollTo.ts`
    - Export hook `useScrollTo(): (sectionId: string) => void`
    - Implementasikan smooth scroll via `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`
    - _Requirements: 2.4, 3.5_

- [x] 3. Atomic UI components
  - [x] 3.1 Buat `src/components/ui/SectionHeading.tsx`
    - `motion.h2` dengan `whileInView` fade-in-up, `viewport={{ once: true }}`
    - `transition.duration` harus ≤ 0.6 (sesuai design Property 4)
    - _Requirements: 4.1, 5.1, 6.1, 7.3_

  - [ ]* 3.2 Tulis property test untuk `SectionHeading` — animasi duration
    - **Property 4: Section heading animation duration is within 0.6 seconds**
    - **Validates: Requirements 7.3**

  - [x] 3.3 Buat `src/components/ui/SkillBadge.tsx`
    - Styling: `px-3 py-1 rounded-full text-sm bg-white/10 border border-white/15 text-white/80`
    - _Requirements: 4.3_

  - [x] 3.4 Buat `src/components/ui/ProjectCard.tsx`
    - Tampilkan title, description, tag list (≥ 2 tags), link button
    - Card background: `bg-white/5 border border-white/10 rounded-2xl`
    - `motion.div` dengan `whileInView` fade-in-up, `viewport={{ once: true }}`
    - _Requirements: 5.3, 5.4, 5.5_

  - [ ]* 3.5 Tulis property test untuk `ProjectCard` — kelengkapan elemen
    - **Property 1: Project card contains all required elements**
    - **Validates: Requirements 5.3**

  - [ ]* 3.6 Tulis property test untuk `ProjectCard` — visual styling classes
    - **Property 2: Project card has required visual styling classes**
    - **Validates: Requirements 5.4**

  - [x] 3.7 Buat `src/components/ui/AnimatedInput.tsx`
    - `AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement>` dengan prop `label` dan `error?`
    - Gunakan `useMotionValue` + `animate` untuk stroke border `pathLength` saat focus/blur
    - SVG `motion.rect` dengan gradient stroke diposisikan absolute di atas input
    - _Requirements: 6.2, 6.3_

  - [x] 3.8 Buat `src/components/ui/AnimatedTextarea.tsx`
    - Identik dengan `AnimatedInput` namun menggunakan `<textarea>` sebagai elemen dasar
    - _Requirements: 6.2, 6.3_

  - [x] 3.9 Buat `src/components/ui/DynamicIsland.tsx`
    - `position: fixed`, `bottom: 1.5rem`, `left: 50%`, `transform: translateX(-50%)`
    - Background: `bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl`
    - Nav items: panggil `useScrollTo` saat klik; social items: buka `href` di tab baru
    - Tooltip label + `whileHover` scale-up animation untuk setiap item
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [x] 4. Checkpoint — pastikan semua komponen UI atomic dapat dikompilasi
  - Jalankan `tsc --noEmit` untuk memverifikasi tidak ada type error, tanyakan ke user jika ada masalah.

- [x] 5. Section components
  - [x] 5.1 Buat `src/components/sections/HeroSection.tsx`
    - Avatar circular ≥ 120×120px, fallback ke div inisial bila gambar error
    - Nama dengan heading ≥ 3rem
    - Animated cycling text (`AnimatePresence` + `motion.span`) untuk ≥ 3 role strings
    - Tagline statik di bawah animated text
    - CTA button "View My Work" → `useScrollTo('projects')`
    - Staggered fade-in-up `whileInView`, `viewport={{ once: true }}`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [x] 5.2 Buat `src/components/sections/AboutSection.tsx`
    - `SectionHeading` dengan teks "About Me"
    - Multi-paragraf bio (≥ 2 `<p>`)
    - Skill badges menggunakan `SkillBadge` (≥ 6 items)
    - Staggered fade-in-up `whileInView`, `viewport={{ once: true }}`
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [x] 5.3 Buat `src/components/sections/ProjectsSection.tsx`
    - `SectionHeading` dengan teks "Projects"
    - Grid responsif `grid grid-cols-1 md:grid-cols-2`
    - Render ≥ 3 `ProjectCard` dari data `PROJECTS`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 5.4 Buat `src/components/sections/ContactSection.tsx`
    - `SectionHeading` dengan teks "Contact"
    - Form dengan `AnimatedInput` (Name, Email) dan `AnimatedTextarea` (Message)
    - Validasi: empty/whitespace → inline error per field; email tanpa `@` → error
    - Success state: tampilkan konfirmasi dan reset form
    - Social links di bawah form: GitHub, LinkedIn, Email
    - Fade-in-up `whileInView`, `viewport={{ once: true }}`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

  - [ ]* 5.5 Tulis property test untuk `ContactSection` — validasi form
    - **Property 3: Form validation rejects any combination of empty required fields**
    - **Validates: Requirements 6.4**

- [x] 6. Checkpoint — pastikan semua section components dapat dikompilasi
  - Jalankan `tsc --noEmit`, tanyakan ke user jika ada issue.

- [x] 7. Perakitan root dan global styles
  - [x] 7.1 Update `src/App.tsx` sebagai root component
    - Bungkus semua section dalam `<div>` global background `bg-gradient-to-b from-black via-[#0d0010] to-[#1a0030] text-white min-h-screen`
    - Render urutan section: Hero → About → Projects → Contact
    - Render `DynamicIsland` dengan `NAV_ITEMS` dan `SOCIAL_ITEMS`
    - Hapus semua kode boilerplate Vite yang ada
    - _Requirements: 1.1, 1.2, 2.1_

  - [x] 7.2 Update `src/index.css` untuk global styles
    - Pastikan import `@tailwindcss`, `@fontsource-variable/inter`, dan `tw-animate-css` sudah ada
    - Tambahkan `html { scroll-behavior: smooth; }` untuk native smooth scroll fallback
    - Tambahkan `scroll-padding-top` untuk offset DynamicIsland bila diperlukan
    - _Requirements: 1.1, 1.3_

- [x] 8. Final checkpoint — build dan verifikasi
  - Jalankan `tsc -b && vite build` untuk memastikan production build berhasil tanpa error, tanyakan ke user jika ada issue.

---

## Notes

- Tasks bertanda `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task mereferensikan requirement spesifik untuk keterlacakan
- Checkpoint memastikan validasi inkremental di setiap fase
- Property tests memvalidasi correctness properties yang didefinisikan di design document
- Unit tests memvalidasi kasus-kasus spesifik dan edge case

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["2.1", "2.2"] },
    { "id": 3, "tasks": ["3.1", "3.3"] },
    { "id": 4, "tasks": ["3.2", "3.4", "3.7", "3.8", "3.9"] },
    { "id": 5, "tasks": ["3.5", "3.6", "5.1", "5.2", "5.3", "5.4"] },
    { "id": 6, "tasks": ["5.5", "7.1", "7.2"] }
  ]
}
```
