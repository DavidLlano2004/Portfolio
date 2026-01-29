import Header from "@/components/portfolio/header"
import Hero from "@/components/portfolio/hero"
import About from "@/components/portfolio/about"
import Skills from "@/components/portfolio/skills"
import Projects from "@/components/portfolio/projects"
import Experience from "@/components/portfolio/experience"
import Contact from "@/components/portfolio/contact"
import Footer from "@/components/portfolio/footer"
import ScrollProgress from "@/components/portfolio/scroll-progress"
import AnimatedBackground from "@/components/portfolio/animated-background"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
