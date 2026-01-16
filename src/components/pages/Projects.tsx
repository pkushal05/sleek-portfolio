import { PROJECTS } from "@/constants/projectsData";
import ProjectCard from "@/components/core/ProjectCard";

const Projects = () => {
    return (
        <main className="max-w-2xl md:max-w-3xl mx-auto px-7 min-h-screen bg-background text-foreground pt-20">
            <div className="w-full h-full flex flex-col gap-15">
                <div className="w-full mt-15">
                    <h1 className="text-center text-3xl md:text-5xl font-bold italic font-[DMSerifDisplay]">
                        Projects
                    </h1>
                    <p className="text-center text-muted-foreground text-xl leading-tight md:leading-loose">
                        Where{" "}
                        <span className="font-[DMSerifDisplay] italic">
                            ideas
                        </span>{" "}
                        come to life
                    </p>
                </div>
                <div className="w-full h-full grid grid-cols-1 gap-8 md:p-10">
                    {
                        PROJECTS.map((project, _) => {
                            return <ProjectCard key={_} {...project} />
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default Projects;
