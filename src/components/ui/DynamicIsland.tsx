import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useScrollTo } from '@/hooks/useScrollTo'
import { cn } from '@/lib/utils'
import type { DockItem, SocialItem } from '@/data/portfolio'

interface DynamicIslandProps {
  navItems: DockItem[]
  socialItems: SocialItem[]
}

function DockButton({
  icon: Icon,
  label,
  onClick,
  href,
}: {
  icon: DockItem['icon']
  label: string
  onClick?: () => void
  href?: string
}) {
  const [hovered, setHovered] = useState(false)

  const content = (
    <motion.div
      className="relative flex items-center justify-center"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="tooltip"
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 backdrop-blur-sm border border-white/15 px-2 py-0.5 text-xs text-white/90 pointer-events-none"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      <Icon className="w-5 h-5 text-white/70" />
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/10 transition-colors"
        aria-label={label}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
      aria-label={label}
    >
      {content}
    </button>
  )
}

export function DynamicIsland({ navItems, socialItems }: DynamicIslandProps) {
  const scrollTo = useScrollTo()

  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transform-gpu',
        'flex items-center gap-1 px-3 py-2',
        'bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/40'
      )}
    >
      {navItems.map((item) => (
        <DockButton
          key={item.id}
          icon={item.icon}
          label={item.label}
          onClick={() => scrollTo(item.id)}
        />
      ))}

      {/* Divider */}
      <div className="w-px h-6 bg-white/10 mx-1" />

      {socialItems.map((item) => (
        <DockButton
          key={item.id}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </div>
  )
}
