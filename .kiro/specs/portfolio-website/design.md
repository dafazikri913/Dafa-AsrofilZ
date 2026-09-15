# Design Document — Portfolio Website

## Overview

Aplikasi ini adalah sebuah single-page portfolio website yang dibangun di atas React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Framer Motion. Halaman terdiri dari empat section yang dapat di-scroll (Hero, About, Projects, Contact), sebuah Dynamic Island floating dock yang selalu terlihat di bagian bawah viewport, dan form kontak dengan animated stroke border.

---

## Architecture

### High-Level Architecture

```
App (root)
├── GlobalBackground          — gradient hitam-ungu gelap, full-page wrapper
├── HeroSection               — avatar, nama, animated cycling text, CTA
├── AboutSection              — bio, skill badges
├── ProjectsSection           — grid kartu proyek
├── ContactSection            — form dengan animated stroke border, social links
└── DynamicIsland             — fixed dock navigasi + social, fixed position bottom-center
```

`App.tsx` merakit semua section dan DynamicIsland. Tidak ada routing — semua section berada dalam satu halaman, navigasi menggunakan native smooth-scroll ke anchor id.

### Component Tree

```
src/
├── App.tsx                          ← root, menyusun layout & section
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── button.tsx               ← existing shadcn/ui button
│       ├── globe.tsx                ← existing (tidak digunakan langsung)
│       ├── DynamicIsland.tsx        ← floating dock navigasi + sosial
│       ├── AnimatedInput.tsx        ← input + stroke border Framer Motion
│       ├── AnimatedTextarea.tsx     ← textarea + stroke border Framer Motion
│       ├── ProjectCard.tsx          ← kartu proyek individual
│       ├── SkillBadge.tsx           ← badge teknologi
│       └── SectionHeading.tsx      ← judul section dengan fade-in-up animation
├── lib/
│   └── utils.ts                     ← existing cn() helper
├── data/
│   └── portfolio.ts                 ← static data: proyek, skill, nav items
└── hooks/
    └── useScrollTo.ts               ← helper smooth scroll ke section id
```

---

## Component Interfaces

### `App.tsx`

```tsx
// Root component: menyusun semua section dan DynamicIsland
// Tidak ada props — komponen top-level

export default function App(): JSX.Element
```

### `DynamicIsland`

```tsx
interface DockItem {
  id: string          // section anchor id, e.g. 'hero', 'about'
  label: string       // tooltip label
  icon: LucideIcon
  type: 'nav'
}

interface SocialItem {
  id: string
  label: string
  icon: LucideIcon
  href: string
  type: 'social'
}

type DockItemConfig = DockItem | SocialItem

interface DynamicIslandProps {
  navItems: DockItem[]
  socialItems: SocialItem[]
}

export function DynamicIsland(props: DynamicIslandProps): JSX.Element
```

- Dirender dengan `position: fixed`, `bottom: 1.5rem`, `left: 50%`, `transform: translateX(-50%)`.
- Setiap item menampilkan tooltip `<span>` yang muncul saat hover via Framer Motion `whileHover`.
- Nav items memanggil `useScrollTo` pada klik; social items membuka `href` di tab baru.
- Background: `bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl`.

### `HeroSection`

```tsx
interface HeroProps {
  name: string
  roles: string[]           // minimal 3 strings untuk animated cycling text
  tagline: string
  avatarSrc: string
}

export function HeroSection(props: HeroProps): JSX.Element
```

- Animated cycling text menggunakan `AnimatePresence` + `motion.span` dengan transisi fade + slide.
- CTA button "View My Work" memanggil `useScrollTo('projects')`.
- Seluruh konten dibungkus `motion.div` dengan `whileInView` staggered fade-in-up, `viewport={{ once: true }}`.

### `AboutSection`

```tsx
interface AboutProps {
  bio: string[]             // array paragraf, minimal 2
  skills: string[]          // minimal 6 skill names
}

export function AboutSection(props: AboutProps): JSX.Element
```

- Setiap paragraf bio di-render sebagai `<p>`.
- Skills di-render menggunakan komponen `SkillBadge`.
- Semua elemen menggunakan `whileInView` + `viewport={{ once: true }}` fade-in-up.

