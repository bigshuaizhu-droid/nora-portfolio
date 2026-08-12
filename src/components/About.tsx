import { aboutChapters } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-[#E5E5E7]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-16" style={{ fontWeight: 500 }}>
          <span>一个业务导向的市场人</span>
          <span className="text-[#86868B] font-normal ml-3 text-base">About</span>
        </h2>

        <p className="text-base text-[#86868B] max-w-2xl mb-12 leading-relaxed">
          我的职业经历横跨 B2B、To G、互联网和电影营销，但真正贯穿其中的，是市场项目与内容项目的策划和落地能力。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {aboutChapters.map((chapter) => (
            <div
              key={chapter.title}
              className="py-8 border-t border-[#E5E5E7] md:odd:pr-8 md:even:pl-8 md:[&:nth-child(-n+2)]:border-t-0"
            >
              <h3 className="text-sm font-medium mb-3 text-[#1D1D1F]" style={{ fontWeight: 500 }}>
                {chapter.title}
              </h3>
              <p className="text-sm text-[#86868B] leading-relaxed">
                {chapter.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
