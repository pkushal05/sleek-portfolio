import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("@/components/core/Navbar"));
const Home = lazy(() => import("@/components/layouts/Home"));
const Projects = lazy(() => import("@/components/pages/Projects"));
const About = lazy(() => import("@/components/pages/About"));
const Footer = lazy(() => import("@/components/core/Footer"));
const ProjectDetails = lazy(() => import("@/components/pages/ProjectDetails"));

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
