const paths = {
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></>,
  facebook: <path d="M15 21v-8h3l.5-4H15V7c0-1 .4-1.5 1.5-1.5H19V2h-3c-3.4 0-5 1.8-5 5v2H8v4h3v8z" fill="currentColor" stroke="none" />,
  youtube: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></>,
  linkedin: <><rect x="2" y="2" width="20" height="20" rx="2" /><circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" /><path d="M7 11v7m4 0v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  github: <><path d="M9 19c-4 1-6-2-6-6 0-2 .8-3.7 2.2-4.8-.2-.8-.2-2 .3-3.2 1.2 0 2.3.5 3.1 1.1a12 12 0 0 1 6.8 0c.8-.6 1.9-1.1 3.1-1.1.5 1.2.5 2.4.3 3.2A6.1 6.1 0 0 1 21 13c0 4-2 7-6 6" /><path d="M9 21v-3c-2 .7-3 .1-4-1m10 4v-3" /></>,
  x: <><path d="M4 3h4l12 18h-4z" /><path d="M20 3 4 21" /></>,
  whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20l1.2-4.8A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8.4 8.7c.5 3.3 2.5 5.3 5.8 6 .6.1 1.5-.7 1.8-1.3l-2.2-1.1-1 1c-1.1-.5-1.9-1.3-2.4-2.4l1-1-1.2-2.2c-.7.3-1.5.4-1.8 1Z" /></>,
}

export default function SocialIcon({ name, size = 19 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
