import { projects, Project } from '../data/content'
import { asset } from '../utils'

export default function Works({ onSelectProject }: { onSelectProject: (p: Project) => void }) {
  const primaryProjects = projects.filter((p) => p.weight === 'primary')
  const secondaryProjects = projects.filter((p) => p.weight === 'secondary')

  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-[#E5E5E7]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-16" style={{ fontWeight: 500 }}>
          Selected Works / 项目案例
        </h2>

        <div className="space-y-6">
          {primaryProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="w-full text-left group block"
            >
              <div className="bg-[#1A1A1A] rounded-lg hover:bg-[#242424] transition-colors overflow-hidden">
                {project.images[0] && (
                  <img
                    src={asset(project.images[0])}
                    alt={project.title}
                    className="w-full h-72 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                )}
                <div className="p-8 md:p-12">
                  <div className="text-xs text-[#86868B] mb-3 font-medium">{project.number}</div>
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-3" style={{ fontWeight: 500 }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#86868B] mb-4">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {secondaryProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="w-full text-left group"
            >
              <div className="border border-[#E5E5E7] rounded-lg overflow-hidden hover:border-[#86868B] transition-colors">
                {project.images[0] && (
                  <img
                    src={asset(project.images[0])}
                    alt={project.title}
                    className="w-full aspect-[2/1] object-cover object-top"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <div className="text-xs text-[#86868B] mb-2 font-medium">{project.number}</div>
                  <h3 className="text-base font-medium text-[#1D1D1F] mb-2" style={{ fontWeight: 500 }}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#86868B]">{project.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
