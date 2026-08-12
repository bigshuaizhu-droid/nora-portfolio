const links = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'capabilities', label: '核心能力' },
  { id: 'works', label: '项目案例' },
  { id: 'approach', label: '工作方法' },
  { id: 'contact', label: '联系我' },
]

export default function Nav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#E5E5E7]">
      <div className="flex items-center justify-between h-14 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
        <a href="#home" className="text-sm font-medium text-[#1D1D1F]">
          Nora
        </a>
        <div className="flex gap-3 md:gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-[10px] md:text-sm whitespace-nowrap transition-colors ${
                activeSection === link.id || (link.id === 'home' && activeSection === 'home')
                  ? 'text-[#1D1D1F]'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
