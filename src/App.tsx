import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Works from './components/Works'
import WorkPrinciples from './components/WorkPrinciples'
import Footer from './components/Footer'
import RunningCharacter from './components/RunningCharacter'
import ProjectDetail from './components/ProjectDetail'
import { Project } from './data/content'

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
      <About />
      <Capabilities />
      <Works onSelectProject={setSelectedProject} />
      <WorkPrinciples />
      <Footer />
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <RunningCharacter />
    </div>
  )
}
