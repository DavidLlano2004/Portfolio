"use client"

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  // Solo renderizar en desktop
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed top-0 left-0 w-6 h-6 bg-[#13315c] rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Trail effect */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-[#8da9c4] rounded-full pointer-events-none z-[9998] transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  )
}
