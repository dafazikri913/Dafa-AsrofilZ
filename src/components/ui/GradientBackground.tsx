export function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transform-gpu contain-strict">
      {/* Base Deep Dark Background */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Orb 1: Top Left - Electric Blue & Indigo */}
      <div className="animate-orb-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35)_0%,rgba(79,70,229,0.25)_45%,transparent_70%)] blur-2xl transform-gpu will-change-transform" />

      {/* Orb 2: Top Right - Rich Purple & Violet */}
      <div className="animate-orb-2 absolute top-1/4 -right-32 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.35)_0%,rgba(124,58,237,0.25)_45%,transparent_70%)] blur-2xl transform-gpu will-change-transform" />

      {/* Orb 3: Middle Left - Royal Blue & Cyan Accent */}
      <div className="animate-orb-3 absolute top-2/3 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25)_0%,rgba(59,130,246,0.2)_45%,transparent_70%)] blur-2xl transform-gpu will-change-transform" />

      {/* Orb 4: Bottom Right - Deep Indigo & Magenta */}
      <div className="animate-orb-4 absolute -bottom-40 right-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.3)_0%,rgba(168,85,247,0.25)_45%,transparent_70%)] blur-2xl transform-gpu will-change-transform" />

      {/* Subtle Radial Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(3,0,20,0.65)_100%)] pointer-events-none" />
    </div>
  )
}

