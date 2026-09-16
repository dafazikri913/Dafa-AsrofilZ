import React from "react"
import { cn } from "@/lib/utils"

export interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  RainbowButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex h-11 animate-rainbow items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(1px*1.5)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        // rainbow gradient blur glow behind
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:opacity-60 before:filter before:blur-[10px] before:animate-rainbow",
        // dark background layer + rainbow border gradient
        "bg-[linear-gradient(#0e0826,#0e0826),linear-gradient(#0e0826,#0e0826),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
        "[--color-1:hsl(0_100%_63%)] [--color-2:hsl(270_100%_63%)] [--color-3:hsl(210_100%_63%)] [--color-4:hsl(195_100%_63%)] [--color-5:hsl(90_100%_63%)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
})

RainbowButton.displayName = "RainbowButton"
