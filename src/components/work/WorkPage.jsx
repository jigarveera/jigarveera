import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { projects, whatsappUrl } from '../../data/siteData'

const filters = [['all', 'All'], ['web', 'Web'], ['mobile', 'Mobile'], ['business-systems', 'Business systems'], ['3d', '3D'], ['experiment', 'Experiments']]

function statusLabel(status) { return status.charAt(0).toUpperCase() + status.slice(1) }

export default function WorkPage() {
  const [params, setParams] = useSearchParams()
  const current = filters.some(([value]) => value === params.get('type')) ? params.get('type') : 'all'
  const [expanded, setExpanded] = useState(null)
  const published = useMemo(() => projects.filter(item => item.published), [])
  const visible = current === 'all' ? published : published.filter(item => item.type === current)
  const featured = published.find(item => item.featured)

  const filter = (type) => {
    setExpanded(null)
    setParams(type === 'all' ? {} : { type }, { replace: true })
  }

  return <div className="work-index">
    <section className="work-hero section-pad"><p className="eyebrow">Selected work / {published.length} published concepts</p><h1>Products made to be <em>understood.</em></h1><p>A transparent collection of concept studies while approved client stories are prepared for publication.</p></section>
    {featured && <section className="featured-project section-pad"><Link to={`/work/${featured.slug}`}><div className="featured-media"><img src={featured.media[0].src} alt={featured.media[0].alt} width="1600" height="1000" /><div className="artifact-stack" aria-hidden="true"><i /><i /><i /></div></div><div><p className="section-number">Featured / {featured.typeLabel}</p><h2>{featured.title}</h2><p>{featured.excerpt}</p><span>View case study <ArrowUpRight /></span></div></Link></section>}
    <section className="work-list-section section-pad">
      <div className="work-filter-bar" aria-label="Filter projects">{filters.map(([value, label]) => <button key={value} className={current === value ? 'active' : ''} onClick={() => filter(value)} aria-pressed={current === value}>{label}</button>)}</div>
      <p className="result-count" aria-live="polite">Showing {visible.length} project{visible.length !== 1 ? 's' : ''}</p>
      <div className="expandable-work-list">
        {visible.length === 0 && <div className="work-empty"><h2>No published work in this category yet.</h2><p>Selected and private projects can be discussed directly when relevant.</p><a href={whatsappUrl(`a ${filters.find(item => item[0] === current)?.[1]} project`)} target="_blank" rel="noreferrer">Discuss your project ↗</a></div>}
        {visible.map((project, index) => {
          const isOpen = expanded === project.slug
          const panelId = `project-${project.slug}-details`
          return <article className={`expandable-project ${isOpen ? 'is-open' : ''}`} key={project.slug}>
            <div className="project-compact"><span className="project-index">0{index + 1}</span><div><p>{project.typeLabel} · {project.sector}</p><h2>{project.title}</h2><p>{project.excerpt}</p></div><span className={`status status-${project.status}`}>{statusLabel(project.status)}</span><span className="project-year">{project.year}</span><button aria-expanded={isOpen} aria-controls={panelId} onClick={() => setExpanded(isOpen ? null : project.slug)}><span>{isOpen ? 'Close' : 'Expand'} details</span><ChevronDown /></button></div>
            <AnimatePresence initial={false}>{isOpen && <motion.div id={panelId} className="project-expanded" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .35 }}><div className="expanded-inner"><img src={project.media[0].src} alt={project.media[0].alt} width="900" height="600" loading="lazy" /><div><small>Challenge</small><p>{project.challenge}</p><small>Approach</small><p>{project.approach}</p><div className="tag-list">{[...project.services, ...project.technologies].map(tag => <span key={tag}>{tag}</span>)}</div><div className="expanded-links"><Link to={`/work/${project.slug}`}>View case study <ArrowUpRight /></Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight /></a>}<Link to={`/contact?project=${project.slug}`}>Discuss something similar <ArrowUpRight /></Link></div></div></div></motion.div>}</AnimatePresence>
          </article>
        })}
      </div>
    </section>
  </div>
}
