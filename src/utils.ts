/**
 * 资源路径工具 — GitHub Pages 部署在项目子目录下时需要加 base 前缀
 * Vite 设置 base: '/nora-portfolio/'，public 目录下的文件需手动拼接
 */
export function asset(p: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${p.replace(/^\//, '')}`
}
