import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import { siteConfig, whatsappUrl } from '../../data/siteData'

function ConnectionNode() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const node = ref.current
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting && !document.hidden), { rootMargin: '80px' })
    const onVisibility = () => setInView(node && !document.hidden && node.getBoundingClientRect().bottom > 0 && node.getBoundingClientRect().top < window.innerHeight)
    observer.observe(node)
    document.addEventListener('visibilitychange', onVisibility)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility) }
  }, [])
  return <div ref={ref} className={`connection-node ${inView ? 'is-active' : ''}`} aria-hidden="true"><i className="node-line line-web" /><i className="node-line line-mobile" /><i className="node-line line-systems" /><i className="node-line line-three" /><b>JV</b><span className="node-web">WEB</span><span className="node-mobile">MOBILE</span><span className="node-systems">SYSTEMS</span><span className="node-three">3D</span></div>
}

export default function ContactSection({ compact = true }) {
  return <section className={`contact-section section-pad ${compact ? '' : 'contact-section-full'}`}>
    <div className="contact-intro">
      <p className="section-number">08 / Start a project</p>
      <h2>Let’s build something that moves your business <em>forward.</em></h2>
      <p>Tell me what you are building, where you are today and what success should look like. I will reply with the most useful next step.</p>
      <div className="contact-methods"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a></div>
      <div className="contact-meta"><span>{siteConfig.responseWindow}</span><span>{siteConfig.location}</span></div>
      <ConnectionNode />
      {compact && <Link className="text-link" to="/contact">Prefer the complete inquiry page? →</Link>}
    </div>
    <div className="contact-panel"><ContactForm compact={compact} source={compact ? 'home-contact' : 'contact-page'} /></div>
  </section>
}
