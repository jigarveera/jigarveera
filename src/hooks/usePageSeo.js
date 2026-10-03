import { useEffect } from 'react'
import { projects, services, siteConfig } from '../data/siteData'
import { getTopic } from '../data/blogData'

const baseUrl = siteConfig.url
const generic = {
  '/': ['Freelance Web & App Developer in India', 'Hire Jigar Veera for custom websites, React web apps, mobile products, e-commerce platforms and business automation systems in India and worldwide.'],
  '/services': ['Web, Mobile App & Custom Software Services', 'Explore custom web development, cross-platform mobile apps, business automation, 3D WebGL and technical SEO services for modern businesses.'],
  '/blogs': ['Stories and Journals', 'Explore journals and stories, including Ruby the Mexican red knee tarantula and her daily chapters.'],
  '/work': ['Web & App Development Portfolio', 'Explore e-commerce websites, travel platforms, business websites and custom web application case studies designed and developed by Jigar Veera.'],
  '/about': ['About Jigar Veera — Product-Minded Developer', 'Meet Jigar Veera, an independent developer in India building clear, thoughtful websites, mobile products and business systems for teams worldwide.'],
  '/contact': ['Hire a Freelance Web & App Developer', 'Contact Jigar Veera to discuss a custom website, mobile app, e-commerce platform or business software project and request a tailored quote.'],
  '/pricing': ['Website, App & Software Project Quotes', 'Compare practical starting scopes for business websites, mobile apps and custom software, then request a project-specific quote with clear milestones.'],
  '/industries': ['Custom Digital Products for Businesses', 'Custom websites, mobile apps, e-commerce experiences and operational systems shaped around the workflows of different industries.'],
  '/privacy': ['Privacy Notice', 'How inquiry information is handled when you contact Jigar Veera about a digital product project.'],
  '/terms': ['Website Terms', 'Clear expectations for using the Jigar Veera portfolio website and discussing project work.'],
}

