import Hero from "@/components/core/Hero";
import ProjectsSection from "@/components/core/ProjectsSection";
import TextScroll from "@/components/core/TextScroll";
import ContactForm from "@/components/core/ContactForm";
import Footer from "@/components/core/Footer";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-background text-foreground">
        <Hero />
        <ProjectsSection />
        <TextScroll />
        <ContactForm />
        <Footer />
    </main>
  )
}

export default Home