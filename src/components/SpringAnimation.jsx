import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

export default function SpringAnimation() {
  const [isExpanded, setExpanded] = useState(false)
  
  const springs = useSpring({
    from: { scale: 1, rotateZ: 0 },
    to: {
      scale: isExpanded ? 1.5 : 1,
      rotateZ: isExpanded ? 180 : 0
    },
    config: { tension: 300, friction: 10 }
  })

  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <animated.div
        style={{
          ...springs,
          padding: '2rem',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          borderRadius: '1rem',
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={() => setExpanded(!isExpanded)}
      >
        <h2 className="text-2xl font-bold">¡Click aquí!</h2>
        <p>Animación con React Spring</p>
      </animated.div>
    </div>
  )
}
