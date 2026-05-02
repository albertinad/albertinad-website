import { useTheme } from '@/hooks/useTheme'
import { ParticleCanvas } from '@/components/ParticleCanvas'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ProgressSection } from '@/components/ProgressSection'
import { Footer } from '@/components/Footer'
import { pageCss, mainCss } from './styles'

const PARTICLE_CONFIG = {
  accentColor: '#22c55e',
  density: 70,
  speed: 0.35,
  connDist: 130,
} as const

export const App = () => {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <>
      <ParticleCanvas {...PARTICLE_CONFIG} theme={theme} />
      <div className={pageCss}>
        <Header isDark={isDark} onToggleTheme={toggleTheme} />
        <main className={mainCss}>
          <Hero />
          <AboutSection />
          <ProgressSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
