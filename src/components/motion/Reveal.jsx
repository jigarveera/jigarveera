import { motion, useReducedMotion } from 'framer-motion'

const motionTokens = { duration: .62, distance: 24, ease: [.22, 1, .36, 1] }

export default function Reveal({ children, className, delay = 0, as = 'div' }) {
  const reduce = useReducedMotion()
  const Component = motion[as] || motion.div
  return <Component className={className} initial={{ opacity: 0, y: reduce ? 0 : motionTokens.distance }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: reduce ? .15 : motionTokens.duration, delay, ease: motionTokens.ease }}>{children}</Component>
}
