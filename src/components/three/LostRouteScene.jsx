import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function LostRouteScene({ onError, onReady, resolved = false }) {
  const mountRef = useRef(null)
  const resolvedRef = useRef(resolved)

  useEffect(() => { resolvedRef.current = resolved }, [resolved])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    let renderer
    let animationFrame = 0
    let visible = true
    let pointerX = 0
    let pointerY = 0

    try {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0, 4.1, 10.5)
      camera.lookAt(0, 0, 0)

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
      renderer.setClearColor(0x000000, 0)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.domElement.className = 'lost-route-canvas'
      renderer.domElement.setAttribute('aria-hidden', 'true')
      mount.appendChild(renderer.domElement)

      const routeSystem = new THREE.Group()
      routeSystem.rotation.x = -0.18
      scene.add(routeSystem)

      const grid = new THREE.GridHelper(10, 12, 0x33414a, 0x20262b)
      grid.position.y = -1.55
      grid.rotation.z = -0.08
      routeSystem.add(grid)

      const moduleMaterial = new THREE.MeshBasicMaterial({ color: 0x8bff6a, wireframe: true, transparent: true, opacity: 0.92 })
      const module = new THREE.Mesh(new THREE.BoxGeometry(2.25, 1.15, 1.15, 3, 2, 2), moduleMaterial)
      module.position.set(0.4, -0.35, 0)
      routeSystem.add(module)

      const innerModule = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.62, 0.62), new THREE.MeshBasicMaterial({ color: 0x151b15 }))
      innerModule.position.copy(module.position)
      routeSystem.add(innerModule)

      const routePoints = [
        new THREE.Vector3(-4.2, -1.1, 0),
        new THREE.Vector3(-2.9, -0.65, 0),
        new THREE.Vector3(-1.7, -1.02, 0),
        new THREE.Vector3(-0.7, -0.48, 0),
        new THREE.Vector3(0.4, -0.35, 0),
      ]
      const routeGeometry = new THREE.BufferGeometry().setFromPoints(routePoints)
      const routeLine = new THREE.Line(routeGeometry, new THREE.LineBasicMaterial({ color: 0x6ac8ff, transparent: true, opacity: 0.72 }))
      routeSystem.add(routeLine)

      const nodeGeometry = new THREE.SphereGeometry(0.09, 12, 12)
      routePoints.slice(0, -1).forEach(point => {
        const node = new THREE.Mesh(nodeGeometry, new THREE.MeshBasicMaterial({ color: 0xa9afbc }))
        node.position.copy(point)
        routeSystem.add(node)
      })

      const detachedStart = new THREE.Vector3(3.35, 1.15, 0.2)
      const detachedResolved = new THREE.Vector3(1.7, 0.2, 0.08)
      const detached = new THREE.Mesh(new THREE.IcosahedronGeometry(0.26, 1), new THREE.MeshBasicMaterial({ color: 0x8bff6a, wireframe: true }))
      detached.position.copy(detachedStart)
      routeSystem.add(detached)

      const guideGeometry = new THREE.BufferGeometry()
      const guidePositions = new Float32Array(6)
      guideGeometry.setAttribute('position', new THREE.BufferAttribute(guidePositions, 3))
      const guide = new THREE.Line(guideGeometry, new THREE.LineDashedMaterial({ color: 0x6ac8ff, transparent: true, opacity: 0.45, dashSize: 0.18, gapSize: 0.11 }))
      routeSystem.add(guide)

      const resize = () => {
        const width = Math.max(mount.clientWidth, 1)
        const height = Math.max(mount.clientHeight, 1)
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }

      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(mount)
      resize()

      const canPoint = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      const onPointerMove = event => {
        if (!canPoint) return
        const rect = mount.getBoundingClientRect()
        pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.18
        pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.12
      }
      mount.addEventListener('pointermove', onPointerMove, { passive: true })

      const clock = new THREE.Clock()
      const render = () => {
        animationFrame = 0
        if (!visible || document.hidden) return
        const elapsed = clock.getElapsedTime()
        const target = resolvedRef.current ? detachedResolved : detachedStart
        detached.position.lerp(target, 0.065)
        detached.rotation.x += 0.006
        detached.rotation.y += 0.008
        detached.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.06)
        module.rotation.y = Math.sin(elapsed * 0.35) * 0.08
        routeSystem.rotation.y += (pointerX - routeSystem.rotation.y) * 0.035
        routeSystem.rotation.x += (-0.18 - pointerY - routeSystem.rotation.x) * 0.035
        const positions = guide.geometry.attributes.position.array
        positions[0] = module.position.x
        positions[1] = module.position.y
        positions[2] = module.position.z
        positions[3] = detached.position.x
        positions[4] = detached.position.y
        positions[5] = detached.position.z
        guide.geometry.attributes.position.needsUpdate = true
        guide.computeLineDistances()
        renderer.render(scene, camera)
        animationFrame = window.requestAnimationFrame(render)
      }

      const start = () => {
        if (visible && !document.hidden && !animationFrame) animationFrame = window.requestAnimationFrame(render)
      }
      const stop = () => {
        if (animationFrame) window.cancelAnimationFrame(animationFrame)
        animationFrame = 0
      }
      const visibilityObserver = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting
        if (visible) start()
        else stop()
      }, { threshold: 0.05 })
      const onVisibilityChange = () => document.hidden ? stop() : start()
      const onContextLost = event => {
        event.preventDefault()
        stop()
        onError?.()
      }
      visibilityObserver.observe(mount)
      document.addEventListener('visibilitychange', onVisibilityChange)
      renderer.domElement.addEventListener('webglcontextlost', onContextLost)
      start()
      onReady?.()

      return () => {
        stop()
        visibilityObserver.disconnect()
        resizeObserver.disconnect()
        document.removeEventListener('visibilitychange', onVisibilityChange)
        mount.removeEventListener('pointermove', onPointerMove)
        renderer.domElement.removeEventListener('webglcontextlost', onContextLost)
        routeGeometry.dispose()
        nodeGeometry.dispose()
        guideGeometry.dispose()
        module.geometry.dispose()
        moduleMaterial.dispose()
        innerModule.geometry.dispose()
        innerModule.material.dispose()
        detached.geometry.dispose()
        detached.material.dispose()
        routeLine.material.dispose()
        guide.material.dispose()
        grid.geometry.dispose()
        grid.material.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    } catch {
      onError?.()
      renderer?.dispose()
      return undefined
    }
  }, [onError, onReady])

  return <div className="lost-route-webgl" ref={mountRef} aria-hidden="true" />
}
