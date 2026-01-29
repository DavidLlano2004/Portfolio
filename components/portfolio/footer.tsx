"use client"

import { ArrowUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <footer className="relative bg-[#0b2545] text-[#eef4ed] pt-20 pb-8 px-4 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-10 right-10 w-64 h-64 bg-[#134074]/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4 text-[#eef4ed]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {"<Dev />"}
            </motion.h3>
            <p className="text-[#8da9c4] leading-relaxed">
              Desarrollador Frontend con experiencia en desarrollo Full Stack especializado en crear experiencias web excepcionales con tecnologías modernas.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#eef4ed]">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-[#8da9c4] hover:text-[#eef4ed] transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#eef4ed]">Contacto</h4>
            <div className="space-y-2 text-[#8da9c4]">
              <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="mailto:juli.matias.2004@gmail.com" className="hover:text-[#eef4ed] transition-colors">
                  juli.matias.2004@gmail.com
                </a>
              </motion.p>
              <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="tel:+573122480775" className="hover:text-[#eef4ed] transition-colors">
                  +57 3122480775
                </a>
              </motion.p>
              <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                Manizales, Colombia
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-[#8da9c4]/20 pt-8 origin-left"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-[#8da9c4] text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} Julian David Rodriguez. Todos los derechos reservados.{" "}
            </motion.p>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-[#8da9c4] text-[#8da9c4] hover:bg-[#eef4ed] hover:text-[#0b2545] hover:border-[#eef4ed] bg-transparent"
              >
                <ArrowUp size={16} className="mr-2" />
                Volver Arriba
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
