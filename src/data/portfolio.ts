import type { LucideIcon } from 'lucide-react'
import { Home, User, Briefcase, Folder, Mail, Code2, Link } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DockItem {
  id: string
  label: string
  icon: LucideIcon
  type: 'nav'
}

export interface SocialItem {
  id: string
  label: string
  icon: LucideIcon
  href: string
  type: 'social'
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  linkHref: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location?: string
  description: string[]
  skills?: string[]
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  description?: string
  gpa?: string
}

export interface CertificateItem {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  skills?: string[]
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS: DockItem[] = [
  { id: 'hero',       label: 'Home',       icon: Home,      type: 'nav' },
  { id: 'about',      label: 'About',      icon: User,      type: 'nav' },
  { id: 'experience', label: 'Experience', icon: Briefcase, type: 'nav' },
  { id: 'projects',   label: 'Projects',   icon: Folder,    type: 'nav' },
  { id: 'contact',    label: 'Contact',    icon: Mail,      type: 'nav' },
]

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_ITEMS: SocialItem[] = [
  { id: 'github',   label: 'GitHub',   icon: Code2,  href: 'https://github.com/',    type: 'social' },
  { id: 'linkedin', label: 'LinkedIn', icon: Link,   href: 'https://linkedin.com/',  type: 'social' },
  { id: 'email',    label: 'Email',    icon: Mail,     href: 'mailto:hello@example.com', type: 'social' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: string[] = [
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Git',
  'Figma',
  'Next.js',
  'Vite',
  'Framer Motion',
]

// ─── Projects ─────────────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  name: 'Dafa Asrofil Z',
  expertise: 'Frontend Developer & UI/UX Specialist',
  tagline: 'Pengembang Web yang berfokus pada pembuatan antarmuka antarmuka modern, cepat, dan responsif.',
  roles: ['Frontend Developer', 'UI/UX Specialist'],
  avatarSrc: '/profile.jpg',
}

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = {
  bio: [
    'I am a passionate frontend developer with a strong focus on crafting intuitive and performant user interfaces. My work spans design systems, interactive animations, and modern web architectures.',
    'When I am not coding, I enjoy exploring new design trends, contributing to open source projects, and mentoring aspiring developers.',
  ],
  skills: SKILLS,
}

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Developer',
    company: 'Tech Studio Indonesia',
    period: '2023 - Present',
    location: 'Jakarta, Indonesia (Hybrid)',
    description: [
      'Memimpin pengembangan antarmuka aplikasi web modern berbasis React dan Next.js.',
      'Meningkatkan performa web hingga 40% dengan optimasi bundle size dan server-side rendering.',
      'Mentransfer pengetahuan dan membimbing developer junior dalam standar penulisan TypeScript.',
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Engineer',
    company: 'Digital Creative Labs',
    period: '2021 - 2023',
    location: 'Bandung, Indonesia',
    description: [
      'Mengembangkan sistem desain komponen UI yang digunakan oleh lebih dari 5 tim produk.',
      'Mengintegrasikan API RESTful dan WebSocket untuk fitur komunikasi real-time.',
      'Bekerjasama dengan desainer UI/UX untuk menciptakan interaksi mikro dan animasi yang responsif.',
    ],
    skills: ['React', 'JavaScript', 'Redux Toolkit', 'Framer Motion', 'REST API'],
  },
  {
    id: 'exp-3',
    role: 'Junior Web Developer',
    company: 'InnovateX Solutions',
    period: '2020 - 2021',
    location: 'Surabaya, Indonesia',
    description: [
      'Membuat landing page interaktif dan dashboard admin berbasis React.',
      'Melakukan perbaikan bug dan pengujian antarmuka aplikasi lintas browser.',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
  },
]

// ─── Education ────────────────────────────────────────────────────────────────

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'S1 Teknik Informatika / Ilmu Komputer',
    institution: 'Universitas Teknologi Indonesia',
    period: '2016 - 2020',
    description: 'Fokus pada Rekayasa Perangkat Lunak, Algoritma, dan Pemrograman Web.',
    gpa: '3.85 / 4.00',
  },
]

// ─── Certificates ─────────────────────────────────────────────────────────────

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Coursera / Meta',
    date: '2023',
    credentialUrl: 'https://coursera.org',
    skills: ['React', 'Advanced JavaScript', 'Version Control', 'UX Design Principles'],
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2022',
    credentialUrl: 'https://aws.amazon.com',
    skills: ['Cloud Computing', 'AWS Core Services', 'Security'],
  },
  {
    id: 'cert-3',
    title: 'React & TypeScript Mastery',
    issuer: 'Frontend Masters',
    date: '2021',
    credentialUrl: '#',
    skills: ['React', 'TypeScript', 'State Management'],
  },
]
