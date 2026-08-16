import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Globe2, Layers3, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries, packages, projects, services, whatsappUrl } from '../../data/siteData'
import ContactSection from '../contact/ContactSection'

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: .65 } }

function HeroCore() {
  return (
    <div className="hero-core" aria-hidden="true">
      <div className="core-glow" />
      <motion.div className="core-ring ring-one" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
      <motion.div className="core-ring ring-two" animate={{ rotate: -360 }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }} />
      <motion.div className="core-j" animate={{ y: [-5, 7, -5], rotateZ: [-8, -5, -8] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>J</motion.div>
      <motion.div className="core-v" animate={{ y: [7, -5, 7], rotateZ: [10, 7, 10] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>V</motion.div>
      <div className="core-tag tag-one">WEB / 01</div><div className="core-tag tag-two">MOBILE / 02</div><div className="core-tag tag-three">SYSTEMS / 03</div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-grid">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <p className="eyebrow"><span className="status-dot" /> Independent digital product developer</p>
            <h1>Digital products<br />built to <em>matter.</em></h1>
            <p className="hero-text">I design and build distinctive websites, mobile apps and business systems for ambitious teams — from first idea to reliable launch.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">Get a quote <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#work">Explore selected work <ArrowDown size={17} /></a>
            </div>
          </motion.div>
          <HeroCore />
        </div>
        <div className="hero-meta"><span>WEB · MOBILE · SYSTEMS · 3D</span><span>INDIA / WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="statement section-pad">
        <motion.div {...reveal}>
          <p className="section-number">01 / Approach</p>
          <h2>Not just another build.<br /><span>A product with purpose.</span></h2>
          <p>I combine product thinking, design sensitivity and dependable engineering to make digital experiences people understand, enjoy and trust.</p>
        </motion.div>
        <div className="proof-strip">
          <div><Sparkles /><strong>Product-first</strong><span>Goals before features</span></div>
          <div><Layers3 /><strong>End-to-end</strong><span>Strategy through launch</span></div>
          <div><Globe2 /><strong>Remote-ready</strong><span>India to worldwide</span></div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div><p className="section-number">02 / What I do</p><h2>Built around your<br /><em>business goals.</em></h2></div>
          <p>From an essential launch page to a complete digital system, every engagement is shaped around the outcome you need.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <motion.article key={service.slug} className="service-row" {...reveal}>
              <span className="service-number">{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.short}</p></div>
              <ul>{service.details.map(item => <li key={item}>{item}</li>)}</ul>
              <Link to={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}><ArrowUpRight /></Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading section-heading-light">
          <div><p className="section-number">03 / Selected work</p><h2>Clear thinking.<br /><em>Tangible outcomes.</em></h2></div>
          <p>Early concept directions shown transparently while selected client work is prepared for publication.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article className={`project-card project-${index + 1}`} key={project.title} {...reveal}>
              <div className="project-image"><img src={project.media[0].src} alt={project.media[0].alt} loading="lazy" /><span>{project.typeLabel}</span></div>
              <div className="project-info"><p>{project.services.join(' · ')}</p><span>{project.year}</span><h3>{project.title}</h3><p className="project-description">{project.excerpt}</p><Link to={`/work/${project.slug}`}>View case study →</Link></div>
            </motion.article>
          ))}
        </div>
        <Link className="button button-outline-light" to="/work">View all work <ArrowRight size={18} /></Link>
      </section>

      <section className="process section-pad">
        <div className="section-heading">
          <div><p className="section-number">04 / The process</p><h2>Structured enough<br />to feel <em>simple.</em></h2></div>
          <p>You always know what’s happening, why it matters and what comes next.</p>
        </div>
        <div className="process-grid">
          {[
            ['01', 'Discover', 'We align on the goal, audience, constraints and what success looks like.'],
            ['02', 'Design', 'I shape the journeys, visual direction and technical plan before heavy development.'],
            ['03', 'Build', 'The product comes together in clear milestones, with regular staging reviews.'],
            ['04', 'Launch & improve', 'QA, deployment and handover — followed by focused care if you need it.'],
          ].map(([number, title, copy]) => <motion.div className="process-card" key={title} {...reveal}><span>{number}</span><h3>{title}</h3><p>{copy}</p></motion.div>)}
        </div>
      </section>

      <section className="packages section-pad">
        <div className="section-heading">
          <div><p className="section-number">05 / Ways to work together</p><h2>A focused place<br />to <em>begin.</em></h2></div>
          <p>No public price tags or confusing calculators. Tell me what you need and I’ll send a clear, scope-specific quote.</p>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className={`package-card ${item.featured ? 'featured' : ''}`} key={item.slug}>
              {item.featured && <span className="popular">Most requested</span>}
              <p className="package-label">{item.label}</p><h3>{item.name}</h3><p className="timeline">{item.timeline}</p>
              <ul>{item.includes.map(point => <li key={point}><Check size={15} />{point}</li>)}</ul>
              <a href={whatsappUrl(`${item.name} package (${item.includes.join(', ')})`)} target="_blank" rel="noreferrer">Get a quote <ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="industries section-pad">
        <p className="section-number">06 / Built for</p>
        <div className="industry-cloud">{industries.map((industry, index) => <span key={industry}>{industry}<sup>0{index + 1}</sup></span>)}</div>
      </section>

      <section className="principle section-pad">
        <div className="principle-mark">“</div>
        <blockquote>I’ll bring clarity to the difficult parts, communicate without the jargon, and build with the person using it in mind.</blockquote>
        <p>What you can expect — not a placeholder testimonial.</p>
      </section>

      <ContactSection />

      <section className="faq section-pad">
        <div><p className="section-number">07 / FAQ</p><h2>A few things<br />you may be <em>thinking.</em></h2></div>
        <div className="faq-list">
          {[
            ['How much will my project cost?', 'Every quote is based on your goals, scope and delivery needs. Share a short brief on WhatsApp and I’ll give you a clear next step.'],
            ['How long does a project take?', 'A focused launch page may take 2–3 weeks; larger websites, apps and systems commonly take 6–16 weeks.'],
            ['Do you work with international clients?', 'Yes. I’m based in India and work remotely with structured milestones, documentation and clear communication.'],
            ['Can you handle design and development?', 'Yes. I can take a project from early product thinking and interface design through development and launch.'],
            ['Will I own the code?', 'Yes. Project ownership transfers after final payment, with third-party licenses and subscriptions documented separately.'],
            ['What happens after launch?', 'I can stay involved through a flexible care plan covering monitoring, fixes and iterative releases.'],
          ].map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
        </div>
      </section>
    </>
  )
}
