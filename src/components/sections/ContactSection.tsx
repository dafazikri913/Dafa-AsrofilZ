import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Copy, Check, ExternalLink, Send } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUpVariant } from '@/lib/animations'
import type { SocialItem } from '@/data/portfolio'

interface ContactSectionProps {
  socialLinks: SocialItem[]
  emailAddress?: string
}

export function ContactSection({ socialLinks, emailAddress = 'hello@example.com' }: ContactSectionProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`
  const mailtoUrl = `mailto:${emailAddress}`

  return (
    <section id="contact" className="py-12 md:py-14 px-4 max-w-3xl mx-auto pb-28 border-t border-purple-500/10">
      <SectionHeading>Contact Me</SectionHeading>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col gap-8 text-center"
      >
        {/* Subtitle */}
        <motion.p
          variants={fadeInUpVariant}
          transition={{ duration: 0.5 }}
          className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Tertarik untuk bekerja sama, diskusi proyek, atau sekadar menyapa?
          Kirim pesan langsung ke email saya atau terhubung melalui media sosial.
        </motion.p>

        {/* Main Email Direct Action Card */}
        <motion.div
          variants={fadeInUpVariant}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-b from-purple-950/40 via-white/[0.05] to-white/[0.02] border border-purple-500/30 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-950/40 backdrop-blur-md overflow-hidden group hover:border-purple-500/60 transition-all duration-300"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/30 transition-all duration-500" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-purple-900/50 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-950/80 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-1">Direct Email</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight hover:text-purple-300 transition-colors">
                {emailAddress}
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md pt-2">
              {/* Mailto / Default Mail App Button */}
              <a
                href={mailtoUrl}
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Email</span>
              </a>

              {/* Web Gmail Button */}
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 font-medium transition-all hover:-translate-y-0.5"
                title="Buka langsung di Web Gmail"
              >
                <ExternalLink className="w-4 h-4 text-purple-300" />
                <span>Gmail Web</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 font-medium transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-300">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-purple-300" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links Cards */}
        <motion.div
          variants={fadeInUpVariant}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap pt-4"
        >
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/10 text-white/80 hover:text-white transition-all shadow-md hover:-translate-y-0.5"
              >
                <Icon className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
