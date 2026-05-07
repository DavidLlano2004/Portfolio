"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  const projects = [
    {
      title: "MatchRed - Plataforma de Fútbol Amateur",
      description:
        "Sistema integral con backoffice, apps móviles para jugadores y árbitros, simulación de partidos en tiempo real y panel web de estadísticas.",
      tags: [
        "React.js",
        "React.native",
        "Javascript",
        "GraphQL",
        "Amplify",
        "Tailwind",
      ],
      image: "",
      category: "Frontend",
      demoUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Sistema de Parqueaderos Inteligente",
      description:
        "Solución digital con IA para gestión de estacionamientos con reservas, pagos online, apps móviles para usuarios y vigilantes, y panel administrativo web.",
      tags: [
        "React.js",
        "React.native",
        "Typescript",
        "Postgres",
        "Node js",
        "Tailwind",
        "Express",
        "Docker",
      ],
      image: "",
      category: "Full Stack",
      demoUrl: "",
      githubUrl: "",
      featured: false,
    },
    {
      title: "GoalPass - Portal del Fútbol Colombiano",
      description:
        "Aplicación para seguimiento de fútbol colombiano con estadísticas en tiempo real, simulación de partidos, venta de boletas y gestión de eventos deportivos de forma ficticia.",
      tags: [
        "React.js",
        "Typescript",
        "Postgres",
        "Node.js",
        "Tailwind",
        "Express",
        "Jest",
        "Docker",
      ],
      image: "",
      category: "Full Stack",
      demoUrl: "",
      githubUrl: "",
      featured: false,
    },
    {
      title: "Clean Energy - Medición de Sostenibilidad",
      description:
        "Plataforma de monitoreo de energía limpia corporativa con análisis de consumo, reportes de huella de carbono y visualización de datos energéticos.",
      tags: ["React.js", "Javascript", "Tailwind", "Jest"],
      image: "",
      category: "Frontend",
      demoUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Carbonlitycs Agro - Monitoreo Agrícola Aéreo",
      description:
        "Plataforma de análisis de cultivos con tecnología de drones, procesamiento de imágenes satelitales, detección temprana de problemas y optimización agrícola.",
      tags: ["React.js", "Javascript", "Tailwind", "Jest"],
      image: "",
      category: "Frontend",
      demoUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Carbonlitycs Nature - Monitoreo Ambiental",
      description:
        "Sistema de medición y análisis de impacto ambiental con monitoreo de ecosistemas, cálculo de captura de carbono, gestión de proyectos de conservación y reportes de sostenibilidad.",
      tags: ["React.js", "Javascript", "Tailwind", "Jest"],
      image: "",
      category: "Frontend",
      demoUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Hacienda el rhin - Sistema de Gestión Integral",
      description:
        "Backend robusto de gestión empresarial con módulos de inventario, empleados, proveedores, clientes, trazabilidad de productos agrícolas , reportes analíticos , entre otros.",
      tags: ["Node.js", "PostgreSQL", "Express", "Docker"],
      image: "",
      category: "Backend",
      demoUrl: "",
      githubUrl: "",
      featured: false,
    },
    {
      title: "EssenSalud - Sistema de Gestión Médica",
      description:
        "Plataforma integral para centros de salud con agendamiento de citas médicas, gestión de pacientes y empleados, administración de centros médicos, planes de salud y procesamiento de pagos ficticios.",
      tags: [
        "React.js",
        "Javascript",
        "Tailwind",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Docker",
      ],
      image: "",
      category: "Full Stack",
      demoUrl: "",
      githubUrl: "",
      featured: false,
    },
  ];

  const filters = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 bg-linear-to-b from-background to-[#8da9c4]/5"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2545] mb-4">
            Proyectos Destacados
          </h2>
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
            Una selección de mis mejores trabajos y contribuciones
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-[#13315c] text-[#eef4ed] shadow-lg scale-105"
                  : "bg-[#8da9c4]/10 text-[#134074] hover:bg-[#8da9c4]/20 border border-[#8da9c4]/30"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="group overflow-hidden border-2 border-[#8da9c4]/20 hover:border-[#134074] transition-all duration-500 hover:shadow-2xl bg-background h-125">
                  {/* Project Image - Mejora: Optimizado con Next.js Image */}
                  <div className="relative overflow-hidden aspect-video hidden">
                    {/* <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div> */}
                    {/* <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 to-transparent flex items-end justify-center pb-6 gap-4"
                    >
                      <motion.div
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          asChild
                          size="sm"
                          className="bg-[#eef4ed] text-[#0b2545] hover:bg-[#8da9c4] hover:text-[#eef4ed]"
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.075 }}
                      >
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-[#eef4ed] text-[#eef4ed] hover:bg-[#eef4ed] hover:text-[#0b2545]"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={16} className="mr-2" />
                            Código
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div> */}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#0b2545] group-hover:text-[#13315c] transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs px-2 py-1 bg-gradient-to-r from-[#13315c] to-[#8da9c4] text-[#eef4ed] rounded-full font-semibold whitespace-nowrap">
                          Destacado
                        </span>
                      )}
                    </div>
                    <p className="text-[#134074] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs px-3 py-1 bg-[#8da9c4]/10 text-[#0b2545] rounded-full border border-[#8da9c4]/30 font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#134074] mb-6">
            ¿Quieres ver más proyectos y contribuciones?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-[#13315c] text-[#eef4ed] hover:bg-[#134074] transition-all duration-300"
            >
              <a
                href="https://github.com/DavidLlano2004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github size={20} className="mr-2" />
                Ver GitHub Completo
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
