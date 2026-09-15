import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  label: string
  className?: string
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-sm bg-white/10 border border-white/15 text-white/80',
        className
      )}
    >
      {label}
    </span>
  )
}
