import { PROJECTS } from "@/constants/projectsData";
import ProjectCard from "@/components/core/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <div id="projects" className="max-w-2xl lg:max-w-3xl min-h-screen mx-auto px-7 mt-24 relative scroll-mt-20">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Projects</h1>
        <Link className="text-lg text-muted-foreground hover:underline" to="">View All</Link>
      </div>
      <div className="w-full mt-8 grid grid-cols-1 gap-8">
        {
            PROJECTS.map((project, _) => {
                return <ProjectCard key={_} {...project}/>
            })
        }
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default ProjectsSection;
