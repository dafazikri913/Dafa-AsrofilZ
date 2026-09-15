import { useId, useState } from 'react'
import { animate, motion, useMotionValue } from 'motion/react'
import { cn } from '@/lib/utils'

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function AnimatedInput({ label, error, className, onFocus, onBlur, ...props }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const pathLength = useMotionValue(0)
  const inputId = useId()

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    animate(pathLength, 1, { duration: 0.5, ease: 'easeInOut' })
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    animate(pathLength, 0, { duration: 0.3, ease: 'easeInOut' })
    onBlur?.(e)
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm text-white/70">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          id={inputId}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder:text-white/30',
            'border outline-none transition-colors',
            isFocused ? 'border-transparent' : 'border-white/10',
            className
          )}
        />
        {/* SVG overlay for animated stroke border */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id={`strokeGradient-${inputId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <motion.rect
            x="1"
            y="1"
            // Use CSS to subtract 2px from the 100% SVG viewport dimensions
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              pathLength,
            }}
            rx="7"
            ry="7"
            fill="none"
            stroke={`url(#strokeGradient-${inputId})`}
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </div>
      {error && (
        <span role="alert" className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  )
}
