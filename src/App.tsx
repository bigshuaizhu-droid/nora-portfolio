import { useState, useEffect, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import { Project } from './data/content'

// 首屏以下组件懒加载 — 减少初始 JS 体积，加快首次渲染
const About = lazy(() => import('./components/About'))
const Capabilities = lazy(() => import('./components/Capabilities'))
const Works = lazy(() => import('./components/Works'))
const WorkPrinciples = lazy(() => import('./components/WorkPrinciples'))
const Footer = lazy(() => import('./components/Footer'))
const RunningCharacter = lazy(() => import('./components/RunningCharacter'))
const ProjectDetail = lazy(() => import('./components/ProjectDetail'))

/** 懒加载占位 — 透明无感，避免页面跳动 */
function SectionFallback() {
  return <div className="py-24 md:py-32" />
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'capabilities', 'works', 'approach']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(id)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1D1D1F] font-inter">
      <Nav activeSection={activeSection} />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Capabilities />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Works onSelectProject={setSelectedProject} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WorkPrinciples />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
      <Suspense fallback={null}>
        <RunningCharacter />
      </Suspense>
    </div>
  )
}
