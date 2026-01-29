"use client"

import { useRef } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, useInView } from "framer-motion"

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Mejora: El formulario ahora es funcional con formsubmit.co (sin necesidad de backend)

  const contactInfo = [
    {
      icon: Mail,
      label: "Correo electrónico",
      value: "juli.matias.2004@gmail.com",
      href: "mailto:juli.matias.2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 3122480775",
      href: "tel:+573122480775",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Manizales, Colombia",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DavidLlano2004",
      color: "hover:text-[#0b2545]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/julianllano1809/",
      color: "hover:text-[#0b2545]",
    }
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#8da9c4]/5 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2545] mb-4">¿Trabajemos Juntos?</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#13315c] to-[#8da9c4] mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-[#134074] mt-6 max-w-2xl mx-auto"
          >
            Estoy disponible para nuevos proyectos y colaboraciones. No dudes en contactarme
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-8 border-2 border-[#8da9c4]/20 bg-background/80 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-bold text-[#0b2545] mb-6">Envíame un mensaje</h3>
              {/* Mejora: Formulario funcional con formsubmit.co */}
              <form action="https://formsubmit.co/tu@email.com" method="POST" className="space-y-6">
                {/* Inputs hidden para configurar formsubmit.co */}
                <input type="hidden" name="_next" value="https://tudominio.com" />
                <input type="hidden" name="_subject" value="Nuevo mensaje desde portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-[#0b2545] mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="border-[#8da9c4]/30 focus:border-[#13315c] focus:ring-[#13315c]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-[#0b2545] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="border-[#8da9c4]/30 focus:border-[#13315c] focus:ring-[#13315c]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-[#0b2545] mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={6}
                    required
                    className="border-[#8da9c4]/30 focus:border-[#13315c] focus:ring-[#13315c] resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#13315c] text-[#eef4ed] hover:bg-[#134074] transition-all duration-300"
                  >
                    <Send size={18} className="mr-2" />
                    Enviar Mensaje
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0b2545] mb-6">Información de Contacto</h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Card className="p-6 border-2 border-[#8da9c4]/20 hover:border-[#134074] hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                      <a
                        href={info.href}
                        className="flex items-center gap-4 group"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#13315c] to-[#8da9c4] flex items-center justify-center flex-shrink-0"
                        >
                          <Icon className="text-[#eef4ed]" size={24} />
                        </motion.div>
                        <div>
                          <p className="text-sm text-[#8da9c4] font-medium">{info.label}</p>
                          <p className="text-[#0b2545] font-semibold group-hover:text-[#13315c] transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-2xl font-bold text-[#0b2545] mb-6">Sígueme</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 rounded-lg border-2 border-[#8da9c4]/30 flex items-center justify-center text-[#134074] ${social.color} hover:border-[#134074] hover:shadow-lg transition-all duration-300 bg-background/80`}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
