"use client"

import { Code2, Lightbulb, Rocket, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const values = [
    {
      icon: Code2,
      title: "Código Limpio",
      description: "Escribo código mantenible y escalable siguiendo las mejores prácticas.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Siempre buscando nuevas tecnologías y soluciones creativas.",
    },
    {
      icon: Rocket,
      title: "Rendimiento",
      description: "Optimizo cada aplicación para máxima velocidad y eficiencia.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajo efectivamente en equipo y comunico ideas claramente.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-background to-[#8da9c4]/5"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2545] mb-4">Sobre Mí</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#13315c] to-[#8da9c4] mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#13315c] to-[#8da9c4] p-1"
              >
                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                  <img
                    src="/ProfessionalPhoto.jpeg"
                    alt="Developer"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#134074]/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -left-4 w-32 h-32 bg-[#8da9c4]/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#134074] leading-relaxed">
              Soy un desarrollador Frontend con experiencia en el desarrollo Full Stack apasionado con más de{" "}
              <span className="font-semibold text-[#0b2545]">3 años de experiencia</span> construyendo aplicaciones web
              modernas y escalables.
            </p>
            <p className="text-lg text-[#134074] leading-relaxed">
              Mi enfoque se centra en crear{" "}
              <span className="font-semibold text-[#0b2545]">experiencias excepcionales</span> que combinan diseño
              elegante con código robusto. Me especializo en el ecosistema de JavaScript/TypeScript, trabajando con
              React, Next.js, Node.js y bases de datos modernas.
            </p>
            <p className="text-lg text-[#134074] leading-relaxed">
              Cuando no estoy programando, me encontrarás aprendiendo nuevas tecnologías, contribuyendo a proyectos open
              source, o compartiendo conocimientos con la comunidad de desarrolladores.
            </p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { value: "3+", label: "Años" },
                { value: "8", label: "Proyectos" },
              ].map((stat, index) => (
                <motion.div key={stat.label} variants={itemVariants} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring" }}
                    className="text-3xl md:text-4xl font-bold text-[#0b2545]"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-[#8da9c4] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="p-6 border-2 border-[#8da9c4]/20 hover:border-[#134074] hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm min-h-75">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#13315c] to-[#8da9c4] flex items-center justify-center mb-4"
                    >
                      <Icon className="text-[#eef4ed]" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[#0b2545] mb-2">{value.title}</h3>
                    <p className="text-[#134074] leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
