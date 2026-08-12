import { hero } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        {/* 左侧：照片 — 保持原样不动 */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-[#E5E5E7]">
            {hero.photo ? (
              <img
                src={hero.photo}
                alt={hero.name}
                className="w-full h-full object-contain object-top bg-[#F5F5F7]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#86868B] text-sm">
                照片待补充
              </div>
            )}
          </div>
        </div>

        {/* 右侧：文字 */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            {hero.name}
          </h1>
          <p className="text-base md:text-lg text-[#86868B] mb-12">
            B2B 市场营销 · 市场活动 · To G 项目
          </p>

          <div className="mb-12 space-y-4 text-sm md:text-base leading-relaxed text-[#1D1D1F]">
            {Array.isArray(hero.intro) ? (
              hero.intro.map((para, pi) => (
                <p key={pi}>
                  {para.map((seg, si) =>
                    seg.bold ? (
                      <strong key={si} className="font-semibold">{seg.text}</strong>
                    ) : (
                      <span key={si}>{seg.text}</span>
                    )
                  )}
                </p>
              ))
            ) : (
              <p>{hero.intro}</p>
            )}
          </div>

          <a
            href="#works"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-[#1D1D1F] rounded-full hover:bg-[#333] transition-colors"
          >
            查看项目案例
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L10 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
