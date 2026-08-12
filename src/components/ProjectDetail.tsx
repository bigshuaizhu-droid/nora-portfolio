import { useEffect } from 'react'
import { Project } from '../data/content'

export default function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative z-10 w-full mx-4 my-8 bg-[#FAFAFA] rounded-xl overflow-hidden ${project.h5Url ? 'max-w-4xl' : 'max-w-3xl'}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#1D1D1F]/5 hover:bg-[#1D1D1F]/10 transition-colors z-20"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="#1D1D1F" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="p-8 md:p-12">
          <div className="text-xs text-[#86868B] mb-2 font-medium">{project.number}</div>
          <h2 className="text-2xl md:text-3xl font-medium mb-3" style={{ fontWeight: 500 }}>
            {project.title}
          </h2>
          <p className="text-sm text-[#86868B] mb-6">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#1D1D1F]/5 text-[#86868B]">
                {tag}
              </span>
            ))}
          </div>

          {project.h5Url ? (
            <div className="mb-8 -mx-8 md:-mx-12">
              <iframe
                src={project.h5Url}
                title={project.title}
                className="w-full border-0"
                style={{ height: '80vh', minHeight: '600px' }}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          ) : project.images.length > 1 ? (
            <div className="mb-8 space-y-4">
              {project.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden bg-[#F5F5F7] border border-[#E5E5E7]"
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-auto object-contain max-h-[70vh] mx-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : null}

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium mb-2 text-[#1D1D1F]" style={{ fontWeight: 500 }}>Background</h3>
              <p className="text-sm text-[#86868B] leading-relaxed">{project.background}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2 text-[#1D1D1F]" style={{ fontWeight: 500 }}>Role</h3>
              <p className="text-sm text-[#86868B] leading-relaxed">{project.role}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3 text-[#1D1D1F]" style={{ fontWeight: 500 }}>Core Work</h3>
              <ul className="space-y-1.5">
                {project.work.map((item, i) => (
                  <li key={i} className="text-sm text-[#86868B] pl-4 border-l-2 border-[#E5E5E7]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {project.highlights.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-3 text-[#1D1D1F]" style={{ fontWeight: 500 }}>Highlights</h3>
                <ul className="space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-[#86868B] leading-relaxed pl-4 border-l-2 border-[#2563EB]">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.results && (
              <div>
                <h3 className="text-sm font-medium mb-2 text-[#1D1D1F]" style={{ fontWeight: 500 }}>Results</h3>
                <p className="text-sm text-[#1D1D1F] leading-relaxed font-medium">{project.results}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5E5E7]">
              {project.keywords.map((kw) => (
                <span key={kw} className="text-xs px-2 py-1 bg-[#1D1D1F]/5 text-[#1D1D1F] rounded">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
