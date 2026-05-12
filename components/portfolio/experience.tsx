"use client";

import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  const experiences = [
    {
      company: "Grownet",
      position: "Desarrollador Frontend",
      period: "Febrero 2026 - Presente",
      description: "Plataforma B2B para gestión de proveedores en la industria alimentaria",
      achievements: [
        "Desarrollo de portal de proveedores en producción con Next.js y TypeScript estricto, cubriendo módulos de logística, finanzas, CRM e inventario.",
        "Migración progresiva de codebase JavaScript a TypeScript con arquitectura escalable por features.",
        "Integración con APIs REST con manejo de autenticación y estados globales con Zustand.",
        "Desarrollo de aplicación móvil con React Native/Expo para el flujo de compras.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "React native",
        "Zustand",
        "WebSockets",
      ],
    },
    {
      company: "Freelancer , Propios",
      position: "Full Stack Developer",
      period: "Agosto 2025 - Febrero 2026",
      description: "Proyecto 1: Sistema de Gestión de Fútbol Colombiano",
      second_description: "Proyecto 2: Sistema de Gestión de Parqueadero",
      achievements: [
        "Desarrolló un sistema Backoffice completo utilizando React.js, Node.js y PostgreSQL para la administración de equipos de fútbol colombianos",
        "Implementación de CI/CD reduciendo tiempo de deploy en 60%",
        "Mentoría a equipo de 5 desarrolladores junior",
        "Migración exitosa de aplicación legacy a Next.js 14",
      ],
      second_achievements: [
        "Lideró el desarrollo Full Stack de sistema de gestión de parqueadero utilizando React.js, Node.js, PostgreSQL y React Native.",
        "Implementó Backoffice administrativo con control de entrada/salida de vehículos, registro de tiempos y generación de reportes automatizados.",
        "Desarrolló aplicación móvil multiplataforma con dos interfaces diferenciadas",
        "Para usuarios: consulta de disponibilidad, reservas y pagos.",
        "Para vigilantes: registro de vehículos, validación de tickets y gestión de ocupación en tiempo real.",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "TypeScript",
        "React native",
      ],
    },
    {
      company: "Valiu",
      position: "Frontend Developer",
      period: "Noviembre 2024 - Julio 2025",
      description: "Desarrolló el producto MVP desde cero de MatchRed",
      achievements: [
        "Lideró el desarrollo completo del Frontend del Backoffice administrativo de MatchRed, plataforma para la gestión de ligas de fútbol amateur, utilizando consultas con GraphQL y arquitectura de base datos con AWS",
        "Implementó desde cero el sitio web oficial de MatchRed, optimizando velocidad de carga y experiencia de usuario.",
        "Desarrolló e implementó dos aplicaciones móviles en React Native:",
        "Para jugadores: gestión de partidos, equipos y estadísticas.",
        "Para árbitros: asignación de partidos, reportes y seguimiento en tiempo real.",
      ],
      technologies: [
        "React",
        "React Native",
        "GraphQL",
        "AWS Console",
        "Javascript",
      ],
    },
    {
      company: "Inteia (Sistemas Inteligentes en Red)",
      position: "Frontend Developer",
      period: "Agosto 2023 - Septiembre 2024",
      description:
        "Desarrolló 3 productos MVP desde cero, mejorando experiencia de usuario y rendimiento",
      achievements: [
        "Lideró la ejecución completa Frontend de la aplicación web Clean Energy, logrando una mejora del 80% en la experiencia de usuario y optimizando significativamente el flujo de la aplicación.",
        "Encabezó la creación y expansión total Frontend de la plataforma web Carbonlitycs Nature, lo que resultó en una duplicación de la eficiencia del usuario y una notable optimización del rendimiento del sistema",
        "Desarrolló la evolución completa de la aplicación Frontend de la web Carbonlitycs Agro, mejorando la usabilidad en gran medida y refinando de manera sustancial la navegación y funcionalidad de la aplicación.",
      ],
      technologies: ["React","Tailwind", "JavaScript" , "Jest Testing"],
    },
    {
      company: "Inteia (Sistemas Inteligentes en Red)",
      position: "Prácticante de desarrollo",
      period: "Enero 2023 - Julio 2023",
      description:
        "Desarrolló aplicación interna para la gestión de equipos portátiles",
      achievements: [
        "Participó en procesos de automatización y mejora operativa, identificando oportunidades mediante herramientas de RPA",
        "Implementó tableros dinámicos con Power BI, mejorando la toma de decisiones en diferentes áreas.",
        "Desarrolló una aplicación en Power Apps + Power Automate para la entrega de equipos portátiles, mejorando el proceso en un 90% en términos de trazabilidad y eficiencia.",
      ],
      technologies: ["Power Apps", "Power Automate", "Power BI" , "Excel" , "HTML" , "CSS" , "JavaScript"],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#8da9c4]/5 to-background"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2545] mb-4">
            Experiencia Profesional
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#13315c] to-[#8da9c4] mx-auto rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="sm:absolute hidden left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#13315c] via-[#134074] to-[#8da9c4] transform md:-translate-x-1/2"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                className="relative"
              >
                <div
                  className={`flex w-full flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-1 w-full sm:ml-8 ml-0 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <Card className="p-6 w-full md:p-8 border-2 border-[#8da9c4]/20 hover:border-[#134074] transition-all duration-300 hover:shadow-2xl bg-background/80 backdrop-blur-sm">
                      {/* Company & Position */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="text-[#13315c]" size={20} />
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b2545]">
                              {exp.position}
                            </h3>
                          </div>
                          <p className="text-lg font-semibold text-[#134074]">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-[#8da9c4] mb-4">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[#134074] leading-relaxed font-bold">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-2 text-[#134074]"
                          >
                            <span className="text-[#13315c] mt-1">▸</span>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <p className="text-[#134074] leading-relaxed font-bold">
                        {exp.second_description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {exp.second_achievements?.map((achievement, i) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-2 text-[#134074]"
                          >
                            <span className="text-[#13315c] mt-1">▸</span>
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8da9c4]/20">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + index * 0.2 + i * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-xs px-3 py-1 bg-[#8da9c4]/10 text-[#0b2545] rounded-full border border-[#8da9c4]/30 font-medium cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
