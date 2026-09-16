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
    <section id="contact" className="py-12 md:py-14 px-4 max-w-3xl mx-auto pb-44 md:pb-48 border-t border-purple-500/10">
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
          className="relative bg-[#0e0826]/90 border border-purple-500/30 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-950/60 overflow-hidden group hover:border-purple-500/60 transition-all duration-300"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3)_0%,transparent_70%)] pointer-events-none transition-all duration-500" />

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
                className="group flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 text-white hover:bg-white hover:text-black font-medium transition-all duration-300 shadow-lg shadow-purple-900/50"
              >
                <Send className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                <span>Kirim Email</span>
              </a>

              {/* Web Gmail Button */}
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white/90 hover:bg-white hover:text-black hover:border-white font-medium transition-all duration-300"
                title="Buka langsung di Web Gmail"
              >
                <ExternalLink className="w-4 h-4 text-purple-300 group-hover:text-black transition-colors duration-300" />
                <span>Gmail Web</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white/90 hover:bg-white hover:text-black hover:border-white font-medium transition-all duration-300 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400 group-hover:text-green-800 transition-colors duration-300" />
                    <span className="text-green-300 group-hover:text-black transition-colors duration-300">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-purple-300 group-hover:text-black transition-colors duration-300" />
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
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-md"
              >
                <Icon className="w-5 h-5 text-purple-400 group-hover:text-black transition-colors duration-300" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            )
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          variants={fadeInUpVariant}
          transition={{ duration: 0.5 }}
          className="text-xs text-white/30 pt-8"
        >
          © 2026 Dafa Asrofil Z. All rights reserved.
        </motion.p>
      </motion.div>
    </section>
  )
}
