import yourLiteraryWorldLogo from '../assets/projects/proj1/img1.svg'
import yourLiteraryWorldStorefront from '../assets/projects/proj1/img2.png'
import myIndiaVenturesLogo from '../assets/projects/proj2/img1.webp'
import myIndiaVenturesEvents from '../assets/projects/proj2/img2.png'
import myIndiaVenturesBlog from '../assets/projects/proj2/img3.png'
import myIndiaVenturesHome from '../assets/projects/proj2/img4.png'
import candiliciousLogo from '../assets/projects/proj3/img1.png'
import candiliciousStore from '../assets/projects/proj3/img2.png'
import candiliciousHome from '../assets/projects/proj3/img3.png'
import sydartTechBrand from '../assets/projects/proj4/img1.png'
import sydartTechServices from '../assets/projects/proj4/img2.png'

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
  github: 'https://github.com/JIG555ERA',
  linkedin: 'https://www.linkedin.com/in/jigarveera/',
}

export const whatsappUrl = (subject = 'a new digital product') => {
  const message = `Hi Jigar, I found your portfolio and would like to get a quote for ${subject}. Could we discuss the project?`
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}

export const services = [
  { slug: 'web-development', number: '01', title: 'Web development', seoTitle: 'Custom Web Development Services', seoDescription: 'Custom website, React web app and e-commerce development for businesses in India and worldwide, including responsive UX, SEO and Razorpay integration.', keywords: ['custom web development services', 'freelance web developer India', 'React web app development', 'ecommerce website development', 'Razorpay payment gateway integration', 'responsive website developer'], short: 'High-converting websites and digital platforms that stay fast as they grow.', details: ['Strategy & UX', 'React development', 'CMS & commerce', 'Razorpay payment integration', 'SEO foundations'], timeline: 'Typically 3–8 weeks' },
  { slug: 'mobile-app-development', number: '02', title: 'Mobile apps', seoTitle: 'Cross-Platform Mobile App Development', seoDescription: 'Cross-platform mobile app development for startups and businesses, covering product discovery, API integration, iOS, Android and launch support.', keywords: ['mobile app developer India', 'cross-platform app development', 'iOS and Android app development', 'MVP app development', 'mobile application development services'], short: 'Focused cross-platform products built to validate, launch and evolve.', details: ['Product discovery', 'iOS & Android', 'API integration', 'Store launch'], timeline: 'Typically 8–16 weeks' },
  { slug: 'business-systems', number: '03', title: 'Business systems', seoTitle: 'Custom Business Software & Automation', seoDescription: 'Custom business software, admin panels, dashboards and workflow automation designed to replace manual processes with reliable operational systems.', keywords: ['custom software development India', 'business process automation', 'admin panel development', 'dashboard development services', 'internal tools development', 'workflow automation software'], short: 'Internal tools that replace manual work with clear, dependable workflows.', details: ['Admin panels', 'Employee portals', 'Dashboards', 'Workflow automation'], timeline: 'Typically 6–14 weeks' },
  { slug: '3d-web-experiences', number: '04', title: '3D experiences', seoTitle: '3D Web & WebGL Development', seoDescription: 'Performance-minded 3D websites, WebGL experiences and interactive product showcases with responsive controls and lightweight fallbacks.', keywords: ['3D web development', 'WebGL developer', 'interactive 3D website', '3D product showcase', 'immersive website design'], short: 'Immersive, performance-minded web moments that make products memorable.', details: ['3D art direction', 'Product showcases', 'WebGL interactions', 'Lite fallbacks'], timeline: 'Typically 4–10 weeks' },
  { slug: 'seo-performance', number: '05', title: 'SEO & performance', seoTitle: 'Technical SEO & Website Performance', seoDescription: 'Technical SEO and website speed optimisation focused on Core Web Vitals, accessibility, analytics and a stronger search-ready foundation.', keywords: ['technical SEO services India', 'website performance optimization', 'Core Web Vitals optimization', 'website speed optimization', 'SEO developer India', 'technical website audit'], short: 'Technical improvements that help your product get found and feel instant.', details: ['Core Web Vitals', 'Technical SEO', 'Analytics', 'Accessibility'], timeline: 'Typically 2–5 weeks' },
  { slug: 'ongoing-support', number: '06', title: 'Ongoing support', seoTitle: 'Website Maintenance & Technical Support', seoDescription: 'Flexible website and product maintenance covering monitoring, priority fixes, planned releases and ongoing technical guidance.', keywords: ['website maintenance services', 'web application support', 'ongoing technical support'], short: 'A steady technical partner for releases, fixes and thoughtful improvements.', details: ['Priority support', 'Monitoring', 'Monthly releases', 'Technical guidance'], timeline: 'Flexible monthly care' },
]

