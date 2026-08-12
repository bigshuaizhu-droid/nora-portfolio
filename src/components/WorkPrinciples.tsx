import { workPrinciples } from '../data/content'

export default function WorkPrinciples() {
  return (
    <section id="approach" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-[#E5E5E7]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-16" style={{ fontWeight: 500 }}>
          工作方法 / How I Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="py-6 px-1 border-t border-[#E5E5E7]"
            >
              <h3 className="text-sm font-medium mb-3 text-[#1D1D1F]" style={{ fontWeight: 500 }}>
                {principle.title}
              </h3>
              <p className="text-sm text-[#86868B] leading-relaxed">
                {principle.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
