import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../data/siteData'

const nav = [['Work', '/work'], ['Services', '/services'], ['Blog', '/blogs'], ['About', '/about'], ['Contact', '/contact']]

export default function MobileNav({ open, onClose, triggerRef }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const scrollY = window.scrollY
    const trigger = triggerRef.current
    const body = document.body
    const previous = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow }
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusable = () => [...panel.querySelectorAll('a[href], button:not([disabled])')]
    const first = focusable()[0]
    requestAnimationFrame(() => first?.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return }
      if (event.key !== 'Tab') return
      const items = focusable()
      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      if (event.shiftKey && document.activeElement === firstItem) { event.preventDefault(); lastItem.focus() }
      else if (!event.shiftKey && document.activeElement === lastItem) { event.preventDefault(); firstItem.focus() }
    }
    const media = window.matchMedia('(min-width: 761px)')
    const onDesktop = (event) => { if (event.matches) onClose() }
    document.addEventListener('keydown', onKeyDown)
    media.addEventListener('change', onDesktop)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      media.removeEventListener('change', onDesktop)
      Object.assign(body.style, previous)
      window.scrollTo(0, scrollY)
      requestAnimationFrame(() => trigger?.focus())
    }
  }, [open, onClose, triggerRef])

  if (!open) return null

  return createPortal(
    <div className="mobile-nav-layer" role="presentation">
      <button className="mobile-nav-backdrop" aria-label="Close navigation" onClick={onClose} />
      <section ref={panelRef} id="mobile-navigation" className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
        <div className="mobile-nav-top"><span className="brand"><span>JV</span><i /></span><button className="mobile-nav-close" onClick={onClose} aria-label="Close navigation"><X /></button></div>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href], index) => <NavLink key={href} to={href} onClick={onClose}><small>0{index + 1}</small>{label}</NavLink>)}
        </nav>
        <p>{siteConfig.location}</p>
      </section>
    </div>,
    document.body,
  )
}
