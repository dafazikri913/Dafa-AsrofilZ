import { motion } from 'motion/react'
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillBadge } from '@/components/ui/SkillBadge'
import { staggerContainer, fadeInUpVariant } from '@/lib/animations'
import type { ExperienceItem, EducationItem, CertificateItem } from '@/data/portfolio'

interface TimelineSectionProps {
  experiences: ExperienceItem[]
  education: EducationItem[]
  certificates: CertificateItem[]
}

export function TimelineSection({ experiences, education, certificates }: TimelineSectionProps) {
  return (
    <section id="experience" className="py-12 md:py-14 px-4 max-w-4xl mx-auto border-t border-purple-500/10">
      <SectionHeading>Experience & Qualifications</SectionHeading>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col gap-16"
      >
        {/* ─── WORK EXPERIENCE SECTION ────────────────────────────────────────── */}
        <motion.div variants={fadeInUpVariant} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-md shadow-purple-950/40">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              <p className="text-sm text-white/50">Pengalaman Kerja & Karir Professional</p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 md:pl-8 border-l-2 border-purple-500/30 flex flex-col gap-10 ml-4 md:ml-5">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeInUpVariant}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Glowing Circle Node (Lingkaran Garis) */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#0d0010] shadow-[0_0_12px_rgba(168,85,247,0.9)] group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300" />

                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] shadow-xl shadow-black/40">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-purple-400 font-medium text-base">{exp.company}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                      <span className="flex items-center gap-1 bg-purple-950/60 border border-purple-500/20 px-3 py-1 rounded-full text-purple-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-white/40" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-1.5 text-white/70 text-sm md:text-base leading-relaxed mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="marker:text-purple-400">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {exp.skills.map((skill) => (
                        <SkillBadge key={skill} label={skill} className="text-xs bg-purple-950/40 border-purple-500/30 text-purple-200" />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── EDUCATION SECTION ─────────────────────────────────────────────── */}
        <motion.div variants={fadeInUpVariant} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-md shadow-purple-950/40">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
              <p className="text-sm text-white/50">Riwayat Pendidikan Akademik</p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 md:pl-8 border-l-2 border-purple-500/30 flex flex-col gap-10 ml-4 md:ml-5">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUpVariant}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Glowing Circle Node (Lingkaran Garis) */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#0d0010] shadow-[0_0_12px_rgba(168,85,247,0.9)] group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300" />

                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] shadow-xl shadow-black/40">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-400 font-medium text-base">{edu.institution}</p>
                    </div>

                    <span className="flex items-center gap-1 self-start md:self-auto bg-purple-950/60 border border-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  {edu.description && (
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3">
                      {edu.description}
                    </p>
                  )}

                  {edu.gpa && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-purple-200">
                      <span className="font-semibold text-purple-300">IPK / GPA:</span> {edu.gpa}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── CERTIFICATES SECTION ──────────────────────────────────────────── */}
        <motion.div variants={fadeInUpVariant} className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-md shadow-purple-950/40">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Certificates</h3>
              <p className="text-sm text-white/50">Sertifikasi & Lisensi Profesional</p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 md:pl-8 border-l-2 border-purple-500/30 flex flex-col gap-10 ml-4 md:ml-5">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeInUpVariant}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Glowing Circle Node (Lingkaran Garis) */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#0d0010] shadow-[0_0_12px_rgba(168,85,247,0.9)] group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300" />

                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] shadow-xl shadow-black/40">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-purple-400 font-medium text-sm">{cert.issuer}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 bg-purple-950/60 border border-purple-500/20 px-3 py-1 rounded-full text-xs text-purple-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </span>
                      {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-purple-300 hover:text-white transition-colors underline underline-offset-4"
                        >
                          Credential
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {cert.skills.map((skill) => (
                        <SkillBadge key={skill} label={skill} className="text-xs bg-purple-950/40 border-purple-500/30 text-purple-200" />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