### `ProjectsSection`

```tsx
interface Project {
  id: string
  title: string
  description: string
  tags: string[]            // minimal 2 tags
  linkHref: string
}

interface ProjectsSectionProps {
  projects: Project[]       // minimal 3 proyek
}

export function ProjectsSection(props: ProjectsSectionProps): JSX.Element
```

- Grid responsif: `grid-cols-1 md:grid-cols-2` menggunakan Tailwind.
- Setiap item dirender menggunakan `ProjectCard`.

### `ProjectCard`

```tsx
interface ProjectCardProps {
  project: Project
}

export function ProjectCard(props: ProjectCardProps): JSX.Element
```

- Card background: `bg-white/5 border border-white/10 rounded-2xl`.
- `motion.div` dengan `whileInView` fade-in-up, `viewport={{ once: true }}`.

### `ContactSection`

```tsx
interface ContactSectionProps {
  socialLinks: SocialItem[]
}

export function ContactSection(props: ContactSectionProps): JSX.Element
```

- Form berisi 3 field: Name (`AnimatedInput` type="text"), Email (`AnimatedInput` type="email"), Message (`AnimatedTextarea`).
- Validasi client-side sederhana (empty check) sebelum submit.
- Success state menampilkan pesan konfirmasi dan mereset field.

### `AnimatedInput`

```tsx
interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function AnimatedInput(props: AnimatedInputProps): JSX.Element
```

- Menggunakan `useMotionValue` + `animate` Framer Motion untuk stroke border dash-offset animation saat `isFocused`.
- SVG border overlay diposisikan absolute di atas input menggunakan `motion.svg` dengan `strokeDashoffset` / gradient sweep animation.
- Implementasi stroke animation:

```tsx
// Simplified stroke border pattern
const pathLength = useMotionValue(0)

const handleFocus = () => {
  animate(pathLength, 1, { duration: 0.5, ease: 'easeInOut' })
}
const handleBlur = () => {
  animate(pathLength, 0, { duration: 0.3, ease: 'easeInOut' })
}

// SVG rect di-render di atas input dengan pathLength motion value
<motion.rect
  style={{ pathLength }}
  stroke="url(#strokeGradient)"
  strokeWidth={2}
  fill="none"
  rx={8}
  width="100%"
  height="100%"
/>
```

### `AnimatedTextarea`

Identik dengan `AnimatedInput` tetapi menggunakan `<textarea>` sebagai elemen dasar.

### `SkillBadge`

```tsx
interface SkillBadgeProps {
  label: string
}

export function SkillBadge(props: SkillBadgeProps): JSX.Element
```

- Styling: `px-3 py-1 rounded-full text-sm bg-white/10 border border-white/15 text-white/80`.

### `SectionHeading`

```tsx
interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element
```

- Dibungkus `motion.h2` dengan `whileInView={{ opacity: 1, y: 0 }}`, `initial={{ opacity: 0, y: 24 }}`, `transition={{ duration: 0.5, ease: 'easeOut' }}`, `viewport={{ once: true }}`.

### `useScrollTo` Hook

```tsx
export function useScrollTo(): (sectionId: string) => void
```

- Memanggil `document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })`.

---

## Data Models

### `src/data/portfolio.ts`

