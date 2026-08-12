import { useState, useEffect, useRef, useMemo } from 'react'

/**
 * RunningCharacter — 一个跟随页面滚动轨迹跑动的小人
 *
 * 底部水平轨道映射页面滚动进度（0%→100%），小人沿轨道移动。
 * - 向下滚动时小人朝右跑，向上滚动时朝左跑
 * - 停止滚动后进入待机动画（轻微浮动）
 * - 位置通过 requestAnimationFrame + lerp 平滑过渡
 */

export default function RunningCharacter() {
  const [displayX, setDisplayX] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [facingRight, setFacingRight] = useState(true)

  const currentX = useRef(0)
  const targetX = useRef(0)
  const lastScrollY = useRef(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout>>()
  const rafId = useRef<number>()

  // 章节标记点（对应各 section 在页面中的大致位置）
  const markers = useMemo(() => [
    { label: 'Home', pct: 0 },
    { label: 'About', pct: 18 },
    { label: 'Capabilities', pct: 38 },
    { label: 'Works', pct: 56 },
    { label: 'Approach', pct: 78 },
    { label: 'Contact', pct: 96 },
  ], [])

  // 在组件挂载后注入动画样式（确保 DOM 已就绪）
  useEffect(() => {
    injectStyles()
  }, [])

  useEffect(() => {
    // 初始化位置
    const updateTarget = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      targetX.current = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
    }
    updateTarget()
    currentX.current = targetX.current
    setDisplayX(targetX.current)

    const handleScroll = () => {
      updateTarget()
      const scrollingDown = window.scrollY > lastScrollY.current
      setFacingRight(scrollingDown)
      setIsRunning(true)

      clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setIsRunning(false), 250)

      lastScrollY.current = window.scrollY
    }

    // 平滑动画循环：lerp 当前值趋近目标值
    const animate = () => {
      const diff = targetX.current - currentX.current
      if (Math.abs(diff) > 0.03) {
        currentX.current += diff * 0.12
        setDisplayX(currentX.current)
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(idleTimer.current)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  // 限制小人不要超出轨道两端
  const clampedX = Math.max(2, Math.min(98, displayX))

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none h-12 md:h-14">
      {/* 轨道容器，与页面内容区对齐 */}
      <div className="absolute bottom-4 md:bottom-5 left-6 right-6 md:left-16 md:right-16 lg:left-24 lg:right-24">
        {/* 轨道线 */}
        <div className="relative h-px bg-[#E5E5E7] w-full">
          {/* 章节标记点 */}
          {markers.map((m) => (
            <div
              key={m.label}
              className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#C5C5C7]"
              style={{ left: `${m.pct}%` }}
              title={m.label}
            />
          ))}
        </div>

        {/* 小人 */}
        <div
          className="absolute transition-none"
          style={{
            bottom: '4px',
            left: `${clampedX}%`,
            transform: `translateX(-50%) scaleX(${facingRight ? 1 : -1})`,
          }}
        >
          <CharacterFigure isRunning={isRunning} />
        </div>
      </div>
    </div>
  )
}

/* ================================================================
 * 小人 SVG 形象 — 极简线条风格，适配 Apple 设计语言
 * ================================================================ */
function CharacterFigure({ isRunning }: { isRunning: boolean }) {
  return (
    <svg
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isRunning ? 'animate-character-bounce' : 'animate-character-idle'}
      aria-hidden="true"
    >
      {/* 头 */}
      <circle cx="11" cy="6" r="5.5" fill="#1D1D1F" />

      {/* 身体 */}
      <rect x="7.5" y="12" width="7" height="9" rx="3.5" fill="#1D1D1F" />

      {/* 左腿 */}
      <line
        x1="9" y1="20" x2="7.5" y2="27"
        stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"
        className="origin-leg-left"
        style={{ transformOrigin: '9px 20px' }}
      />
      {/* 右腿 */}
      <line
        x1="13" y1="20" x2="14.5" y2="27"
        stroke="#1D1D1F" strokeWidth="2" strokeLinecap="round"
        className="origin-leg-right"
        style={{ transformOrigin: '13px 20px' }}
      />

      {/* 左臂 */}
      <line
        x1="8" y1="15" x2="4" y2="12"
        stroke="#1D1D1F" strokeWidth="1.8" strokeLinecap="round"
        className="origin-arm-left"
        style={{ transformOrigin: '8px 15px' }}
      />
      {/* 右臂 */}
      <line
        x1="14" y1="15" x2="18" y2="12"
        stroke="#1D1D1F" strokeWidth="1.8" strokeLinecap="round"
        className="origin-arm-right"
        style={{ transformOrigin: '14px 15px' }}
      />
    </svg>
  )
}

/* ================================================================
 * 注入动画关键帧到 <head> — 在 useEffect 中调用，确保 DOM 就绪
 * ================================================================ */
let stylesInjected = false
function injectStyles() {
  if (stylesInjected) return
  stylesInjected = true

  try {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes charBounce {
        0%, 100% { transform: translateY(0); }
        30%      { transform: translateY(-2.5px); }
        60%      { transform: translateY(-1px); }
      }
      @keyframes charIdle {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-1px); }
      }
      @keyframes leftLegSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(18deg); }
        75%      { transform: rotate(-18deg); }
      }
      @keyframes rightLegSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(-18deg); }
        75%      { transform: rotate(18deg); }
      }
      @keyframes leftArmSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(-15deg); }
        75%      { transform: rotate(15deg); }
      }
      @keyframes rightArmSwing {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(15deg); }
        75%      { transform: rotate(-15deg); }
      }
      .animate-character-bounce {
        animation: charBounce 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-leg-left {
        animation: leftLegSwing 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-leg-right {
        animation: rightLegSwing 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-arm-left {
        animation: leftArmSwing 0.35s ease-in-out infinite;
      }
      .animate-character-bounce .origin-arm-right {
        animation: rightArmSwing 0.35s ease-in-out infinite;
      }
      .animate-character-idle {
        animation: charIdle 2.5s ease-in-out infinite;
      }
    `
    document.head.appendChild(style)
  } catch {
    // 静默失败 — 动画样式仅用于装饰
  }
}
