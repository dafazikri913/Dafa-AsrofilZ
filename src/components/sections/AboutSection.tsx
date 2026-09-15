import { motion } from 'motion/react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillBadge } from '@/components/ui/SkillBadge'
import { staggerContainer, fadeInUpVariant } from '@/lib/animations'

interface AboutSectionProps {
  bio: string[]
  skills: string[]
}

export function AboutSection({ bio, skills }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 md:py-14 px-4 max-w-3xl mx-auto border-t border-purple-500/10">
      <SectionHeading>About Me</SectionHeading>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col gap-8"
      >
        {/* Bio paragraphs */}
        <motion.div
          variants={fadeInUpVariant}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          {bio.map((paragraph, i) => (
            <p key={i} className="text-white/70 text-base md:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={fadeInUpVariant}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm uppercase tracking-widest text-white/40 mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
