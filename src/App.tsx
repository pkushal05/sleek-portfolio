import Navbar from "@/components/core/Navbar";
import Hero from "@/components/core/Hero";
import ProjectsSection from "@/components/core/ProjectsSection";
import TextScroll from "@/components/core/TextScroll";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="w-screen min-h-screen bg-background text-foreground">
                <Hero />
                <ProjectsSection />
                <TextScroll />
            </div>
        </>
    );
};

export default App;
