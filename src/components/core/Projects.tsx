import  PROJECTS  from "@/constants/projectsData";
import ProjectCard from "@/components/core/ProjectCard";

const Projects = () => {
  return (
    <div className="max-w-2xl lg:max-w-3xl h-screen mx-auto px-7 mt-24 relative">
      <div className="w-fit">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Projects</h1>
      </div>
      <div className="w-full mt-8 grid grid-cols-1 gap-8">
        {
            PROJECTS.map((project, ) => {
                return <ProjectCard {...project}/>
            })
        }
      </div>
    </div>
  );
};

export default Projects;
