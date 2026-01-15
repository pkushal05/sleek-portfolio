import Hero from "@/components/core/Hero";
import ProjectsSection from "@/components/core/ProjectsSection";
import TextScroll from "@/components/core/TextScroll";
import ContactForm from "@/components/core/ContactForm";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
        <Hero />
        <ProjectsSection />
        <TextScroll />
        <ContactForm />
    </div>
  )
}

export default Home