export const packages = [
  { slug: 'launch-page', name: 'Launch page', label: 'For a focused first impression', includes: ['One strategic landing page', 'Responsive build', 'Lead capture', 'SEO setup'], timeline: '2–3 weeks' },
  { slug: 'business-website', name: 'Business website', label: 'For an established, credible presence', includes: ['Content-led page system', 'CMS integration', 'Conversion journeys', 'Optional Razorpay payments', 'Analytics'], timeline: '4–8 weeks', featured: true },
  { slug: 'mvp-app', name: 'MVP app', label: 'For testing a product in market', includes: ['Product planning', 'Core user flows', 'Cross-platform build', 'Launch support'], timeline: '8–14 weeks' },
  { slug: 'custom-system', name: 'Custom system', label: 'For unique operations and workflows', includes: ['Workflow discovery', 'Role-based system', 'Integrations', 'Team handover'], timeline: 'Scoped after discovery' },
]

export const projects = [
  {
    title: 'Your Literary World', slug: 'your-literary-world', seoTitle: 'Online Bookstore Development Case Study', keywords: ['online bookstore development', 'book ecommerce website', 'ebook marketplace development', 'audiobook ecommerce platform'], excerpt: 'An online book-retail platform bringing printed books, audiobooks and e-books into one focused purchasing experience.', type: 'web', typeLabel: 'Web', sector: 'Books & publishing', year: 2026, status: 'live', featured: true, published: true, indexable: true,
    clientLabel: 'Your Literary World', role: ['Product development', 'Commerce experience', 'Frontend development'], services: ['Web development', 'E-commerce'], technologies: ['Responsive web', 'E-commerce platform'], duration: 'End-to-end product build',
    challenge: 'Book buyers need a simple way to discover and purchase titles across print, audio and digital formats while knowing the supply comes through verified publishers and distributors.', constraints: ['Support printed books, audiobooks and e-books', 'Keep discovery and search straightforward', 'Design around reliable, short delivery expectations'],
    approach: 'Your Literary World brings search, categories, bookmarks and the shopping bag into a unified storefront. The experience is structured to shorten the journey from discovering a title to choosing a format and purchasing it.', decisions: ['Search-led book discovery', 'Clear navigation across the catalogue', 'Saved bookmarks for later decisions', 'Focused purchase and bag journey'], deliverables: ['Responsive online bookstore', 'Book discovery and search experience', 'Catalogue and category navigation', 'Bookmarks and shopping bag flows'],
    outcomes: [{ label: 'Project goal', value: 'Make verified books across physical, audio and digital formats easier to discover, purchase and receive quickly.', kind: 'project-goal' }],
    media: [
      { type: 'image', src: yourLiteraryWorldLogo, alt: 'Your Literary World YLW book-spine logo in yellow, blue and pink', caption: 'The compact YLW identity used throughout the bookstore experience.' },
      { type: 'image', src: yourLiteraryWorldStorefront, alt: 'Your Literary World storefront showing book discovery, search, categories, bookmarks and shopping bag navigation', caption: 'Your Literary World online bookstore home experience.' },

    ],
    liveUrl: 'https://www.ylw.co.in',
  },
  {
    title: 'My India Ventures', slug: 'my-india-ventures', seoTitle: 'Travel & Trekking Web App Case Study', keywords: ['travel web app development', 'trekking platform development', 'event management web application', 'travel blog platform'], excerpt: 'A multi-role adventure platform for discovering curated treks, joining events and sharing travel experiences with like-minded people.', type: 'web', typeLabel: 'Web app · Blogs', sector: 'Travel & adventure', year: 2025, status: 'live', featured: false, published: true, indexable: true,
    clientLabel: 'My India Ventures', role: ['Product architecture', 'UX/UI design', 'Full-stack development'], services: ['Web app', 'Blogs', 'Role-based systems'], technologies: ['React', 'Auth0', 'Razorpay'], duration: 'Multi-role platform build',
    challenge: 'Adventure travel involves more than finding a destination. Adventurers need trustworthy event information and community, while administrators and trek leaders need connected tools to coordinate people and track each event.',
    constraints: ['Serve administrators, trek leaders and adventurers with distinct permissions', 'Make trek difficulty, location and category easy to compare', 'Connect event operations with the public discovery experience', 'Support useful stories without losing focus on event booking'],
    approach: 'My India Ventures combines a public travel experience with dedicated panels for administrators, trek leaders and adventurers. Visitors can explore treks, camping and travel events; authenticated users can coordinate participation and event progress; and the blog gives adventurers a place to share what they learned after completing a journey.',
    decisions: ['Role-specific panels and permissions', 'Search and filters for location, level and activity category', 'Connected event participation and tracking workflows', 'Blog discovery across adventure stories, guides and videos'],
    deliverables: ['Responsive travel and adventure web application', 'Curated event and trek discovery', 'Admin, trek-leader and adventurer panels', 'Event participation and tracking workflows', 'Community travel blog'],
    outcomes: [{ label: 'Project goal', value: 'Connect adventure discovery, event coordination and community storytelling in one reliable platform.', kind: 'project-goal' }],
    media: [
      { type: 'image', src: myIndiaVenturesLogo, alt: 'My India Ventures MIV compass-inspired brand logo on a dark blue background', caption: 'The My India Ventures adventure-platform identity.' },
      { type: 'image', src: myIndiaVenturesHome, alt: 'My India Ventures homepage introducing curated treks and adventure events across India', caption: 'The adventure-led homepage and primary event discovery entry point.' },
      { type: 'image', src: myIndiaVenturesEvents, alt: 'My India Ventures event catalogue with search and filters for locations, levels and adventure categories', caption: 'Searchable trek and event catalogue for comparing curated adventures.' },
      { type: 'image', src: myIndiaVenturesBlog, alt: 'My India Ventures blog with adventure stories, travel guides, videos and topic filters', caption: 'Community blog where adventurers can discover and share journey experiences.' },
    ],
    liveUrl: 'https://myindiaventures-rv4g.vercel.app/',
  },
  {
    title: 'Candilicious Candles', slug: 'candilicious-candles', seoTitle: 'Candle E-commerce Website Case Study', keywords: ['candle ecommerce website', 'Razorpay ecommerce integration', 'online ordering website development', 'Porter delivery integration'], excerpt: 'A dedicated online store for handcrafted candles, combining an atmospheric shopping experience with ordering, payments and delivery fulfilment.', type: 'web', typeLabel: 'E-commerce · Web', sector: 'Home fragrance & retail', year: 2026, status: 'live', featured: false, published: true, indexable: true,
    clientLabel: 'Candilicious Candles', role: ['Product design', 'E-commerce development', 'Payment integration'], services: ['E-commerce', 'Web app', 'Razorpay payments'], technologies: ['Responsive web', 'Razorpay', 'Porter delivery workflow'], duration: 'End-to-end commerce build',
    challenge: 'Candilicious needed a focused online home for artisan candles that could communicate warmth and craft while making product discovery, ordering, payment and delivery straightforward.',
    constraints: ['Preserve the handcrafted premium brand feeling', 'Support candle search, fragrance filters and product ordering', 'Provide secure Razorpay payment checkout', 'Prepare orders for delivery fulfilment through Porter'],
    approach: 'The storefront pairs a warm, atmospheric visual direction with a practical catalogue and ordering journey. Customers can discover natural soy-wax candles, search and filter the collection, add products to their cart, pay through Razorpay and continue into the Porter-supported delivery workflow.',
    decisions: ['Brand-led hero focused on warmth and ambience', 'Dedicated searchable candle catalogue', 'Clear add-to-cart and order journeys', 'Razorpay checkout with delivery fulfilment planning'],
    deliverables: ['Responsive candle e-commerce website', 'Searchable product and fragrance catalogue', 'Cart and online-ordering experience', 'Razorpay payment-gateway integration', 'Porter delivery workflow setup'],
    outcomes: [{ label: 'Project goal', value: 'Give handcrafted candles a distinctive digital storefront and make the complete ordering journey simple and dependable.', kind: 'project-goal' }],
    media: [
      { type: 'image', src: candiliciousLogo, alt: 'Candilicious Candles flame logo in warm orange and dark brown', caption: 'The compact flame mark supporting the warm handcrafted brand.' },
      { type: 'image', src: candiliciousHome, alt: 'Candilicious Candles homepage with a warm artisan-candle hero and online shopping actions', caption: 'Brand-led homepage for the handcrafted candle collection.' },
      { type: 'image', src: candiliciousStore, alt: 'Candilicious Candles online store showing searchable candle products, fragrance filters, prices and add-to-cart controls', caption: 'Searchable candle catalogue and online ordering experience.' },
    ],
    liveUrl: 'https://candilicous-candles.vercel.app/',
  },
  {
    title: 'Sydart Tech', slug: 'sydart-tech', seoTitle: 'Web Development Company Website Case Study', keywords: ['web development company website', 'technology company website design', 'IT services website development', 'motion website development'], excerpt: 'A motion-led company website that presents design, development, AI and IoT capabilities through a focused service-enquiry experience.', type: 'web', typeLabel: 'Company website · Web', sector: 'Technology services', year: 2026, status: 'live', featured: false, published: true, indexable: true,
    clientLabel: 'Sydart Tech', role: ['Digital experience design', 'Frontend development', 'Interaction design'], services: ['Company website', 'Web development', 'Lead generation'], technologies: ['React', 'Motion', 'EmailJS'], duration: 'Brand and website build',
    challenge: 'A broad technology company can quickly sound generic. Sydart Tech needed a distinctive web presence that could express technical range while helping prospects identify the right service and start a relevant conversation.',
    constraints: ['Represent Design, Development, AI/Machine Learning and IoT clearly', 'Keep the animated brand experience responsive across screen sizes', 'Carry selected service context into the enquiry flow', 'Balance visual impact with a direct conversion path'],
    approach: 'The experience begins with a restrained animated identity reveal, then introduces the company through a clear “All Technological Solutions” proposition. Visitors select the capabilities relevant to them before entering a concise enquiry flow, giving each conversation useful context from the start.',
    decisions: ['Brand-first motion sequence', 'Four understandable capability groups', 'Multi-select service enquiry interaction', 'Responsive layouts tuned for desktop and mobile'],
    deliverables: ['Responsive technology-company website', 'Animated brand and landing experience', 'Service discovery and selection interface', 'Contextual lead-enquiry flow', 'EmailJS enquiry delivery'],
    outcomes: [{ label: 'Project goal', value: 'Turn a broad technology offering into a distinctive, understandable and conversion-focused company experience.', kind: 'project-goal' }],
    media: [
      { type: 'image', src: sydartTechBrand, alt: 'Sydart Tech animated brand introduction on a dark digital canvas', caption: 'Brand-first introduction establishing the company’s technical visual identity.' },
      { type: 'image', src: sydartTechServices, alt: 'Sydart Tech mobile service enquiry showing Design, Development, AI Machine Learning and IoT options', caption: 'Mobile service selection guiding prospects into a contextual enquiry.' },
    ],
    liveUrl: 'https://sydarttech.com/',
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
      try { new URL(media.src, siteConfig.url) } catch { throw new Error(`Invalid project media URL: ${project.slug}`) }
    })
  })
}

validateProjects(projects)
