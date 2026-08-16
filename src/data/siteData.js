export const siteConfig = {
  name: 'Jigar Veera',
  url: 'https://jigarveera.in',
  description: 'Distinctive websites, mobile apps and business systems designed around your brand and business goals.',
  logo: 'https://jigarveera.in/jigarveeraLogo.png',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'jig555ops@gmail.com',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919372887948',
  location: 'India · Available worldwide',
  timezone: 'Asia/Kolkata',
  responseWindow: 'Usually within 1–2 business days',
  github: 'https://github.com/jigarveera',
  linkedin: 'https://www.linkedin.com/in/jigarveera/',
}

export const whatsappUrl = (subject = 'a new digital product') => {
  const message = `Hi Jigar, I found your portfolio and would like to get a quote for ${subject}. Could we discuss the project?`
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}

export const services = [
  { slug: 'web-development', number: '01', title: 'Web development', short: 'High-converting websites and digital platforms that stay fast as they grow.', details: ['Strategy & UX', 'React development', 'CMS & commerce', 'SEO foundations'], timeline: 'Typically 3–8 weeks' },
  { slug: 'mobile-app-development', number: '02', title: 'Mobile apps', short: 'Focused cross-platform products built to validate, launch and evolve.', details: ['Product discovery', 'iOS & Android', 'API integration', 'Store launch'], timeline: 'Typically 8–16 weeks' },
  { slug: 'business-systems', number: '03', title: 'Business systems', short: 'Internal tools that replace manual work with clear, dependable workflows.', details: ['Admin panels', 'Employee portals', 'Dashboards', 'Workflow automation'], timeline: 'Typically 6–14 weeks' },
  { slug: '3d-web-experiences', number: '04', title: '3D experiences', short: 'Immersive, performance-minded web moments that make products memorable.', details: ['3D art direction', 'Product showcases', 'WebGL interactions', 'Lite fallbacks'], timeline: 'Typically 4–10 weeks' },
  { slug: 'seo-performance', number: '05', title: 'SEO & performance', short: 'Technical improvements that help your product get found and feel instant.', details: ['Core Web Vitals', 'Technical SEO', 'Analytics', 'Accessibility'], timeline: 'Typically 2–5 weeks' },
  { slug: 'ongoing-support', number: '06', title: 'Ongoing support', short: 'A steady technical partner for releases, fixes and thoughtful improvements.', details: ['Priority support', 'Monitoring', 'Monthly releases', 'Technical guidance'], timeline: 'Flexible monthly care' },
]

export const packages = [
  { slug: 'launch-page', name: 'Launch page', label: 'For a focused first impression', includes: ['One strategic landing page', 'Responsive build', 'Lead capture', 'SEO setup'], timeline: '2–3 weeks' },
  { slug: 'business-website', name: 'Business website', label: 'For an established, credible presence', includes: ['Content-led page system', 'CMS integration', 'Conversion journeys', 'Analytics'], timeline: '4–8 weeks', featured: true },
  { slug: 'mvp-app', name: 'MVP app', label: 'For testing a product in market', includes: ['Product planning', 'Core user flows', 'Cross-platform build', 'Launch support'], timeline: '8–14 weeks' },
  { slug: 'custom-system', name: 'Custom system', label: 'For unique operations and workflows', includes: ['Workflow discovery', 'Role-based system', 'Integrations', 'Team handover'], timeline: 'Scoped after discovery' },
]

