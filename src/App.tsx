import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import Home from "@/components/layouts/Home";
import Fallback from "@/components/core/Fallback";
import ScrollToTop from "@/components/core/ScrollToTop.tsx";


const Projects = lazy(() => import("@/components/pages/Projects"));
const About = lazy(() => import("@/components/pages/About"));
const ProjectDetails = lazy(() => import("@/components/pages/ProjectDetails"));
const Movies = lazy(() => import("@/components/pages/Movies"));

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Suspense fallback={<Fallback />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetails />}
                    />
                    <Route path="/movies" element={<Movies />} />
                </Routes>
            </Suspense>
            <Footer />  
        </>
    );
};

export default App;
