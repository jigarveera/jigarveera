import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronRight, Clock3, Link2, List, Play, Search } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { blogTopics, getAllBlogPosts, getTopic } from '../../data/blogData'
import { siteConfig } from '../../data/siteData'
import NotFoundPage from '../pages/NotFoundPage'
import './blog.css'

const postPath = (topic, post) => `/blogs/${topic.slug}/${post.id}`
const readableDay = (id) => id.replace('-', ' ').toUpperCase()
const clampSidebarWidth = (value) => Math.max(240, Math.min(440, Math.floor(window.innerWidth * .35), value))
const rubySocialPlatforms = [
  { key: 'instagram', label: 'Instagram', mark: 'IG' },
  { key: 'facebook', label: 'Facebook', mark: 'f' },
  { key: 'youtubeShorts', label: 'YouTube Shorts', mark: '▶' },
]

function TopicSocialLinks({ topic, compact = false }) {
  const platforms = topic.slug === 'ruby' ? rubySocialPlatforms : Object.entries(topic.social || {}).filter(([, url]) => url).map(([key]) => ({ key, label: key, mark: '↗' }))
  if (!platforms.length) return null
  return <div className={`blog-topic-socials ${compact ? 'is-compact' : ''}`} aria-label={`${topic.name} social profiles`}>
    {platforms.map(platform => topic.social?.[platform.key]
      ? <a key={platform.key} href={topic.social[platform.key]} target="_blank" rel="noreferrer" aria-label={`${topic.name} on ${platform.label}`}><b>{platform.mark}</b><span>{platform.label}</span><ArrowUpRight size={14} /></a>
      : <span className="is-pending" key={platform.key} title={`${platform.label} link coming soon`} aria-label={`${platform.label} link coming soon`}><b>{platform.mark}</b><span>{platform.label}</span><small>SOON</small></span>)}
  </div>
}

function TopicOrb({ topic, index }) {
  return <Link className={`blog-topic-orb ${topic.featured ? 'is-featured' : ''}`} to={`/blogs/${topic.slug}`} style={{ '--orb-color': topic.color }}>
    <span className="blog-topic-orb-image">{topic.image ? <img src={topic.image} alt="" loading={index > 2 ? 'lazy' : 'eager'} /> : <span>{topic.name.slice(0, 1)}</span>}</span>
    <strong>{topic.name}</strong><small>{topic.featured ? 'FEATURED' : 'EXPLORE'}</small>
  </Link>
}

function BlogCard({ topic, post, className = '' }) {
  return <Link className={`blog-post-card ${className}`} to={postPath(topic, post)}>
    <div className="blog-post-card-image"><img src={post.images?.[0]?.src} alt={post.images?.[0]?.alt || ''} loading="lazy" /><span>{readableDay(post.id)}</span></div>
    <div className="blog-post-card-copy"><small>{topic.name} / {post.isSample ? 'Preview entry' : 'Journal entry'}</small><h3>{post.title}</h3><p>{post.excerpt}</p><span className="blog-card-link">Read the entry <ArrowUpRight size={16} /></span></div>
  </Link>
}

function BlogSearch({ value, onChange, placeholder = 'Search stories, topics, or days...' }) {
  return <label className="blog-search"><Search size={18} /><span className="sr-only">Search blogs</span><input type="search" value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} /><span className="blog-search-key">SEARCH</span></label>
}

