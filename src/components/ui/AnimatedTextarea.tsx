import { useState, useId } from 'react'
import { motion, useMotionValue, animate } from 'motion/react'
import { cn } from '@/lib/utils'

interface AnimatedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function AnimatedTextarea({ label, error, className, ...props }: AnimatedTextareaProps) {
  const [isFocused, setIsFocused] = useState(false)
  const pathLength = useMotionValue(0)
  const textareaId = useId()

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true)
    animate(pathLength, 1, { duration: 0.5, ease: 'easeInOut' })
    props.onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false)
    animate(pathLength, 0, { duration: 0.3, ease: 'easeInOut' })
    props.onBlur?.(e)
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={textareaId} className="text-sm text-white/70">
        {label}
      </label>
      <div className="relative">
        <textarea
          {...props}
          id={textareaId}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder:text-white/30',
            'border border-white/10 outline-none transition-colors resize-none',
            isFocused && 'border-transparent',
            className
          )}
        />
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          style={{ borderRadius: 8 }}
        >
          <defs>
            <linearGradient id="strokeGradientTextarea" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <motion.rect
            x="1"
            y="1"
            rx="7"
            ry="7"
            fill="none"
            stroke="url(#strokeGradientTextarea)"
            strokeWidth={2}
            style={{
              pathLength,
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
            }}
            strokeLinecap="round"
          />
        </svg>
      </div>
      {error && (
        <span className="text-xs text-red-400">{error}</span>
      )}
    </div>
  )
}
