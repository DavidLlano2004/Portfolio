"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: "Frontend",
      color: "from-[#13315c] to-[#134074]",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "React native",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Javascript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      color: "from-[#134074] to-[#8da9c4]",
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "GraphQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
      ],
    },
    {
      category: "Database",
      color: "from-[#8da9c4] to-[#13315c]",
      skills: [
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      category: "DevOps & Tools",
      color: "from-[#0b2545] to-[#13315c]",
      skills: [
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#8da9c4]/5 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2545] mb-4">
            Habilidades & Tecnologías
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#13315c] to-[#8da9c4] mx-auto rounded-full" />
          <p className="text-lg text-[#134074] mt-6 max-w-2xl mx-auto">
            Mi stack tecnológico y las herramientas con las que construyo
            soluciones modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.category}
              className={`p-8 border-2 border-[#8da9c4]/20 hover:border-[#134074] transition-all duration-500 hover:shadow-2xl bg-background/80 backdrop-blur-sm ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
             
            >
              {/* Category Header */}
              <div className="mb-8">
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-[#eef4ed] font-semibold text-sm`}
                >
                  {category.category}
                </div>
              </div>

              {/* Skills Grid with Icons */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-[#eef4ed] to-[#8da9c4]/10 border border-[#8da9c4]/20 hover:border-[#134074] hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-default ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{
                      transitionDelay: `${
                        categoryIndex * 150 + skillIndex * 100
                      }ms`,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Technology Icon */}
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        className={`w-full h-full object-contain transition-transform duration-300 ${
                          hoveredSkill === skill.name
                            ? "scale-125"
                            : "scale-100"
                        }`}
                      />
                    </div>
                    {/* Technology Name */}
                    <span className="text-[#0b2545] font-semibold text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Technologies Cloud */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-semibold text-[#0b2545] mb-8">
            También trabajo con
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                name: "Jest",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
              },
              {
                name: "Figma",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
              },
              {
                name: "VSCode",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
              },
              {
                name: "Vite",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
              },
              {
                name: "Postman",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
              },
            
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`flex items-center gap-2 px-4 py-2 bg-[#8da9c4]/10 text-[#0b2545] rounded-full border border-[#8da9c4]/30 hover:bg-[#134074] hover:text-[#eef4ed] hover:scale-110 transition-all duration-300 cursor-default font-medium ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                
              >
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  className="w-5 h-5 object-contain"
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
