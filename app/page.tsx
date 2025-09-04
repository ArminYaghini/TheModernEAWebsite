
import { HeroSection } from '@/components/sections/hero-section'
import { MissionSection } from '@/components/sections/mission-section' 
import { PillarsSection } from '@/components/sections/pillars-section'
import { EducationSection } from '@/components/sections/education-section'
import { ServicesSection } from '@/components/sections/services-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <PillarsSection />
      <EducationSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
