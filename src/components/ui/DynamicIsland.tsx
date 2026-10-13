import { useState, useEffect } from 'react'
import { useScrollTo } from '@/hooks/useScrollTo'
import { ExternalLink } from 'lucide-react'
import type { DockItem, SocialItem } from '@/data/portfolio'

interface DynamicIslandProps {
  navItems: DockItem[]
  socialItems: SocialItem[]
}

export function DynamicIsland({ navItems, socialItems }: DynamicIslandProps) {
  const scrollTo = useScrollTo()
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      if (scrollY + windowHeight >= docHeight - 70) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      const triggerPosition = scrollY + windowHeight * 0.35
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (triggerPosition >= top && triggerPosition < top + height) {
            current = id
            break
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  return (
    <>
      {/* ─── DESKTOP / TABLET: Floating Left Rail Dock ─── */}
      <nav
        aria-label="Sidebar Navigation Dock"
        className="fixed left-3 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col p-3 rounded-2xl bg-[#0b0521]/90 backdrop-blur-xl border border-purple-500/25 shadow-2xl shadow-purple-950/70 w-[172px] xl:w-[188px] transition-all duration-300"
      >
        {/* Header Indicator */}
        <div className="px-2.5 py-1 mb-2 flex items-center justify-between border-b border-white/[0.08] pb-1.5">
          <span className="text-[10px] uppercase tracking-wider text-purple-300/80 font-semibold font-mono">
            Navigation
          </span>
          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7] animate-pulse" />
        </div>

        {/* Navigation Items (Icon + Label in Pill Form) */}
        <div className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-[0_0_15px_rgba(168,85,247,0.45)] border-purple-400/50'
                    : 'text-white/75 hover:text-white hover:bg-white/[0.08] hover:border-white/10 border-transparent'
                }`}
              >
                <Icon
                  className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${
                    isActive ? 'text-white' : 'text-white/60 group-hover:text-purple-300'
                  }`}
                />
                <span className="truncate tracking-tight">{item.label}</span>
                <span
                  className={`ml-auto w-2 h-2 rounded-full bg-white transition-opacity duration-200 ${
                    isActive ? 'opacity-100 shadow-[0_0_6px_#ffffff]' : 'opacity-0'
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.08] my-2.5 mx-1" />

        {/* Social Connect Header */}
        <div className="px-2.5 py-0.5 mb-1 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono font-medium">
            Connect
          </span>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-1">
          {socialItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                aria-label={item.label}
              >
                <Icon className="w-4 h-4 text-purple-300/70 group-hover:text-purple-300 flex-shrink-0 transition-colors" />
                <span className="truncate font-medium">{item.label}</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-35 group-hover:opacity-80 transition-opacity" />
              </a>
            )
          })}
        </div>
      </nav>

      {/* ─── MOBILE: Bottom Navigation Dock ─── */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-1 px-3 py-2 bg-[#0b0521]/90 backdrop-blur-xl border border-purple-500/25 rounded-2xl shadow-2xl shadow-black/80 max-w-[92vw]"
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all ${
                isActive
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4" />
            </button>
          )
        })}

        <div className="w-px h-5 bg-white/10 mx-1" />

        {socialItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all"
              aria-label={item.label}
            >
              <Icon className="w-4 h-4 text-purple-300/70" />
            </a>
          )
        })}
      </nav>
    </>
  )
}
