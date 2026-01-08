import Navbar from "@/components/core/Navbar";
import Hero from "@/components/core/Hero";

const App = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App