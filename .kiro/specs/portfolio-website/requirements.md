# Requirements Document

## Introduction

Portofolio website satu halaman (single-page application) dibangun di atas stack React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Framer Motion. Halaman menampilkan profil template dengan desain simpel, background gradient hitam-ungu gelap, Dynamic Island floating dock di bagian bawah, serta empat section yang dapat di-scroll: Hero, About, Projects, dan Contact. Input pada form Contact memiliki animasi stroke border.

## Glossary

- **Portfolio App**: Aplikasi React SPA yang menjadi subjek requirements ini.
- **Dynamic Island**: Komponen floating dock yang ditampilkan secara persisten di bagian bawah tengah viewport, berisi link navigasi section dan link sosial media.
- **Hero Section**: Section pertama halaman yang menampilkan foto placeholder, nama, judul/tagline, dan teks animasi.
- **About Section**: Section yang menampilkan ringkasan bio placeholder dan daftar skill/teknologi.
- **Projects Section**: Section yang menampilkan kartu-kartu proyek template.
- **Contact Section**: Section yang memuat form dengan input Name, Email, dan Message, beserta tombol Submit.
- **Animated Stroke Border**: Efek animasi garis bergerak mengelilingi tepi elemen input/textarea menggunakan Framer Motion.
- **Dark Gradient Background**: Latar belakang halaman berupa gradasi dari hitam ke ungu gelap yang diterapkan secara global.
- **Scroll Animation**: Animasi kemunculan elemen saat section memasuki viewport.

---

## Requirements

### Requirement 1 — Global Layout & Background

**User Story:** As a visitor, I want a visually cohesive dark-themed page, so that the portfolio looks professional and memorable.

#### Acceptance Criteria

1. THE Portfolio App SHALL apply a dark gradient background (from black to deep purple, e.g., `from-black via-[#0d0010] to-[#1a0030]`) across the full page height.
2. THE Portfolio App SHALL render sections in the following fixed order: Hero → About → Projects → Contact.
3. THE Portfolio App SHALL use Inter Variable as the primary font for all text.
4. WHEN the viewport width is less than 768px, THE Portfolio App SHALL switch to a single-column layout for all multi-column sections.

---

### Requirement 2 — Dynamic Island Floating Dock

**User Story:** As a visitor, I want a floating navigation dock at the bottom of the screen, so that I can quickly jump to any section or open social media links without scrolling back to the top.

#### Acceptance Criteria

1. THE Dynamic Island SHALL be rendered as a fixed-position element anchored to the bottom center of the viewport at all times.
2. THE Dynamic Island SHALL contain navigation links for each of the four sections: Hero, About, Projects, and Contact.
3. THE Dynamic Island SHALL contain social media icon links for GitHub, LinkedIn, and Email.
4. WHEN a navigation link is clicked, THE Dynamic Island SHALL trigger a smooth scroll to the corresponding section.
5. WHEN a social media link is clicked, THE Dynamic Island SHALL open the corresponding URL in a new browser tab.
6. WHEN the user hovers over a dock item, THE Dynamic Island SHALL display a tooltip label above the icon and apply a scale-up animation to the icon.
7. THE Dynamic Island SHALL have a semi-transparent dark background with a subtle border and backdrop blur effect.

---

### Requirement 3 — Hero Section

**User Story:** As a visitor, I want a visually engaging introduction, so that I immediately understand who the portfolio owner is.

#### Acceptance Criteria

1. THE Hero Section SHALL display a circular placeholder avatar image (minimum 120×120px) centered above the name text.
2. THE Hero Section SHALL display a static name text (e.g., "Your Name") using a large heading font size (minimum 3rem).
3. THE Hero Section SHALL display an animated cycling text that rotates through at least three role/title strings (e.g., "Frontend Developer", "UI/UX Enthusiast", "Open Source Contributor") using a typewriter or fade transition animation.
4. THE Hero Section SHALL display a short bio tagline below the animated text.
5. THE Hero Section SHALL display a call-to-action button labeled "View My Work" that, WHEN clicked, THE Hero Section SHALL trigger a smooth scroll to the Projects Section.
6. WHEN the Hero Section enters the viewport, THE Hero Section SHALL animate its content into view using a staggered fade-in-up motion.

---

### Requirement 4 — About Section

**User Story:** As a visitor, I want to learn about the portfolio owner's background and skills, so that I can assess their expertise.

#### Acceptance Criteria

1. THE About Section SHALL display a section heading "About Me".
2. THE About Section SHALL display a multi-paragraph bio placeholder text (minimum 2 paragraphs).
3. THE About Section SHALL display a skill/technology list using badge-style tags (minimum 6 tags, e.g., React, TypeScript, Node.js, Tailwind CSS, Git, Figma).
4. WHEN the About Section enters the viewport, THE About Section SHALL animate the bio text and skill badges into view using a staggered fade-in motion.

---

### Requirement 5 — Projects Section

**User Story:** As a visitor, I want to see a showcase of projects, so that I can evaluate the portfolio owner's work.

#### Acceptance Criteria

1. THE Projects Section SHALL display a section heading "Projects".
2. THE Projects Section SHALL render at least 3 project cards in a responsive grid (2 columns on desktop, 1 column on mobile).
3. EACH project card SHALL display a project title, a short description placeholder, a technology tag list (minimum 2 tags), and a placeholder link button.
4. THE Projects Section SHALL apply a subtle border and dark card background to each project card.
5. WHEN a project card enters the viewport, THE Projects Section SHALL animate the card into view using a fade-in-up motion.

---

### Requirement 6 — Contact Section & Animated Form

**User Story:** As a visitor, I want to send a message through the portfolio, so that I can get in touch with the portfolio owner.

#### Acceptance Criteria

1. THE Contact Section SHALL display a section heading "Contact".
2. THE Contact Section SHALL render a form containing three fields: Name (text input), Email (email input), and Message (textarea).
3. WHEN an input or textarea field receives focus, THE Contact Section SHALL animate a stroke border effect around the field using a moving gradient or dash-offset animation via Framer Motion.
4. WHEN the form is submitted with all fields empty, THE Contact Section SHALL display inline validation messages indicating each required field.
5. WHEN the form is submitted with all required fields filled, THE Contact Section SHALL display a success confirmation message (e.g., "Message sent! I'll get back to you soon.") and reset the form fields.
6. THE Contact Section SHALL display social media icon links for GitHub, LinkedIn, and Email below the form as an alternative contact method.
7. WHEN the Contact Section enters the viewport, THE Contact Section SHALL animate the form into view using a fade-in-up motion.

---

### Requirement 7 — Scroll Animations & Performance

**User Story:** As a visitor, I want smooth scroll-triggered animations throughout the page, so that the experience feels polished without sacrificing performance.

#### Acceptance Criteria

1. THE Portfolio App SHALL use Framer Motion's `useInView` hook or `whileInView` prop to trigger animations only when elements enter the viewport.
2. THE Portfolio App SHALL use `once: true` on all scroll-triggered animations so that each animation fires at most one time per page load.
3. WHEN a section heading enters the viewport, THE Portfolio App SHALL animate it with a fade-in-up motion with a duration of at most 0.6 seconds.
4. THE Portfolio App SHALL not load animation variants or heavy components until they are needed, keeping the initial bundle lean.
