import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../../data/siteData'
import NotFoundPage from '../pages/NotFoundPage'

export default function ProjectPage() {
  const { slug } = useParams()
  const published = projects.filter(item => item.published)
  const index = published.findIndex(item => item.slug === slug)
  if (index < 0) return <NotFoundPage contextLabel="PROJECT_NOT_FOUND" />
  const project = published[index]
  const previous = published[(index - 1 + published.length) % published.length]
  const next = published[(index + 1) % published.length]
  return <article className="case-study">
    <div className="reading-progress" aria-hidden="true" />
    <header className="case-hero section-pad"><nav aria-label="Breadcrumb"><Link to="/work">Work</Link><span>/</span><span>{project.title}</span></nav><p className="eyebrow">{project.typeLabel} · {project.sector} · {project.year}</p><h1>{project.title}</h1><p>{project.excerpt}</p><div className="case-status"><span>{project.status}</span><span>{project.duration}</span></div>{project.liveUrl && <a className="case-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight /></a>}</header>
    <figure className="case-artifact section-pad"><div className="artifact-viewer"><img src={project.media[0].src} alt={project.media[0].alt} width="1600" height="1000" /><i /><i /></div><figcaption>{project.media[0].caption}</figcaption></figure>
    <div className="case-body section-pad"><aside className="case-facts"><div><small>Role</small>{project.role.map(item => <span key={item}>{item}</span>)}</div><div><small>Services</small>{project.services.map(item => <span key={item}>{item}</span>)}</div><div><small>Technology</small>{project.technologies.map(item => <span key={item}>{item}</span>)}</div></aside><div className="case-story"><section id="challenge"><p className="section-number">01 / Challenge</p><h2>{project.challenge}</h2>{project.constraints.map(item => <p className="decision" key={item}><Check />{item}</p>)}</section><section id="approach"><p className="section-number">02 / Approach</p><h2>{project.approach}</h2><div className="decisions">{project.decisions.map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}</div></section><section id="solution"><p className="section-number">03 / Deliverables</p><h2>A focused product direction built around the essential journey.</h2><ul>{project.deliverables.map(item => <li key={item}>{item}</li>)}</ul></section><section id="outcome"><p className="section-number">04 / Outcomes</p>{project.outcomes.map(item => <div className="outcome" key={item.label}><small>{item.kind.replace('-', ' ')}</small><strong>{item.value}</strong></div>)}</section><Link className="button button-primary" to={`/contact?project=${project.slug}`}>Discuss a similar project <ArrowUpRight /></Link></div></div>
    {project.media.length > 1 && <section className="case-gallery section-pad" aria-labelledby="project-gallery-title"><p className="section-number">Project walkthrough</p><h2 id="project-gallery-title">The experience in context.</h2><div>{project.media.slice(1).map(media => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{media.caption}</figcaption></figure>)}</div></section>}
    <nav className="case-pagination section-pad" aria-label="Project navigation"><Link to={`/work/${previous.slug}`}><ArrowLeft /><small>Previous</small><strong>{previous.title}</strong></Link><Link to={`/work/${next.slug}`}><small>Next</small><strong>{next.title}</strong><ArrowRight /></Link></nav>
  </article>
}
