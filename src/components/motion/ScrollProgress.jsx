import { useEffect, useState } from 'react'

export default function ScrollProgress({ blog = false, pathname }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      setProgress(available > 0 ? Math.max(0, Math.min(1, window.scrollY / available)) : 0)
    }
    update()
    const frame = window.requestAnimationFrame(update)
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null
    if (observer) observer.observe(document.body)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { window.cancelAnimationFrame(frame); observer?.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [blog, pathname])
  return <div className={`scroll-progress ${blog ? 'scroll-progress-blog' : ''}`} role={blog ? 'progressbar' : undefined} aria-label={blog ? 'Page reading progress' : undefined} aria-valuenow={blog ? Math.round(progress * 100) : undefined} aria-valuemin={blog ? 0 : undefined} aria-valuemax={blog ? 100 : undefined}>
    <i aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
    {blog && <span className="blog-progress-label" aria-label={`${Math.round(progress * 100)} percent read`}>READ <strong>{String(Math.round(progress * 100)).padStart(2, '0')}%</strong></span>}
  </div>
}