export function BlogIndexPage() {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const posts = useMemo(() => getAllBlogPosts(), [])
  const matches = posts.filter(post => `${post.title} ${post.excerpt} ${post.topic.name} ${post.id}`.toLowerCase().includes(query.toLowerCase()))
  const filteredTopics = blogTopics.filter(topic => `${topic.name} ${topic.description}`.toLowerCase().includes(query.toLowerCase()))
  const featured = matches[Math.min(activeIndex, matches.length - 1)]

  return <div className="blog-universe blog-index-page">
    <div className="blog-index-inner">
      <section className="blog-index-intro"><div><p className="blog-kicker"><span className="blog-live-dot" /> THE JOURNAL / 001</p><h1>Stories with<br /><em>a pulse.</em></h1><p>Small worlds. Big personalities. A place to follow the stories unfolding one day at a time.</p></div><div className="blog-index-intro-art" aria-hidden="true"><span>01</span><i /><small>THE INTERNET HAS ROOM FOR A LITTLE MORE WONDER</small></div></section>

      <div className="blog-index-search-row"><BlogSearch value={query} onChange={value => { setQuery(value); setActiveIndex(0) }} /><span>{matches.length} {matches.length === 1 ? 'STORY' : 'STORIES'} IN THE ARCHIVE <ArrowDown size={15} /></span></div>

      <section className="blog-topics-section" aria-labelledby="blog-topics-heading"><div className="blog-section-heading"><div><small>01 / EXPLORE BY VOICE</small><h2 id="blog-topics-heading">Meet the topics<span>.</span></h2></div><p>Every topic has a world of its own.</p></div><div className="blog-topic-scroll">{filteredTopics.length ? filteredTopics.map((topic, index) => <TopicOrb key={topic.slug} topic={topic} index={index} />) : <p className="blog-empty-inline">No topics match “{query}”.</p>}</div></section>

      <section className="blog-feature-section" aria-labelledby="blog-feature-heading"><div className="blog-section-heading"><div><small>02 / FEATURED STORY</small><h2 id="blog-feature-heading">The latest chapter<span>.</span></h2></div><div className="blog-carousel-controls"><button type="button" onClick={() => setActiveIndex(index => Math.max(0, index - 1))} disabled={activeIndex === 0} aria-label="Previous story"><ArrowLeft size={18} /></button><span>{matches.length ? String(Math.min(activeIndex + 1, matches.length)).padStart(2, '0') : '00'} / {String(matches.length).padStart(2, '0')}</span><button type="button" onClick={() => setActiveIndex(index => Math.min(matches.length - 1, index + 1))} disabled={activeIndex >= matches.length - 1} aria-label="Next story"><ArrowRight size={18} /></button></div></div>
        {featured ? <Link className="blog-feature-card" to={postPath(featured.topic, featured)}><div className="blog-feature-image"><img src={featured.images?.[0]?.src} alt={featured.images?.[0]?.alt || ''} />{featured.images?.[0]?.temporary && <span className="blog-image-note">TEMPORARY REFERENCE IMAGE</span>}</div><div className="blog-feature-copy"><span className="blog-feature-eyebrow"><span>EDITOR'S PICK</span><span>{readableDay(featured.id)}</span></span><div><p className="blog-feature-topic">{featured.topic.name}’s journal <span>✦</span></p><h3>{featured.title}</h3><p>{featured.excerpt}</p></div><span className="blog-feature-cta">Step inside the story <ArrowUpRight size={20} /></span></div></Link> : <div className="blog-empty-state"><h3>No stories found.</h3><p>Try another search to explore the journal.</p></div>}
      </section>

      <section className="blog-all-section" aria-labelledby="blog-all-heading"><div className="blog-section-heading"><div><small>03 / THE ARCHIVE</small><h2 id="blog-all-heading">All stories<span>.</span></h2></div><span className="blog-section-count">{String(matches.length).padStart(2, '0')} ENTRIES</span></div><div className="blog-post-grid">{matches.map(post => <BlogCard key={`${post.topic.slug}-${post.id}`} topic={post.topic} post={post} />)}</div>{!matches.length && <p className="blog-empty-inline">Nothing here yet. Clear the search to see all stories.</p>}</section>
      <section className="blog-index-outro"><span>CURIOUS ABOUT THE NEXT CHAPTER?</span><h2>Come back for<br /><em>the little moments.</em></h2><Link to="/blogs/ruby">Meet Ruby <ArrowUpRight size={19} /></Link></section>
    </div>
  </div>
}

export function BlogTopicPage() {
  const { topicSlug } = useParams()
  const topic = getTopic(topicSlug)
  const [query, setQuery] = useState('')
  if (!topic) return <NotFoundPage contextLabel="TOPIC_NOT_FOUND" />
  const posts = topic.posts.filter(post => `${post.title} ${post.id} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase()))
  return <div className={`blog-universe blog-topic-page ${topic.theme === 'ruby' ? 'blog-ruby-theme' : ''}`} style={{ '--topic-accent': topic.color }}>
    <div className="blog-topic-inner"><nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link to="/blogs">Journal</Link><ChevronRight size={14} /><span>{topic.name}</span></nav>
      <section className="blog-topic-hero"><div className="blog-topic-hero-copy"><p className="blog-kicker">{topic.featured ? 'THE FEATURED JOURNAL' : topic.category.toUpperCase()} / {topic.handle}</p><h1>{topic.name}<span>.</span></h1><p>{topic.description}</p><div className="blog-topic-hero-meta"><span>{String(topic.posts.length).padStart(2, '0')} ENTRIES</span><span>·</span><span>{topic.featured ? 'MEXICAN RED KNEE TARANTULA' : 'A NEW SPACE TO EXPLORE'}</span></div><TopicSocialLinks topic={topic} /></div><div className="blog-topic-hero-image">{topic.image ? <img src={topic.image} alt={topic.imageTemporary ? 'Temporary Mexican red knee tarantula reference' : topic.name} /> : <span>{topic.name.slice(0, 1)}</span>}<span className="blog-topic-image-tag">{topic.imageTemporary ? `REFERENCE PHOTO · NOT ${topic.name.toUpperCase()}` : 'THE TOPIC JOURNAL'}</span></div><div className="blog-topic-hero-orbit" aria-hidden="true">✳</div></section>
      <div className="blog-topic-toolbar"><div><small>THE CHAPTERS</small><h2>{topic.slug === 'ruby' ? 'Ruby’s little world' : `Stories from ${topic.name}`}<span>.</span></h2></div><BlogSearch value={query} onChange={setQuery} placeholder={`Search posts in ${topic.name}...`} /></div>
      {posts.length ? <div className="blog-topic-posts">{posts.map((post, index) => <Link className="blog-topic-post-row" to={postPath(topic, post)} key={post.id}><span className="blog-topic-row-number">{String(index + 1).padStart(2, '0')}</span><div className="blog-topic-row-image"><img src={post.images?.[0]?.src} alt={post.images?.[0]?.alt || ''} loading="lazy" /></div><div><small>{readableDay(post.id)} / {post.isSample ? 'PREVIEW ENTRY' : 'THE JOURNAL'}</small><h3>{post.title}</h3><p>{post.excerpt}</p></div><span className="blog-topic-row-arrow"><ArrowUpRight size={22} /></span></Link>)}</div> : <div className="blog-topic-empty"><span>✳</span><h3>{query ? 'No chapter found.' : 'A story is taking shape.'}</h3><p>{query ? 'Try another search to explore this topic.' : 'The first post for this topic will appear here soon.'}</p></div>}
      <div className="blog-topic-footer-card"><div><small>THE STORY CONTINUES</small><h2>Every day has<br />a new detail.</h2></div><p>{topic.featured ? 'This journal is ready for Ruby’s real photos, notes and reel links as her days unfold.' : 'A dedicated place for this topic’s future stories.'}</p><Link to="/blogs">Explore all topics <ArrowRight size={18} /></Link></div>
    </div>
  </div>
}

function videoEmbed(url) {
  if (!url) return null
  try {
    const parsed = new URL(url)
    if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'].includes(parsed.hostname)) {
      const id = parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) : parsed.pathname.startsWith('/shorts/') ? parsed.pathname.split('/')[2] : parsed.searchParams.get('v')
      return /^[\w-]{11}$/.test(id || '') ? `https://www.youtube-nocookie.com/embed/${id}` : null
    }
    if (['instagram.com', 'www.instagram.com'].includes(parsed.hostname) && /^\/(reel|p)\/[^/]+/.test(parsed.pathname)) return `https://www.instagram.com${parsed.pathname.replace(/\/$/, '')}/embed`
  } catch { return null }
  return null
}

