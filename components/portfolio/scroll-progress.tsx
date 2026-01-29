"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setProgress(progress)
    }

    window.addEventListener("scroll", updateProgress)
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-secondary/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#13315c] via-[#134074] to-[#8da9c4] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
