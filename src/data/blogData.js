import { rubyBlogs } from './rubyBlogs'
import { fieldNotesBlogs } from './fieldNotesBlogs'
import { studioNotesBlogs } from './studioNotesBlogs'

// Each topic owns its profile and posts. A future CMS can return this shape.
export const blogTopics = [
  {
    slug: 'ruby', name: 'Ruby', handle: '@ruby', category: 'The featured journal',
    description: 'A tiny world, a magnificent set of red knees. Follow Ruby’s days, one entry at a time.',
    shortDescription: 'Daily dispatches from a Mexican red knee tarantula.',
    theme: 'ruby', color: '#e96b3b', featured: true,
    image: '/blog/ruby/stock-detail.webp', imageTemporary: true,
    author: { name: 'Jigar Veera', image: '/jigarveeraLogo.png', role: 'Ruby’s human' },
    social: { instagram: null, facebook: null, youtubeShorts: null },
    posts: rubyBlogs,
  },
  {
    slug: 'field-notes', name: 'Field notes', handle: '@fieldnotes', category: 'Observation journal',
    description: 'Thoughtful stories, observations, and little things worth remembering.',
    shortDescription: 'Observations worth keeping.', theme: 'default', color: '#92948e', featured: false,
    image: '/blog/field/forest.webp', author: { name: 'Jigar Veera', image: '/jigarveeraLogo.png' }, social: {}, posts: fieldNotesBlogs,
  },
  {
    slug: 'studio-notes', name: 'Studio notes', handle: '@studionotes', category: 'Design journal',
    description: 'Notes from the workbench: design, process, and ideas in progress.',
    shortDescription: 'Ideas from the workbench.', theme: 'default', color: '#92948e', featured: false,
    image: '/blog/studio/question-hero.webp', author: { name: 'Jigar Veera', image: '/jigarveeraLogo.png' }, social: {}, posts: studioNotesBlogs,
  },
]

export const getTopic = (slug) => blogTopics.find(topic => topic.slug === slug)
export const getAllBlogPosts = () => blogTopics.flatMap(topic => topic.posts.map(post => ({ ...post, topic })))