export const projects = [
  {
    title: 'Commerce, made calm', slug: 'commerce-made-calm', excerpt: 'A considered storefront system designed to make product discovery feel effortless.', type: 'web', typeLabel: 'Web', sector: 'Retail & commerce', year: 2026, status: 'prototype', featured: true, published: true, indexable: true,
    role: ['Product strategy', 'UX/UI design', 'Frontend development'], services: ['Web development', 'E-commerce'], technologies: ['React', 'Commerce API', 'Motion'], duration: 'Concept study · 4 weeks',
    challenge: 'Product-rich storefronts often force visitors to choose between inspiration and efficient shopping.', constraints: ['Keep product details scannable', 'Design for mobile purchase journeys', 'Avoid motion that slows decision-making'],
    approach: 'A modular editorial system balances strong product stories with predictable catalog and checkout patterns.', decisions: ['Persistent product context', 'Progressive disclosure for details', 'Performance-first imagery'], deliverables: ['Experience strategy', 'Responsive interface system', 'Interactive prototype'],
    outcomes: [{ label: 'Project goal', value: 'Make browsing feel considered without adding friction.', kind: 'project-goal' }],
    media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85', alt: 'Replaceable visual reference for a commerce product concept', caption: 'Concept placeholder — replace with approved project media.' }],
  },
  {
    title: 'The workday, organised', slug: 'workday-organised', excerpt: 'A role-aware workspace that turns complex daily activity into clear next steps.', type: 'business-systems', typeLabel: 'Business systems', sector: 'Operations', year: 2026, status: 'prototype', featured: false, published: true, indexable: true,
    role: ['Workflow strategy', 'System design', 'Frontend development'], services: ['Business systems', 'UX design'], technologies: ['React', 'Role permissions', 'Data visualisation'], duration: 'Product concept · 5 weeks',
    challenge: 'Operations teams lose time moving between disconnected dashboards, spreadsheets and status updates.', constraints: ['Multiple user roles', 'Dense operational information', 'Fast daily navigation'],
    approach: 'The workspace prioritises exceptions and next actions while keeping deeper reporting one deliberate step away.', decisions: ['Role-specific home views', 'Action-led navigation', 'Shared status language'], deliverables: ['Workflow map', 'Dashboard design system', 'Responsive prototype'],
    outcomes: [{ label: 'Project goal', value: 'Reduce the mental effort required to understand the workday.', kind: 'project-goal' }],
    media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85', alt: 'Replaceable visual reference for an operations dashboard concept', caption: 'Concept placeholder — replace with approved system screenshots.' }],
  },
  {
    title: 'Move with purpose', slug: 'move-with-purpose', excerpt: 'A focused mobile product designed around momentum, habit and clarity.', type: 'mobile', typeLabel: 'Mobile', sector: 'Health & wellness', year: 2026, status: 'prototype', featured: false, published: true, indexable: true,
    role: ['Product direction', 'Mobile UX', 'Prototype development'], services: ['Mobile apps', 'Product discovery'], technologies: ['React Native', 'Design system', 'Motion'], duration: 'Mobile concept · 4 weeks',
    challenge: 'Habit products can become visually noisy and over-reward activity instead of supporting meaningful progress.', constraints: ['One-handed interaction', 'Accessible progress feedback', 'Calm notification patterns'],
    approach: 'A small number of purposeful flows make the next useful action obvious without turning progress into pressure.', decisions: ['Single daily focus', 'Quiet progress language', 'Low-friction check-ins'], deliverables: ['Product framing', 'Mobile interface system', 'Interactive prototype'],
    outcomes: [{ label: 'Project goal', value: 'Help users understand progress without noisy gamification.', kind: 'project-goal' }],
    media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=85', alt: 'Replaceable visual reference for a mobile product concept', caption: 'Concept placeholder — replace with approved mobile screens.' }],
  },
]

export const industries = ['Startups', 'Real estate', 'Professional services', 'Retail & commerce', 'Hospitality', 'Health & wellness', 'Education', 'Agencies']

function validateProjects(items) {
  const slugs = new Set()
  items.forEach((project) => {
    if (!project.slug || slugs.has(project.slug)) throw new Error(`Invalid or duplicate project slug: ${project.slug}`)
    slugs.add(project.slug)
    if (!project.published && project.indexable) throw new Error(`Unpublished project cannot be indexable: ${project.slug}`)
    if (!project.media?.length) throw new Error(`Project media is required: ${project.slug}`)
    project.media.forEach((media) => {
      if (media.type === 'image' && !media.alt) throw new Error(`Image alt text is required: ${project.slug}`)
      try { new URL(media.src) } catch { throw new Error(`Invalid project media URL: ${project.slug}`) }
    })
  })
}

validateProjects(projects)
