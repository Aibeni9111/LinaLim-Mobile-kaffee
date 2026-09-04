import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './HeroScene.css'

const BEAN_COUNT = 14

function HeroScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const canvas = canvasRef.current
    const container = canvas.parentElement

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    )
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xd9b878, 1.2)
    keyLight.position.set(5, 6, 8)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0x8b6535, 0.6)
    rimLight.position.set(-6, -3, -4)
    scene.add(rimLight)

    const beanGeometry = new THREE.SphereGeometry(0.6, 24, 16)
    beanGeometry.scale(1, 0.75, 0.45)

    const beanMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a2f1c,
      roughness: 0.45,
      metalness: 0.25,
    })

    const beans = []

    for (let i = 0; i < BEAN_COUNT; i += 1) {
      const bean = new THREE.Mesh(beanGeometry, beanMaterial)

      bean.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 8 - 2,
      )
      bean.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      )

      const scale = 0.6 + Math.random() * 0.8
      bean.scale.setScalar(scale)

      bean.userData.spinSpeed = (Math.random() - 0.5) * 0.006
      bean.userData.floatOffset = Math.random() * Math.PI * 2
      bean.userData.home = bean.position.clone()
      bean.userData.velocity = new THREE.Vector3()

      scene.add(bean)
      beans.push(bean)
    }

    const raycaster = new THREE.Raycaster()
    const pointerNDC = new THREE.Vector2(-10, -10) // за экраном, пока курсор не появился
    const REPEL_RADIUS = 3.2
    const REPEL_STRENGTH = 0.12
    const SPRING_STRENGTH = 0.02
    const DAMPING = 0.88

    function updatePointer(clientX, clientY) {
      const rect = container.getBoundingClientRect()
      pointerNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1
      pointerNDC.y = -(((clientY - rect.top) / rect.height) * 2 - 1)
    }

    function handlePointerMove(event) {
      updatePointer(event.clientX, event.clientY)
    }

    function handlePointerLeave() {
      pointerNDC.set(-10, -10)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    function handleResize() {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    let frameId
    let elapsed = 0

    function animate() {
      elapsed += 0.01

      raycaster.setFromCamera(pointerNDC, camera)

      beans.forEach((bean) => {
        bean.rotation.x += bean.userData.spinSpeed
        bean.rotation.y += bean.userData.spinSpeed * 1.3

        // Пружина: тянет зерно обратно к его "родной" позиции
        const toHome = bean.userData.home.clone().sub(bean.position)
        bean.userData.velocity.addScaledVector(toHome, SPRING_STRENGTH)

        // Отталкивание: если луч от курсора проходит рядом с зерном — толкаем его прочь
        const direction = raycaster.ray.direction
        if (Math.abs(direction.z) > 0.0001) {
          const t = (bean.position.z - raycaster.ray.origin.z) / direction.z
          const pointOnRay = raycaster.ray.origin
            .clone()
            .addScaledVector(direction, t)
          const away = bean.position.clone().sub(pointOnRay)
          const distance = away.length()

          if (Number.isFinite(distance) && distance < REPEL_RADIUS && distance > 0.0001) {
            const strength = (1 - distance / REPEL_RADIUS) * REPEL_STRENGTH
            bean.userData.velocity.addScaledVector(away.normalize(), strength)
          }
        }

        bean.userData.velocity.multiplyScalar(DAMPING)
        bean.position.add(bean.userData.velocity)

        if (!prefersReducedMotion) {
          bean.position.y += Math.sin(elapsed + bean.userData.floatOffset) * 0.002
        }
      })

      if (!prefersReducedMotion) {
        camera.position.x += (pointerNDC.x * 1.2 - camera.position.x) * 0.02
        camera.position.y += (pointerNDC.y * 0.8 - camera.position.y) * 0.02
        camera.lookAt(0, 0, 0)
      }

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('resize', handleResize)
      beanGeometry.dispose()
      beanMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="hero-scene">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default HeroScene
