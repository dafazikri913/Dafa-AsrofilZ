import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/data/portfolio'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4',
        className
      )}
    >
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-white/60 text-sm flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-xs bg-purple-900/40 border border-purple-500/30 text-purple-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white/90 hover:bg-white hover:text-black hover:border-white transition-all duration-300 mt-auto self-start"
      >
        <span>View Project</span>
        <ExternalLink className="w-3.5 h-3.5 text-purple-300 group-hover:text-black transition-colors duration-300" />
      </a>
    </motion.div>
  )
}
