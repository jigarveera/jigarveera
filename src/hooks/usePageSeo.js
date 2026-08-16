import { useEffect } from 'react'
import { projects, services, siteConfig } from '../data/siteData'

const baseUrl = siteConfig.url
const generic = {
  '/': ['Digital Product Developer', 'Distinctive websites, mobile apps and business systems designed around your brand and business goals.'],
  '/services': ['Web & App Development Services', 'Freelance web, mobile, business software and 3D development services for businesses in India and worldwide.'],
  '/work': ['Selected Digital Product Work', 'Explore transparent web, mobile and business-system concept studies by Jigar Veera.'],
  '/about': ['About Jigar Veera', 'Independent product-minded developer designing and building reliable digital experiences from India for worldwide teams.'],
  '/contact': ['Start a Digital Product Project', 'Tell Jigar what you are building and receive the most useful next step for your website, app or business system.'],
  '/pricing': ['Project Packages & Quotes', 'Explore practical starting scopes for websites, apps and custom systems, then request a tailored quote.'],
  '/industries': ['Digital Products for Modern Businesses', 'Websites, apps and custom systems shaped around the workflows and audiences of different sectors.'],
  '/privacy': ['Privacy Notice', 'How inquiry information is handled when you contact Jigar Veera about a digital product project.'],
  '/terms': ['Website Terms', 'Clear expectations for using the Jigar Veera portfolio website and discussing project work.'],
}

function setMeta(selector, attributes) {
  let node = document.head.querySelector(selector)
  if (!node) { node = document.createElement('meta'); document.head.appendChild(node) }
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value))
}

export default function usePageSeo(pathname) {
  useEffect(() => {
    const cleanPath = pathname === '/not-found' ? pathname : pathname.replace(/\/$/, '') || '/'
    const serviceSlug = cleanPath.startsWith('/services/') ? cleanPath.split('/')[2] : null
    const projectSlug = cleanPath.startsWith('/work/') ? cleanPath.split('/')[2] : null
    const service = services.find(item => item.slug === serviceSlug)
    const project = projects.find(item => item.slug === projectSlug && item.published)
    const [shortTitle, fallbackDescription] = generic[cleanPath] || ['Page not found', 'Explore the digital product portfolio and services of Jigar Veera.']
    const title = service ? `${service.title} for Businesses | Jigar Veera` : project ? `${project.title} | Jigar Veera` : `${shortTitle} | Jigar Veera`
    const description = service ? `Custom ${service.title.toLowerCase()} designed around your brand, users and business goals. Explore deliverables, process and timelines.` : project ? project.excerpt : fallbackDescription
    const canonical = `${baseUrl}${cleanPath === '/not-found' ? '/' : cleanPath}`
    const socialImage = project?.media?.[0]?.src || siteConfig.logo
    const socialImageAlt = project?.media?.[0]?.alt || 'Jigar Veera JV logo'
    document.title = title
    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: project ? 'article' : 'website' })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' })
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteConfig.name })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: socialImage })
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: socialImageAlt })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: socialImage })
    setMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: socialImageAlt })
    const incompleteService = serviceSlug === 'ongoing-support'
    const unknownRoute = !generic[cleanPath] && !service && !project
    setMeta('meta[name="robots"]', { name: 'robots', content: cleanPath === '/not-found' || (projectSlug && !project) || (serviceSlug && !service) || incompleteService || unknownRoute ? 'noindex, nofollow' : 'index, follow' })
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = canonical

    const oldScript = document.getElementById('route-json-ld')
    oldScript?.remove()
    if (service || project || cleanPath === '/') {
      const script = document.createElement('script')
      script.id = 'route-json-ld'; script.type = 'application/ld+json'
      const entity = service ? { '@type': 'Service', name: service.title, description: service.short, url: canonical, provider: { '@type': 'Person', name: siteConfig.name, url: baseUrl, image: siteConfig.logo }, areaServed: 'Worldwide' } : project ? { '@type': 'CreativeWork', name: project.title, url: canonical, image: socialImage, description: project.excerpt, creator: { '@type': 'Person', name: siteConfig.name, url: baseUrl }, dateCreated: String(project.year) } : { '@type': 'Person', name: siteConfig.name, url: baseUrl, image: siteConfig.logo, email: siteConfig.email, jobTitle: 'Digital Product Developer', sameAs: [siteConfig.linkedin, siteConfig.github] }
      const breadcrumb = (service || project) ? { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: service ? 'Services' : 'Work', item: `${baseUrl}/${service ? 'services' : 'work'}` }, { '@type': 'ListItem', position: 2, name: service?.title || project?.title, item: canonical }] } : null
      script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': breadcrumb ? [entity, breadcrumb] : [entity] })
      document.head.appendChild(script)
    }
  }, [pathname])
}
