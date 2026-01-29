"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const roles = ["Frontend Developer" , "Full Stack Developer" , "Frontend Mobile Developer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else if (isDeleting && charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex, roles])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6 md:space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-[#8da9c4] font-medium"
          >
            Hola, soy
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0b2545]"
          >
            Julian Rodríguez
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-12 md:h-16 flex items-center justify-center"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gradient min-h-[3rem]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              >
                |
              </motion.span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-[#134074] max-w-2xl mx-auto leading-relaxed"
          >
            Construyo experiencias web excepcionales con código limpio, diseño intuitivo y tecnologías modernas.
            Especializado en crear soluciones escalables y eficientes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-[#13315c] text-[#eef4ed] hover:bg-[#134074] transition-all duration-300 text-base md:text-lg px-8 py-6"
              >
                <a href="#projects">Ver Proyectos</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#13315c] text-[#13315c] hover:bg-[#13315c] hover:text-[#eef4ed] transition-all duration-300 text-base md:text-lg px-8 py-6 bg-transparent"
              >
                <a href="#contact">Contactar</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            {[
              { href: "https://github.com/DavidLlano2004", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/julianllano1809/", icon: Linkedin, label: "LinkedIn" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#134074] hover:text-[#0b2545] transition-colors mt-8"
                aria-label={social.label}
                whileHover={{ scale: 1.25, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 mb-4"
        >
          <ArrowDown className="text-[#8da9c4]" size={32} />
        </motion.div>
      </div>

      {/* Floating Elements */}
      {[
        { size: "w-20 h-20", color: "bg-[#8da9c4]/10", position: "top-1/4 left-10", delay: 0 },
        { size: "w-32 h-32", color: "bg-[#134074]/10", position: "bottom-1/4 right-10", delay: 2 },
        { size: "w-16 h-16", color: "bg-[#13315c]/10", position: "top-1/2 right-1/4", delay: 4 },
      ].map((element, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: element.delay }}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full`}
        />
      ))}
    </section>
  )
}
