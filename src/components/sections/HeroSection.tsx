import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles, Mail } from 'lucide-react'
import { staggerContainer, fadeInUpVariant } from '@/lib/animations'
import { useScrollTo } from '@/hooks/useScrollTo'

interface HeroSectionProps {
  name: string
  expertise?: string
  roles?: string[]
  tagline: string
  avatarSrc: string
}

export function HeroSection({ name, expertise, roles, tagline, avatarSrc }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false)
  const scrollTo = useScrollTo()

  const expertiseText = expertise || (roles && roles.length > 0 ? roles.join(' • ') : 'Frontend Developer & UI/UX Specialist')

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <section id="hero" className="py-12 md:py-16 px-4 max-w-4xl mx-auto flex items-center min-h-[75vh]">
      <motion.div
        className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          {/* Status / Welcome Badge */}
          <motion.div variants={fadeInUpVariant} transition={{ duration: 0.4 }}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs md:text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Halo, Saya {name}</span>
            </span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            {name}
          </motion.h1>

          {/* Simple Expertise Sentence */}
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400"
          >
            {expertiseText}
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-base md:text-lg max-w-lg leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
          >
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-purple-600 text-white font-medium text-sm md:text-base border-none hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-purple-900/40 cursor-pointer"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 text-white/90 font-medium text-sm md:text-base border-none hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-purple-300 group-hover:text-black transition-colors duration-300" />
              <span>Hubungi Saya</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Photo on the Right */}
        <motion.div
          variants={fadeInUpVariant}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 relative group"
        >
          {/* Ambient Glow behind avatar */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 pointer-events-none" />

          {/* Photo frame */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-purple-950/80 shadow-2xl shadow-purple-950/80 flex items-center justify-center">
            {!imgError ? (
              <img
                src={avatarSrc}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-4xl font-bold text-purple-200 bg-gradient-to-br from-purple-900 to-indigo-950"
                aria-label={`Avatar initials for ${name}`}
              >
                {initials}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
