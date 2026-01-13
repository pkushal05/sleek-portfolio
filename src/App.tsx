import Navbar from "@/components/core/Navbar";
import Hero from "@/components/core/Hero";

const App = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        {/* Placeholder sections for anchor navigation */}
        <section id="projects" className="max-w-2xl lg:max-w-3xl mx-auto px-7 py-20">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="text-muted-foreground">Coming soon…</p>
        </section>
        <section id="about" className="max-w-2xl lg:max-w-3xl mx-auto px-7 py-20">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <p className="text-muted-foreground">Coming soon…</p>
        </section>
      </div>
    </>
  );
}

export default App