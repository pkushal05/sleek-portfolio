import { PROJECTS } from "@/constants/projectsData";
import ProjectCard from "@/components/core/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    return (
        <section
            id="project-section"
            className="max-w-2xl lg:max-w-3xl min-h-screen mx-auto px-7 mt-24 relative scroll-mt-20"
        >
            <div className="w-full flex items-center justify-between">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                        Projects
                    </h1>
                    <p className="text-sm md:text-lg text-muted-foreground">Featured</p>
                </div>
                <Link
                    className="text-lg text-muted-foreground hover:underline"
                    to="/"
                >
                    View All
                </Link>
            </div>
            <div className="w-full mt-8 grid grid-cols-1 gap-8">
                {PROJECTS.slice(0, 2).map((project, _) => {
                    return <ProjectCard key={_} {...project} />;
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;
