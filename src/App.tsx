import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { DynamicIsland } from '@/components/ui/DynamicIsland'
import { GradientBackground } from '@/components/ui/GradientBackground'
import heroImg from '@/assets/hero.png'
import { HERO, ABOUT, EXPERIENCES, EDUCATION, CERTIFICATES, PROJECTS, NAV_ITEMS, SOCIAL_ITEMS } from '@/data/portfolio'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Animated Blue-Purple-Black Gradient Blur Background */}
      <GradientBackground />

      {/* Main Content Layer */}
      <main className="relative z-10">
        <HeroSection
          name={HERO.name}
          expertise={HERO.expertise}
          tagline={HERO.tagline}
          avatarSrc={heroImg}
        />
        <AboutSection bio={ABOUT.bio} skills={ABOUT.skills} />
        <TimelineSection
          experiences={EXPERIENCES}
          education={EDUCATION}
          certificates={CERTIFICATES}
        />
        <ProjectsSection projects={PROJECTS} />
        <ContactSection socialLinks={SOCIAL_ITEMS} />
      </main>

      <DynamicIsland navItems={NAV_ITEMS} socialItems={SOCIAL_ITEMS} />
    </div>
  )
}