```typescript
export const NAV_ITEMS = [
  { id: 'hero',     label: 'Home',     icon: HomeIcon    },
  { id: 'about',    label: 'About',    icon: UserIcon    },
  { id: 'projects', label: 'Projects', icon: FolderIcon  },
  { id: 'contact',  label: 'Contact',  icon: MailIcon    },
] satisfies DockItem[]

export const SOCIAL_ITEMS = [
  { id: 'github',   label: 'GitHub',   icon: GithubIcon,   href: 'https://github.com/', type: 'social' },
  { id: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/', type: 'social' },
  { id: 'email',    label: 'Email',    icon: MailIcon,     href: 'mailto:hello@example.com', type: 'social' },
] satisfies SocialItem[]

export const SKILLS = [
  'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git', 'Figma',
  'Next.js', 'Vite', 'Framer Motion',
]

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Project Alpha',
    description: 'A full-stack web application built with React and Node.js.',
    tags: ['React', 'Node.js'],
    linkHref: '#',
  },
  {
    id: 'project-2',
    title: 'Project Beta',
    description: 'A responsive UI design system with Tailwind CSS components.',
    tags: ['Tailwind CSS', 'TypeScript'],
    linkHref: '#',
  },
  {
    id: 'project-3',
    title: 'Project Gamma',
    description: 'An open-source CLI tool for automating development workflows.',
    tags: ['Node.js', 'CLI'],
    linkHref: '#',
  },
]

export const HERO = {
  name: 'Your Name',
  tagline: 'Building beautiful, fast, and accessible web experiences.',
  roles: ['Frontend Developer', 'UI/UX Enthusiast', 'Open Source Contributor'],
  avatarSrc: '/placeholder-avatar.jpg',
}

export const ABOUT = {
  bio: [
    'I am a passionate frontend developer with a strong focus on crafting intuitive and performant user interfaces. My work spans design systems, interactive animations, and modern web architectures.',
    'When I am not coding, I enjoy exploring new design trends, contributing to open source projects, and mentoring aspiring developers.',
  ],
  skills: SKILLS,
}
```

---

## Animation System

### Shared Animation Variants

```typescript
// src/lib/animations.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

export const fadeInUpVariant = {
  initial: { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0 },
}

// digunakan dengan: <motion.div variants={fadeInUpVariant} transition={{ duration: 0.5 }} />
```

### whileInView Pattern

Semua section menggunakan pola berikut agar animasi hanya terjadi sekali:

```tsx
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
>
  <motion.h2 variants={fadeInUpVariant} transition={{ duration: 0.5 }} />
  <motion.p  variants={fadeInUpVariant} transition={{ duration: 0.5, delay: 0.1 }} />
</motion.div>
```

Durasi maksimum animasi heading: **0.5 detik** (di bawah batas 0.6 detik requirement 7.3).

---

## Global Background

`App.tsx` membungkus semua konten dalam sebuah `<div>` dengan class:

```
min-h-screen bg-gradient-to-b from-black via-[#0d0010] to-[#1a0030] text-white
```

Section diberi padding vertical untuk spacing antar konten:

```
py-24 px-4 max-w-4xl mx-auto
```

---

## Form Validation

`ContactSection` mengelola state form secara lokal menggunakan `useState`:

```typescript
interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}
```

Validasi dijalankan saat `onSubmit`:
- Field kosong / hanya whitespace → error message ditampilkan inline.
- Email tidak mengandung `@` → error message email.
- Jika semua valid → `successMessage` state diset, semua field direset.

---

## Responsive Layout

| Breakpoint  | Layout                          |
|-------------|----------------------------------|
| `< 768px`   | Single column, semua section    |
| `≥ 768px`   | Projects grid: 2 kolom          |
| `≥ 1024px`  | Max-width container terpusat    |

Tailwind class yang digunakan: `grid grid-cols-1 md:grid-cols-2`.

---

## Error Handling

- Form validation: error ditampilkan inline per field, tidak ada network request (static portfolio).
- Avatar image: `<img>` dengan `onError` fallback ke placeholder div berisi inisial nama.
- Social links: selalu menggunakan `target="_blank" rel="noopener noreferrer"` untuk keamanan.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Project card contains all required elements

*For any* project object in the projects data array, rendering it as a `ProjectCard` component must produce a DOM element that contains the project title, a non-empty description, at least 2 technology tag elements, and a link button element.

**Validates: Requirements 5.3**

### Property 2: Project card has required visual styling classes

*For any* project object, the rendered `ProjectCard` must contain CSS class names that implement a dark card background and a visible border (i.e., both a background opacity class and a border class must be present on the card container).

**Validates: Requirements 5.4**

### Property 3: Form validation rejects any combination of empty required fields

*For any* form submission attempt where at least one required field (Name, Email, or Message) is empty or contains only whitespace, the system must display an inline validation error message for that specific field and must not display the success confirmation message.

**Validates: Requirements 6.4**

### Property 4: Section heading animation duration is within 0.6 seconds

*For any* `SectionHeading` component rendered in the application, the `transition.duration` prop on its motion element must be a number less than or equal to 0.6.

**Validates: Requirements 7.3**
