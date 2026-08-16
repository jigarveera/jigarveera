import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, BookOpen, Check, CloudCog, Code2, Layers3, MessageCircle, Monitor, Network, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  aboutCapabilities,
  aboutCommitments,
  aboutInterests,
  aboutJourney,
  aboutPhilosophy,
  aboutProfile,
  recentRead,
} from '../../data/aboutData'
import { projects, whatsappUrl } from '../../data/siteData'
import Reveal from '../motion/Reveal'

const capabilityIcons = {
  web: Monitor,
  mobile: Smartphone,
  systems: Network,
  cloud: CloudCog,
}

const interestIcons = {
  reading: BookOpen,
  experiments: Code2,
  cloud: CloudCog,
}

function PortraitScene() {
  const [portraitAvailable, setPortraitAvailable] = useState(true)

  return (
    <div className="about-portrait-scene">
      <div className="portrait-orbit portrait-orbit-one" />
      <div className="portrait-orbit portrait-orbit-two" />
      <div className="portrait-frame">
        <span className="portrait-coordinate">JV / 01</span>
        {portraitAvailable ? (
          <img src={aboutProfile.portrait.src} alt={aboutProfile.portrait.alt} onError={() => setPortraitAvailable(false)} />
        ) : (
          <div className="portrait-placeholder" role="img" aria-label="Portrait space reserved for Jigar Veera">
            <span>JV</span>
            <small>Portrait space</small>
          </div>
        )}
        <div className="portrait-glass" aria-hidden="true"><i /><i /><i /></div>
      </div>
      <p className="portrait-caption"><span /> Independent developer · India</p>
    </div>
  )
}

