import { motion } from 'motion/react'

export function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base Deep Dark Background */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Orb 1: Top Left - Electric Blue & Indigo */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 35, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 opacity-40 blur-[130px]"
      />

      {/* Orb 2: Top Right - Rich Purple & Violet */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -45, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600 opacity-35 blur-[140px]"
      />

      {/* Orb 3: Middle Left - Royal Blue & Cyan Accent */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 45, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2/3 -left-40 w-[580px] h-[580px] rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 opacity-30 blur-[140px]"
      />

      {/* Orb 4: Bottom Right - Deep Indigo & Magenta */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -35, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-indigo-700 via-purple-700 to-blue-800 opacity-40 blur-[150px]"
      />

      {/* Subtle Radial Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(3,0,20,0.65)_100%)]" />
    </div>
  )
}