const searchKeywords = {
  '/': ['freelance web developer India', 'freelance app developer India', 'custom web app development', 'ecommerce website development', 'React developer India', 'custom software developer', 'business automation solutions'],
  '/services': ['web development services India', 'mobile app development services', 'custom software development', 'ecommerce development services', 'business process automation', '3D web development', 'technical SEO services'],
  '/blogs': ['Ruby tarantula blog', 'Mexican red knee tarantula journal', 'daily pet blog'],
  '/work': ['web developer portfolio India', 'web application case studies', 'ecommerce website portfolio', 'mobile app development portfolio', 'custom software portfolio'],
  '/about': ['Jigar Veera developer', 'product-minded developer India', 'independent web developer', 'React developer portfolio', 'digital product developer'],
  '/contact': ['hire freelance web developer India', 'hire React developer', 'hire app developer India', 'website development quote', 'custom software developer contact'],
  '/pricing': ['website development quote India', 'mobile app development quote', 'custom software project quote', 'ecommerce website quote'],
  '/industries': ['industry-specific software development', 'custom business software', 'ecommerce development', 'travel platform development', 'business website development'],
  '/privacy': ['Jigar Veera privacy notice'],
  '/terms': ['Jigar Veera website terms'],
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
    const blogParts = cleanPath.startsWith('/blogs/') ? cleanPath.split('/').slice(2) : []
    const blogTopic = blogParts.length ? getTopic(blogParts[0]) : null
    const blogPost = blogParts.length === 2 ? blogTopic?.posts.find(item => item.id === blogParts[1]) : null
    const validBlogRoute = blogTopic && (blogParts.length === 1 || blogPost)
    const service = services.find(item => item.slug === serviceSlug)
    const project = projects.find(item => item.slug === projectSlug && item.published)
    const incompleteService = serviceSlug === 'ongoing-support'
    const unknownRoute = !generic[cleanPath] && !service && !project && !validBlogRoute
    const isNotFound = cleanPath === '/not-found' || (projectSlug && !project) || (serviceSlug && !service) || unknownRoute
    const [shortTitle, fallbackDescription] = isNotFound ? ['Page Not Found', 'The requested page could not be found on JigarVeera.in.'] : generic[cleanPath] || ['', '']
    const title = blogPost ? `${blogPost.title} | ${blogTopic.name} Journal` : blogTopic ? `${blogTopic.name} Journal | Jigar Veera` : service ? `${service.seoTitle || `${service.title} for Businesses`} | Jigar Veera` : project ? `${project.seoTitle || project.title} | Jigar Veera` : `${shortTitle} | Jigar Veera`
    const description = blogPost ? blogPost.excerpt : blogTopic ? blogTopic.description : service ? service.seoDescription : project ? project.excerpt : fallbackDescription
    const keywords = isNotFound ? ['Jigar Veera'] : blogPost ? [blogPost.title, blogTopic.name, ...(blogPost.tags || [])] : blogTopic ? [blogTopic.name, 'blog journal'] : service?.keywords || project?.keywords || searchKeywords[cleanPath] || ['Jigar Veera', 'digital product developer']
    const canonical = `${baseUrl}${cleanPath}`
    const socialImageSource = blogPost?.images?.[0]?.src || blogTopic?.image || project?.media?.[0]?.src || siteConfig.logo
    const socialImage = new URL(socialImageSource, siteConfig.url).href
    const socialImageAlt = blogPost?.images?.[0]?.alt || project?.media?.[0]?.alt || 'Jigar Veera JV logo'
    document.title = title
    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[name="keywords"]', { name: 'keywords', content: keywords.join(', ') })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: project || blogPost ? 'article' : 'website' })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' })
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteConfig.name })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: socialImage })
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: socialImageAlt })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: socialImage })
    setMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: socialImageAlt })
    setMeta('meta[name="robots"]', { name: 'robots', content: isNotFound || incompleteService || blogPost?.isSample || (blogTopic && !blogTopic.posts.length) ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = canonical

    const oldScript = document.getElementById('route-json-ld')
    oldScript?.remove()
    if (service || project || blogTopic || cleanPath === '/' || cleanPath === '/about') {
      const script = document.createElement('script')
      script.id = 'route-json-ld'; script.type = 'application/ld+json'
      const person = { '@type': 'Person', '@id': `${baseUrl}/#person`, name: siteConfig.name, url: `${baseUrl}/about`, image: siteConfig.logo, email: siteConfig.email, jobTitle: 'Product-Minded Developer', homeLocation: { '@type': 'Country', name: 'India' }, knowsAbout: ['Web development', 'Mobile applications', 'E-commerce development', 'Business automation', 'Technical SEO', '3D web experiences'], sameAs: [siteConfig.linkedin, siteConfig.github] }
      const website = { '@type': 'WebSite', '@id': `${baseUrl}/#website`, url: baseUrl, name: siteConfig.name, description: siteConfig.description, inLanguage: 'en-IN', publisher: { '@id': `${baseUrl}/#person` } }
      const entity = blogPost ? { '@type': 'BlogPosting', headline: blogPost.title, description: blogPost.excerpt, image: socialImage, url: canonical, author: { '@type': 'Person', name: blogTopic.author.name }, isPartOf: { '@type': 'Blog', name: blogTopic.name, url: `${baseUrl}/blogs/${blogTopic.slug}` } } : blogTopic ? { '@type': 'Blog', name: blogTopic.name, description: blogTopic.description, url: canonical, author: { '@type': 'Person', name: blogTopic.author.name } } : service ? { '@type': 'Service', name: service.title, serviceType: service.seoTitle, description: service.seoDescription, keywords: service.keywords.join(', '), url: canonical, provider: { '@id': `${baseUrl}/#person` }, areaServed: 'Worldwide' } : project ? { '@type': 'CreativeWork', name: project.title, url: canonical, image: socialImage, description: project.excerpt, keywords: project.keywords.join(', '), creator: { '@id': `${baseUrl}/#person` }, dateCreated: String(project.year) } : person
      const breadcrumb = (service || project || cleanPath === '/about') ? { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: service ? 'Services' : project ? 'Work' : 'Home', item: service ? `${baseUrl}/services` : project ? `${baseUrl}/work` : baseUrl }, { '@type': 'ListItem', position: 2, name: service?.title || project?.title || 'About', item: canonical }] } : null
      const blogBreadcrumb = blogTopic ? { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Blogs', item: `${baseUrl}/blogs` }, { '@type': 'ListItem', position: 2, name: blogTopic.name, item: `${baseUrl}/blogs/${blogTopic.slug}` }, ...(blogPost ? [{ '@type': 'ListItem', position: 3, name: blogPost.title, item: canonical }] : [])] } : null
      const graph = cleanPath === '/' ? [person, website] : cleanPath === '/about' ? [person, breadcrumb] : blogBreadcrumb ? [person, entity, blogBreadcrumb] : breadcrumb ? [person, entity, breadcrumb] : [person, entity]
      script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
      document.head.appendChild(script)
    }
  }, [pathname])
}