function CapabilityConstellation() {
  const [activeId, setActiveId] = useState(aboutCapabilities[0].id)
  const active = aboutCapabilities.find(item => item.id === activeId) ?? aboutCapabilities[0]
  const relatedProjects = active.projectSlugs.map(slug => projects.find(project => project.slug === slug)).filter(Boolean)

  return (
    <div className="capability-layout">
      <div className="capability-map" aria-label="Select a capability to explore">
        <div className="capability-core" aria-hidden="true"><Layers3 /><span>Build<br />system</span></div>
        <div className="capability-ring" aria-hidden="true" />
        {aboutCapabilities.map((item, index) => {
          const Icon = capabilityIcons[item.id]
          return (
            <button
              className={`capability-node capability-node-${index + 1} ${activeId === item.id ? 'is-active' : ''}`}
              type="button"
              key={item.id}
              onClick={() => setActiveId(item.id)}
              aria-pressed={activeId === item.id}
            >
              <Icon aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>
      <div className="capability-detail" aria-live="polite">
        <p className="section-number">Selected capability</p>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
        {active.learning && <span className="learning-tag">Active learning direction</span>}
        {relatedProjects.length > 0 ? (
          <div className="capability-work">
            <small>Related work</small>
            {relatedProjects.map(project => <Link key={project.slug} to={`/work/${project.slug}`}>{project.title}<ArrowUpRight /></Link>)}
          </div>
        ) : (
          <p className="capability-footnote">A dedicated public case study is not available yet.</p>
        )}
      </div>
    </div>
  )
}

function BookScene() {
  const sectionRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [takeawayId, setTakeawayId] = useState(recentRead.takeaways[0].id)
  const activeTakeaway = recentRead.takeaways.find(item => item.id === takeawayId) ?? recentRead.takeaways[0]

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return undefined
    const update = entries => setIsActive(entries[0].isIntersecting && !document.hidden)
    const observer = new IntersectionObserver(update, { threshold: 0.2 })
    const onVisibilityChange = () => setIsActive(!document.hidden && node.getBoundingClientRect().bottom > 0 && node.getBoundingClientRect().top < window.innerHeight)
    observer.observe(node)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <section className="about-book-section section-pad" ref={sectionRef} aria-labelledby="recent-read-heading">
      <Reveal className="about-book-copy">
        <p className="section-number">Recently read</p>
        <h2 id="recent-read-heading">Ideas only matter when they change the <em>work.</em></h2>
        <p className="book-intro">{recentRead.introduction}</p>
        <p className="book-note">{recentRead.note}</p>
      </Reveal>
      <Reveal className="book-lab" delay={0.08}>
        <div className={`book-object ${isActive ? 'is-active' : ''}`} aria-hidden="true">
          <div className="book-cover"><small>Recently read</small><strong>{recentRead.title}</strong><span>{recentRead.author}</span></div>
          <div className="book-pages" />
          <div className="book-spine"><span>Think Straight · Darius Foroux</span></div>
        </div>
        <div className="book-takeaways">
          <p className="section-number">What stayed with me</p>
          <div className="takeaway-controls" aria-label="Reading takeaways">
            {recentRead.takeaways.map(item => (
              <button type="button" key={item.id} className={takeawayId === item.id ? 'is-active' : ''} onClick={() => setTakeawayId(item.id)} aria-pressed={takeawayId === item.id}>
                {item.label}
              </button>
            ))}
          </div>
          <p className="takeaway-detail" aria-live="polite">{activeTakeaway.detail}</p>
          <div className="book-application">
            <small>How I apply it to projects</small>
            {recentRead.application.map(item => <p key={item}><Check aria-hidden="true" />{item}</p>)}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero section-pad">
        <Reveal className="about-hero-copy">
          <p className="eyebrow"><span className="status-dot" />{aboutProfile.eyebrow}</p>
          <h1>{aboutProfile.headline}</h1>
          <p className="about-introduction">{aboutProfile.introduction}</p>
          <div className="about-hero-actions">
            <Link className="button button-primary" to="/contact?source=about-hero">Start a conversation <ArrowUpRight /></Link>
            <Link className="text-link" to="/work">View selected work <ArrowRight /></Link>
          </div>
          <p className="about-trust-line">{aboutProfile.trustLine}</p>
        </Reveal>
        <Reveal delay={0.1}><PortraitScene /></Reveal>
      </section>

      <section className="about-facts section-pad" aria-label="Profile facts">
        {aboutProfile.facts.map(fact => <div key={fact.label}><small>{fact.label}</small><strong>{fact.value}</strong></div>)}
      </section>

      <section className="about-philosophy section-pad" aria-labelledby="philosophy-heading">
        <Reveal className="about-section-heading">
          <p className="section-number">Working philosophy</p>
          <h2 id="philosophy-heading">A calm process for turning ambiguity into <em>momentum.</em></h2>
        </Reveal>
        <div className="philosophy-path" aria-hidden="true" />
        <div className="philosophy-grid">
          {aboutPhilosophy.map((item, index) => (
            <Reveal as="article" className="philosophy-card" delay={index * 0.06} key={item.id}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-capabilities section-pad" aria-labelledby="capabilities-heading">
        <Reveal className="about-section-heading about-section-heading-light">
          <p className="section-number">Capability constellation</p>
          <h2 id="capabilities-heading">Different disciplines.<br />One connected <em>product.</em></h2>
          <p>Choose a node to see how the parts of my practice connect.</p>
        </Reveal>
        <Reveal delay={0.08}><CapabilityConstellation /></Reveal>
      </section>

      <section className="about-journey section-pad" aria-labelledby="journey-heading">
        <Reveal className="about-section-heading">
          <p className="section-number">The journey so far</p>
          <h2 id="journey-heading">Built in layers,<br />not invented <em>overnight.</em></h2>
          <p>The public version stays intentionally non-dated and focused on the direction of the work—no invented employers, awards or credentials.</p>
        </Reveal>
        <div className="journey-line">
          {aboutJourney.map((item, index) => (
            <Reveal as="article" className="journey-entry" delay={index * 0.06} key={item.id}>
              <span className="journey-marker" aria-hidden="true" /><small>{item.phase}</small><h3>{item.title}</h3><p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-interests section-pad" aria-labelledby="interests-heading">
        <Reveal className="about-section-heading">
          <p className="section-number">Beyond the client brief</p>
          <h2 id="interests-heading">Curiosity with a practical <em>outlet.</em></h2>
        </Reveal>
        <div className="interest-grid">
          {aboutInterests.map((item, index) => {
            const Icon = interestIcons[item.id]
            return (
              <Reveal as="details" className="interest-card" delay={index * 0.06} key={item.id}>
                <summary><Icon aria-hidden="true" /><small>{item.label}</small><h3>{item.title}</h3><p>{item.description}</p><span>Read note</span></summary>
                <p>{item.detail}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <BookScene />

      <section className="about-commitments section-pad" aria-labelledby="commitments-heading">
        <Reveal className="about-section-heading">
          <p className="section-number">What clients can expect</p>
          <h2 id="commitments-heading">A working relationship that stays <em>human.</em></h2>
        </Reveal>
        <div className="commitment-grid">
          {aboutCommitments.map((item, index) => <Reveal as="article" delay={index * 0.05} key={item.id}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}
        </div>
      </section>

      <section className="about-closing section-pad">
        <div>
          <p className="eyebrow">A personal invitation</p>
          <h2>If the problem matters,<br />let’s make the product <em>clear.</em></h2>
        </div>
        <div>
          <p>Bring the rough idea, the operational bottleneck or the product that has outgrown its current shape. I’ll help identify the most useful next move.</p>
          <div className="about-closing-actions">
            <Link className="button button-primary" to="/contact?source=about-closing">Start a project <ArrowUpRight /></Link>
            <a className="text-link" href={whatsappUrl('a project after reading your About page')} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
            <Link className="text-link" to="/services">Explore services <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
