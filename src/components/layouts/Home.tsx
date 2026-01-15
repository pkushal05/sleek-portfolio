import Hero from "@/components/core/Hero"
import ProjectsSection from "@/components/core/ProjectsSection"
import TextScroll from "@/components/core/TextScroll"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
        <Hero />
        <ProjectsSection />
        <TextScroll />
    </div>
  )
}

export default Home