import { capabilities } from '../data/content'

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-[#E5E5E7]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-16" style={{ fontWeight: 500 }}>
          Core Capabilities / 核心能力
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.key}
              className={`group py-6 px-1 border-t border-[#E5E5E7] ${
                cap.weight === 'secondary' ? 'opacity-70' : ''
              }`}
            >
              <div className="text-sm font-medium mb-2 text-[#1D1D1F]" style={{ fontWeight: 500 }}>
                {cap.en}
              </div>
              <div className="text-xs text-[#86868B] leading-relaxed">
                {cap.zh}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
