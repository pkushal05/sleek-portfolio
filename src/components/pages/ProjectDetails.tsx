import { PROJECTS } from "@/constants/projectsData";
import { useParams } from "react-router-dom";
import type { ProjectCardProps } from "@/constants/projectsData";

const ProjectDetails = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = PROJECTS.find(
        (proj: ProjectCardProps) => proj.id === projectId
    );

    return (
        <main className="max-w-2xl md:max-w-3xl mx-auto px-7 min-h-screen bg-background text-foreground pt-20">
            <div className="w-full h-full">
                <h1 className="text-center mt-15 text-3xl md:text-5xl font-bold">
                    {project?.title}
                </h1>
                <div className="w-full mt-18 overflow-hidden">
                    <img src={project?.image} alt="" className="rounded-lg" />
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl font-semibold mb-1">Overview</h1>
                    <p className="text-xl text-muted-foreground">
                        {project?.overview}
                    </p>
                </div>
                <div className="mt-10 flex flex-col gap-10">
                    <div>
                        <h1 className="text-2xl font-semibold mb-1">
                            Features
                        </h1>
                        <ul className="list-disc list-inside">
                            {project?.features?.map((feature, index) => (
                                <li
                                    className="text-muted-foreground text-xl"
                                    key={index}
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Challenges</h1>
                        <p className="text-xl text-muted-foreground"></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
