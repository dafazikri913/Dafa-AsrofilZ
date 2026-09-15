export function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transform-gpu">
      {/* Base Deep Dark Background */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Orb 1: Top Left - Electric Blue & Indigo */}
      <div className="animate-orb-1 absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 opacity-40 blur-[120px] transform-gpu" />

      {/* Orb 2: Top Right - Rich Purple & Violet */}
      <div className="animate-orb-2 absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600 opacity-35 blur-[130px] transform-gpu" />

      {/* Orb 3: Middle Left - Royal Blue & Cyan Accent */}
      <div className="animate-orb-3 absolute top-2/3 -left-40 w-[580px] h-[580px] rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 opacity-30 blur-[130px] transform-gpu" />

      {/* Orb 4: Bottom Right - Deep Indigo & Magenta */}
      <div className="animate-orb-4 absolute -bottom-40 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-indigo-700 via-purple-700 to-blue-800 opacity-40 blur-[140px] transform-gpu" />

      {/* Subtle Radial Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(3,0,20,0.65)_100%)]" />
    </div>
  )
}
