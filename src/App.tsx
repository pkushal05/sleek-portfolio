import Navbar from "@/components/core/Navbar";
import Hero from "@/components/core/Hero";
import Projects from "@/components/core/Projects";

const App = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Projects />
        
      </div>
    </>
  );
}

export default App