function VideoCard({ post, video }) {
  const [playing, setPlaying] = useState(false)
  return <div className="blog-rail-video">
    <div className="blog-rail-title">
      <span><Play size={17} /> <strong>WATCH THE MOMENT</strong></span>
      {post.video?.url && <a className="blog-video-source" href={post.video.url} target="_blank" rel="noreferrer" aria-label="Open video at its source" title="Open video at its source"><ArrowUpRight size={18} /></a>}
    </div>
    <div className="blog-video-frame">
      {video ? playing
        ? <iframe src={video.includes('youtube-nocookie') ? `${video}?autoplay=1` : video} title={post.video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        : <button className="blog-video-play" type="button" onClick={() => setPlaying(true)} aria-label={`Play ${post.video.title}`}><img src={post.images[0].src} alt="" /><span><Play size={30} fill="currentColor" /></span></button>
        : <span>VIDEO COMING SOON</span>}
    </div>
  </div>
}

function SharePanel({ topic, post }) {
  const [copied, setCopied] = useState(false)
  if (topic.slug === 'ruby') return <div className="blog-rail-share blog-rail-follow"><small>FOLLOW RUBY</small><TopicSocialLinks topic={topic} compact /><span>Her social pages are coming soon.</span></div>
  const url = `${siteConfig.url}${postPath(topic, post)}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(post.title)
  const copy = async () => { try { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 2500) } catch { setCopied(false) } }
  return <div className="blog-rail-share"><small>PASS THIS STORY ON</small><div><a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noreferrer" aria-label="Share on X">𝕏</a><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook">f</a><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">in</a><a href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp">wa</a><button type="button" onClick={copy} aria-label="Copy article link">{copied ? <Check size={17} /> : <Link2 size={17} />}</button></div><span role="status">{copied ? 'Link copied to clipboard' : 'A little story worth sharing.'}</span></div>
}

function Sidebar({ topic, currentId }) {
  const [width, setWidth] = useState(() => { const saved = Number(window.localStorage.getItem('blog-sidebar-width')); return clampSidebarWidth(saved >= 240 && saved <= 440 ? saved : 296) })
  const [collapsed, setCollapsed] = useState(() => window.localStorage.getItem('blog-sidebar-collapsed') === 'true')
  const [search, setSearch] = useState('')
  const searchRef = useRef(null)
  const entries = topic.posts.filter(post => `${post.title} ${post.id}`.toLowerCase().includes(search.toLowerCase()))
  const startResize = event => {
    event.preventDefault()
    const startX = event.clientX
    const startWidth = width
    const onMove = moveEvent => setWidth(clampSidebarWidth(startWidth + moveEvent.clientX - startX))
    const onUp = () => { window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); document.body.style.cursor = '' }
    document.body.style.cursor = 'col-resize'
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp, { once: true })
  }
  useEffect(() => { window.localStorage.setItem('blog-sidebar-width', String(width)) }, [width])
  useEffect(() => { window.localStorage.setItem('blog-sidebar-collapsed', String(collapsed)) }, [collapsed])
  useEffect(() => { const onResize = () => setWidth(value => clampSidebarWidth(value)); window.addEventListener('resize', onResize); return () => window.removeEventListener('resize', onResize) }, [])
  return <aside className={`blog-entry-sidebar ${collapsed ? 'is-collapsed' : ''}`} style={{ width: collapsed ? 72 : width }} aria-label={`${topic.name} journal navigation`}>
    <div className="blog-entry-sidebar-top">
      <div className="blog-sidebar-control-row">
        <button className={`blog-sidebar-toggle ${collapsed ? '' : 'is-expanded'}`} type="button" onClick={() => setCollapsed(value => !value)} aria-label={collapsed ? 'Expand journal sidebar' : 'Collapse journal sidebar'} aria-expanded={!collapsed}><span className="blog-sidebar-toggle-lines" aria-hidden="true"><i /><i /><i /></span></button>
        {!collapsed && <Link to={`/blogs/${topic.slug}`} className="blog-sidebar-back"><ArrowLeft size={16} /> {topic.name.toUpperCase()} / JOURNAL</Link>}
      </div>
      {collapsed ? <><Link className="blog-sidebar-icon-link" to={`/blogs/${topic.slug}`} title={`Back to ${topic.name}'s journal`} aria-label={`Back to ${topic.name}'s journal`}><ArrowLeft size={18} /></Link><button className="blog-sidebar-icon-link" type="button" title="Search the journal" aria-label="Expand and search journal" onClick={() => { setCollapsed(false); requestAnimationFrame(() => searchRef.current?.focus()) }}><Search size={18} /></button></> : <div className="blog-sidebar-search"><Search size={18} /><input ref={searchRef} type="search" placeholder="Search the journal..." value={search} onChange={event => setSearch(event.target.value)} aria-label="Search journal entries" /></div>}
    </div>
    <div className="blog-sidebar-scroll">
      {!collapsed && <p className="blog-sidebar-label">ALL ENTRIES <span>{String(topic.posts.length).padStart(2, '0')}</span></p>}
      {entries.length ? entries.map(post => <Link key={post.id} to={postPath(topic, post)} title={collapsed ? post.title : undefined} aria-label={collapsed ? post.title : undefined} aria-current={post.id === currentId ? 'page' : undefined} className={`blog-sidebar-entry ${post.id === currentId ? 'is-active' : ''}`}>
        {collapsed ? <BookOpen size={20} /> : <><span>{readableDay(post.id)}</span><strong>{post.title}</strong><ArrowUpRight size={16} /></>}
      </Link>) : !collapsed && <p className="blog-sidebar-no-results">No entries match your search.</p>}
    </div>
    <div className="blog-sidebar-bottom"><span className="blog-sidebar-avatar">{topic.image ? <img src={topic.image} alt="" /> : topic.name.slice(0, 1)}</span>{!collapsed && <div><strong>{topic.slug === 'ruby' ? 'Ruby’s world' : topic.name}</strong><small>{topic.shortDescription}</small></div>}</div>
    {!collapsed && <div className="blog-sidebar-resize" role="separator" aria-label="Resize journal sidebar" aria-orientation="vertical" aria-valuemin={240} aria-valuemax={440} aria-valuenow={width} tabIndex={0} onPointerDown={startResize} onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); setWidth(value => clampSidebarWidth(value + (event.key === 'ArrowRight' ? 16 : -16))) } }}><span /></div>}
  </aside>
}

function ArticleSection({ section, index }) {
  return <section id={section.id} className={`blog-story-section blog-story-${section.type}`}><div className="blog-story-section-index"><span>{String(index + 1).padStart(2, '0')}</span><i /></div><div className="blog-story-section-content"><p className="blog-kicker">{section.eyebrow}</p>{section.type === 'question' ? <><h2><span>Q.</span> {section.title}</h2><div className="blog-story-answer"><span>A.</span><p>{section.answer}</p></div></> : <><h2>{section.title}</h2>{section.type === 'points' ? <ul>{section.items.map((item, pointIndex) => <li key={item}><span>{String(pointIndex + 1).padStart(2, '0')}</span>{item}<ArrowUpRight size={15} /></li>)}</ul> : section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</>}</div></section>
}

export function BlogPostPage() {
  const { topicSlug, postId } = useParams()
  const topic = getTopic(topicSlug)
  const post = topic?.posts.find(entry => entry.id === postId)
  if (!topic || !post) return <NotFoundPage contextLabel="BLOG_NOT_FOUND" />
  const video = videoEmbed(post.video?.url)
  const related = topic.posts.filter(entry => entry.id !== post.id).slice(0, 7)
  const words = [post.title, ...post.content, ...post.sections.flatMap(section => [...(section.paragraphs || []), section.answer || '', ...(section.items || [])])].join(' ').trim().split(/\s+/).length
  const readMinutes = Math.max(1, Math.ceil(words / 200))
  const toc = [{ id: 'the-beginning', title: 'The beginning' }, ...post.sections.map(section => ({ id: section.id, title: section.title })), { id: 'the-next-chapter', title: 'Next chapters' }]
  return <div className={`blog-universe blog-entry-page ${topic.theme === 'ruby' ? 'blog-ruby-theme' : ''}`} style={{ '--topic-accent': topic.color }}><div className="blog-entry-layout"><Sidebar topic={topic} currentId={post.id} /><article className="blog-entry-main"><div className="blog-entry-top"><nav className="blog-breadcrumb" aria-label="Breadcrumb"><Link to="/blogs">Journal</Link><ChevronRight size={14} /><Link to={`/blogs/${topic.slug}`}>{topic.name}</Link><ChevronRight size={14} /><span>{readableDay(post.id)}</span></nav><div className="blog-entry-title-row"><div><p className="blog-kicker"><span className="blog-live-dot" /> THE {topic.name.toUpperCase()} JOURNAL / {readableDay(post.id)}</p><h1>{post.title}<span>.</span></h1></div><span className="blog-entry-title-mark" aria-hidden="true">✳</span></div><div className="blog-entry-byline"><div className="blog-author-avatar"><img src={topic.author.image} alt="" /></div><div><strong>{topic.author.name}</strong><span>{topic.author.role || 'Topic author'}</span></div><i /><span><Clock3 size={15} /> {readMinutes} MIN READ</span>{post.isSample && <span className="blog-preview-badge">PREVIEW ENTRY</span>}</div><figure className="blog-entry-hero"><img src={post.images[0].src} alt={post.images[0].alt} /><figcaption><span>FIG 01 / {post.images[0].temporary ? `REFERENCE PHOTO · NOT ${topic.name.toUpperCase()}` : topic.name.toUpperCase()}</span>{post.images[0].source ? <a href={post.images[0].source} target="_blank" rel="noreferrer">{post.images[0].credit || topic.author.name} ↗</a> : <span>{post.images[0].credit || topic.author.name}</span>}</figcaption></figure></div>
        <div className="blog-entry-lower"><div className="blog-entry-story"><div id="the-beginning" className="blog-story-intro"><p className="blog-kicker">THE BEGINNING / {readableDay(post.id)}</p>{post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>{post.sections.map((section, index) => <div key={section.id}><ArticleSection section={section} index={index} />{index === 0 && post.images?.[1] && <figure className="blog-entry-inline-image"><img src={post.images[1].src} alt={post.images[1].alt} loading="lazy" /><figcaption><span>FIG 02 / {post.images[1].temporary ? `REFERENCE PHOTO · NOT ${topic.name.toUpperCase()}` : topic.name.toUpperCase()}</span>{post.images[1].source ? <a href={post.images[1].source} target="_blank" rel="noreferrer">{post.images[1].credit || topic.author.name} ↗</a> : <span>{post.images[1].credit || topic.author.name}</span>}</figcaption></figure>}</div>)}<div className="blog-story-endmark">✳</div><div className="blog-story-tags">{post.tags?.map(tag => <span key={tag}>#{tag.replace(/\s+/g, '')}</span>)}</div></div>
          <aside className="blog-entry-rail" aria-label="Article extras"><div className="blog-rail-toc"><div className="blog-rail-title"><List size={17} /><strong>ON THIS PAGE</strong></div>{toc.map((item, index) => <a href={`#${item.id}`} key={item.id}><span>{String(index + 1).padStart(2, '0')}</span>{item.title}</a>)}</div>{post.video?.url && <VideoCard key={`${topic.slug}-${post.id}`} post={post} video={video} />}<SharePanel topic={topic} post={post} /><div className="blog-rail-promo"><span>✳ THE {topic.name.toUpperCase()} JOURNAL</span><h3>There’s more to the story.</h3><p>{topic.slug === 'ruby' ? 'Follow every little chapter as Ruby’s world grows.' : 'Explore more stories from this journal.'}</p><Link to={`/blogs/${topic.slug}`}>Explore the journal <ArrowUpRight size={17} /></Link></div></aside>
        </div><section id="the-next-chapter" className="blog-related"><div className="blog-section-heading"><div><small>KEEP EXPLORING</small><h2>The next chapters<span>.</span></h2></div><span className="blog-section-count">SCROLL TO EXPLORE <ArrowRight size={17} /></span></div>{related.length ? <div className="blog-related-scroll">{related.map(entry => <BlogCard key={entry.id} topic={topic} post={entry} />)}</div> : <div className="blog-related-soon"><div><span>DAY 02 / A SPACE FOR WHAT'S NEXT</span><h3>The story has only just begun.</h3><p>The next entry will appear here when Ruby has another moment to share.</p></div><Link to={`/blogs/${topic.slug}`}>Back to Ruby’s journal <ArrowUpRight size={18} /></Link></div>}</section>
      </article></div></div>
}
