import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, MessageCircle } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteConfig, whatsappUrl } from '../../data/siteData'
import MobileNav from './MobileNav'
import ScrollProgress from '../motion/ScrollProgress'
import usePageSeo from '../../hooks/usePageSeo'
import { getTopic } from '../../data/blogData'
import BlogShareFloat from '../blog/BlogShareFloat'
import SocialIcon from '../ui/SocialIcon'

const nav = [['Work', '/work'], ['Services', '/services'], ['Blog', '/blogs'], ['About', '/about'], ['Contact', '/contact']]

function LocalTime() {
  const format = () => new Intl.DateTimeFormat('en-IN', { timeZone: siteConfig.timezone, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => { const timer = window.setInterval(() => setTime(format()), 30000); return () => window.clearInterval(timer) }, [])
  return <span>Local time {time} IST</span>
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const location = useLocation()
  const isBlog = location.pathname.startsWith('/blogs')
  const blogTopic = isBlog ? getTopic(location.pathname.split('/')[2]) : null
  const closeMenu = useCallback(() => setOpen(false), [])
  usePageSeo(location.pathname)

  useEffect(() => {
    if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView())
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`site-shell ${isBlog ? 'site-shell-blog' : ''}`} style={isBlog ? { '--blog-progress-color': blogTopic?.color || '#e96b3b' } : undefined}>
      <ScrollProgress blog={isBlog} pathname={location.pathname} />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Link to="/" className="brand" aria-label="Jigar Veera home"><span>JV</span><i /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label, href]) => <NavLink key={href} to={href}>{label}</NavLink>)}</nav>
        <Link className="header-cta" to="/contact">Get a quote <ArrowUpRight size={17} /></Link>
        <button ref={menuButtonRef} className="menu-button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Open navigation"><Menu /></button>
      </header>
      <MobileNav open={open} onClose={closeMenu} triggerRef={menuButtonRef} />
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="footer-lead">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let’s make it<br /><em>matter.</em></h2>
          <a className="circle-cta" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Get a quote on WhatsApp"><ArrowUpRight /></a>
        </div>
        <div className="footer-bottom">
          <Link to="/" className="footer-brand">Jigar<br />Veera<span>.</span></Link>
          <div><small>Contact</small><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div>
          <div><small>Explore</small><Link to="/services">Services</Link><Link to="/work">Selected work</Link><Link to="/about">About</Link></div>
          {blogTopic?.slug === 'ruby' ? <div><small>Ruby social</small><div className="footer-social-links">{[['instagram', 'Instagram', 'instagram'], ['facebook', 'Facebook', 'facebook'], ['youtube', 'YouTube Shorts', 'youtubeShorts']].map(([icon, label, key]) => blogTopic.social?.[key] ? <a key={key} href={blogTopic.social[key]} target="_blank" rel="noreferrer" aria-label={`Ruby on ${label}`} title={label}><SocialIcon name={icon} /></a> : <span key={key} aria-label={`${label} link coming soon`} title={`${label} link coming soon`}><SocialIcon name={icon} /></span>)}</div></div> : <div><small>Social</small><div className="footer-social-links"><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><SocialIcon name="linkedin" /></a><a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><SocialIcon name="github" /></a></div></div>}
        </div>
        <div className="footer-legal"><span>© {new Date().getFullYear()} Jigar Veera</span><LocalTime /><span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span></div>
      </footer>
      {isBlog ? <BlogShareFloat pathname={location.pathname} /> : <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={21} /><span>Let’s talk</span></a>}
    </div>
  )
}
