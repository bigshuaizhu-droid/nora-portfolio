import { footer } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-[#E5E5E7]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-16" style={{ fontWeight: 500 }}>
          联系我 / Contact
        </h2>

        <div className="mb-16">
          <h3 className="text-lg font-medium mb-4 text-[#1D1D1F]" style={{ fontWeight: 500 }}>
            Career Goal / 职业目标
          </h3>
          <p className="text-sm text-[#86868B] leading-relaxed max-w-2xl">
            {footer.goal}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 border-t border-[#E5E5E7]">
          <p className="text-xs text-[#86868B]">
            朱若楠 Nora
          </p>
          <p className="text-xs text-[#86868B]">
            {footer.contact}
          </p>
          <p className="text-xs text-[#86868B]">
            {footer.education}
          </p>
        </div>
      </div>
    </footer>
  )
}
