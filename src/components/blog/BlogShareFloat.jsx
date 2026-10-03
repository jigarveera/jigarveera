import { useState } from 'react'
import { Check, Share2 } from 'lucide-react'
import { getTopic } from '../../data/blogData'

export default function BlogShareFloat({ pathname }) {
  const [copied, setCopied] = useState(false)
  const [, , topicSlug, postId] = pathname.split('/')
  const topic = getTopic(topicSlug)
  if (!topic) return null
  const post = postId ? topic.posts.find(item => item.id === postId) : null
  if (postId && !post) return null

  const share = async () => {
    const data = { title: post?.title || `${topic.name}'s journal`, url: window.location.href }
    try {
      if (navigator.share) { await navigator.share(data); return }
      await navigator.clipboard.writeText(data.url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch (error) {
      if (error?.name !== 'AbortError') window.prompt('Copy this link', data.url)
    }
  }

  return <button className="blog-share-float" type="button" onClick={share} aria-label={copied ? 'Link copied' : `Share ${post ? 'this story' : `${topic.name}'s journal`}`}>
    {copied ? <Check size={20} /> : <Share2 size={20} />}
  </button>
}
