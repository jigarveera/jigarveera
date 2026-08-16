import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import LostRouteFallback from '../three/LostRouteFallback'

const LostRouteScene = lazy(() => import('../three/LostRouteScene'))

export default function NotFoundPage({ contextLabel = 'ROUTE_NOT_FOUND' }) {
  const location = useLocation()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const headingRef = useRef(null)
  const [resolved, setResolved] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const [webglFailed, setWebglFailed] = useState(false)
  const safePath = useMemo(() => {
    const path = location.pathname || '/'
    return path.length > 88 ? `${path.slice(0, 85)}…` : path
  }, [location.pathname])
  const handleSceneReady = useCallback(() => setSceneReady(true), [])
  const handleSceneError = useCallback(() => { setWebglFailed(true); setSceneReady(false) }, [])

  useEffect(() => { headingRef.current?.focus({ preventScroll: true }) }, [location.pathname])

  const goBack = () => {
    const sameOriginReferrer = (() => {
      try { return Boolean(document.referrer) && new URL(document.referrer).origin === window.location.origin } catch { return false }
    })()
    const hasAppHistory = Number(window.history.state?.idx) > 0
    if (hasAppHistory || sameOriginReferrer) navigate(-1)
    else navigate('/')
  }

  return (
    <section className="not-found-page section-pad" aria-labelledby="not-found-heading">
      <div className="not-found-copy">
        <p className="not-found-system"><span /> ERROR 404 · {contextLabel}</p>
        <h1 id="not-found-heading" ref={headingRef} tabIndex="-1">This page stepped outside the <em>system.</em></h1>
        <p className="not-found-intro">The route may have moved, the link may be outdated, or the page may never have existed. Let’s get you back to something useful.</p>
        <p className="not-found-path"><span>Requested route</span><code>{safePath}</code></p>
        <div className="not-found-actions">
          <Link className="button button-primary" to="/" onPointerEnter={() => setResolved(true)} onPointerLeave={() => setResolved(false)} onFocus={() => setResolved(true)} onBlur={() => setResolved(false)}>Return home <ArrowRight /></Link>
          <Link className="not-found-link" to="/work">View my work <ArrowUpRight /></Link>
          <Link className="not-found-link" to="/contact?source=404">Start a project <ArrowUpRight /></Link>
          <button className="not-found-back" type="button" onClick={goBack}><ArrowLeft /> Go back</button>
        </div>
      </div>
      <div className={`lost-route-visual ${sceneReady ? 'has-webgl' : ''}`}>
        <LostRouteFallback resolved={resolved} />
        {!reduceMotion && !webglFailed && (
          <Suspense fallback={null}>
            <LostRouteScene resolved={resolved} onReady={handleSceneReady} onError={handleSceneError} />
          </Suspense>
        )}
        <p className="sr-only">A detached route node is trying to reconnect to the central JV system.</p>
        <div className="lost-route-legend"><span><i /> Main system</span><span><i /> Lost node</span></div>
      </div>
    </section>
  )
}
